/**
 * Shopify Webhooks Handler
 *
 * Processes incoming webhooks from Shopify to keep the Collector Cabinet
 * in sync with the live store.
 *
 * WEBHOOK SETUP:
 * Register webhooks during app installation using:
 *   POST /admin/api/2024-10/webhooks.json
 *   or the webhookSubscriptionCreate GraphQL mutation
 *
 * REQUIRED TOPICS:
 * - products/update       → Sync product data (price, stock, status)
 * - products/delete       → Mark product as archived
 * - inventory_levels/update → Update stock levels
 * - customers/create      → Create local customer record
 * - customers/update      → Sync customer data
 * - customers/delete      → Handle customer deletion
 * - orders/create         → Track new subscription orders
 * - orders/paid           → Confirm subscription payment
 * - orders/fulfilled      → Update shipment tracking
 * - subscription_contracts/create → New subscription
 * - subscription_contracts/update → Subscription status change
 * - app/uninstalled       → Clean up app data
 *
 * HMAC VALIDATION:
 * Every webhook must be validated using HMAC-SHA256 with SHOPIFY_WEBHOOK_SECRET.
 * Reject any request that fails HMAC validation.
 *
 * REQUIRED SCOPES: (webhooks use the same scopes as the API calls they trigger)
 */

import { IS_PROTOTYPE } from "../../config/environment.server.js";
import { logger } from "../../lib/error-handling.server.js";
import { SHOPIFY_CONFIG } from "../../config/environment.server.js";
import { prisma } from "../../lib/db.server.js";
import { syncSkuAvailability } from "../../lib/inventory-sync.server.js";
import { shopifyClient } from "./shopify-client.server.js";

const MODULE = "shopify-webhooks";

/**
 * Validate webhook HMAC signature.
 *
 * TODO [PRODUCTION]:
 * ```js
 * import crypto from "crypto";
 * const hmac = crypto.createHmac("sha256", SHOPIFY_CONFIG.webhookSecret);
 * hmac.update(rawBody);
 * const computed = hmac.digest("base64");
 * return computed === shopifyHmacHeader;
 * ```
 *
 * @param {string} rawBody - Raw request body as string
 * @param {string} hmacHeader - X-Shopify-Hmac-Sha256 header value
 * @returns {boolean}
 */
export function validateWebhookHmac(rawBody, hmacHeader) {
  if (IS_PROTOTYPE) {
    return true; // Skip validation in prototype
  }

  // TODO [PRODUCTION]: Implement HMAC validation
  logger.warn(MODULE, "HMAC validation not implemented — accepting all webhooks");
  return true;
}

/**
 * Route a webhook to the appropriate handler based on topic.
 *
 * @param {string} topic - Shopify webhook topic (e.g. "products/update")
 * @param {Object} payload - Parsed webhook body
 * @returns {Promise<{ handled: boolean, result?: any }>}
 */
export async function handleWebhook(topic, payload) {
  logger.info(MODULE, `Received webhook: ${topic}`, { id: payload?.id });

  const handlers = {
    "products/update": handleProductUpdate,
    "products/delete": handleProductDelete,
    "inventory_levels/update": handleInventoryUpdate,
    "customers/create": handleCustomerCreate,
    "customers/update": handleCustomerUpdate,
    "customers/delete": handleCustomerDelete,
    "orders/create": handleOrderCreate,
    "orders/paid": handleOrderPaid,
    "orders/fulfilled": handleOrderFulfilled,
    "subscription_contracts/create": handleSubscriptionCreate,
    "subscription_contracts/update": handleSubscriptionUpdate,
    "app/uninstalled": handleAppUninstalled,
  };

  const handler = handlers[topic];
  if (!handler) {
    logger.warn(MODULE, `No handler for webhook topic: ${topic}`);
    return { handled: false };
  }

  try {
    const result = await handler(payload);
    return { handled: true, result };
  } catch (error) {
    logger.error(MODULE, `Webhook handler failed for ${topic}`, error);
    // TODO [PRODUCTION]: Store failed webhook for retry
    return { handled: false, error: error.message };
  }
}

// ─── WEBHOOK HANDLERS ────────────────────────────────────────

async function handleProductUpdate(payload) {
  logger.info(MODULE, "products/update", { id: payload.id, title: payload.title });
  // TODO [PRODUCTION]:
  // 1. Find local product by shopifyProductId
  // 2. Update title, price, status, tags, inventory
  // 3. Re-evaluate subscription eligibility
  // 4. If price changed, check discount thresholds for affected subscriptions
  return { action: "product_updated", shopifyId: payload.id };
}

