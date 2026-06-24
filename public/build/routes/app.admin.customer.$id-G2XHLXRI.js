import {
  require_billing_server
} from "/build/_shared/chunk-VINUDUAS.js";
import {
  PeriodicTable
} from "/build/_shared/chunk-UYCKJRA2.js";
import {
  require_elements
} from "/build/_shared/chunk-L2WTGI6U.js";
import {
  ProgressBar
} from "/build/_shared/chunk-AGL6APWJ.js";
import {
  require_mock_db
} from "/build/_shared/chunk-4XSVQ6EC.js";
import {
  AppNav
} from "/build/_shared/chunk-2HXTESER.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-PYMWJPZY.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  createHotContext
} from "/build/_shared/chunk-ORVFF776.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/app.admin.customer.$id.jsx
var import_node = __toESM(require_node());
var db = __toESM(require_mock_db());
var import_billing_server = __toESM(require_billing_server());
var import_elements = __toESM(require_elements());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.admin.customer.$id.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.admin.customer.$id.jsx"
  );
  import.meta.hot.lastModified = "1779509968980.7217";
}
function AdminCustomerProfile() {
  _s();
  const {
    customer,
    stats,
    collection,
    missing,
    wishlist,
    subscription,
    shipments,
    preferences,
    notes,
    collectionType,
    ownedSymbols,
    wishlistSymbols,
    billingSummary,
    elements
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.layout, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppNav, { mode: "admin", customerName: "Admin" }, void 0, false, {
      fileName: "app/routes/app.admin.customer.$id.jsx",
      lineNumber: 115,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { style: styles.main, className: "luc-main", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.breadcrumb, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/app/admin/operations", style: styles.breadcrumbLink, children: "Operations" }, void 0, false, {
          fileName: "app/routes/app.admin.customer.$id.jsx",
          lineNumber: 119,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.breadcrumbSep, children: "\u203A" }, void 0, false, {
          fileName: "app/routes/app.admin.customer.$id.jsx",
          lineNumber: 120,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
          customer.firstName,
          " ",
          customer.lastName
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.customer.$id.jsx",
          lineNumber: 121,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.customer.$id.jsx",
        lineNumber: 118,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.profileHeader, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: styles.profileName, children: [
            customer.firstName,
            " ",
            customer.lastName
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.customer.$id.jsx",
            lineNumber: 127,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.profileMeta, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.displayBadge, children: customer.displayName }, void 0, false, {
              fileName: "app/routes/app.admin.customer.$id.jsx",
              lineNumber: 129,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.ctBadge, children: collectionType }, void 0, false, {
              fileName: "app/routes/app.admin.customer.$id.jsx",
              lineNumber: 130,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: customer.email }, void 0, false, {
              fileName: "app/routes/app.admin.customer.$id.jsx",
              lineNumber: 131,
              columnNumber: 15
            }, this),
            subscription && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
              ...styles.subStatus,
              color: subscription.status === "active" ? "var(--luc-success)" : "var(--luc-warning)"
            }, children: [
              subscription.planName,
              " \u2014 ",
              subscription.status
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.customer.$id.jsx",
              lineNumber: 132,
              columnNumber: 32
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.customer.$id.jsx",
            lineNumber: 128,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.customer.$id.jsx",
          lineNumber: 126,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.headerActions, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: styles.headerBtn, children: "\u{1F4E7} Email Customer" }, void 0, false, {
            fileName: "app/routes/app.admin.customer.$id.jsx",
            lineNumber: 141,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: styles.headerBtn, children: "\u{1F4DD} Add Note" }, void 0, false, {
            fileName: "app/routes/app.admin.customer.$id.jsx",
            lineNumber: 142,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.customer.$id.jsx",
          lineNumber: 140,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.customer.$id.jsx",
        lineNumber: 125,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.statsRow, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.statBox, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.statValue, children: stats.totalCollected }, void 0, false, {
            fileName: "app/routes/app.admin.customer.$id.jsx",
            lineNumber: 149,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.statLabel, children: "Collected" }, void 0, false, {
            fileName: "app/routes/app.admin.customer.$id.jsx",
            lineNumber: 150,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.customer.$id.jsx",
          lineNumber: 148,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.statBox, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            ...styles.statValue,
            color: "var(--luc-warning)"
          }, children: stats.missingCount }, void 0, false, {
            fileName: "app/routes/app.admin.customer.$id.jsx",
            lineNumber: 153,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.statLabel, children: "Missing" }, void 0, false, {
            fileName: "app/routes/app.admin.customer.$id.jsx",
            lineNumber: 157,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.customer.$id.jsx",
          lineNumber: 152,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.statBox, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.statValue, children: stats.wishlistCount }, void 0, false, {
            fileName: "app/routes/app.admin.customer.$id.jsx",
            lineNumber: 160,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.statLabel, children: "Wishlist" }, void 0, false, {
            fileName: "app/routes/app.admin.customer.$id.jsx",
            lineNumber: 161,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.customer.$id.jsx",
          lineNumber: 159,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.statBox, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            ...styles.statValue,
            color: "var(--luc-accent)"
          }, children: [
            stats.completionPct,
            "%"
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.customer.$id.jsx",
            lineNumber: 164,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.statLabel, children: "Completion" }, void 0, false, {
            fileName: "app/routes/app.admin.customer.$id.jsx",
            lineNumber: 168,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.customer.$id.jsx",
          lineNumber: 163,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.statBox, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.statValue, children: stats.totalShipments }, void 0, false, {
            fileName: "app/routes/app.admin.customer.$id.jsx",
            lineNumber: 171,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.statLabel, children: "Shipments" }, void 0, false, {
            fileName: "app/routes/app.admin.customer.$id.jsx",
            lineNumber: 172,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.customer.$id.jsx",
          lineNumber: 170,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.customer.$id.jsx",
        lineNumber: 147,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProgressBar, { value: stats.totalCollected, max: 118, label: "Collection Completion", accent: stats.totalCollected >= 118 ? "var(--luc-gold)" : "var(--luc-accent)" }, void 0, false, {
        fileName: "app/routes/app.admin.customer.$id.jsx",
        lineNumber: 176,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.section, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.sectionTitle, children: "Collection Status \u2014 Periodic Table" }, void 0, false, {
          fileName: "app/routes/app.admin.customer.$id.jsx",
          lineNumber: 180,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.tableWrapper, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PeriodicTable, { elements, ownedSymbols, wishlistedSymbols: wishlistSymbols, collectionType, compact: true }, void 0, false, {
          fileName: "app/routes/app.admin.customer.$id.jsx",
          lineNumber: 182,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/app.admin.customer.$id.jsx",
          lineNumber: 181,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.customer.$id.jsx",
        lineNumber: 179,
        columnNumber: 9
      }, this),
      subscription && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.section, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.sectionTitle, children: "Subscription Details" }, void 0, false, {
          fileName: "app/routes/app.admin.customer.$id.jsx",
          lineNumber: 188,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.detailGrid, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Detail, { label: "Plan", value: subscription.planName }, void 0, false, {
            fileName: "app/routes/app.admin.customer.$id.jsx",
            lineNumber: 190,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Detail, { label: "Tier", value: subscription.planTier }, void 0, false, {
            fileName: "app/routes/app.admin.customer.$id.jsx",
            lineNumber: 191,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Detail, { label: "Status", value: subscription.status }, void 0, false, {
            fileName: "app/routes/app.admin.customer.$id.jsx",
            lineNumber: 192,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Detail, { label: "Collection", value: collectionType }, void 0, false, {
            fileName: "app/routes/app.admin.customer.$id.jsx",
            lineNumber: 193,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Detail, { label: "Price", value: `$${subscription.priceUsd}/mo` }, void 0, false, {
            fileName: "app/routes/app.admin.customer.$id.jsx",
            lineNumber: 194,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Detail, { label: "Cadence", value: subscription.billingCadence }, void 0, false, {
            fileName: "app/routes/app.admin.customer.$id.jsx",
            lineNumber: 195,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Detail, { label: "Next Shipment", value: formatDate(subscription.nextShipmentDate) }, void 0, false, {
            fileName: "app/routes/app.admin.customer.$id.jsx",
            lineNumber: 196,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Detail, { label: "Member Since", value: formatDate(subscription.startDate) }, void 0, false, {
            fileName: "app/routes/app.admin.customer.$id.jsx",
            lineNumber: 197,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.customer.$id.jsx",
          lineNumber: 189,
          columnNumber: 13
        }, this),
        billingSummary?.grandfather?.isGrandfathered && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.grandfatherInfo, children: [
          "\u{1F512} ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Grandfathered" }, void 0, false, {
            fileName: "app/routes/app.admin.customer.$id.jsx",
            lineNumber: 200,
            columnNumber: 20
          }, this),
          ": $",
          billingSummary.grandfather.originalPrice,
          "/mo locked until ",
          billingSummary.grandfather.expiresAt,
          billingSummary.grandfather.monthlySavings > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
            " (saving $",
            billingSummary.grandfather.monthlySavings.toFixed(2),
            "/mo)"
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.customer.$id.jsx",
            lineNumber: 201,
            columnNumber: 67
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.customer.$id.jsx",
          lineNumber: 199,
          columnNumber: 62
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.customer.$id.jsx",
        lineNumber: 187,
        columnNumber: 26
      }, this),
      preferences && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.section, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.sectionTitle, children: "Preferences" }, void 0, false, {
          fileName: "app/routes/app.admin.customer.$id.jsx",
          lineNumber: 207,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.detailGrid, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Detail, { label: "Duplicate Handling", value: preferences.duplicateHandling }, void 0, false, {
            fileName: "app/routes/app.admin.customer.$id.jsx",
            lineNumber: 209,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Detail, { label: "Categories", value: (preferences.preferredCategories || []).join(", ") || "Any" }, void 0, false, {
            fileName: "app/routes/app.admin.customer.$id.jsx",
            lineNumber: 210,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Detail, { label: "Formats", value: (preferences.preferredFormats || []).join(", ") || "Any" }, void 0, false, {
            fileName: "app/routes/app.admin.customer.$id.jsx",
            lineNumber: 211,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Detail, { label: "Budget Max", value: preferences.budgetMaxUsd ? `$${preferences.budgetMaxUsd}` : "No limit" }, void 0, false, {
            fileName: "app/routes/app.admin.customer.$id.jsx",
            lineNumber: 212,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Detail, { label: "Email", value: preferences.communicationEmail ? "\u2713" : "\u2717" }, void 0, false, {
            fileName: "app/routes/app.admin.customer.$id.jsx",
            lineNumber: 213,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Detail, { label: "Restock Alerts", value: preferences.restockAlerts ? "\u2713" : "\u2717" }, void 0, false, {
            fileName: "app/routes/app.admin.customer.$id.jsx",
            lineNumber: 214,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.customer.$id.jsx",
          lineNumber: 208,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.customer.$id.jsx",
        lineNumber: 206,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.section, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.sectionTitle, children: "Shipment History" }, void 0, false, {
          fileName: "app/routes/app.admin.customer.$id.jsx",
          lineNumber: 220,
          columnNumber: 11
        }, this),
        shipments.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.emptyText, children: "No shipments yet." }, void 0, false, {
          fileName: "app/routes/app.admin.customer.$id.jsx",
          lineNumber: 221,
          columnNumber: 37
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { style: styles.table, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: styles.th, children: "Date" }, void 0, false, {
              fileName: "app/routes/app.admin.customer.$id.jsx",
              lineNumber: 224,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: styles.th, children: "Status" }, void 0, false, {
              fileName: "app/routes/app.admin.customer.$id.jsx",
              lineNumber: 225,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: styles.th, children: "Items" }, void 0, false, {
              fileName: "app/routes/app.admin.customer.$id.jsx",
              lineNumber: 226,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: styles.th, children: "Discount" }, void 0, false, {
              fileName: "app/routes/app.admin.customer.$id.jsx",
              lineNumber: 227,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: styles.th, children: "Tracking" }, void 0, false, {
              fileName: "app/routes/app.admin.customer.$id.jsx",
              lineNumber: 228,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.customer.$id.jsx",
            lineNumber: 223,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/app.admin.customer.$id.jsx",
            lineNumber: 222,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: shipments.map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: styles.td, children: formatDate(s.date) }, void 0, false, {
              fileName: "app/routes/app.admin.customer.$id.jsx",
              lineNumber: 233,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: styles.td, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
              color: s.status === "delivered" ? "var(--luc-success)" : s.status === "shipped" ? "var(--luc-accent)" : "var(--luc-text-muted)"
            }, children: s.status }, void 0, false, {
              fileName: "app/routes/app.admin.customer.$id.jsx",
              lineNumber: 235,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/app.admin.customer.$id.jsx",
              lineNumber: 234,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: styles.td, children: [
              s.itemProducts.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.itemTag, children: [
                p.elementSymbol,
                " \u2014 ",
                p.title
              ] }, p.id, true, {
                fileName: "app/routes/app.admin.customer.$id.jsx",
                lineNumber: 242,
                columnNumber: 48
              }, this)),
              s.itemProducts.length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
                color: "var(--luc-text-muted)"
              }, children: "\u2014" }, void 0, false, {
                fileName: "app/routes/app.admin.customer.$id.jsx",
                lineNumber: 245,
                columnNumber: 55
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.customer.$id.jsx",
              lineNumber: 241,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: styles.td, children: s.discountPercent != null && s.discountPercent > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
              fontWeight: 700,
              color: s.discountPercent > 20 ? "var(--luc-danger)" : "var(--luc-success)"
            }, children: [
              s.discountPercent.toFixed(1),
              "%",
              s.discountPercent > 20 && " \u26A0\uFE0F"
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.customer.$id.jsx",
              lineNumber: 250,
              columnNumber: 77
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
              color: "var(--luc-text-muted)"
            }, children: "\u2014" }, void 0, false, {
              fileName: "app/routes/app.admin.customer.$id.jsx",
              lineNumber: 256,
              columnNumber: 35
            }, this) }, void 0, false, {
              fileName: "app/routes/app.admin.customer.$id.jsx",
              lineNumber: 249,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: {
              ...styles.td,
              fontFamily: "monospace",
              fontSize: 11
            }, children: s.tracking || "\u2014" }, void 0, false, {
              fileName: "app/routes/app.admin.customer.$id.jsx",
              lineNumber: 260,
              columnNumber: 21
            }, this)
          ] }, s.id, true, {
            fileName: "app/routes/app.admin.customer.$id.jsx",
            lineNumber: 232,
            columnNumber: 37
          }, this)) }, void 0, false, {
            fileName: "app/routes/app.admin.customer.$id.jsx",
            lineNumber: 231,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.customer.$id.jsx",
          lineNumber: 221,
          columnNumber: 89
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.customer.$id.jsx",
        lineNumber: 219,
        columnNumber: 9
      }, this),
      wishlist.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.section, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.sectionTitle, children: [
          "Wishlist (",
          wishlist.length,
          ")"
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.customer.$id.jsx",
          lineNumber: 272,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.wishlistGrid, children: wishlist.map((w) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.wishlistCard, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.wishPriority, children: [
            "#",
            w.priority
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.customer.$id.jsx",
            lineNumber: 275,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.wishSymbol, children: w.product.elementSymbol }, void 0, false, {
            fileName: "app/routes/app.admin.customer.$id.jsx",
            lineNumber: 276,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.wishTitle, children: w.product.title }, void 0, false, {
            fileName: "app/routes/app.admin.customer.$id.jsx",
            lineNumber: 277,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.wishStock, children: w.product.inventoryQty > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
            color: "var(--luc-success)"
          }, children: [
            w.product.inventoryQty,
            " in stock"
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.customer.$id.jsx",
            lineNumber: 279,
            columnNumber: 51
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
            color: "var(--luc-danger)"
          }, children: "Out of stock" }, void 0, false, {
            fileName: "app/routes/app.admin.customer.$id.jsx",
            lineNumber: 281,
            columnNumber: 61
          }, this) }, void 0, false, {
            fileName: "app/routes/app.admin.customer.$id.jsx",
            lineNumber: 278,
            columnNumber: 19
          }, this),
          w.notifyOnRestock && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.notifyIcon, children: "\u{1F514}" }, void 0, false, {
            fileName: "app/routes/app.admin.customer.$id.jsx",
            lineNumber: 285,
            columnNumber: 41
          }, this)
        ] }, w.product.id, true, {
          fileName: "app/routes/app.admin.customer.$id.jsx",
          lineNumber: 274,
          columnNumber: 34
        }, this)) }, void 0, false, {
          fileName: "app/routes/app.admin.customer.$id.jsx",
          lineNumber: 273,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.customer.$id.jsx",
        lineNumber: 271,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.section, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.sectionTitle, children: "Admin Notes" }, void 0, false, {
          fileName: "app/routes/app.admin.customer.$id.jsx",
          lineNumber: 292,
          columnNumber: 11
        }, this),
        notes.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.emptyText, children: "No notes yet." }, void 0, false, {
          fileName: "app/routes/app.admin.customer.$id.jsx",
          lineNumber: 293,
          columnNumber: 33
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.notesList, children: notes.map((n, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.noteCard, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.noteHeader, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.noteAuthor, children: n.author }, void 0, false, {
              fileName: "app/routes/app.admin.customer.$id.jsx",
              lineNumber: 296,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.noteDate, children: n.date }, void 0, false, {
              fileName: "app/routes/app.admin.customer.$id.jsx",
              lineNumber: 297,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.customer.$id.jsx",
            lineNumber: 295,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.noteContent, children: n.content }, void 0, false, {
            fileName: "app/routes/app.admin.customer.$id.jsx",
            lineNumber: 299,
            columnNumber: 19
          }, this)
        ] }, i, true, {
          fileName: "app/routes/app.admin.customer.$id.jsx",
          lineNumber: 294,
          columnNumber: 36
        }, this)) }, void 0, false, {
          fileName: "app/routes/app.admin.customer.$id.jsx",
          lineNumber: 293,
          columnNumber: 81
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.addNoteRow, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { placeholder: "Add a note...", style: styles.noteInput }, void 0, false, {
            fileName: "app/routes/app.admin.customer.$id.jsx",
            lineNumber: 303,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: styles.addNoteBtn, children: "Add Note" }, void 0, false, {
            fileName: "app/routes/app.admin.customer.$id.jsx",
            lineNumber: 304,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.customer.$id.jsx",
          lineNumber: 302,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.customer.$id.jsx",
        lineNumber: 291,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.admin.customer.$id.jsx",
      lineNumber: 116,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.admin.customer.$id.jsx",
    lineNumber: 114,
    columnNumber: 10
  }, this);
}
_s(AdminCustomerProfile, "DwPf2WC8I1Aql/MqzrBNLYypfpU=", false, function() {
  return [useLoaderData];
});
_c = AdminCustomerProfile;
function Detail({
  label,
  value
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.detailItem, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.detailLabel, children: label }, void 0, false, {
      fileName: "app/routes/app.admin.customer.$id.jsx",
      lineNumber: 319,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.detailValue, children: value }, void 0, false, {
      fileName: "app/routes/app.admin.customer.$id.jsx",
      lineNumber: 320,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.admin.customer.$id.jsx",
    lineNumber: 318,
    columnNumber: 10
  }, this);
}
_c2 = Detail;
function formatDate(str) {
  return new Date(str).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}
