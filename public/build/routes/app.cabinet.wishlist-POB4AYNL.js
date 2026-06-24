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

// app/routes/app.cabinet.wishlist.jsx
var import_node = __toESM(require_node());
var db = __toESM(require_mock_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.cabinet.wishlist.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.cabinet.wishlist.jsx"
  );
  import.meta.hot.lastModified = "1779491509046.7927";
}
function WishlistPage() {
  _s();
  const {
    customer,
    wishlist,
    customerId,
    collectionType
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.layout, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppNav, { mode: "customer", customerName: customer?.firstName, collectionType }, void 0, false, {
      fileName: "app/routes/app.cabinet.wishlist.jsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { style: styles.main, className: "luc-main", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.header, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: styles.title, children: "Your Wishlist" }, void 0, false, {
          fileName: "app/routes/app.cabinet.wishlist.jsx",
          lineNumber: 59,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.subtitle, children: wishlist.length === 0 ? "Nothing on the radar yet. Browse your missing elements to start curating." : `${wishlist.length} element${wishlist.length !== 1 ? "s" : ""} on your radar. Priority order matters for subscription assignments.` }, void 0, false, {
          fileName: "app/routes/app.cabinet.wishlist.jsx",
          lineNumber: 60,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.cabinet.wishlist.jsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      wishlist.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.emptyState, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.emptyIcon, children: "\u2B50" }, void 0, false, {
          fileName: "app/routes/app.cabinet.wishlist.jsx",
          lineNumber: 66,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.emptyTitle, children: "Your wishlist is waiting" }, void 0, false, {
          fileName: "app/routes/app.cabinet.wishlist.jsx",
          lineNumber: 67,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.emptyText, children: "Add elements from your Missing Items page to build your acquisition radar. Items you wishlist get priority in subscription assignments." }, void 0, false, {
          fileName: "app/routes/app.cabinet.wishlist.jsx",
          lineNumber: 68,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: `/app/cabinet/missing?customer=${customerId}`, style: styles.ctaBtn, children: "Browse Missing Elements \u2192" }, void 0, false, {
          fileName: "app/routes/app.cabinet.wishlist.jsx",
          lineNumber: 72,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.cabinet.wishlist.jsx",
        lineNumber: 65,
        columnNumber: 34
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.list, children: wishlist.map((item, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.card, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.priorityBadge, children: [
          "#",
          idx + 1
        ] }, void 0, true, {
          fileName: "app/routes/app.cabinet.wishlist.jsx",
          lineNumber: 77,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.elementBlock, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.atomicNumber, children: item.product.atomicNumber }, void 0, false, {
            fileName: "app/routes/app.cabinet.wishlist.jsx",
            lineNumber: 80,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.symbol, children: item.product.elementSymbol }, void 0, false, {
            fileName: "app/routes/app.cabinet.wishlist.jsx",
            lineNumber: 81,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.elementName, children: item.product.elementName }, void 0, false, {
            fileName: "app/routes/app.cabinet.wishlist.jsx",
            lineNumber: 82,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.cabinet.wishlist.jsx",
          lineNumber: 79,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.info, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.productTitle, children: item.product.title }, void 0, false, {
            fileName: "app/routes/app.cabinet.wishlist.jsx",
            lineNumber: 86,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.meta, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: item.product.inventoryQty > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
              color: "var(--luc-success)"
            }, children: [
              "\u2713 ",
              item.product.inventoryQty,
              " in stock"
            ] }, void 0, true, {
              fileName: "app/routes/app.cabinet.wishlist.jsx",
              lineNumber: 89,
              columnNumber: 56
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
              color: "var(--luc-danger)"
            }, children: "Out of stock" }, void 0, false, {
              fileName: "app/routes/app.cabinet.wishlist.jsx",
              lineNumber: 91,
              columnNumber: 68
            }, this) }, void 0, false, {
              fileName: "app/routes/app.cabinet.wishlist.jsx",
              lineNumber: 88,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
              color: "var(--luc-gold)"
            }, children: [
              "$",
              item.product.priceUsd.toFixed(2)
            ] }, void 0, true, {
              fileName: "app/routes/app.cabinet.wishlist.jsx",
              lineNumber: 95,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
              ...styles.rarityPill,
              color: item.product.rarityTier === "legendary" ? "#dc2626" : item.product.rarityTier === "ultra-rare" ? "#c5960c" : item.product.rarityTier === "rare" ? "#7c3aed" : "var(--luc-text-muted)"
            }, children: item.product.rarityTier }, void 0, false, {
              fileName: "app/routes/app.cabinet.wishlist.jsx",
              lineNumber: 98,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.cabinet.wishlist.jsx",
            lineNumber: 87,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.description, children: item.product.description }, void 0, false, {
            fileName: "app/routes/app.cabinet.wishlist.jsx",
            lineNumber: 105,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.cabinet.wishlist.jsx",
          lineNumber: 85,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.actions, children: [
          item.notifyOnRestock && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.notifyBadge, children: "\u{1F514} Notify on restock" }, void 0, false, {
            fileName: "app/routes/app.cabinet.wishlist.jsx",
            lineNumber: 109,
            columnNumber: 44
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.btnGroup, children: [
            item.product.inventoryQty > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: styles.addToCartBtn, children: "Add to Cart" }, void 0, false, {
              fileName: "app/routes/app.cabinet.wishlist.jsx",
              lineNumber: 111,
              columnNumber: 55
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: styles.moveUpBtn, children: "\u2191" }, void 0, false, {
              fileName: "app/routes/app.cabinet.wishlist.jsx",
              lineNumber: 112,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: styles.moveDownBtn, children: "\u2193" }, void 0, false, {
              fileName: "app/routes/app.cabinet.wishlist.jsx",
              lineNumber: 113,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: styles.removeBtn, children: "Remove" }, void 0, false, {
              fileName: "app/routes/app.cabinet.wishlist.jsx",
              lineNumber: 114,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.cabinet.wishlist.jsx",
            lineNumber: 110,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.cabinet.wishlist.jsx",
          lineNumber: 108,
          columnNumber: 17
        }, this)
      ] }, item.product.id, true, {
        fileName: "app/routes/app.cabinet.wishlist.jsx",
        lineNumber: 76,
        columnNumber: 42
      }, this)) }, void 0, false, {
        fileName: "app/routes/app.cabinet.wishlist.jsx",
        lineNumber: 75,
        columnNumber: 20
      }, this),
      wishlist.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.infoBox, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "\u{1F4A1} How wishlist priority works:" }, void 0, false, {
          fileName: "app/routes/app.cabinet.wishlist.jsx",
          lineNumber: 121,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
          margin: "6px 0 0"
        }, children: "When our assignment engine picks your next subscription element, it checks your wishlist first. Item #1 gets priority. If it's in stock and you don't already own it, that's what ships." }, void 0, false, {
          fileName: "app/routes/app.cabinet.wishlist.jsx",
          lineNumber: 122,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.cabinet.wishlist.jsx",
        lineNumber: 120,
        columnNumber: 33
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.cabinet.wishlist.jsx",
      lineNumber: 57,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.cabinet.wishlist.jsx",
    lineNumber: 55,
    columnNumber: 10
  }, this);
}
_s(WishlistPage, "BK82oZ4rHM4KTRZf9sBAOs6oajY=", false, function() {
  return [useLoaderData];
});
_c = WishlistPage;
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
  header: {
    marginBottom: 28
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
  list: {
    display: "flex",
    flexDirection: "column",
    gap: 12
  },
  card: {
    display: "flex",
    gap: 16,
    alignItems: "flex-start",
    background: "#ffffff",
    border: "1px solid var(--luc-border)",
    borderRadius: 12,
    padding: 20,
    position: "relative",
    boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
  },
  priorityBadge: {
    position: "absolute",
    top: -8,
    left: -8,
    background: "var(--luc-accent)",
    color: "#fff",
    width: 28,
    height: 28,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
    fontWeight: 700
  },
  elementBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minWidth: 64,
    padding: "8px 0"
  },
  atomicNumber: {
    fontSize: 10,
    color: "var(--luc-text-muted)"
  },
  symbol: {
    fontSize: 32,
    fontWeight: 800,
    color: "var(--luc-accent)",
    lineHeight: 1
  },
  elementName: {
    fontSize: 10,
    color: "var(--luc-text-muted)",
    marginTop: 2
  },
  info: {
    flex: 1
  },
  productTitle: {
    fontSize: 15,
    fontWeight: 600,
    color: "var(--luc-text)",
    marginBottom: 6
  },
  meta: {
    display: "flex",
    gap: 12,
    fontSize: 12,
    marginBottom: 8,
    flexWrap: "wrap"
  },
  rarityPill: {
    fontSize: 11,
    fontWeight: 600,
    textTransform: "uppercase"
  },
  description: {
    fontSize: 13,
    color: "var(--luc-text-muted)",
    lineHeight: 1.5,
    margin: 0
  },
  actions: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    alignItems: "flex-end",
    minWidth: 100
  },
  notifyBadge: {
    fontSize: 11,
    color: "var(--luc-warning)"
  },
  btnGroup: {
    display: "flex",
    gap: 4
  },
  addToCartBtn: {
    padding: "6px 14px",
    background: "var(--luc-accent)",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    fontSize: 12,
    fontWeight: 600,
    cursor: "pointer"
  },
  moveUpBtn: {
    padding: "6px 8px",
    background: "transparent",
    border: "1px solid var(--luc-border)",
    borderRadius: 6,
    color: "var(--luc-text-muted)",
    fontSize: 12,
    cursor: "pointer"
  },
  moveDownBtn: {
    padding: "6px 8px",
    background: "transparent",
    border: "1px solid var(--luc-border)",
    borderRadius: 6,
    color: "var(--luc-text-muted)",
    fontSize: 12,
    cursor: "pointer"
  },
  removeBtn: {
    padding: "6px 10px",
    background: "transparent",
    border: "1px solid var(--luc-border)",
    borderRadius: 6,
    color: "var(--luc-danger)",
    fontSize: 12,
    cursor: "pointer"
  },
  emptyState: {
    textAlign: "center",
    padding: "80px 20px",
    background: "#ffffff",
    border: "1px solid var(--luc-border)",
    borderRadius: 16,
    boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
  },
  emptyIcon: {
    fontSize: 56,
    display: "block",
    marginBottom: 16
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: 700,
    color: "var(--luc-text)",
    margin: "0 0 8px"
  },
  emptyText: {
    fontSize: 14,
    color: "var(--luc-text-muted)",
    maxWidth: 400,
    margin: "0 auto 20px"
  },
  ctaBtn: {
    display: "inline-block",
    padding: "10px 24px",
    background: "var(--luc-accent)",
    color: "#fff",
    borderRadius: 8,
    textDecoration: "none",
    fontSize: 14,
    fontWeight: 600
  },
  infoBox: {
    marginTop: 32,
    padding: 16,
    background: "#f8fafc",
    border: "1px solid var(--luc-border)",
    borderRadius: 10,
    fontSize: 13,
    color: "var(--luc-text-muted)",
    lineHeight: 1.5
  }
};
var _c;
$RefreshReg$(_c, "WishlistPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  WishlistPage as default
};
//# sourceMappingURL=/build/routes/app.cabinet.wishlist-POB4AYNL.js.map
