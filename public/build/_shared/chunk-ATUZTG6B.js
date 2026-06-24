import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-ORVFF776.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/CreditBalance.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/CreditBalance.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/CreditBalance.jsx"
  );
  import.meta.hot.lastModified = "1779902157136.3647";
}
function CreditBalance({
  amount = 0,
  size = "md",
  showLabel = true
}) {
  const sizes = {
    sm: {
      fontSize: "14px",
      iconSize: "16px"
    },
    md: {
      fontSize: "18px",
      iconSize: "20px"
    },
    lg: {
      fontSize: "24px",
      iconSize: "28px"
    }
  };
  const s = sizes[size];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
      fontSize: s.iconSize
    }, children: "\u{1F4B0}" }, void 0, false, {
      fileName: "app/components/CreditBalance.jsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      showLabel && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        fontSize: "11px",
        color: "#6B7280",
        textTransform: "uppercase",
        letterSpacing: "0.5px"
      }, children: "Store Credit" }, void 0, false, {
        fileName: "app/components/CreditBalance.jsx",
        lineNumber: 54,
        columnNumber: 23
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        fontSize: s.fontSize,
        fontWeight: 700,
        color: amount > 0 ? "#059669" : "#6B7280"
      }, children: [
        "$",
        amount.toFixed(2)
      ] }, void 0, true, {
        fileName: "app/components/CreditBalance.jsx",
        lineNumber: 60,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/CreditBalance.jsx",
      lineNumber: 53,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/CreditBalance.jsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
}
_c = CreditBalance;
var _c;
$RefreshReg$(_c, "CreditBalance");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  CreditBalance
};
//# sourceMappingURL=/build/_shared/chunk-ATUZTG6B.js.map
