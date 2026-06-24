import {
  require_billing_server
} from "/build/_shared/chunk-VINUDUAS.js";
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

// app/routes/app.cabinet.subscription.jsx
var import_node = __toESM(require_node());
var import_billing_server = __toESM(require_billing_server());
var db = __toESM(require_mock_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.cabinet.subscription.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.cabinet.subscription.jsx"
  );
  import.meta.hot.lastModified = "1779491576821.9404";
}
function SubscriptionPage() {
  _s();
  const {
    customer,
    subscription,
    shipments,
    stats,
    collectionType,
    billingSummary,
    billingSchedule
  } = useLoaderData();
  if (!subscription) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.layout, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppNav, { mode: "customer", customerName: customer?.firstName, collectionType }, void 0, false, {
        fileName: "app/routes/app.cabinet.subscription.jsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { style: styles.main, className: "luc-main", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.emptyState, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.emptyIcon, children: "\u{1F4EC}" }, void 0, false, {
          fileName: "app/routes/app.cabinet.subscription.jsx",
          lineNumber: 76,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: styles.emptyTitle, children: "No Active Subscription" }, void 0, false, {
          fileName: "app/routes/app.cabinet.subscription.jsx",
          lineNumber: 77,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.emptyText, children: "A subscription means a new element lands on your doorstep each month. No duplicates. No guessing. Just pure, curated discovery." }, void 0, false, {
          fileName: "app/routes/app.cabinet.subscription.jsx",
          lineNumber: 78,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.plans, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PlanCard, { name: "Element Explorer", price: "$79.99", cadence: "monthly", items: "1 element per shipment", features: ["Duplicate prevention", "Category preferences", "Skip anytime"], accent: "var(--luc-accent)" }, void 0, false, {
            fileName: "app/routes/app.cabinet.subscription.jsx",
            lineNumber: 83,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PlanCard, { name: "Completionist", price: "$149.99", cadence: "monthly", items: "1 premium element per shipment", features: ["Wishlist priority", "Rare element access", "No budget cap", "Priority support"], accent: "var(--luc-gold)", featured: true }, void 0, false, {
            fileName: "app/routes/app.cabinet.subscription.jsx",
            lineNumber: 84,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.cabinet.subscription.jsx",
          lineNumber: 82,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.cabinet.subscription.jsx",
        lineNumber: 75,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/app.cabinet.subscription.jsx",
        lineNumber: 74,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.cabinet.subscription.jsx",
      lineNumber: 72,
      columnNumber: 12
    }, this);
  }
  const statusColor = subscription.status === "active" ? "var(--luc-success)" : subscription.status === "paused" ? "var(--luc-warning)" : "var(--luc-danger)";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.layout, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppNav, { mode: "customer", customerName: customer?.firstName, collectionType }, void 0, false, {
      fileName: "app/routes/app.cabinet.subscription.jsx",
      lineNumber: 92,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { style: styles.main, className: "luc-main", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: styles.title, children: "Your Subscription" }, void 0, false, {
        fileName: "app/routes/app.cabinet.subscription.jsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.subtitle, children: "Your element pipeline, fully transparent." }, void 0, false, {
        fileName: "app/routes/app.cabinet.subscription.jsx",
        lineNumber: 95,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.planCard, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.planHeader, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.planName, children: subscription.planName }, void 0, false, {
              fileName: "app/routes/app.cabinet.subscription.jsx",
              lineNumber: 101,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.planTier, children: [
              subscription.planTier,
              " tier"
            ] }, void 0, true, {
              fileName: "app/routes/app.cabinet.subscription.jsx",
              lineNumber: 102,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.cabinet.subscription.jsx",
            lineNumber: 100,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            ...styles.statusPill,
            background: statusColor + "15",
            color: statusColor
          }, children: subscription.status }, void 0, false, {
            fileName: "app/routes/app.cabinet.subscription.jsx",
            lineNumber: 104,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.cabinet.subscription.jsx",
          lineNumber: 99,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.planDetails, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.planDetail, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.detailLabel, children: "Price" }, void 0, false, {
              fileName: "app/routes/app.cabinet.subscription.jsx",
              lineNumber: 115,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.detailValue, children: [
              "$",
              subscription.priceUsd,
              "/mo"
            ] }, void 0, true, {
              fileName: "app/routes/app.cabinet.subscription.jsx",
              lineNumber: 116,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.cabinet.subscription.jsx",
            lineNumber: 114,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.planDetail, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.detailLabel, children: "Collection" }, void 0, false, {
              fileName: "app/routes/app.cabinet.subscription.jsx",
              lineNumber: 119,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.detailValue, children: collectionType }, void 0, false, {
              fileName: "app/routes/app.cabinet.subscription.jsx",
              lineNumber: 120,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.cabinet.subscription.jsx",
            lineNumber: 118,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.planDetail, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.detailLabel, children: "Cadence" }, void 0, false, {
              fileName: "app/routes/app.cabinet.subscription.jsx",
              lineNumber: 123,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.detailValue, children: subscription.billingCadence }, void 0, false, {
              fileName: "app/routes/app.cabinet.subscription.jsx",
              lineNumber: 124,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.cabinet.subscription.jsx",
            lineNumber: 122,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.planDetail, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.detailLabel, children: "Items/Shipment" }, void 0, false, {
              fileName: "app/routes/app.cabinet.subscription.jsx",
              lineNumber: 127,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.detailValue, children: subscription.itemsPerShipment }, void 0, false, {
              fileName: "app/routes/app.cabinet.subscription.jsx",
              lineNumber: 128,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.cabinet.subscription.jsx",
            lineNumber: 126,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.planDetail, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.detailLabel, children: "Next Shipment" }, void 0, false, {
              fileName: "app/routes/app.cabinet.subscription.jsx",
              lineNumber: 131,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.detailValue, children: formatDate(subscription.nextShipmentDate) }, void 0, false, {
              fileName: "app/routes/app.cabinet.subscription.jsx",
              lineNumber: 132,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.cabinet.subscription.jsx",
            lineNumber: 130,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.planDetail, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.detailLabel, children: "Next Billing" }, void 0, false, {
              fileName: "app/routes/app.cabinet.subscription.jsx",
              lineNumber: 135,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.detailValue, children: billingSummary ? billingSummary.nextBillingDate : formatDate(subscription.nextBillingDate) }, void 0, false, {
              fileName: "app/routes/app.cabinet.subscription.jsx",
              lineNumber: 136,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.cabinet.subscription.jsx",
            lineNumber: 134,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.cabinet.subscription.jsx",
          lineNumber: 113,
          columnNumber: 11
        }, this),
        billingSummary?.grandfather?.isGrandfathered && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.grandfatherBox, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.grandfatherIcon, children: "\u{1F512}" }, void 0, false, {
            fileName: "app/routes/app.cabinet.subscription.jsx",
            lineNumber: 142,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.grandfatherTitle, children: "Grandfathered Price Active" }, void 0, false, {
              fileName: "app/routes/app.cabinet.subscription.jsx",
              lineNumber: 144,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.grandfatherText, children: [
              "Your $",
              billingSummary.grandfather.originalPrice,
              "/mo rate is locked until ",
              billingSummary.grandfather.expiresAt,
              ".",
              billingSummary.grandfather.monthlySavings > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
                " You save ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: [
                  "$",
                  billingSummary.grandfather.monthlySavings.toFixed(2),
                  "/mo"
                ] }, void 0, true, {
                  fileName: "app/routes/app.cabinet.subscription.jsx",
                  lineNumber: 147,
                  columnNumber: 81
                }, this),
                " vs current price."
              ] }, void 0, true, {
                fileName: "app/routes/app.cabinet.subscription.jsx",
                lineNumber: 147,
                columnNumber: 69
              }, this),
              billingSummary.grandfather.daysRemaining > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
                " (",
                billingSummary.grandfather.daysRemaining,
                " days remaining)"
              ] }, void 0, true, {
                fileName: "app/routes/app.cabinet.subscription.jsx",
                lineNumber: 148,
                columnNumber: 68
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.cabinet.subscription.jsx",
              lineNumber: 145,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.cabinet.subscription.jsx",
            lineNumber: 143,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.cabinet.subscription.jsx",
          lineNumber: 141,
          columnNumber: 60
        }, this),
        billingSummary?.isEdgeCaseSignup && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.edgeCaseNote, children: [
          "\u2139\uFE0F ",
          billingSummary.edgeCaseNote
        ] }, void 0, true, {
          fileName: "app/routes/app.cabinet.subscription.jsx",
          lineNumber: 154,
          columnNumber: 48
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.actionRow, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: styles.skipBtn, children: "\u23ED Skip Next Shipment" }, void 0, false, {
            fileName: "app/routes/app.cabinet.subscription.jsx",
            lineNumber: 160,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: styles.pauseBtn, children: "\u23F8 Pause Subscription" }, void 0, false, {
            fileName: "app/routes/app.cabinet.subscription.jsx",
            lineNumber: 161,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: styles.cancelBtn, children: "Cancel" }, void 0, false, {
            fileName: "app/routes/app.cabinet.subscription.jsx",
            lineNumber: 162,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.cabinet.subscription.jsx",
          lineNumber: 159,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.cabinet.subscription.jsx",
        lineNumber: 98,
        columnNumber: 9
      }, this),
      billingSchedule.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.section, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.sectionTitle, children: "Upcoming Billing" }, void 0, false, {
          fileName: "app/routes/app.cabinet.subscription.jsx",
          lineNumber: 168,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.scheduleList, children: billingSchedule.map((b, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.scheduleRow, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.scheduleDate, children: formatDate(b.date) }, void 0, false, {
            fileName: "app/routes/app.cabinet.subscription.jsx",
            lineNumber: 171,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.scheduleAmount, children: [
            "$",
            b.amount.toFixed(2)
          ] }, void 0, true, {
            fileName: "app/routes/app.cabinet.subscription.jsx",
            lineNumber: 172,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.scheduleLabel, children: b.label }, void 0, false, {
            fileName: "app/routes/app.cabinet.subscription.jsx",
            lineNumber: 173,
            columnNumber: 19
          }, this)
        ] }, i, true, {
          fileName: "app/routes/app.cabinet.subscription.jsx",
          lineNumber: 170,
          columnNumber: 46
        }, this)) }, void 0, false, {
          fileName: "app/routes/app.cabinet.subscription.jsx",
          lineNumber: 169,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.billingNote, children: [
          "Billing day: ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "1st of each month" }, void 0, false, {
            fileName: "app/routes/app.cabinet.subscription.jsx",
            lineNumber: 177,
            columnNumber: 28
          }, this),
          " (first charge at signup)"
        ] }, void 0, true, {
          fileName: "app/routes/app.cabinet.subscription.jsx",
          lineNumber: 176,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.cabinet.subscription.jsx",
        lineNumber: 167,
        columnNumber: 40
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.section, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.sectionTitle, children: "How Your Subscription Works" }, void 0, false, {
          fileName: "app/routes/app.cabinet.subscription.jsx",
          lineNumber: 183,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.howItWorks, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.step, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.stepNum, children: "1" }, void 0, false, {
              fileName: "app/routes/app.cabinet.subscription.jsx",
              lineNumber: 186,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "We check your cabinet" }, void 0, false, {
                fileName: "app/routes/app.cabinet.subscription.jsx",
                lineNumber: 188,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Our engine knows every element you own. No duplicates, guaranteed." }, void 0, false, {
                fileName: "app/routes/app.cabinet.subscription.jsx",
                lineNumber: 189,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.cabinet.subscription.jsx",
              lineNumber: 187,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.cabinet.subscription.jsx",
            lineNumber: 185,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.step, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.stepNum, children: "2" }, void 0, false, {
              fileName: "app/routes/app.cabinet.subscription.jsx",
              lineNumber: 193,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Collection type filter" }, void 0, false, {
                fileName: "app/routes/app.cabinet.subscription.jsx",
                lineNumber: 195,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                "Only ",
                collectionType,
                " products matching your collection are considered."
              ] }, void 0, true, {
                fileName: "app/routes/app.cabinet.subscription.jsx",
                lineNumber: 196,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.cabinet.subscription.jsx",
              lineNumber: 194,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.cabinet.subscription.jsx",
            lineNumber: 192,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.step, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.stepNum, children: "3" }, void 0, false, {
              fileName: "app/routes/app.cabinet.subscription.jsx",
              lineNumber: 200,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Wishlist gets priority" }, void 0, false, {
                fileName: "app/routes/app.cabinet.subscription.jsx",
                lineNumber: 202,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "If an item on your wishlist is in stock, it jumps to the front of the line." }, void 0, false, {
                fileName: "app/routes/app.cabinet.subscription.jsx",
                lineNumber: 203,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.cabinet.subscription.jsx",
              lineNumber: 201,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.cabinet.subscription.jsx",
            lineNumber: 199,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.step, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.stepNum, children: "4" }, void 0, false, {
              fileName: "app/routes/app.cabinet.subscription.jsx",
              lineNumber: 207,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Shipped to your door" }, void 0, false, {
                fileName: "app/routes/app.cabinet.subscription.jsx",
                lineNumber: 209,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Carefully packaged. Tracking included. One more element for the cabinet." }, void 0, false, {
                fileName: "app/routes/app.cabinet.subscription.jsx",
                lineNumber: 210,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.cabinet.subscription.jsx",
              lineNumber: 208,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.cabinet.subscription.jsx",
            lineNumber: 206,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.cabinet.subscription.jsx",
          lineNumber: 184,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.cabinet.subscription.jsx",
        lineNumber: 182,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.section, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.sectionTitle, children: "Shipment History" }, void 0, false, {
          fileName: "app/routes/app.cabinet.subscription.jsx",
          lineNumber: 218,
          columnNumber: 11
        }, this),
        shipments.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.noShipments, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Your first shipment is coming soon. The anticipation is part of the fun." }, void 0, false, {
          fileName: "app/routes/app.cabinet.subscription.jsx",
          lineNumber: 220,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/app.cabinet.subscription.jsx",
          lineNumber: 219,
          columnNumber: 37
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.shipmentList, children: shipments.map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.shipmentCard, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.shipmentLeft, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
              ...styles.shipmentStatusDot,
              background: s.status === "delivered" ? "var(--luc-success)" : s.status === "shipped" ? "var(--luc-accent)" : s.status === "skipped" ? "var(--luc-text-muted)" : "var(--luc-warning)"
            } }, void 0, false, {
              fileName: "app/routes/app.cabinet.subscription.jsx",
              lineNumber: 224,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.shipmentDate, children: formatDate(s.date) }, void 0, false, {
                fileName: "app/routes/app.cabinet.subscription.jsx",
                lineNumber: 229,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.shipmentStatusText, children: s.status === "delivered" ? "Delivered" : s.status === "shipped" ? "In Transit" : s.status === "skipped" ? "Skipped" : s.status }, void 0, false, {
                fileName: "app/routes/app.cabinet.subscription.jsx",
                lineNumber: 230,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.cabinet.subscription.jsx",
              lineNumber: 228,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.cabinet.subscription.jsx",
            lineNumber: 223,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.shipmentItems, children: [
            s.itemProducts.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.shipmentItem, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.shipmentSymbol, children: p.elementSymbol }, void 0, false, {
                fileName: "app/routes/app.cabinet.subscription.jsx",
                lineNumber: 237,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: p.title }, void 0, false, {
                fileName: "app/routes/app.cabinet.subscription.jsx",
                lineNumber: 238,
                columnNumber: 25
              }, this),
              s.discountPercent != null && s.discountPercent > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
                fontSize: 11,
                marginLeft: 8,
                color: s.discountPercent > 20 ? "var(--luc-danger)" : "var(--luc-success)",
                fontWeight: 600
              }, children: [
                s.discountPercent.toFixed(0),
                "% off"
              ] }, void 0, true, {
                fileName: "app/routes/app.cabinet.subscription.jsx",
                lineNumber: 239,
                columnNumber: 80
              }, this)
            ] }, p.id, true, {
              fileName: "app/routes/app.cabinet.subscription.jsx",
              lineNumber: 236,
              columnNumber: 46
            }, this)),
            s.itemProducts.length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
              color: "var(--luc-text-muted)",
              fontStyle: "italic"
            }, children: "No items" }, void 0, false, {
              fileName: "app/routes/app.cabinet.subscription.jsx",
              lineNumber: 248,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.cabinet.subscription.jsx",
            lineNumber: 235,
            columnNumber: 19
          }, this),
          s.tracking && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.tracking, children: s.tracking }, void 0, false, {
            fileName: "app/routes/app.cabinet.subscription.jsx",
            lineNumber: 253,
            columnNumber: 34
          }, this)
        ] }, s.id, true, {
          fileName: "app/routes/app.cabinet.subscription.jsx",
          lineNumber: 222,
          columnNumber: 35
        }, this)) }, void 0, false, {
          fileName: "app/routes/app.cabinet.subscription.jsx",
          lineNumber: 221,
          columnNumber: 22
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.cabinet.subscription.jsx",
        lineNumber: 217,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.cabinet.subscription.jsx",
      lineNumber: 93,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.cabinet.subscription.jsx",
    lineNumber: 91,
    columnNumber: 10
  }, this);
}
_s(SubscriptionPage, "wxp7uJ5LlrXHVgMiGNOkpBYdTnk=", false, function() {
  return [useLoaderData];
});
_c = SubscriptionPage;
function PlanCard({
  name,
  price,
  cadence,
  items,
  features,
  accent,
  featured
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    ...styles.planPreview,
    borderColor: featured ? accent : "var(--luc-border)",
    borderWidth: featured ? 2 : 1
  }, children: [
    featured && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      ...styles.featuredBadge,
      background: accent
    }, children: "Most Popular" }, void 0, false, {
      fileName: "app/routes/app.cabinet.subscription.jsx",
      lineNumber: 278,
      columnNumber: 20
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: {
      ...styles.planPreviewName,
      color: accent
    }, children: name }, void 0, false, {
      fileName: "app/routes/app.cabinet.subscription.jsx",
      lineNumber: 282,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.planPreviewPrice, children: [
      price,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.planPreviewCadence, children: [
        "/",
        cadence
      ] }, void 0, true, {
        fileName: "app/routes/app.cabinet.subscription.jsx",
        lineNumber: 286,
        columnNumber: 51
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.cabinet.subscription.jsx",
      lineNumber: 286,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.planPreviewItems, children: items }, void 0, false, {
      fileName: "app/routes/app.cabinet.subscription.jsx",
      lineNumber: 287,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { style: styles.planPreviewFeatures, children: features.map((f, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
      "\u2713 ",
      f
    ] }, i, true, {
      fileName: "app/routes/app.cabinet.subscription.jsx",
      lineNumber: 289,
      columnNumber: 33
    }, this)) }, void 0, false, {
      fileName: "app/routes/app.cabinet.subscription.jsx",
      lineNumber: 288,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: {
      ...styles.planPreviewBtn,
      background: accent
    }, children: "Choose Plan" }, void 0, false, {
      fileName: "app/routes/app.cabinet.subscription.jsx",
      lineNumber: 291,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.cabinet.subscription.jsx",
    lineNumber: 273,
    columnNumber: 10
  }, this);
}
_c2 = PlanCard;
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
    maxWidth: 800
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    color: "var(--luc-text)",
    margin: 0
  },
  subtitle: {
    fontSize: 14,
    color: "var(--luc-text-muted)",
    margin: "4px 0 24px"
  },
  planCard: {
    background: "#ffffff",
    border: "1px solid var(--luc-border)",
    borderRadius: 16,
    padding: 24,
    marginBottom: 32,
    boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
  },
  planHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20
  },
  planName: {
    fontSize: 22,
    fontWeight: 700,
    color: "var(--luc-text)"
  },
  planTier: {
    fontSize: 13,
    color: "var(--luc-text-muted)",
    textTransform: "uppercase"
  },
  statusPill: {
    padding: "4px 12px",
    borderRadius: 20,
    fontSize: 12,
    fontWeight: 700,
    textTransform: "uppercase"
  },
  planDetails: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 16,
    marginBottom: 20
  },
  planDetail: {
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
    fontSize: 15,
    fontWeight: 600,
    color: "var(--luc-text)"
  },
  grandfatherBox: {
    display: "flex",
    gap: 12,
    alignItems: "flex-start",
    padding: 14,
    background: "#f0fdf4",
    border: "1px solid #bbf7d0",
    borderRadius: 10,
    marginBottom: 16
  },
  grandfatherIcon: {
    fontSize: 20,
    flexShrink: 0
  },
  grandfatherTitle: {
    fontSize: 13,
    fontWeight: 700,
    color: "#166534"
  },
  grandfatherText: {
    fontSize: 12,
    color: "#15803d",
    lineHeight: 1.5
  },
  edgeCaseNote: {
    fontSize: 12,
    color: "var(--luc-text-muted)",
    background: "#eff6ff",
    padding: "8px 12px",
    borderRadius: 8,
    marginBottom: 16
  },
  actionRow: {
    display: "flex",
    gap: 8,
    paddingTop: 16,
    borderTop: "1px solid var(--luc-border)"
  },
  skipBtn: {
    padding: "8px 16px",
    borderRadius: 8,
    border: "1px solid var(--luc-border)",
    background: "transparent",
    color: "var(--luc-text)",
    fontSize: 13,
    cursor: "pointer"
  },
  pauseBtn: {
    padding: "8px 16px",
    borderRadius: 8,
    border: "1px solid var(--luc-warning)",
    background: "transparent",
    color: "var(--luc-warning)",
    fontSize: 13,
    cursor: "pointer"
  },
  cancelBtn: {
    padding: "8px 16px",
    borderRadius: 8,
    border: "1px solid var(--luc-danger)",
    background: "transparent",
    color: "var(--luc-danger)",
    fontSize: 13,
    cursor: "pointer",
    marginLeft: "auto"
  },
  section: {
    marginBottom: 32
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: "var(--luc-text)",
    marginBottom: 16,
    paddingBottom: 8,
    borderBottom: "1px solid var(--luc-border)"
  },
  scheduleList: {
    display: "flex",
    flexDirection: "column",
    gap: 6
  },
  scheduleRow: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    padding: "10px 14px",
    background: "#ffffff",
    border: "1px solid var(--luc-border)",
    borderRadius: 8,
    fontSize: 13
  },
  scheduleDate: {
    fontWeight: 600,
    color: "var(--luc-text)",
    minWidth: 120
  },
  scheduleAmount: {
    fontWeight: 700,
    color: "var(--luc-accent)",
    minWidth: 80
  },
  scheduleLabel: {
    color: "var(--luc-text-muted)"
  },
  billingNote: {
    fontSize: 12,
    color: "var(--luc-text-muted)",
    marginTop: 8
  },
  howItWorks: {
    display: "flex",
    flexDirection: "column",
    gap: 16
  },
  step: {
    display: "flex",
    gap: 14,
    alignItems: "flex-start",
    background: "#ffffff",
    border: "1px solid var(--luc-border)",
    borderRadius: 10,
    padding: 16,
    boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
  },
  stepNum: {
    width: 32,
    height: 32,
    background: "var(--luc-accent)",
    color: "#fff",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 14,
    fontWeight: 700,
    flexShrink: 0
  },
  shipmentList: {
    display: "flex",
    flexDirection: "column",
    gap: 10
  },
  shipmentCard: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    background: "#ffffff",
    border: "1px solid var(--luc-border)",
    borderRadius: 10,
    padding: "14px 16px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
  },
  shipmentLeft: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    minWidth: 140
  },
  shipmentStatusDot: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    flexShrink: 0
  },
  shipmentDate: {
    fontSize: 13,
    fontWeight: 600,
    color: "var(--luc-text)"
  },
  shipmentStatusText: {
    fontSize: 11,
    color: "var(--luc-text-muted)"
  },
  shipmentItems: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 4
  },
  shipmentItem: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: 13,
    color: "var(--luc-text)"
  },
  shipmentSymbol: {
    fontWeight: 800,
    color: "var(--luc-accent)",
    minWidth: 28
  },
  tracking: {
    fontSize: 11,
    color: "var(--luc-text-muted)",
    fontFamily: "monospace"
  },
  noShipments: {
    padding: 24,
    textAlign: "center",
    color: "var(--luc-text-muted)",
    fontStyle: "italic"
  },
  // Empty state & plan cards
  emptyState: {
    textAlign: "center",
    paddingTop: 40
  },
  emptyIcon: {
    fontSize: 56,
    display: "block",
    marginBottom: 16
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: 700,
    color: "var(--luc-text)",
    margin: 0
  },
  emptyText: {
    fontSize: 14,
    color: "var(--luc-text-muted)",
    maxWidth: 480,
    margin: "8px auto 32px"
  },
  plans: {
    display: "flex",
    gap: 20,
    justifyContent: "center",
    flexWrap: "wrap"
  },
  planPreview: {
    background: "#ffffff",
    border: "1px solid",
    borderRadius: 16,
    padding: 24,
    width: 260,
    textAlign: "left",
    position: "relative",
    boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
  },
  featuredBadge: {
    position: "absolute",
    top: -10,
    right: 16,
    padding: "3px 10px",
    borderRadius: 10,
    fontSize: 11,
    fontWeight: 700,
    color: "#fff"
  },
  planPreviewName: {
    fontSize: 18,
    fontWeight: 700,
    margin: "0 0 8px"
  },
  planPreviewPrice: {
    fontSize: 28,
    fontWeight: 800,
    color: "var(--luc-text)"
  },
  planPreviewCadence: {
    fontSize: 14,
    fontWeight: 400,
    color: "var(--luc-text-muted)"
  },
  planPreviewItems: {
    fontSize: 13,
    color: "var(--luc-text-muted)",
    margin: "8px 0 12px"
  },
  planPreviewFeatures: {
    listStyle: "none",
    padding: 0,
    margin: "0 0 16px",
    display: "flex",
    flexDirection: "column",
    gap: 6,
    fontSize: 13,
    color: "var(--luc-text-muted)"
  },
  planPreviewBtn: {
    width: "100%",
    padding: "10px",
    borderRadius: 8,
    border: "none",
    color: "#fff",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer"
  }
};
var _c;
var _c2;
$RefreshReg$(_c, "SubscriptionPage");
$RefreshReg$(_c2, "PlanCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SubscriptionPage as default
};
//# sourceMappingURL=/build/routes/app.cabinet.subscription-UM352CBQ.js.map