async function handleProductDelete(payload) {
  logger.info(MODULE, "products/delete", { id: payload.id });
  // TODO [PRODUCTION]:
  // 1. Mark local product as "Archived"
  // 2. Remove from assignment engine candidate pool
  // 3. If product was assigned to upcoming shipments, trigger re-assignment
  return { action: "product_archived", shopifyId: payload.id };
}

async function handleInventoryUpdate(payload) {
  const inventoryItemId = String(payload.inventory_item_id);
  const availableQty = payload.available;

  logger.info(MODULE, "inventory_levels/update", { inventory_item_id: inventoryItemId, available: availableQty });

  // 1. Find product locally by shopifyInventoryItemId
  let product = await prisma.product.findFirst({
    where: {
      OR: [
        { shopifyInventoryItemId: inventoryItemId },
        { shopifyInventoryItemId: `gid://shopify/InventoryItem/${inventoryItemId}` }
      ]
    }
  });

  // 2. If not found locally, fetch details from Shopify via GraphQL
  if (!product) {
    logger.info(MODULE, `Product with inventory item ID ${inventoryItemId} not found locally. Querying Shopify...`);
    const graphqlId = inventoryItemId.startsWith("gid://") ? inventoryItemId : `gid://shopify/InventoryItem/${inventoryItemId}`;
    
    const query = `
      query GetInventoryItem($id: ID!) {
        node(id: $id) {
          ... on InventoryItem {
            id
            variant {
              id
              title
              sku
              price
              product {
                id
                title
                handle
                description
                tags
              }
              elementSymbol: metafield(namespace: "custom", key: "element_symbol") {
                value
              }
              periodic_size: metafield(namespace: "custom", key: "periodic_size") {
                value
              }
            }
          }
        }
      }
    `;

    try {
      const shopifyRes = await shopifyClient.graphql(query, { id: graphqlId });
      const inventoryItem = shopifyRes?.data?.node;
      const variant = inventoryItem?.variant;
      
      if (variant && variant.sku) {
        // Find product by SKU
        product = await prisma.product.findUnique({
          where: { sku: variant.sku }
        });

        if (product) {
          // Update the product with Shopify IDs for future webhooks
          const rawVariantId = variant.id.split("/").pop(); // extract numeric ID from GID if needed
          const rawProductId = variant.product?.id?.split("/")?.pop();

          await prisma.product.update({
            where: { id: product.id },
            data: {
              shopifyInventoryItemId: inventoryItemId,
              shopifyVariantId: rawVariantId || product.shopifyVariantId,
              shopifyProductId: rawProductId || product.shopifyProductId,
            }
          });
          logger.info(MODULE, `Updated product SKU: ${product.sku} with shopifyInventoryItemId: ${inventoryItemId}`);
        } else {
          logger.info(MODULE, `Shopify variant SKU "${variant.sku}" not found in local product catalog. Creating new product...`);
          
          const rawVariantId = variant.id.split("/").pop();
          const rawProductId = variant.product?.id?.split("/")?.pop();
          
          // Import ELEMENTS_118 to resolve element symbol and name
          const { ELEMENTS_118 } = await import("../../data/elements.server.js");
          
          // Try to get element symbol from metafield first, then SKU, then fallback
          let symbol = variant.elementSymbol?.value || "";
          if (!symbol && variant.sku) {
            const matchedEl = ELEMENTS_118.find(el => variant.sku.toLowerCase().startsWith(el.sym.toLowerCase()));
            if (matchedEl) symbol = matchedEl.sym;
          }
          if (!symbol) symbol = "Li"; // fallback
          
          const element = ELEMENTS_118.find(el => el.sym.toLowerCase() === symbol.toLowerCase());
          const elementName = element ? element.name : "Lithium";
          const atomicNumber = element ? element.z : 3;
          
          // Derive category, format, and collection types
          const tags = variant.product?.tags || [];
          const variantTitle = variant.title || "";
          
          let category = "Lucite Cube";
          let format = "50mm";
          let collectionTypes = ["lucite"];

          const allTags = tags.map(t => t.toLowerCase());

          if (allTags.includes("ampules") || variant.sku?.toLowerCase()?.includes("amp") || variantTitle.toLowerCase().includes("ampule")) {
            category = "Ampoule";
            format = "ampoule";
            collectionTypes = ["ampoules"];
          } else if (allTags.includes("10mm") || variant.sku?.toLowerCase()?.includes("10mm")) {
            category = "Metal Cube";
            format = "10mm";
            collectionTypes = ["10mm"];
          } else if (allTags.includes("25.4mm") || variant.sku?.toLowerCase()?.includes("25.4mm") || variant.sku?.toLowerCase()?.includes("25mm")) {
            category = "Metal Cube";
            format = "25.4mm";
            collectionTypes = ["25.4mm"];
          } else if (variant.sku?.toLowerCase()?.includes("2x2")) {
            category = "Lucite Cube";
            format = "50mm";
            collectionTypes = ["lucite"];
          }
          
          const price = parseFloat(variant.price) || 0;
          
          product = await prisma.product.create({
            data: {
              sku: variant.sku,
              shopifyProductId: rawProductId,
              shopifyVariantId: rawVariantId,
              shopifyInventoryItemId: inventoryItemId,
              handle: variant.product?.handle || null,
              title: variant.product?.title || variantTitle,
              description: variant.product?.description || "",
              elementSymbol: symbol,
              elementName: elementName,
              atomicNumber: atomicNumber,
              category: category,
              format: format,
              collectionTypes: JSON.stringify(collectionTypes),
              status: "Active",
              inventoryQty: 0, // set initially to 0 so the first syncSkuAvailability call triggers OOS -> In-Stock alert if applicable
              priceUsd: price,
              retailPrice: price,
              rarityTier: "common",
              availableForSubscription: false
            }
          });
          logger.info(MODULE, `Successfully created product SKU: ${product.sku} with quantity: 0`);
        }
      } else {
        logger.warn(MODULE, `Could not find variant details for inventory item ID ${inventoryItemId} on Shopify`);
      }
    } catch (err) {
      logger.error(MODULE, `Error fetching inventory item from Shopify: ${err.message}`, err);
    }
  }

  // 3. If product is found (either directly or via SKU lookup), update the inventory
  if (product) {
    const result = await syncSkuAvailability(product.sku, availableQty);
    logger.info(MODULE, `Inventory updated for SKU ${product.sku}: ${result?.prevQty ?? 0} -> ${availableQty}`);

    // If stock went from 0 (or less) to in-stock (> 0), send restock notifications
    const prevStock = result?.prevQty ?? 0;
    if (prevStock <= 0 && availableQty > 0) {
      try {
        const wishlistEntries = await prisma.wishlistItem.findMany({
          where: {
            productId: product.id,
          },
          include: {
            customer: {
              include: {
                preferences: true,
              },
            },
          },
        });

        if (wishlistEntries.length > 0) {
          logger.info(MODULE, `Found ${wishlistEntries.length} wishlist entries for SKU ${product.sku}. Sending restock alerts...`);
          const { notify } = await import("../../lib/notifications-db.server.js");
          const { notifyRestockAlert } = await import("../../lib/notifications.server.js");
          
          for (const entry of wishlistEntries) {
            const customer = entry.customer;
            
            // Find corresponding User by email
            const user = await prisma.user.findUnique({
              where: { email: customer.email }
            });

            const productUrl = `/app/cabinet/shop`;
            const updatedProductInfo = { ...product, inventoryQty: availableQty };

            if (user) {
              // Trigger in-app notification + preference-aware email via notify()
              const dedupeKey = `restock:${product.id}:${availableQty}:${Math.floor(Date.now() / (1000 * 60 * 15))}`;
              
              await notify(user.id, {
                category: "RESTOCK",
                title: `${product.title} is back in stock!`,
                body: `${product.title} (${product.elementSymbol}) is now back in stock with ${availableQty} units available.`,
                linkUrl: productUrl,
                dedupeKey,
                email: {
                  to: user.email,
                  subject: `🔔 ${product.elementSymbol} is back in stock!`,
                  template: "restock_alert",
                  data: {
                    customerName: user.firstName || customer.firstName,
                    elementSymbol: product.elementSymbol,
                    productTitle: product.title,
                    inventoryQty: availableQty,
                    linkUrl: productUrl
                  }
                }
              });
              logger.info(MODULE, `Restock notification successfully dispatched via notify() for user ${user.email} (SKU: ${product.sku})`);
            } else {
              // Fallback to direct email if no database User account exists
              const prefs = customer.preferences;
              const shouldNotify = entry.notifyOnRestock || (prefs?.restockAlerts !== false);
              
              if (shouldNotify) {
                await notifyRestockAlert(customer, updatedProductInfo);
                logger.info(MODULE, `Restock direct fallback email sent to customer ${customer.email} (SKU: ${product.sku})`);
              } else {
                logger.info(MODULE, `Restock notification skipped for customer ${customer.email} due to preferences`);
              }
            }
          }
        }
      } catch (err) {
        logger.error(MODULE, `Failed to send restock notifications: ${err.message}`, err);
      }
    }

    return { action: "inventory_updated", sku: product.sku, prevQty: result?.prevQty, newQty: availableQty };
  }

  return { action: "inventory_update_skipped", reason: "product_not_found" };
}