var styles = {
  layout: {
    display: "flex",
    minHeight: "100vh"
  },
  main: {
    marginLeft: 240,
    flex: 1,
    padding: "24px 40px 60px",
    maxWidth: 1e3
  },
  breadcrumb: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginBottom: 16,
    fontSize: 13
  },
  breadcrumbLink: {
    color: "var(--luc-accent)",
    textDecoration: "none"
  },
  breadcrumbSep: {
    color: "var(--luc-text-muted)"
  },
  profileHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 24
  },
  profileName: {
    fontSize: 24,
    fontWeight: 700,
    color: "var(--luc-text)",
    margin: 0
  },
  profileMeta: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginTop: 6,
    fontSize: 13,
    color: "var(--luc-text-muted)",
    flexWrap: "wrap"
  },
  displayBadge: {
    padding: "2px 8px",
    background: "#EBF3FC",
    borderRadius: 6,
    color: "var(--luc-accent)",
    fontWeight: 600
  },
  ctBadge: {
    padding: "2px 8px",
    background: "#f0fdf4",
    borderRadius: 6,
    color: "var(--luc-success)",
    fontWeight: 600,
    fontSize: 11,
    textTransform: "capitalize"
  },
  subStatus: {
    fontWeight: 600
  },
  headerActions: {
    display: "flex",
    gap: 8
  },
  headerBtn: {
    padding: "6px 14px",
    borderRadius: 8,
    border: "1px solid var(--luc-border)",
    background: "transparent",
    color: "var(--luc-text)",
    fontSize: 12,
    cursor: "pointer"
  },
  statsRow: {
    display: "flex",
    gap: 16,
    marginBottom: 20,
    flexWrap: "wrap"
  },
  statBox: {
    textAlign: "center",
    minWidth: 80
  },
  statValue: {
    fontSize: 28,
    fontWeight: 800,
    color: "var(--luc-text)"
  },
  statLabel: {
    fontSize: 11,
    color: "var(--luc-text-muted)",
    textTransform: "uppercase",
    fontWeight: 600
  },
  section: {
    marginTop: 32
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: "var(--luc-text)",
    marginBottom: 16,
    paddingBottom: 8,
    borderBottom: "1px solid var(--luc-border)"
  },
  tableWrapper: {
    background: "#ffffff",
    border: "1px solid var(--luc-border)",
    borderRadius: 12,
    padding: "16px 20px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
  },
  grandfatherInfo: {
    marginTop: 12,
    padding: 10,
    background: "#f0fdf4",
    border: "1px solid #bbf7d0",
    borderRadius: 8,
    fontSize: 12,
    color: "#15803d"
  },
  detailGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    gap: 12
  },
  detailItem: {
    display: "flex",
    flexDirection: "column",
    gap: 2
  },
  detailLabel: {
    fontSize: 11,
    color: "var(--luc-text-muted)",
    textTransform: "uppercase",
    fontWeight: 600
  },
  detailValue: {
    fontSize: 14,
    fontWeight: 500,
    color: "var(--luc-text)"
  },
  table: {
    width: "100%",
    borderCollapse: "collapse"
  },
  th: {
    textAlign: "left",
    padding: "8px 12px",
    fontSize: 11,
    color: "var(--luc-text-muted)",
    textTransform: "uppercase",
    fontWeight: 600,
    borderBottom: "1px solid var(--luc-border)"
  },
  td: {
    padding: "10px 12px",
    fontSize: 13,
    color: "var(--luc-text)",
    borderBottom: "1px solid var(--luc-border)"
  },
  itemTag: {
    display: "block",
    fontSize: 13
  },
  wishlistGrid: {
    display: "flex",
    flexDirection: "column",
    gap: 8
  },
  wishlistCard: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "10px 14px",
    background: "#ffffff",
    border: "1px solid var(--luc-border)",
    borderRadius: 8
  },
  wishPriority: {
    fontSize: 12,
    fontWeight: 700,
    color: "var(--luc-accent)",
    minWidth: 24
  },
  wishSymbol: {
    fontSize: 18,
    fontWeight: 800,
    color: "var(--luc-accent)",
    minWidth: 32
  },
  wishTitle: {
    fontSize: 13,
    color: "var(--luc-text)",
    flex: 1
  },
  wishStock: {
    fontSize: 12
  },
  notifyIcon: {
    fontSize: 12
  },
  notesList: {
    display: "flex",
    flexDirection: "column",
    gap: 8
  },
  noteCard: {
    padding: 14,
    background: "#ffffff",
    border: "1px solid var(--luc-border)",
    borderRadius: 8
  },
  noteHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 6
  },
  noteAuthor: {
    fontSize: 13,
    fontWeight: 600,
    color: "var(--luc-accent)"
  },
  noteDate: {
    fontSize: 11,
    color: "var(--luc-text-muted)"
  },
  noteContent: {
    fontSize: 13,
    color: "var(--luc-text)",
    margin: 0,
    lineHeight: 1.5
  },
  addNoteRow: {
    display: "flex",
    gap: 8,
    marginTop: 12
  },
  noteInput: {
    flex: 1,
    padding: "8px 12px",
    background: "#ffffff",
    border: "1px solid var(--luc-border)",
    borderRadius: 8,
    color: "var(--luc-text)",
    fontSize: 13,
    outline: "none"
  },
  addNoteBtn: {
    padding: "8px 16px",
    background: "var(--luc-accent)",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer"
  },
  emptyText: {
    fontSize: 13,
    color: "var(--luc-text-muted)",
    fontStyle: "italic"
  }
};
var _c;
var _c2;
$RefreshReg$(_c, "AdminCustomerProfile");
$RefreshReg$(_c2, "Detail");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AdminCustomerProfile as default
};
//# sourceMappingURL=/build/routes/app.admin.customer.$id-G2XHLXRI.js.map
