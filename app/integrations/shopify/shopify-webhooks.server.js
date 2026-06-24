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
  logger.info(MODULE, "inventory_levels/update", { inventory_item_id: payload.inventory_item_id });
  // TODO [PRODUCTION]:
  // 1. Map inventory_item_id → product
  // 2. Update local inventoryQty
  // 3. If stock dropped to 0, trigger OOS shifting for affected assignments
  // 4. If stock came back, notify wishlist customers (if restockAlerts enabled)
  return { action: "inventory_updated" };
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
