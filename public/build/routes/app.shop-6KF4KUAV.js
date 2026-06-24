import {
  require_session
} from "/build/_shared/chunk-IYCODHKJ.js";
import {
  require_auth
} from "/build/_shared/chunk-U26VATEP.js";
import {
  require_collection
} from "/build/_shared/chunk-FTNGL5K7.js";
import {
  AppNav
} from "/build/_shared/chunk-2HXTESER.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Link,
  useLoaderData,
  useSearchParams
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

// app/routes/app.shop.jsx
var import_node = __toESM(require_node());
var import_react2 = __toESM(require_react());
var import_session = __toESM(require_session());
var import_auth = __toESM(require_auth());
var import_collection = __toESM(require_collection());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.shop.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.shop.jsx"
  );
  import.meta.hot.lastModified = "1779909038898.255";
}
function ShopPage() {
  _s();
  const {
    stats,
    missingItems,
    authUser
  } = useLoaderData();
  const [searchParams] = useSearchParams();
  const highlight = searchParams.get("highlight");
  const [filter, setFilter] = (0, import_react2.useState)("all");
  const [groupFilter, setGroupFilter] = (0, import_react2.useState)("ALL");
  const groups = [...new Set(missingItems.map((item) => item.group))].sort();
  let filtered = missingItems;
  if (filter === "wanted")
    filtered = filtered.filter((i) => i.isWanted);
  if (filter === "watchlist")
    filtered = filtered.filter((i) => i.isWatchlist);
  if (groupFilter !== "ALL")
    filtered = filtered.filter((i) => i.group === groupFilter);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.layout, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppNav, { currentPath: "/app/shop", userType: authUser.userType, isSubscriber: authUser.isSubscriber }, void 0, false, {
      fileName: "app/routes/app.shop.jsx",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { style: styles.main, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.header, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { style: styles.title, children: "\u{1F6D2} Element Shop" }, void 0, false, {
            fileName: "app/routes/app.shop.jsx",
            lineNumber: 82,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.subtitle, children: [
            stats.missing,
            " elements missing from your collection"
          ] }, void 0, true, {
            fileName: "app/routes/app.shop.jsx",
            lineNumber: 83,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.shop.jsx",
          lineNumber: 81,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/app/cabinet", style: styles.backLink, children: "\u2190 Back to Collection" }, void 0, false, {
          fileName: "app/routes/app.shop.jsx",
          lineNumber: 87,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.shop.jsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.filterBar, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: {
          ...styles.filterBtn,
          ...filter === "all" ? styles.filterBtnActive : {}
        }, onClick: () => setFilter("all"), children: [
          "All Missing (",
          stats.missing,
          ")"
        ] }, void 0, true, {
          fileName: "app/routes/app.shop.jsx",
          lineNumber: 92,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: {
          ...styles.filterBtn,
          ...filter === "wanted" ? styles.filterBtnActive : {}
        }, onClick: () => setFilter("wanted"), children: [
          "\u2661 Wanted (",
          stats.wanted,
          ")"
        ] }, void 0, true, {
          fileName: "app/routes/app.shop.jsx",
          lineNumber: 98,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: {
          ...styles.filterBtn,
          ...filter === "watchlist" ? styles.filterBtnActive : {}
        }, onClick: () => setFilter("watchlist"), children: [
          "\u{1F441} Watchlist (",
          stats.watchlist,
          ")"
        ] }, void 0, true, {
          fileName: "app/routes/app.shop.jsx",
          lineNumber: 104,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { style: styles.groupSelect, value: groupFilter, onChange: (e) => setGroupFilter(e.target.value), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "ALL", children: "All Groups" }, void 0, false, {
            fileName: "app/routes/app.shop.jsx",
            lineNumber: 111,
            columnNumber: 13
          }, this),
          groups.map((g) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: g, children: g }, g, false, {
            fileName: "app/routes/app.shop.jsx",
            lineNumber: 112,
            columnNumber: 30
          }, this))
        ] }, void 0, true, {
          fileName: "app/routes/app.shop.jsx",
          lineNumber: 110,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.shop.jsx",
        lineNumber: 91,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.grid, children: filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.emptyState, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.emptyText, children: filter === "all" ? "\u{1F389} You have all elements! Complete collection!" : `No ${filter} elements found.` }, void 0, false, {
        fileName: "app/routes/app.shop.jsx",
        lineNumber: 119,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/app.shop.jsx",
        lineNumber: 118,
        columnNumber: 36
      }, this) : filtered.map((item) => {
        const isHighlighted = item.sym === highlight;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          ...styles.itemCard,
          ...isHighlighted ? styles.itemHighlighted : {},
          ...item.isWanted ? styles.itemWanted : {}
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.itemHeader, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.itemZ, children: item.z }, void 0, false, {
              fileName: "app/routes/app.shop.jsx",
              lineNumber: 130,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.itemSymbol, children: item.sym }, void 0, false, {
              fileName: "app/routes/app.shop.jsx",
              lineNumber: 131,
              columnNumber: 21
            }, this),
            item.isWanted && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.wantedBadge, children: "\u2661 Wanted" }, void 0, false, {
              fileName: "app/routes/app.shop.jsx",
              lineNumber: 132,
              columnNumber: 39
            }, this),
            item.isWatchlist && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.watchlistBadge, children: "\u{1F441} Watching" }, void 0, false, {
              fileName: "app/routes/app.shop.jsx",
              lineNumber: 133,
              columnNumber: 42
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.shop.jsx",
            lineNumber: 129,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.itemName, children: item.name }, void 0, false, {
            fileName: "app/routes/app.shop.jsx",
            lineNumber: 135,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.itemGroup, children: item.group }, void 0, false, {
            fileName: "app/routes/app.shop.jsx",
            lineNumber: 136,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.itemActions, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: styles.shopBtn, children: "View Product" }, void 0, false, {
              fileName: "app/routes/app.shop.jsx",
              lineNumber: 139,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: styles.waitlistBtn, children: "Join Waitlist" }, void 0, false, {
              fileName: "app/routes/app.shop.jsx",
              lineNumber: 140,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.shop.jsx",
            lineNumber: 137,
            columnNumber: 19
          }, this)
        ] }, item.sym, true, {
          fileName: "app/routes/app.shop.jsx",
          lineNumber: 124,
          columnNumber: 18
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/app.shop.jsx",
        lineNumber: 117,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.shop.jsx",
      lineNumber: 79,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.shop.jsx",
    lineNumber: 77,
    columnNumber: 10
  }, this);
}
_s(ShopPage, "O0+L9ZREsJWCymTOzrFs7dapHeo=", false, function() {
  return [useLoaderData, useSearchParams];
});
_c = ShopPage;
var styles = {
  layout: {
    display: "flex",
    minHeight: "100vh",
    background: "#f8f9fa"
  },
  main: {
    flex: 1,
    marginLeft: 240,
    padding: "24px 32px",
    maxWidth: 1200
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 24
  },
  title: {
    fontSize: 26,
    fontWeight: 800,
    color: "#1a1a2e",
    margin: 0
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    margin: "4px 0 0"
  },
  backLink: {
    fontSize: 13,
    color: "#1976D2",
    textDecoration: "none"
  },
  filterBar: {
    display: "flex",
    gap: 10,
    marginBottom: 24,
    flexWrap: "wrap",
    padding: "12px 16px",
    background: "#fff",
    borderRadius: 10,
    border: "1px solid #e9ecef"
  },
  filterBtn: {
    padding: "6px 14px",
    borderRadius: 8,
    border: "1px solid #dee2e6",
    background: "#fff",
    color: "#555",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.15s"
  },
  filterBtnActive: {
    background: "#1976D2",
    color: "#fff",
    borderColor: "#1976D2"
  },
  groupSelect: {
    marginLeft: "auto",
    padding: "6px 12px",
    borderRadius: 8,
    border: "1px solid #dee2e6",
    fontSize: 12,
    cursor: "pointer"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: 16
  },
  itemCard: {
    background: "#fff",
    borderRadius: 12,
    padding: 16,
    border: "1px solid #e9ecef",
    transition: "transform 0.15s, box-shadow 0.15s"
  },
  itemHighlighted: {
    border: "2px solid #1976D2",
    boxShadow: "0 4px 12px rgba(25, 118, 210, 0.2)"
  },
  itemWanted: {
    borderLeft: "3px solid #F9A825"
  },
  itemHeader: {
    display: "flex",
    alignItems: "baseline",
    gap: 6,
    marginBottom: 4
  },
  itemZ: {
    fontSize: 10,
    color: "#999",
    fontWeight: 600
  },
  itemSymbol: {
    fontSize: 28,
    fontWeight: 800,
    color: "#333"
  },
  wantedBadge: {
    fontSize: 9,
    color: "#F9A825",
    fontWeight: 600,
    marginLeft: "auto",
    background: "#fff9c4",
    padding: "2px 6px",
    borderRadius: 4
  },
  watchlistBadge: {
    fontSize: 9,
    color: "#1976D2",
    fontWeight: 600,
    marginLeft: "auto",
    background: "#e3f2fd",
    padding: "2px 6px",
    borderRadius: 4
  },
  itemName: {
    fontSize: 14,
    fontWeight: 600,
    color: "#333",
    marginBottom: 2
  },
  itemGroup: {
    fontSize: 11,
    color: "#888",
    marginBottom: 12
  },
  itemActions: {
    display: "flex",
    gap: 6
  },
  shopBtn: {
    flex: 1,
    padding: "6px 10px",
    borderRadius: 6,
    background: "#1976D2",
    color: "#fff",
    border: "none",
    fontSize: 11,
    fontWeight: 600,
    cursor: "pointer"
  },
  waitlistBtn: {
    flex: 1,
    padding: "6px 10px",
    borderRadius: 6,
    background: "#fff",
    color: "#555",
    border: "1px solid #dee2e6",
    fontSize: 11,
    fontWeight: 600,
    cursor: "pointer"
  },
  emptyState: {
    gridColumn: "1 / -1",
    textAlign: "center",
    padding: 40
  },
  emptyText: {
    fontSize: 16,
    color: "#888"
  }
};
var _c;
$RefreshReg$(_c, "ShopPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ShopPage as default
};
//# sourceMappingURL=/build/routes/app.shop-6KF4KUAV.js.map
