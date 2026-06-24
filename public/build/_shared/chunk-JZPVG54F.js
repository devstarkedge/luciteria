import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-ORVFF776.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/ProductCard.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ProductCard.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ProductCard.jsx"
  );
  import.meta.hot.lastModified = "1779491317302.2532";
}
var RARITY_COLORS = {
  common: "#059669",
  uncommon: "#2563eb",
  rare: "#7c3aed",
  "ultra-rare": "#c5960c",
  legendary: "#dc2626"
};
var STATUS_STYLES = {
  owned: {
    bg: "#05966915",
    border: "#059669",
    label: "Collected",
    icon: "\u2713"
  },
  missing: {
    bg: "#ffffff",
    border: "#e2e5ea",
    label: "Missing",
    icon: ""
  },
  wishlisted: {
    bg: "#d9770615",
    border: "#d97706",
    label: "Wishlisted",
    icon: "\u2B50"
  },
  shipped: {
    bg: "#2563eb15",
    border: "#2563eb",
    label: "Shipped",
    icon: "\u{1F4E6}"
  },
  "out-of-stock": {
    bg: "#dc262615",
    border: "#dc2626",
    label: "Out of Stock",
    icon: "\u2205"
  }
};
function ProductCard({
  product,
  status = "missing",
  showPrice = false,
  showStock = false,
  onAction,
  actionLabel,
  compact = false
}) {
  const statusStyle = STATUS_STYLES[status] || STATUS_STYLES.missing;
  const rarityColor = RARITY_COLORS[product.rarityTier] || RARITY_COLORS.common;
  if (compact) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      ...styles.compactCard,
      background: statusStyle.bg,
      borderColor: statusStyle.border
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.compactSymbol, children: product.elementSymbol }, void 0, false, {
        fileName: "app/components/ProductCard.jsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.compactNumber, children: product.atomicNumber }, void 0, false, {
        fileName: "app/components/ProductCard.jsx",
        lineNumber: 83,
        columnNumber: 9
      }, this),
      statusStyle.icon && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.compactBadge, children: statusStyle.icon }, void 0, false, {
        fileName: "app/components/ProductCard.jsx",
        lineNumber: 84,
        columnNumber: 30
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ProductCard.jsx",
      lineNumber: 77,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    ...styles.card,
    borderColor: statusStyle.border
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.header, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.symbolBlock, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.atomicNumber, children: product.atomicNumber }, void 0, false, {
          fileName: "app/components/ProductCard.jsx",
          lineNumber: 93,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.symbol, children: product.elementSymbol }, void 0, false, {
          fileName: "app/components/ProductCard.jsx",
          lineNumber: 94,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.elementName, children: product.elementName }, void 0, false, {
          fileName: "app/components/ProductCard.jsx",
          lineNumber: 95,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ProductCard.jsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        ...styles.rarityBadge,
        background: rarityColor + "15",
        color: rarityColor
      }, children: product.rarityTier }, void 0, false, {
        fileName: "app/components/ProductCard.jsx",
        lineNumber: 97,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ProductCard.jsx",
      lineNumber: 91,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.title, children: product.title }, void 0, false, {
      fileName: "app/components/ProductCard.jsx",
      lineNumber: 106,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      ...styles.statusBadge,
      background: statusStyle.bg,
      color: statusStyle.border
    }, children: [
      statusStyle.icon,
      " ",
      statusStyle.label
    ] }, void 0, true, {
      fileName: "app/components/ProductCard.jsx",
      lineNumber: 108,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.meta, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.metaItem, children: [
        "\u{1F4CF} ",
        product.format
      ] }, void 0, true, {
        fileName: "app/components/ProductCard.jsx",
        lineNumber: 117,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.metaItem, children: [
        "\u{1F3F7}\uFE0F ",
        product.category
      ] }, void 0, true, {
        fileName: "app/components/ProductCard.jsx",
        lineNumber: 118,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ProductCard.jsx",
      lineNumber: 116,
      columnNumber: 7
    }, this),
    showPrice && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.price, children: [
      "$",
      product.priceUsd.toFixed(2)
    ] }, void 0, true, {
      fileName: "app/components/ProductCard.jsx",
      lineNumber: 121,
      columnNumber: 21
    }, this),
    showStock && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      ...styles.stock,
      color: product.inventoryQty > 3 ? "var(--luc-success)" : product.inventoryQty > 0 ? "var(--luc-warning)" : "var(--luc-danger)"
    }, children: product.inventoryQty > 0 ? `${product.inventoryQty} in stock` : "Out of stock" }, void 0, false, {
      fileName: "app/components/ProductCard.jsx",
      lineNumber: 123,
      columnNumber: 21
    }, this),
    onAction && actionLabel && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => onAction(product), style: styles.actionBtn, children: actionLabel }, void 0, false, {
      fileName: "app/components/ProductCard.jsx",
      lineNumber: 130,
      columnNumber: 35
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ProductCard.jsx",
    lineNumber: 87,
    columnNumber: 10
  }, this);
}
_c = ProductCard;
var styles = {
  card: {
    background: "#ffffff",
    border: "1px solid",
    borderRadius: 12,
    padding: 16,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    transition: "transform 0.15s ease, box-shadow 0.15s ease",
    cursor: "default",
    boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  symbolBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  },
  atomicNumber: {
    fontSize: 11,
    color: "var(--luc-text-muted)",
    fontWeight: 600
  },
  symbol: {
    fontSize: 36,
    fontWeight: 800,
    lineHeight: 1,
    color: "var(--luc-text)",
    letterSpacing: "-0.02em"
  },
  elementName: {
    fontSize: 12,
    color: "var(--luc-text-muted)",
    fontWeight: 500
  },
  rarityBadge: {
    fontSize: 10,
    fontWeight: 700,
    textTransform: "uppercase",
    padding: "3px 8px",
    borderRadius: 6,
    letterSpacing: "0.05em"
  },
  title: {
    fontSize: 13,
    color: "var(--luc-text)",
    fontWeight: 500,
    lineHeight: 1.3
  },
  statusBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    fontSize: 12,
    fontWeight: 600,
    padding: "4px 10px",
    borderRadius: 6,
    alignSelf: "flex-start"
  },
  meta: {
    display: "flex",
    gap: 12,
    fontSize: 11,
    color: "var(--luc-text-muted)"
  },
  metaItem: {},
  price: {
    fontSize: 18,
    fontWeight: 700,
    color: "var(--luc-gold)"
  },
  stock: {
    fontSize: 12,
    fontWeight: 600
  },
  actionBtn: {
    background: "var(--luc-accent)",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    padding: "8px 16px",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    marginTop: 4,
    transition: "opacity 0.15s"
  },
  compactCard: {
    width: 56,
    height: 56,
    border: "1px solid",
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    cursor: "pointer"
  },
  compactSymbol: {
    fontSize: 18,
    fontWeight: 800,
    color: "var(--luc-text)",
    lineHeight: 1
  },
  compactNumber: {
    fontSize: 9,
    color: "var(--luc-text-muted)"
  },
  compactBadge: {
    position: "absolute",
    top: -4,
    right: -4,
    fontSize: 10
  }
};
var _c;
$RefreshReg$(_c, "ProductCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ProductCard
};
//# sourceMappingURL=/build/_shared/chunk-JZPVG54F.js.map
