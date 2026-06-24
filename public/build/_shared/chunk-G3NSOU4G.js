import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  createHotContext
} from "/build/_shared/chunk-ORVFF776.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/Toast.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Toast.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Toast.jsx"
  );
  import.meta.hot.lastModified = "1779859389714.8079";
}
var TYPE_CONFIG = {
  success: {
    bg: "#e8f5e9",
    border: "#4CAF50",
    icon: "\u2713",
    color: "#2e7d32"
  },
  error: {
    bg: "#fce4ec",
    border: "#e53935",
    icon: "\u2715",
    color: "#b71c1c"
  },
  info: {
    bg: "#e3f2fd",
    border: "#4a90e2",
    icon: "\u2139",
    color: "#1565c0"
  },
  warning: {
    bg: "#fff3e0",
    border: "#f57c00",
    icon: "\u26A0",
    color: "#e65100"
  }
};
function Toast({
  message,
  type = "info",
  duration = 4e3,
  onDismiss
}) {
  _s();
  const [visible, setVisible] = (0, import_react.useState)(true);
  (0, import_react.useEffect)(() => {
    if (!message)
      return;
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
      onDismiss?.();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, duration]);
  if (!message || !visible)
    return null;
  const cfg = TYPE_CONFIG[type] || TYPE_CONFIG.info;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    position: "fixed",
    top: 20,
    right: 20,
    zIndex: 1e4,
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "12px 20px",
    borderRadius: 10,
    background: cfg.bg,
    border: `1px solid ${cfg.border}`,
    color: cfg.color,
    fontSize: 14,
    fontWeight: 500,
    boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
    animation: "slideInRight 0.3s ease",
    maxWidth: 400
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
      fontSize: 18,
      flexShrink: 0
    }, children: cfg.icon }, void 0, false, {
      fileName: "app/components/Toast.jsx",
      lineNumber: 93,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
      flex: 1
    }, children: message }, void 0, false, {
      fileName: "app/components/Toast.jsx",
      lineNumber: 97,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => {
      setVisible(false);
      onDismiss?.();
    }, style: {
      background: "none",
      border: "none",
      color: cfg.color,
      cursor: "pointer",
      fontSize: 16,
      padding: 0,
      opacity: 0.6
    }, children: "\u2715" }, void 0, false, {
      fileName: "app/components/Toast.jsx",
      lineNumber: 100,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Toast.jsx",
    lineNumber: 74,
    columnNumber: 10
  }, this);
}
_s(Toast, "+l2LUTlfMHnsWfc+O34BMiR0NHk=");
_c = Toast;
var _c;
$RefreshReg$(_c, "Toast");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Toast
};
//# sourceMappingURL=/build/_shared/chunk-G3NSOU4G.js.map
