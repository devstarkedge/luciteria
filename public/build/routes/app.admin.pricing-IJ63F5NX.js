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
  Form,
  useActionData,
  useLoaderData
} from "/build/_shared/chunk-PYMWJPZY.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  createHotContext
} from "/build/_shared/chunk-ORVFF776.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/app.admin.pricing.jsx
var import_node = __toESM(require_node());
var import_react2 = __toESM(require_react());
var db = __toESM(require_mock_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.admin.pricing.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.admin.pricing.jsx"
  );
  import.meta.hot.lastModified = "1779603313317.7993";
}
function AdminPricing() {
  _s();
  const {
    pricingConfig,
    priceHistory,
    subscriberCounts,
    grandfathered,
    grandfatheredCount,
    mrr
  } = useLoaderData();
  const actionData = useActionData();
  const [editingType, setEditingType] = (0, import_react2.useState)(null);
  const [editValues, setEditValues] = (0, import_react2.useState)({});
  const collectionTypes = Object.keys(pricingConfig);
  const startEditing = (type) => {
    setEditingType(type);
    setEditValues({
      ...pricingConfig[type]
    });
  };
  const cancelEditing = () => {
    setEditingType(null);
    setEditValues({});
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.layout, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppNav, { mode: "admin", customerName: "Admin" }, void 0, false, {
      fileName: "app/routes/app.admin.pricing.jsx",
      lineNumber: 179,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { style: styles.main, className: "luc-main", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: styles.title, children: "\u{1F4B2} Subscription Pricing Configuration" }, void 0, false, {
        fileName: "app/routes/app.admin.pricing.jsx",
        lineNumber: 181,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.subtitle, children: "Manage base prices, tiers, and grandfathering rules per collection type." }, void 0, false, {
        fileName: "app/routes/app.admin.pricing.jsx",
        lineNumber: 182,
        columnNumber: 9
      }, this),
      actionData?.success && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.successBanner, children: [
        "\u2705 ",
        actionData.message
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.pricing.jsx",
        lineNumber: 184,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.summaryRow, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.summaryCard, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.summaryVal, children: [
            "$",
            mrr.toFixed(0)
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.pricing.jsx",
            lineNumber: 189,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.summaryLbl, children: "Monthly Recurring Revenue" }, void 0, false, {
            fileName: "app/routes/app.admin.pricing.jsx",
            lineNumber: 190,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.pricing.jsx",
          lineNumber: 188,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.summaryCard, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.summaryVal, children: grandfatheredCount }, void 0, false, {
            fileName: "app/routes/app.admin.pricing.jsx",
            lineNumber: 193,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.summaryLbl, children: "Grandfathered Customers" }, void 0, false, {
            fileName: "app/routes/app.admin.pricing.jsx",
            lineNumber: 194,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.pricing.jsx",
          lineNumber: 192,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.summaryCard, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.summaryVal, children: collectionTypes.length }, void 0, false, {
            fileName: "app/routes/app.admin.pricing.jsx",
            lineNumber: 197,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.summaryLbl, children: "Collection Types" }, void 0, false, {
            fileName: "app/routes/app.admin.pricing.jsx",
            lineNumber: 198,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.pricing.jsx",
          lineNumber: 196,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.pricing.jsx",
        lineNumber: 187,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.section, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.sectionTitle, children: "Pricing Tiers by Collection Type" }, void 0, false, {
          fileName: "app/routes/app.admin.pricing.jsx",
          lineNumber: 204,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.tableWrap, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { style: styles.table, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: styles.th, children: "Collection Type" }, void 0, false, {
              fileName: "app/routes/app.admin.pricing.jsx",
              lineNumber: 209,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: styles.th, children: "Subscribers" }, void 0, false, {
              fileName: "app/routes/app.admin.pricing.jsx",
              lineNumber: 210,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: styles.th, children: "Monthly" }, void 0, false, {
              fileName: "app/routes/app.admin.pricing.jsx",
              lineNumber: 211,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: styles.th, children: "Quarterly" }, void 0, false, {
              fileName: "app/routes/app.admin.pricing.jsx",
              lineNumber: 212,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: styles.th, children: "Annual" }, void 0, false, {
              fileName: "app/routes/app.admin.pricing.jsx",
              lineNumber: 213,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: styles.th, children: "Grandfather (mo)" }, void 0, false, {
              fileName: "app/routes/app.admin.pricing.jsx",
              lineNumber: 214,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: styles.th, children: "Actions" }, void 0, false, {
              fileName: "app/routes/app.admin.pricing.jsx",
              lineNumber: 215,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.pricing.jsx",
            lineNumber: 208,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/app.admin.pricing.jsx",
            lineNumber: 207,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: collectionTypes.map((type) => {
            const cfg = pricingConfig[type];
            const isEditing = editingType === type;
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { style: isEditing ? styles.editingRow : {}, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: styles.td, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.typeBadge, children: type }, void 0, false, {
                fileName: "app/routes/app.admin.pricing.jsx",
                lineNumber: 224,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/routes/app.admin.pricing.jsx",
                lineNumber: 223,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: styles.td, children: subscriberCounts[type] || 0 }, void 0, false, {
                fileName: "app/routes/app.admin.pricing.jsx",
                lineNumber: 226,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: styles.td, children: isEditing ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "number", step: "0.01", value: editValues.monthly, onChange: (e) => setEditValues({
                ...editValues,
                monthly: e.target.value
              }), style: styles.editInput }, void 0, false, {
                fileName: "app/routes/app.admin.pricing.jsx",
                lineNumber: 228,
                columnNumber: 38
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.price, children: [
                "$",
                cfg.monthly.toFixed(2)
              ] }, void 0, true, {
                fileName: "app/routes/app.admin.pricing.jsx",
                lineNumber: 231,
                columnNumber: 55
              }, this) }, void 0, false, {
                fileName: "app/routes/app.admin.pricing.jsx",
                lineNumber: 227,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: styles.td, children: isEditing ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "number", step: "0.01", value: editValues.quarterly, onChange: (e) => setEditValues({
                ...editValues,
                quarterly: e.target.value
              }), style: styles.editInput }, void 0, false, {
                fileName: "app/routes/app.admin.pricing.jsx",
                lineNumber: 234,
                columnNumber: 38
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.price, children: [
                "$",
                cfg.quarterly.toFixed(2)
              ] }, void 0, true, {
                fileName: "app/routes/app.admin.pricing.jsx",
                lineNumber: 237,
                columnNumber: 55
              }, this) }, void 0, false, {
                fileName: "app/routes/app.admin.pricing.jsx",
                lineNumber: 233,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: styles.td, children: isEditing ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "number", step: "0.01", value: editValues.annual, onChange: (e) => setEditValues({
                ...editValues,
                annual: e.target.value
              }), style: styles.editInput }, void 0, false, {
                fileName: "app/routes/app.admin.pricing.jsx",
                lineNumber: 240,
                columnNumber: 38
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.price, children: [
                "$",
                cfg.annual.toFixed(2)
              ] }, void 0, true, {
                fileName: "app/routes/app.admin.pricing.jsx",
                lineNumber: 243,
                columnNumber: 55
              }, this) }, void 0, false, {
                fileName: "app/routes/app.admin.pricing.jsx",
                lineNumber: 239,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: styles.td, children: isEditing ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "number", value: editValues.grandfatherMonths, onChange: (e) => setEditValues({
                ...editValues,
                grandfatherMonths: e.target.value
              }), style: {
                ...styles.editInput,
                width: 60
              } }, void 0, false, {
                fileName: "app/routes/app.admin.pricing.jsx",
                lineNumber: 246,
                columnNumber: 38
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: cfg.grandfatherMonths }, void 0, false, {
                fileName: "app/routes/app.admin.pricing.jsx",
                lineNumber: 252,
                columnNumber: 29
              }, this) }, void 0, false, {
                fileName: "app/routes/app.admin.pricing.jsx",
                lineNumber: 245,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: styles.td, children: isEditing ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
                display: "flex",
                gap: 4
              }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "collectionType", value: type }, void 0, false, {
                    fileName: "app/routes/app.admin.pricing.jsx",
                    lineNumber: 260,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "monthly", value: editValues.monthly }, void 0, false, {
                    fileName: "app/routes/app.admin.pricing.jsx",
                    lineNumber: 261,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "quarterly", value: editValues.quarterly }, void 0, false, {
                    fileName: "app/routes/app.admin.pricing.jsx",
                    lineNumber: 262,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "annual", value: editValues.annual }, void 0, false, {
                    fileName: "app/routes/app.admin.pricing.jsx",
                    lineNumber: 263,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "grandfatherMonths", value: editValues.grandfatherMonths }, void 0, false, {
                    fileName: "app/routes/app.admin.pricing.jsx",
                    lineNumber: 264,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", style: styles.saveBtn, onClick: cancelEditing, children: "\u{1F4BE} Save" }, void 0, false, {
                    fileName: "app/routes/app.admin.pricing.jsx",
                    lineNumber: 265,
                    columnNumber: 31
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/app.admin.pricing.jsx",
                  lineNumber: 259,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: cancelEditing, style: styles.cancelBtn, children: "Cancel" }, void 0, false, {
                  fileName: "app/routes/app.admin.pricing.jsx",
                  lineNumber: 267,
                  columnNumber: 29
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/app.admin.pricing.jsx",
                lineNumber: 255,
                columnNumber: 38
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => startEditing(type), style: styles.editBtn, children: "\u270F\uFE0F Edit" }, void 0, false, {
                fileName: "app/routes/app.admin.pricing.jsx",
                lineNumber: 268,
                columnNumber: 36
              }, this) }, void 0, false, {
                fileName: "app/routes/app.admin.pricing.jsx",
                lineNumber: 254,
                columnNumber: 23
              }, this)
            ] }, type, true, {
              fileName: "app/routes/app.admin.pricing.jsx",
              lineNumber: 222,
              columnNumber: 24
            }, this);
          }) }, void 0, false, {
            fileName: "app/routes/app.admin.pricing.jsx",
            lineNumber: 218,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.pricing.jsx",
          lineNumber: 206,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/app.admin.pricing.jsx",
          lineNumber: 205,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.pricing.jsx",
        lineNumber: 203,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.section, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.sectionTitle, children: "Tier Savings Comparison" }, void 0, false, {
          fileName: "app/routes/app.admin.pricing.jsx",
          lineNumber: 279,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.savingsGrid, children: collectionTypes.map((type) => {
          const cfg = pricingConfig[type];
          const qtrSave = ((cfg.monthly * 3 - cfg.quarterly) / (cfg.monthly * 3) * 100).toFixed(0);
          const annSave = ((cfg.monthly * 12 - cfg.annual) / (cfg.monthly * 12) * 100).toFixed(0);
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.savingsCard, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.savingsType, children: type }, void 0, false, {
              fileName: "app/routes/app.admin.pricing.jsx",
              lineNumber: 286,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.savingsRow, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Quarterly saves" }, void 0, false, {
                fileName: "app/routes/app.admin.pricing.jsx",
                lineNumber: 288,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { style: {
                color: "var(--luc-success)"
              }, children: [
                qtrSave,
                "%"
              ] }, void 0, true, {
                fileName: "app/routes/app.admin.pricing.jsx",
                lineNumber: 289,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.pricing.jsx",
              lineNumber: 287,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.savingsRow, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Annual saves" }, void 0, false, {
                fileName: "app/routes/app.admin.pricing.jsx",
                lineNumber: 294,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { style: {
                color: "var(--luc-success)"
              }, children: [
                annSave,
                "%"
              ] }, void 0, true, {
                fileName: "app/routes/app.admin.pricing.jsx",
                lineNumber: 295,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.pricing.jsx",
              lineNumber: 293,
              columnNumber: 19
            }, this)
          ] }, type, true, {
            fileName: "app/routes/app.admin.pricing.jsx",
            lineNumber: 285,
            columnNumber: 20
          }, this);
        }) }, void 0, false, {
          fileName: "app/routes/app.admin.pricing.jsx",
          lineNumber: 280,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.pricing.jsx",
        lineNumber: 278,
        columnNumber: 9
      }, this),
      grandfathered.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.section, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.sectionTitle, children: [
          "\u{1F512} Grandfathered Customers (",
          grandfathered.length,
          ")"
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.pricing.jsx",
          lineNumber: 306,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.gfList, children: grandfathered.map((g) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.gfCard, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.gfName, children: g.name }, void 0, false, {
            fileName: "app/routes/app.admin.pricing.jsx",
            lineNumber: 309,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.gfType, children: g.collectionType }, void 0, false, {
            fileName: "app/routes/app.admin.pricing.jsx",
            lineNumber: 310,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.gfPrice, children: [
            "$",
            g.currentPrice?.toFixed(2),
            "/mo"
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.pricing.jsx",
            lineNumber: 311,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.gfSince, children: [
            "Since ",
            g.grandfatheredSince
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.pricing.jsx",
            lineNumber: 312,
            columnNumber: 19
          }, this)
        ] }, g.id, true, {
          fileName: "app/routes/app.admin.pricing.jsx",
          lineNumber: 308,
          columnNumber: 39
        }, this)) }, void 0, false, {
          fileName: "app/routes/app.admin.pricing.jsx",
          lineNumber: 307,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.pricing.jsx",
        lineNumber: 305,
        columnNumber: 38
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.section, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.sectionTitle, children: "\u{1F4DC} Price Change History" }, void 0, false, {
          fileName: "app/routes/app.admin.pricing.jsx",
          lineNumber: 319,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.tableWrap, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { style: styles.table, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: styles.th, children: "Date" }, void 0, false, {
              fileName: "app/routes/app.admin.pricing.jsx",
              lineNumber: 324,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: styles.th, children: "Collection" }, void 0, false, {
              fileName: "app/routes/app.admin.pricing.jsx",
              lineNumber: 325,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: styles.th, children: "Tier" }, void 0, false, {
              fileName: "app/routes/app.admin.pricing.jsx",
              lineNumber: 326,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: styles.th, children: "Old Price" }, void 0, false, {
              fileName: "app/routes/app.admin.pricing.jsx",
              lineNumber: 327,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: styles.th, children: "New Price" }, void 0, false, {
              fileName: "app/routes/app.admin.pricing.jsx",
              lineNumber: 328,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: styles.th, children: "Change" }, void 0, false, {
              fileName: "app/routes/app.admin.pricing.jsx",
              lineNumber: 329,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: styles.th, children: "By" }, void 0, false, {
              fileName: "app/routes/app.admin.pricing.jsx",
              lineNumber: 330,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.pricing.jsx",
            lineNumber: 323,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/app.admin.pricing.jsx",
            lineNumber: 322,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: priceHistory.map((h, i) => {
            const change = h.newPrice - h.oldPrice;
            const pct = (change / h.oldPrice * 100).toFixed(1);
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: styles.td, children: h.date }, void 0, false, {
                fileName: "app/routes/app.admin.pricing.jsx",
                lineNumber: 338,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: styles.td, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.typeBadge, children: h.type }, void 0, false, {
                fileName: "app/routes/app.admin.pricing.jsx",
                lineNumber: 339,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/app.admin.pricing.jsx",
                lineNumber: 339,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: styles.td, children: h.field }, void 0, false, {
                fileName: "app/routes/app.admin.pricing.jsx",
                lineNumber: 340,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: styles.td, children: [
                "$",
                h.oldPrice.toFixed(2)
              ] }, void 0, true, {
                fileName: "app/routes/app.admin.pricing.jsx",
                lineNumber: 341,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: styles.td, children: [
                "$",
                h.newPrice.toFixed(2)
              ] }, void 0, true, {
                fileName: "app/routes/app.admin.pricing.jsx",
                lineNumber: 342,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: {
                ...styles.td,
                color: change > 0 ? "var(--luc-danger)" : "var(--luc-success)",
                fontWeight: 600
              }, children: [
                change > 0 ? "+" : "",
                pct,
                "%"
              ] }, void 0, true, {
                fileName: "app/routes/app.admin.pricing.jsx",
                lineNumber: 343,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: styles.td, children: h.changedBy }, void 0, false, {
                fileName: "app/routes/app.admin.pricing.jsx",
                lineNumber: 350,
                columnNumber: 23
              }, this)
            ] }, i, true, {
              fileName: "app/routes/app.admin.pricing.jsx",
              lineNumber: 337,
              columnNumber: 24
            }, this);
          }) }, void 0, false, {
            fileName: "app/routes/app.admin.pricing.jsx",
            lineNumber: 333,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.pricing.jsx",
          lineNumber: 321,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/app.admin.pricing.jsx",
          lineNumber: 320,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.pricing.jsx",
        lineNumber: 318,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.admin.pricing.jsx",
      lineNumber: 180,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.admin.pricing.jsx",
    lineNumber: 178,
    columnNumber: 10
  }, this);
}
_s(AdminPricing, "3H3EJdLF9l6ERxKPLK3Hq0kvhxU=", false, function() {
  return [useLoaderData, useActionData];
});
_c = AdminPricing;
var styles = {
  layout: {
    display: "flex",
    minHeight: "100vh"
  },
  main: {
    marginLeft: 240,
    flex: 1,
    padding: "24px 40px 60px",
    maxWidth: 1100
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
  successBanner: {
    padding: "12px 16px",
    background: "#f0fdf4",
    border: "1px solid #86efac",
    borderRadius: 8,
    color: "#15803d",
    fontSize: 13,
    fontWeight: 500,
    marginBottom: 20
  },
  summaryRow: {
    display: "flex",
    gap: 16,
    marginBottom: 32,
    flexWrap: "wrap"
  },
  summaryCard: {
    flex: 1,
    minWidth: 160,
    background: "#ffffff",
    border: "1px solid var(--luc-border)",
    borderRadius: 10,
    padding: "16px 20px",
    textAlign: "center"
  },
  summaryVal: {
    fontSize: 28,
    fontWeight: 800,
    color: "var(--luc-accent)"
  },
  summaryLbl: {
    fontSize: 11,
    color: "var(--luc-text-muted)",
    textTransform: "uppercase",
    marginTop: 4
  },
  section: {
    marginBottom: 36
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: "var(--luc-text)",
    marginBottom: 16,
    paddingBottom: 8,
    borderBottom: "1px solid var(--luc-border)"
  },
  tableWrap: {
    overflowX: "auto"
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    background: "#ffffff",
    border: "1px solid var(--luc-border)",
    borderRadius: 8
  },
  th: {
    padding: "10px 14px",
    textAlign: "left",
    fontSize: 11,
    fontWeight: 600,
    color: "var(--luc-text-muted)",
    textTransform: "uppercase",
    borderBottom: "2px solid var(--luc-border)",
    background: "#f8fafc"
  },
  td: {
    padding: "10px 14px",
    fontSize: 13,
    color: "var(--luc-text)",
    borderBottom: "1px solid var(--luc-border)"
  },
  editingRow: {
    background: "#fffbeb"
  },
  typeBadge: {
    fontSize: 11,
    fontWeight: 600,
    color: "var(--luc-accent)",
    background: "#EBF3FC",
    padding: "2px 8px",
    borderRadius: 4,
    textTransform: "capitalize"
  },
  price: {
    fontWeight: 600,
    fontFamily: "monospace"
  },
  editInput: {
    width: 80,
    padding: "4px 8px",
    border: "1px solid var(--luc-accent)",
    borderRadius: 4,
    fontSize: 13,
    background: "#ffffff"
  },
  editBtn: {
    padding: "4px 10px",
    borderRadius: 4,
    border: "1px solid var(--luc-border)",
    background: "transparent",
    color: "var(--luc-accent)",
    fontSize: 12,
    cursor: "pointer"
  },
  saveBtn: {
    padding: "4px 10px",
    borderRadius: 4,
    border: "1px solid #86efac",
    background: "#f0fdf4",
    color: "#15803d",
    fontSize: 12,
    cursor: "pointer",
    fontWeight: 600
  },
  cancelBtn: {
    padding: "4px 10px",
    borderRadius: 4,
    border: "1px solid var(--luc-border)",
    background: "transparent",
    color: "var(--luc-text-muted)",
    fontSize: 12,
    cursor: "pointer"
  },
  savingsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    gap: 12
  },
  savingsCard: {
    background: "#ffffff",
    border: "1px solid var(--luc-border)",
    borderRadius: 10,
    padding: 16
  },
  savingsType: {
    fontSize: 13,
    fontWeight: 700,
    color: "var(--luc-accent)",
    textTransform: "capitalize",
    marginBottom: 8
  },
  savingsRow: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 12,
    color: "var(--luc-text-muted)",
    padding: "3px 0"
  },
  gfList: {
    display: "flex",
    flexDirection: "column",
    gap: 8
  },
  gfCard: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "10px 16px",
    background: "#fffbeb",
    border: "1px solid #fde68a",
    borderRadius: 8
  },
  gfName: {
    fontSize: 13,
    fontWeight: 600,
    color: "var(--luc-text)"
  },
  gfType: {
    fontSize: 10,
    fontWeight: 600,
    color: "var(--luc-accent)",
    background: "#EBF3FC",
    padding: "1px 6px",
    borderRadius: 4
  },
  gfPrice: {
    fontSize: 13,
    fontWeight: 700,
    color: "var(--luc-gold)",
    marginLeft: "auto"
  },
  gfSince: {
    fontSize: 11,
    color: "var(--luc-text-muted)"
  }
};
var _c;
$RefreshReg$(_c, "AdminPricing");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AdminPricing as default
};
//# sourceMappingURL=/build/routes/app.admin.pricing-IJ63F5NX.js.map
