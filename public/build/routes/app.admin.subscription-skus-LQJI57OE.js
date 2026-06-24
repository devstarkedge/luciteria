import {
  require_db_server
} from "/build/_shared/chunk-KD5OEAVH.js";
import {
  AppNav
} from "/build/_shared/chunk-2HXTESER.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigation
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

// app/routes/app.admin.subscription-skus.jsx
var import_node = __toESM(require_node());
var import_react2 = __toESM(require_react());
var import_db_server = __toESM(require_db_server());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.admin.subscription-skus.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.admin.subscription-skus.jsx"
  );
  import.meta.hot.lastModified = "1779902341580.962";
}
function AdminSubscriptionSkus() {
  _s();
  const {
    products,
    tiers,
    totalEligible
  } = useLoaderData();
  const actionData = useActionData();
  const navigation = useNavigation();
  const [filter, setFilter] = (0, import_react2.useState)("all");
  const [search, setSearch] = (0, import_react2.useState)("");
  const filtered = products.filter((p) => {
    if (search && !p.sku.toLowerCase().includes(search.toLowerCase()) && !p.title.toLowerCase().includes(search.toLowerCase()))
      return false;
    if (filter === "eligible")
      return p.sub?.isEligible;
    if (filter === "subscriber_only")
      return p.sub?.isSubscriberOnly;
    if (filter === "early_access")
      return p.sub?.isEarlyAccess;
    return true;
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.layout, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppNav, { mode: "admin" }, void 0, false, {
      fileName: "app/routes/app.admin.subscription-skus.jsx",
      lineNumber: 187,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { style: styles.main, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: styles.title, children: "SKU Subscription Eligibility" }, void 0, false, {
        fileName: "app/routes/app.admin.subscription-skus.jsx",
        lineNumber: 189,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.subtitle, children: [
        totalEligible,
        " of ",
        products.length,
        " SKUs eligible for subscription"
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.subscription-skus.jsx",
        lineNumber: 190,
        columnNumber: 9
      }, this),
      actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.error, children: actionData.error }, void 0, false, {
        fileName: "app/routes/app.admin.subscription-skus.jsx",
        lineNumber: 192,
        columnNumber: 31
      }, this),
      actionData?.success && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.success, children: actionData.success }, void 0, false, {
        fileName: "app/routes/app.admin.subscription-skus.jsx",
        lineNumber: 193,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.toolbar, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { style: styles.search, placeholder: "Search SKU or product name...", value: search, onChange: (e) => setSearch(e.target.value) }, void 0, false, {
          fileName: "app/routes/app.admin.subscription-skus.jsx",
          lineNumber: 196,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.filters, children: ["all", "eligible", "subscriber_only", "early_access"].map((f) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: {
          ...styles.filterBtn,
          ...filter === f ? styles.filterActive : {}
        }, onClick: () => setFilter(f), children: f === "all" ? "All" : f === "eligible" ? "Eligible" : f === "subscriber_only" ? "Sub Only" : "Early Access" }, f, false, {
          fileName: "app/routes/app.admin.subscription-skus.jsx",
          lineNumber: 198,
          columnNumber: 78
        }, this)) }, void 0, false, {
          fileName: "app/routes/app.admin.subscription-skus.jsx",
          lineNumber: 197,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.subscription-skus.jsx",
        lineNumber: 195,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", style: {
        marginBottom: "16px"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: "bulkEligible" }, void 0, false, {
          fileName: "app/routes/app.admin.subscription-skus.jsx",
          lineNumber: 211,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "skus", value: filtered.filter((p) => !p.sub?.isEligible).map((p) => p.sku).join(",") }, void 0, false, {
          fileName: "app/routes/app.admin.subscription-skus.jsx",
          lineNumber: 212,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", style: styles.bulkBtn, disabled: navigation.state === "submitting", children: [
          "\u2705 Mark All Filtered as Eligible (",
          filtered.filter((p) => !p.sub?.isEligible).length,
          ")"
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.subscription-skus.jsx",
          lineNumber: 213,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.subscription-skus.jsx",
        lineNumber: 208,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.table, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.tableHeader, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
            width: "100px"
          }, children: "SKU" }, void 0, false, {
            fileName: "app/routes/app.admin.subscription-skus.jsx",
            lineNumber: 220,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
            flex: 1
          }, children: "Product" }, void 0, false, {
            fileName: "app/routes/app.admin.subscription-skus.jsx",
            lineNumber: 223,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
            width: "60px"
          }, children: "Stock" }, void 0, false, {
            fileName: "app/routes/app.admin.subscription-skus.jsx",
            lineNumber: 226,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
            width: "70px"
          }, children: "Price" }, void 0, false, {
            fileName: "app/routes/app.admin.subscription-skus.jsx",
            lineNumber: 229,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
            width: "80px"
          }, children: "Eligible" }, void 0, false, {
            fileName: "app/routes/app.admin.subscription-skus.jsx",
            lineNumber: 232,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
            width: "80px"
          }, children: "Sub Only" }, void 0, false, {
            fileName: "app/routes/app.admin.subscription-skus.jsx",
            lineNumber: 235,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
            width: "80px"
          }, children: "Early" }, void 0, false, {
            fileName: "app/routes/app.admin.subscription-skus.jsx",
            lineNumber: 238,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
            width: "120px"
          }, children: "Min Tier" }, void 0, false, {
            fileName: "app/routes/app.admin.subscription-skus.jsx",
            lineNumber: 241,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.subscription-skus.jsx",
          lineNumber: 219,
          columnNumber: 11
        }, this),
        filtered.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.tableRow, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
            width: "100px",
            fontFamily: "monospace",
            fontSize: "12px"
          }, children: p.sku }, void 0, false, {
            fileName: "app/routes/app.admin.subscription-skus.jsx",
            lineNumber: 246,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
            flex: 1,
            fontSize: "13px"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: p.elementSymbol }, void 0, false, {
              fileName: "app/routes/app.admin.subscription-skus.jsx",
              lineNumber: 255,
              columnNumber: 17
            }, this),
            " \u2014 ",
            p.title?.slice(0, 30)
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.subscription-skus.jsx",
            lineNumber: 251,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
            width: "60px",
            fontSize: "13px",
            color: p.inventoryQty > 0 ? "#059669" : "#DC2626"
          }, children: p.inventoryQty }, void 0, false, {
            fileName: "app/routes/app.admin.subscription-skus.jsx",
            lineNumber: 257,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
            width: "70px",
            fontSize: "13px"
          }, children: [
            "$",
            p.priceUsd?.toFixed(2)
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.subscription-skus.jsx",
            lineNumber: 264,
            columnNumber: 15
          }, this),
          ["isEligible", "isSubscriberOnly", "isEarlyAccess"].map((field) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", style: {
            width: "80px"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: "toggle" }, void 0, false, {
              fileName: "app/routes/app.admin.subscription-skus.jsx",
              lineNumber: 271,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "sku", value: p.sku }, void 0, false, {
              fileName: "app/routes/app.admin.subscription-skus.jsx",
              lineNumber: 272,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "productId", value: p.id }, void 0, false, {
              fileName: "app/routes/app.admin.subscription-skus.jsx",
              lineNumber: 273,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "field", value: field }, void 0, false, {
              fileName: "app/routes/app.admin.subscription-skus.jsx",
              lineNumber: 274,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", style: {
              ...styles.toggleBtn,
              backgroundColor: p.sub?.[field] ? "#D1FAE5" : "#F3F4F6"
            }, children: p.sub?.[field] ? "\u2705" : "\u2014" }, void 0, false, {
              fileName: "app/routes/app.admin.subscription-skus.jsx",
              lineNumber: 275,
              columnNumber: 19
            }, this)
          ] }, field, true, {
            fileName: "app/routes/app.admin.subscription-skus.jsx",
            lineNumber: 268,
            columnNumber: 81
          }, this)),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", style: {
            width: "120px"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: "setTier" }, void 0, false, {
              fileName: "app/routes/app.admin.subscription-skus.jsx",
              lineNumber: 285,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "sku", value: p.sku }, void 0, false, {
              fileName: "app/routes/app.admin.subscription-skus.jsx",
              lineNumber: 286,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "productId", value: p.id }, void 0, false, {
              fileName: "app/routes/app.admin.subscription-skus.jsx",
              lineNumber: 287,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "minTierId", style: styles.select, defaultValue: p.sub?.minTierId || "", onChange: (e) => e.target.form.submit(), children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Any" }, void 0, false, {
                fileName: "app/routes/app.admin.subscription-skus.jsx",
                lineNumber: 289,
                columnNumber: 19
              }, this),
              tiers.map((t) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: t.id, children: t.name }, t.id, false, {
                fileName: "app/routes/app.admin.subscription-skus.jsx",
                lineNumber: 290,
                columnNumber: 35
              }, this))
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.subscription-skus.jsx",
              lineNumber: 288,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.subscription-skus.jsx",
            lineNumber: 282,
            columnNumber: 15
          }, this)
        ] }, p.sku, true, {
          fileName: "app/routes/app.admin.subscription-skus.jsx",
          lineNumber: 245,
          columnNumber: 30
        }, this))
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.subscription-skus.jsx",
        lineNumber: 218,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
        fontSize: "12px",
        color: "#9CA3AF",
        marginTop: "16px"
      }, children: [
        "Showing ",
        filtered.length,
        " of ",
        products.length,
        " SKUs"
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.subscription-skus.jsx",
        lineNumber: 296,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.admin.subscription-skus.jsx",
      lineNumber: 188,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.admin.subscription-skus.jsx",
    lineNumber: 186,
    columnNumber: 10
  }, this);
}
_s(AdminSubscriptionSkus, "tsFC6YC63DaIN6c0WFm+0ZnjPb4=", false, function() {
  return [useLoaderData, useActionData, useNavigation];
});
_c = AdminSubscriptionSkus;
var styles = {
  layout: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#F9FAFB"
  },
  main: {
    flex: 1,
    padding: "32px",
    maxWidth: "1100px"
  },
  title: {
    margin: 0,
    fontSize: "24px",
    fontWeight: 700,
    color: "#111827"
  },
  subtitle: {
    margin: "4px 0 24px",
    fontSize: "14px",
    color: "#6B7280"
  },
  error: {
    padding: "12px 16px",
    backgroundColor: "#FEF2F2",
    color: "#DC2626",
    borderRadius: "8px",
    marginBottom: "16px"
  },
  success: {
    padding: "12px 16px",
    backgroundColor: "#F0FDF4",
    color: "#065F46",
    borderRadius: "8px",
    marginBottom: "16px"
  },
  toolbar: {
    display: "flex",
    gap: "12px",
    marginBottom: "16px",
    flexWrap: "wrap"
  },
  search: {
    flex: 1,
    padding: "8px 12px",
    border: "1px solid #D1D5DB",
    borderRadius: "6px",
    fontSize: "14px",
    minWidth: "200px"
  },
  filters: {
    display: "flex",
    gap: "4px"
  },
  filterBtn: {
    padding: "6px 14px",
    backgroundColor: "#F3F4F6",
    color: "#374151",
    border: "none",
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: 600,
    cursor: "pointer"
  },
  filterActive: {
    backgroundColor: "#2563EB",
    color: "#fff"
  },
  bulkBtn: {
    padding: "8px 16px",
    backgroundColor: "#059669",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer"
  },
  table: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    border: "1px solid #E5E7EB",
    overflow: "hidden"
  },
  tableHeader: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "10px 16px",
    backgroundColor: "#F9FAFB",
    fontSize: "11px",
    fontWeight: 700,
    color: "#6B7280",
    textTransform: "uppercase"
  },
  tableRow: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px 16px",
    borderTop: "1px solid #F3F4F6"
  },
  toggleBtn: {
    width: "100%",
    padding: "4px 8px",
    border: "1px solid #E5E7EB",
    borderRadius: "4px",
    fontSize: "14px",
    cursor: "pointer"
  },
  select: {
    width: "100%",
    padding: "4px",
    border: "1px solid #D1D5DB",
    borderRadius: "4px",
    fontSize: "12px"
  }
};
var _c;
$RefreshReg$(_c, "AdminSubscriptionSkus");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AdminSubscriptionSkus as default
};
//# sourceMappingURL=/build/routes/app.admin.subscription-skus-LQJI57OE.js.map
