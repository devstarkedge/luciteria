import {
  require_elements
} from "/build/_shared/chunk-L2WTGI6U.js";
import {
  require_auth
} from "/build/_shared/chunk-U26VATEP.js";
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

// app/routes/wishlist.$token.jsx
var import_node = __toESM(require_node());
var import_auth = __toESM(require_auth());
var import_elements = __toESM(require_elements());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/wishlist.$token.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/wishlist.$token.jsx"
  );
  import.meta.hot.lastModified = "1779862442335.023";
}
var TABLE_ROWS = 10;
var TABLE_COLS = 18;
var GROUP_COLORS = {
  "Alkali Metal": {
    bg: "#fce4ec",
    text: "#b71c1c"
  },
  "Alkaline Earth": {
    bg: "#fff3e0",
    text: "#e65100"
  },
  "Transition Metal": {
    bg: "#e3f2fd",
    text: "#1565c0"
  },
  "Post-Transition Metal": {
    bg: "#e0f7fa",
    text: "#00838f"
  },
  "Metalloid": {
    bg: "#ede7f6",
    text: "#4527a0"
  },
  "Nonmetal": {
    bg: "#e8f5e9",
    text: "#2e7d32"
  },
  "Halogen": {
    bg: "#fffde7",
    text: "#f57f17"
  },
  "Noble Gas": {
    bg: "#f3e5f5",
    text: "#6a1b9a"
  },
  "Lanthanide": {
    bg: "#fce4ec",
    text: "#ad1457"
  },
  "Actinide": {
    bg: "#fbe9e7",
    text: "#bf360c"
  }
};
function PublicWishlist() {
  _s();
  const {
    userName,
    wishlistElements,
    wishlistSymbols,
    ownedSymbols,
    elements,
    ownedCount
  } = useLoaderData();
  const ownedSet = new Set(ownedSymbols);
  const wishlistSet = new Set(wishlistSymbols);
  const grid = {};
  elements.forEach((el) => {
    grid[`${el.row}-${el.col}`] = el;
  });
  const cellSize = 38;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.page, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.container, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.header, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.brand, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
          fontSize: 28
        }, children: "\u269B\uFE0F" }, void 0, false, {
          fileName: "app/routes/wishlist.$token.jsx",
          lineNumber: 134,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.brandName, children: "Luciteria Collector Cabinet" }, void 0, false, {
          fileName: "app/routes/wishlist.$token.jsx",
          lineNumber: 137,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/wishlist.$token.jsx",
        lineNumber: 133,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { style: styles.title, children: [
        userName,
        "'s Element Wishlist"
      ] }, void 0, true, {
        fileName: "app/routes/wishlist.$token.jsx",
        lineNumber: 139,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.subtitle, children: wishlistElements.length > 0 ? `${userName} is looking for ${wishlistElements.length} element${wishlistElements.length !== 1 ? "s" : ""}. Help them complete their collection!` : `${userName} hasn't added any elements to their wishlist yet.` }, void 0, false, {
        fileName: "app/routes/wishlist.$token.jsx",
        lineNumber: 140,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.statRow, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.stat, children: [
          "\u{1F9CA} ",
          ownedCount,
          " collected"
        ] }, void 0, true, {
          fileName: "app/routes/wishlist.$token.jsx",
          lineNumber: 144,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.stat, children: [
          "\u2B50 ",
          wishlistElements.length,
          " wishlisted"
        ] }, void 0, true, {
          fileName: "app/routes/wishlist.$token.jsx",
          lineNumber: 145,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.stat, children: [
          "\u{1F50D} ",
          118 - ownedCount,
          " missing"
        ] }, void 0, true, {
          fileName: "app/routes/wishlist.$token.jsx",
          lineNumber: 146,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/wishlist.$token.jsx",
        lineNumber: 143,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/wishlist.$token.jsx",
      lineNumber: 132,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.tableSection, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.sectionTitle, children: "Periodic Table Overview" }, void 0, false, {
        fileName: "app/routes/wishlist.$token.jsx",
        lineNumber: 152,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.legend, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.legendItem, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
            ...styles.legendDot,
            background: "#4CAF50"
          } }, void 0, false, {
            fileName: "app/routes/wishlist.$token.jsx",
            lineNumber: 154,
            columnNumber: 45
          }, this),
          " Collected"
        ] }, void 0, true, {
          fileName: "app/routes/wishlist.$token.jsx",
          lineNumber: 154,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.legendItem, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
            ...styles.legendDot,
            background: "#4a90e2"
          } }, void 0, false, {
            fileName: "app/routes/wishlist.$token.jsx",
            lineNumber: 158,
            columnNumber: 45
          }, this),
          " Wishlisted"
        ] }, void 0, true, {
          fileName: "app/routes/wishlist.$token.jsx",
          lineNumber: 158,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.legendItem, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
            ...styles.legendDot,
            background: "#eee"
          } }, void 0, false, {
            fileName: "app/routes/wishlist.$token.jsx",
            lineNumber: 162,
            columnNumber: 45
          }, this),
          " Missing"
        ] }, void 0, true, {
          fileName: "app/routes/wishlist.$token.jsx",
          lineNumber: 162,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/wishlist.$token.jsx",
        lineNumber: 153,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        overflowX: "auto",
        paddingBottom: 8
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        display: "grid",
        gridTemplateColumns: `repeat(${TABLE_COLS}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${TABLE_ROWS}, ${cellSize}px)`,
        gap: "2px",
        width: "fit-content",
        margin: "0 auto"
      }, children: Array.from({
        length: TABLE_ROWS
      }, (_, r) => Array.from({
        length: TABLE_COLS
      }, (_2, c) => {
        const row = r + 1;
        const col = c + 1;
        const key = `${row}-${col}`;
        const el = grid[key];
        if (row === 8 || !el)
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            gridRow: row,
            gridColumn: col
          } }, key, false, {
            fileName: "app/routes/wishlist.$token.jsx",
            lineNumber: 188,
            columnNumber: 44
          }, this);
        const isOwned = ownedSet.has(el.sym);
        const isWishlisted = wishlistSet.has(el.sym);
        const groupColor = GROUP_COLORS[el.group] || {
          bg: "#fff",
          text: "#333"
        };
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { title: `${el.z}. ${el.name} (${el.sym}) \u2014 ${isOwned ? "Collected" : isWishlisted ? "Wishlisted" : "Missing"}`, style: {
          gridRow: row,
          gridColumn: col,
          width: cellSize,
          height: cellSize,
          borderRadius: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: isOwned ? "#e8f5e9" : isWishlisted ? "#e3f2fd" : groupColor.bg,
          border: isOwned ? "2px solid #4CAF50" : isWishlisted ? "2px solid #4a90e2" : "1px solid rgba(0,0,0,0.06)"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
            fontSize: 7,
            fontWeight: 600,
            color: isOwned ? "#2e7d32" : isWishlisted ? "#1565c0" : groupColor.text
          }, children: el.z }, void 0, false, {
            fileName: "app/routes/wishlist.$token.jsx",
            lineNumber: 211,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
            fontSize: 12,
            fontWeight: 800,
            color: isOwned ? "#2e7d32" : isWishlisted ? "#1565c0" : groupColor.text
          }, children: el.sym }, void 0, false, {
            fileName: "app/routes/wishlist.$token.jsx",
            lineNumber: 216,
            columnNumber: 23
          }, this)
        ] }, key, true, {
          fileName: "app/routes/wishlist.$token.jsx",
          lineNumber: 198,
          columnNumber: 22
        }, this);
      })) }, void 0, false, {
        fileName: "app/routes/wishlist.$token.jsx",
        lineNumber: 171,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/wishlist.$token.jsx",
        lineNumber: 167,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/wishlist.$token.jsx",
      lineNumber: 151,
      columnNumber: 9
    }, this),
    wishlistElements.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.wishlistSection, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.sectionTitle, children: "\u2B50 Wishlist Items" }, void 0, false, {
        fileName: "app/routes/wishlist.$token.jsx",
        lineNumber: 229,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.wishlistGrid, children: wishlistElements.map((el) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.wishlistCard, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.elSymbol, children: el.elementSymbol }, void 0, false, {
          fileName: "app/routes/wishlist.$token.jsx",
          lineNumber: 232,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.elName, children: el.elementName }, void 0, false, {
            fileName: "app/routes/wishlist.$token.jsx",
            lineNumber: 234,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.elNumber, children: [
            "#",
            el.atomicNumber
          ] }, void 0, true, {
            fileName: "app/routes/wishlist.$token.jsx",
            lineNumber: 235,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/wishlist.$token.jsx",
          lineNumber: 233,
          columnNumber: 19
        }, this)
      ] }, el.id, true, {
        fileName: "app/routes/wishlist.$token.jsx",
        lineNumber: 231,
        columnNumber: 43
      }, this)) }, void 0, false, {
        fileName: "app/routes/wishlist.$token.jsx",
        lineNumber: 230,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/wishlist.$token.jsx",
      lineNumber: 228,
      columnNumber: 41
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.footer, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.footerText, children: [
        "Powered by ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Luciteria Collector Cabinet" }, void 0, false, {
          fileName: "app/routes/wishlist.$token.jsx",
          lineNumber: 244,
          columnNumber: 24
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/wishlist.$token.jsx",
        lineNumber: 243,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/onboarding/welcome", style: styles.footerLink, children: "Start your own collection \u2192" }, void 0, false, {
        fileName: "app/routes/wishlist.$token.jsx",
        lineNumber: 246,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/wishlist.$token.jsx",
      lineNumber: 242,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/wishlist.$token.jsx",
    lineNumber: 130,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/wishlist.$token.jsx",
    lineNumber: 129,
    columnNumber: 10
  }, this);
}
_s(PublicWishlist, "33RuqplRbAk2f7OOClvzPjuBNf8=", false, function() {
  return [useLoaderData];
});
_c = PublicWishlist;
var styles = {
  page: {
    minHeight: "100vh",
    background: "var(--luc-bg, #f5f7fa)",
    padding: "32px 20px"
  },
  container: {
    maxWidth: 900,
    margin: "0 auto"
  },
  header: {
    textAlign: "center",
    marginBottom: 32
  },
  brand: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginBottom: 16
  },
  brandName: {
    fontSize: 16,
    fontWeight: 600,
    color: "var(--luc-text-muted, #6b7280)"
  },
  title: {
    fontSize: 28,
    fontWeight: 700,
    color: "var(--luc-text, #1a1a2e)",
    margin: "0 0 8px"
  },
  subtitle: {
    fontSize: 15,
    color: "var(--luc-text-muted, #6b7280)",
    lineHeight: 1.5
  },
  statRow: {
    display: "flex",
    justifyContent: "center",
    gap: 20,
    marginTop: 14
  },
  stat: {
    fontSize: 13,
    color: "var(--luc-text, #1a1a2e)",
    fontWeight: 500
  },
  tableSection: {
    background: "#fff",
    borderRadius: 16,
    padding: "20px 24px",
    border: "1px solid var(--luc-border, #e2e5ea)",
    marginBottom: 28,
    boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: "var(--luc-text, #1a1a2e)",
    marginBottom: 12
  },
  legend: {
    display: "flex",
    gap: 16,
    marginBottom: 12,
    fontSize: 12,
    color: "#666"
  },
  legendItem: {
    display: "flex",
    alignItems: "center",
    gap: 5
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 3,
    display: "inline-block"
  },
  wishlistSection: {
    background: "#fff",
    borderRadius: 16,
    padding: "20px 24px",
    border: "1px solid var(--luc-border, #e2e5ea)",
    marginBottom: 28,
    boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
  },
  wishlistGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: 10
  },
  wishlistCard: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "12px 16px",
    borderRadius: 10,
    border: "1px solid #e3f2fd",
    background: "#f8fbff"
  },
  elSymbol: {
    fontSize: 24,
    fontWeight: 800,
    color: "#4a90e2",
    width: 40,
    textAlign: "center"
  },
  elName: {
    fontSize: 14,
    fontWeight: 600,
    color: "var(--luc-text, #1a1a2e)",
    display: "block"
  },
  elNumber: {
    fontSize: 12,
    color: "var(--luc-text-muted, #6b7280)"
  },
  footer: {
    textAlign: "center",
    padding: "24px 0"
  },
  footerText: {
    fontSize: 13,
    color: "var(--luc-text-muted, #6b7280)"
  },
  footerLink: {
    fontSize: 14,
    color: "var(--luc-accent, #4A90E2)",
    fontWeight: 600,
    textDecoration: "none"
  }
};
var _c;
$RefreshReg$(_c, "PublicWishlist");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  PublicWishlist as default
};
//# sourceMappingURL=/build/routes/wishlist.$token-5DVNAXB5.js.map