async function handleCustomerCreate(payload) {
  logger.info(MODULE, "customers/create", { id: payload.id, email: payload.email });
  // TODO [PRODUCTION]:
  // 1. Create local Customer record
  // 2. Check if customer has "luciteria-subscriber" tag
  // 3. If tagged, create subscription record and trigger onboarding flow
  return { action: "customer_created", shopifyId: payload.id };
}

async function handleCustomerUpdate(payload) {
  logger.info(MODULE, "customers/update", { id: payload.id });
  // TODO [PRODUCTION]:
  // 1. Update local customer record (email, name, etc.)
  // 2. Check metafield changes for collection type updates
  return { action: "customer_updated", shopifyId: payload.id };
}

async function handleCustomerDelete(payload) {
  logger.info(MODULE, "customers/delete", { id: payload.id });
  // TODO [PRODUCTION]:
  // 1. Cancel active subscription
  // 2. Archive customer record (don't hard-delete for compliance)
  // 3. Remove from assignment queue
  return { action: "customer_archived", shopifyId: payload.id };
}

async function handleOrderCreate(payload) {
  logger.info(MODULE, "orders/create", { id: payload.id, name: payload.name });
  // TODO [PRODUCTION]:
  // 1. Check if order is a subscription order (by tag or source)
  // 2. If yes, update SubscriptionShipment status to "ordered"
  // 3. Record order ID in shipment record
  return { action: "order_created", shopifyId: payload.id };
}

