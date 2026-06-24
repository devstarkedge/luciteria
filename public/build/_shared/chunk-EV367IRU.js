import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-ORVFF776.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/StatCard.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/StatCard.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/StatCard.jsx"
  );
  import.meta.hot.lastModified = "1779491284951.3696";
}
function StatCard({
  icon,
  label,
  value,
  subtext,
  accent = "var(--luc-accent)"
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    ...styles.card,
    borderTop: `3px solid ${accent}`
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.header, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.icon, children: icon }, void 0, false, {
        fileName: "app/components/StatCard.jsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.label, children: label }, void 0, false, {
        fileName: "app/components/StatCard.jsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/StatCard.jsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      ...styles.value,
      color: accent
    }, children: value }, void 0, false, {
      fileName: "app/components/StatCard.jsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    subtext && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.subtext, children: subtext }, void 0, false, {
      fileName: "app/components/StatCard.jsx",
      lineNumber: 44,
      columnNumber: 19
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/StatCard.jsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_c = StatCard;
var styles = {
  card: {
    background: "#ffffff",
    border: "1px solid var(--luc-border)",
    borderRadius: 12,
    padding: "20px",
    minWidth: 180,
    flex: "1 1 180px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginBottom: 12
  },
  icon: {
    fontSize: 18
  },
  label: {
    fontSize: 12,
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    color: "var(--luc-text-muted)"
  },
  value: {
    fontSize: 32,
    fontWeight: 700,
    lineHeight: 1.1
  },
  subtext: {
    fontSize: 13,
    color: "var(--luc-text-muted)",
    marginTop: 6
  }
};
var _c;
$RefreshReg$(_c, "StatCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  StatCard
};
//# sourceMappingURL=/build/_shared/chunk-EV367IRU.js.map
