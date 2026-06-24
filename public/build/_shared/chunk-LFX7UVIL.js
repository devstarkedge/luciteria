import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-ORVFF776.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/TierBadge.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/TierBadge.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/TierBadge.jsx"
  );
  import.meta.hot.lastModified = "1779902150344.458";
}
var TIER_COLORS = {
  Bronze: {
    bg: "#CD7F32",
    text: "#fff",
    icon: "\u{1F949}"
  },
  Silver: {
    bg: "#C0C0C0",
    text: "#333",
    icon: "\u{1F948}"
  },
  Gold: {
    bg: "#FFD700",
    text: "#333",
    icon: "\u{1F947}"
  }
};
function TierBadge({
  tierName,
  size = "md",
  showIcon = true
}) {
  const colors = TIER_COLORS[tierName] || {
    bg: "#6B7280",
    text: "#fff",
    icon: "\u2B50"
  };
  const sizes = {
    sm: {
      fontSize: "11px",
      padding: "2px 8px"
    },
    md: {
      fontSize: "13px",
      padding: "4px 12px"
    },
    lg: {
      fontSize: "15px",
      padding: "6px 16px"
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    backgroundColor: colors.bg,
    color: colors.text,
    borderRadius: "12px",
    fontWeight: 600,
    letterSpacing: "0.3px",
    ...sizes[size]
  }, children: [
    showIcon && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: colors.icon }, void 0, false, {
      fileName: "app/components/TierBadge.jsx",
      lineNumber: 78,
      columnNumber: 20
    }, this),
    tierName
  ] }, void 0, true, {
    fileName: "app/components/TierBadge.jsx",
    lineNumber: 67,
    columnNumber: 10
  }, this);
}
_c = TierBadge;
var _c;
$RefreshReg$(_c, "TierBadge");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  TierBadge
};
//# sourceMappingURL=/build/_shared/chunk-LFX7UVIL.js.map