async function handleOrderPaid(payload) {
  logger.info(MODULE, "orders/paid", { id: payload.id });
  // TODO [PRODUCTION]:
  // 1. Confirm subscription payment succeeded
  // 2. Update shipment status to "paid"
  // 3. Decrement inventory for assigned product
  // 4. Trigger fulfillment workflow
  return { action: "order_paid", shopifyId: payload.id };
}

async function handleOrderFulfilled(payload) {
  logger.info(MODULE, "orders/fulfilled", { id: payload.id });
  // TODO [PRODUCTION]:
  // 1. Extract tracking info from fulfillment
  // 2. Update shipment status to "shipped"
  // 3. Add tracking number to shipment record
  // 4. Send shipment notification to customer
  // 5. Add product to customer's collection record
  return { action: "order_fulfilled", shopifyId: payload.id };
}

async function handleSubscriptionCreate(payload) {
  logger.info(MODULE, "subscription_contracts/create", { id: payload.admin_graphql_api_id });
  // TODO [PRODUCTION]:
  // 1. Create local Subscription record
  // 2. Run initial assignment for first shipment
  // 3. Send welcome notification
  return { action: "subscription_created" };
}

async function handleSubscriptionUpdate(payload) {
  logger.info(MODULE, "subscription_contracts/update", { id: payload.admin_graphql_api_id });
  // TODO [PRODUCTION]:
  // 1. Check status change (active→paused, paused→active, etc.)
  // 2. Update local subscription record
  // 3. If paused, record pause date for grandfathering
  // 4. If cancelled, remove from assignment queue
  // 5. Send appropriate notification
  return { action: "subscription_updated" };
}

async function handleAppUninstalled(payload) {
  logger.warn(MODULE, "app/uninstalled", { shop: payload.domain });
  // TODO [PRODUCTION]:
  // 1. Clean up session tokens
  // 2. Mark all data for this shop as inactive
  // 3. Log uninstall event for analytics
  return { action: "app_uninstalled" };
}

/**
 * Register all required webhooks with Shopify.
 * Call during app installation.
 *
 * TODO [PRODUCTION]:
 * ```graphql
 * mutation RegisterWebhook($topic: WebhookSubscriptionTopic!, $callbackUrl: URL!) {
 *   webhookSubscriptionCreate(topic: $topic, webhookSubscription: { callbackUrl: $callbackUrl }) {
 *     webhookSubscription { id }
 *     userErrors { field message }
 *   }
 * }
 * ```
 *
 * @param {string} appUrl - The app's public URL
 * @returns {Promise<boolean>}
 */
export async function registerWebhooks(appUrl) {
  const topics = [
    "PRODUCTS_UPDATE", "PRODUCTS_DELETE",
    "INVENTORY_LEVELS_UPDATE",
    "CUSTOMERS_CREATE", "CUSTOMERS_UPDATE", "CUSTOMERS_DELETE",
    "ORDERS_CREATE", "ORDERS_PAID", "ORDERS_FULFILLED",
    "SUBSCRIPTION_CONTRACTS_CREATE", "SUBSCRIPTION_CONTRACTS_UPDATE",
    "APP_UNINSTALLED",
  ];

  logger.info(MODULE, `Registering ${topics.length} webhooks`, { appUrl });

  if (IS_PROTOTYPE) {
    logger.info(MODULE, "Skipping webhook registration (prototype mode)");
    return true;
  }

  // TODO [PRODUCTION]: Register each topic
  return true;
}
