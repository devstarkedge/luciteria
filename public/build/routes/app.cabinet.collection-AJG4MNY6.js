import {
  ProductCard
} from "/build/_shared/chunk-JZPVG54F.js";
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

// app/routes/app.cabinet.collection.jsx
var import_node = __toESM(require_node());
var db = __toESM(require_mock_db());
var import_elements = __toESM(require_elements());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.cabinet.collection.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.cabinet.collection.jsx"
  );
  import.meta.hot.lastModified = "1779509981241.8225";
}
function CollectionGrid() {
  _s();
  const {
    customer,
    products,
    stats,
    customerId,
    collectionType,
    ownedSymbols,
    wishlistSymbols,
    elements
  } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const filterStatus = searchParams.get("status") || "all";
  const filterSearch = searchParams.get("q") || "";
  let filtered = products;
  if (filterStatus !== "all") {
    filtered = filtered.filter((p) => p.status === filterStatus);
  }
  if (filterSearch) {
    const q = filterSearch.toLowerCase();
    filtered = filtered.filter((p) => p.elementName.toLowerCase().includes(q) || p.elementSymbol.toLowerCase().includes(q) || p.title.toLowerCase().includes(q));
  }
  const statusCounts = {
    all: products.length,
    owned: products.filter((p) => p.status === "owned").length,
    missing: products.filter((p) => p.status === "missing").length,
    wishlisted: products.filter((p) => p.status === "wishlisted").length,
    "out-of-stock": products.filter((p) => p.status === "out-of-stock").length
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.layout, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppNav, { mode: "customer", customerName: customer?.firstName, collectionType }, void 0, false, {
      fileName: "app/routes/app.cabinet.collection.jsx",
      lineNumber: 111,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { style: styles.main, className: "luc-main", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.header, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: styles.title, children: "Your Collection" }, void 0, false, {
            fileName: "app/routes/app.cabinet.collection.jsx",
            lineNumber: 116,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.subtitle, children: "Every element tells a story. Here's yours so far." }, void 0, false, {
            fileName: "app/routes/app.cabinet.collection.jsx",
            lineNumber: 117,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.cabinet.collection.jsx",
          lineNumber: 115,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProgressBar, { value: stats.totalCollected, max: 118, label: "Completion", accent: "var(--luc-accent)" }, void 0, false, {
          fileName: "app/routes/app.cabinet.collection.jsx",
          lineNumber: 121,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.cabinet.collection.jsx",
        lineNumber: 114,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.tableSection, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { style: styles.sectionLabel, children: "Periodic Table Overview" }, void 0, false, {
          fileName: "app/routes/app.cabinet.collection.jsx",
          lineNumber: 126,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PeriodicTable, { elements, ownedSymbols, wishlistedSymbols: wishlistSymbols, collectionType, compact: true }, void 0, false, {
          fileName: "app/routes/app.cabinet.collection.jsx",
          lineNumber: 127,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.cabinet.collection.jsx",
        lineNumber: 125,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.filters, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.filterTabs, children: ["all", "owned", "missing", "wishlisted", "out-of-stock"].map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => {
          const params = new URLSearchParams(searchParams);
          params.set("status", s);
          params.set("customer", customerId);
          setSearchParams(params);
        }, style: {
          ...styles.filterTab,
          ...filterStatus === s ? styles.filterTabActive : {}
        }, children: [
          s === "all" ? "All" : s.charAt(0).toUpperCase() + s.slice(1).replace("-", " "),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.filterCount, children: statusCounts[s] }, void 0, false, {
            fileName: "app/routes/app.cabinet.collection.jsx",
            lineNumber: 143,
            columnNumber: 17
          }, this)
        ] }, s, true, {
          fileName: "app/routes/app.cabinet.collection.jsx",
          lineNumber: 133,
          columnNumber: 81
        }, this)) }, void 0, false, {
          fileName: "app/routes/app.cabinet.collection.jsx",
          lineNumber: 132,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", placeholder: "Search by element name or symbol...", defaultValue: filterSearch, onChange: (e) => {
          const params = new URLSearchParams(searchParams);
          params.set("q", e.target.value);
          params.set("customer", customerId);
          setSearchParams(params);
        }, style: styles.searchInput }, void 0, false, {
          fileName: "app/routes/app.cabinet.collection.jsx",
          lineNumber: 146,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.cabinet.collection.jsx",
        lineNumber: 131,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.grid, children: filtered.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductCard, { product: p, status: p.status, showPrice: true, showStock: true }, p.id, false, {
        fileName: "app/routes/app.cabinet.collection.jsx",
        lineNumber: 156,
        columnNumber: 30
      }, this)) }, void 0, false, {
        fileName: "app/routes/app.cabinet.collection.jsx",
        lineNumber: 155,
        columnNumber: 9
      }, this),
      filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.empty, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.emptyIcon, children: "\u{1F52C}" }, void 0, false, {
          fileName: "app/routes/app.cabinet.collection.jsx",
          lineNumber: 160,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "No elements match your filters. Try broadening your search." }, void 0, false, {
          fileName: "app/routes/app.cabinet.collection.jsx",
          lineNumber: 161,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.cabinet.collection.jsx",
        lineNumber: 159,
        columnNumber: 35
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.cabinet.collection.jsx",
      lineNumber: 112,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.cabinet.collection.jsx",
    lineNumber: 110,
    columnNumber: 10
  }, this);
}
_s(CollectionGrid, "Nf55Izm2x+dBWjC06nScgFcKpP4=", false, function() {
  return [useLoaderData, useSearchParams];
});
_c = CollectionGrid;
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
  header: {
    marginBottom: 32,
    display: "flex",
    flexDirection: "column",
    gap: 16
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
  tableSection: {
    marginBottom: 32,
    background: "#ffffff",
    border: "1px solid var(--luc-border)",
    borderRadius: 12,
    padding: "16px 20px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
  },
  sectionLabel: {
    fontSize: 13,
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    color: "var(--luc-text-muted)",
    marginBottom: 12
  },
  filters: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    marginBottom: 24,
    paddingBottom: 16,
    borderBottom: "1px solid var(--luc-border)"
  },
  filterTabs: {
    display: "flex",
    gap: 6,
    flexWrap: "wrap"
  },
  filterTab: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    padding: "6px 14px",
    borderRadius: 8,
    border: "1px solid var(--luc-border)",
    background: "transparent",
    color: "var(--luc-text-muted)",
    fontSize: 13,
    fontWeight: 500,
    cursor: "pointer"
  },
  filterTabActive: {
    background: "#EBF3FC",
    color: "var(--luc-accent)",
    borderColor: "var(--luc-accent)"
  },
  filterCount: {
    fontSize: 11,
    opacity: 0.7
  },
  searchInput: {
    padding: "8px 14px",
    borderRadius: 8,
    border: "1px solid var(--luc-border)",
    background: "#ffffff",
    color: "var(--luc-text)",
    fontSize: 13,
    outline: "none",
    maxWidth: 320
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
  },
  emptyIcon: {
    fontSize: 48,
    display: "block",
    marginBottom: 12
  }
};
var _c;
$RefreshReg$(_c, "CollectionGrid");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  CollectionGrid as default
};
//# sourceMappingURL=/build/routes/app.cabinet.collection-AJG4MNY6.js.map
