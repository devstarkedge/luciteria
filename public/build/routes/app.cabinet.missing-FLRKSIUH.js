import {
  ProductCard
} from "/build/_shared/chunk-JZPVG54F.js";
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
  useLoaderData,
  useSearchParams
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

// app/routes/app.cabinet.missing.jsx
var import_node = __toESM(require_node());
var db = __toESM(require_mock_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.cabinet.missing.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.cabinet.missing.jsx"
  );
  import.meta.hot.lastModified = "1779491475832.3904";
}
function MissingItems() {
  _s();
  const {
    customer,
    missing,
    customerId,
    collectionType
  } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const filterAvailability = searchParams.get("availability") || "all";
  const filterRarity = searchParams.get("rarity") || "all";
  let filtered = missing;
  if (filterAvailability === "in-stock") {
    filtered = filtered.filter((p) => p.inventoryQty > 0);
  } else if (filterAvailability === "out-of-stock") {
    filtered = filtered.filter((p) => p.inventoryQty <= 0);
  }
  if (filterRarity !== "all") {
    filtered = filtered.filter((p) => p.rarityTier === filterRarity);
  }
  const inStockCount = missing.filter((p) => p.inventoryQty > 0).length;
  const outOfStockCount = missing.filter((p) => p.inventoryQty <= 0).length;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.layout, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppNav, { mode: "customer", customerName: customer?.firstName, collectionType }, void 0, false, {
      fileName: "app/routes/app.cabinet.missing.jsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { style: styles.main, className: "luc-main", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.header, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: styles.title, children: "The Hunt Continues" }, void 0, false, {
          fileName: "app/routes/app.cabinet.missing.jsx",
          lineNumber: 80,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.subtitle, children: missing.length === 0 ? "\u{1F3C6} Incredible \u2014 you own everything in the catalog. You absolute legend." : `${missing.length} elements still elude your cabinet. ${inStockCount} are ready for capture.` }, void 0, false, {
          fileName: "app/routes/app.cabinet.missing.jsx",
          lineNumber: 81,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.cabinet.missing.jsx",
        lineNumber: 79,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.summaryRow, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.summaryBadge, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
            color: "var(--luc-success)",
            fontWeight: 700
          }, children: inStockCount }, void 0, false, {
            fileName: "app/routes/app.cabinet.missing.jsx",
            lineNumber: 88,
            columnNumber: 13
          }, this),
          " available now"
        ] }, void 0, true, {
          fileName: "app/routes/app.cabinet.missing.jsx",
          lineNumber: 87,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.summaryBadge, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
            color: "var(--luc-danger)",
            fontWeight: 700
          }, children: outOfStockCount }, void 0, false, {
            fileName: "app/routes/app.cabinet.missing.jsx",
            lineNumber: 94,
            columnNumber: 13
          }, this),
          " out of stock"
        ] }, void 0, true, {
          fileName: "app/routes/app.cabinet.missing.jsx",
          lineNumber: 93,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.summaryBadge, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
            color: "var(--luc-warning)",
            fontWeight: 700
          }, children: missing.filter((p) => p.isWishlisted).length }, void 0, false, {
            fileName: "app/routes/app.cabinet.missing.jsx",
            lineNumber: 100,
            columnNumber: 13
          }, this),
          " on wishlist"
        ] }, void 0, true, {
          fileName: "app/routes/app.cabinet.missing.jsx",
          lineNumber: 99,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.cabinet.missing.jsx",
        lineNumber: 86,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.filters, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.filterGroup, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.filterLabel, children: "Availability:" }, void 0, false, {
            fileName: "app/routes/app.cabinet.missing.jsx",
            lineNumber: 109,
            columnNumber: 13
          }, this),
          ["all", "in-stock", "out-of-stock"].map((opt) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => {
            const p = new URLSearchParams(searchParams);
            p.set("availability", opt);
            p.set("customer", customerId);
            setSearchParams(p);
          }, style: {
            ...styles.filterBtn,
            ...filterAvailability === opt ? styles.filterBtnActive : {}
          }, children: opt === "all" ? "All" : opt === "in-stock" ? "In Stock" : "Out of Stock" }, opt, false, {
            fileName: "app/routes/app.cabinet.missing.jsx",
            lineNumber: 110,
            columnNumber: 61
          }, this))
        ] }, void 0, true, {
          fileName: "app/routes/app.cabinet.missing.jsx",
          lineNumber: 108,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.filterGroup, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.filterLabel, children: "Rarity:" }, void 0, false, {
            fileName: "app/routes/app.cabinet.missing.jsx",
            lineNumber: 123,
            columnNumber: 13
          }, this),
          ["all", "common", "uncommon", "rare", "ultra-rare", "legendary"].map((opt) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => {
            const p = new URLSearchParams(searchParams);
            p.set("rarity", opt);
            p.set("customer", customerId);
            setSearchParams(p);
          }, style: {
            ...styles.filterBtn,
            ...filterRarity === opt ? styles.filterBtnActive : {}
          }, children: opt.charAt(0).toUpperCase() + opt.slice(1).replace("-", " ") }, opt, false, {
            fileName: "app/routes/app.cabinet.missing.jsx",
            lineNumber: 124,
            columnNumber: 90
          }, this))
        ] }, void 0, true, {
          fileName: "app/routes/app.cabinet.missing.jsx",
          lineNumber: 122,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.cabinet.missing.jsx",
        lineNumber: 107,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.grid, children: filtered.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductCard, { product: p, status: p.status, showPrice: true, showStock: true, actionLabel: p.isWishlisted ? "\u2713 On Wishlist" : p.inventoryQty > 0 ? "Add to Wishlist" : "Notify Me", onAction: () => {
      } }, p.id, false, {
        fileName: "app/routes/app.cabinet.missing.jsx",
        lineNumber: 139,
        columnNumber: 30
      }, this)) }, void 0, false, {
        fileName: "app/routes/app.cabinet.missing.jsx",
        lineNumber: 138,
        columnNumber: 9
      }, this),
      filtered.length === 0 && missing.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.empty, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
          fontSize: 48
        }, children: "\u{1F52C}" }, void 0, false, {
          fileName: "app/routes/app.cabinet.missing.jsx",
          lineNumber: 143,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "No elements match these filters. Adjust and try again." }, void 0, false, {
          fileName: "app/routes/app.cabinet.missing.jsx",
          lineNumber: 146,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.cabinet.missing.jsx",
        lineNumber: 142,
        columnNumber: 57
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.cabinet.missing.jsx",
      lineNumber: 78,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.cabinet.missing.jsx",
    lineNumber: 76,
    columnNumber: 10
  }, this);
}
_s(MissingItems, "pqiCxnM6HRBB5RuRs8fFN8Iksok=", false, function() {
  return [useLoaderData, useSearchParams];
});
_c = MissingItems;
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
  header: {
    marginBottom: 20
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
    margin: "4px 0 0"
  },
  summaryRow: {
    display: "flex",
    gap: 12,
    marginBottom: 24
  },
  summaryBadge: {
    padding: "8px 16px",
    background: "#ffffff",
    border: "1px solid var(--luc-border)",
    borderRadius: 8,
    fontSize: 13,
    color: "var(--luc-text-muted)",
    boxShadow: "0 1px 2px rgba(0,0,0,0.04)"
  },
  filters: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    marginBottom: 24,
    paddingBottom: 16,
    borderBottom: "1px solid var(--luc-border)"
  },
  filterGroup: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    flexWrap: "wrap"
  },
  filterLabel: {
    fontSize: 12,
    color: "var(--luc-text-muted)",
    fontWeight: 600,
    minWidth: 80
  },
  filterBtn: {
    padding: "5px 12px",
    borderRadius: 6,
    border: "1px solid var(--luc-border)",
    background: "transparent",
    color: "var(--luc-text-muted)",
    fontSize: 12,
    cursor: "pointer"
  },
  filterBtnActive: {
    background: "#EBF3FC",
    color: "var(--luc-accent)",
    borderColor: "var(--luc-accent)"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: 16
  },
  empty: {
    textAlign: "center",
    padding: 60,
    color: "var(--luc-text-muted)"
  }
};
var _c;
$RefreshReg$(_c, "MissingItems");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  MissingItems as default
};
//# sourceMappingURL=/build/routes/app.cabinet.missing-FLRKSIUH.js.map
