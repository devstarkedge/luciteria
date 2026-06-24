import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-ORVFF776.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/ProgressBar.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ProgressBar.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ProgressBar.jsx"
  );
  import.meta.hot.lastModified = "1779491292782.3838";
}
function ProgressBar({
  value,
  max,
  label,
  showPct = true,
  accent = "var(--luc-accent)"
}) {
  const pct = max > 0 ? Math.round(value / max * 100) : 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.wrapper, children: [
    label && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.label, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: label }, void 0, false, {
        fileName: "app/components/ProgressBar.jsx",
        lineNumber: 35,
        columnNumber: 11
      }, this),
      showPct && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
        color: accent,
        fontWeight: 600
      }, children: [
        pct,
        "%"
      ] }, void 0, true, {
        fileName: "app/components/ProgressBar.jsx",
        lineNumber: 36,
        columnNumber: 23
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ProgressBar.jsx",
      lineNumber: 34,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.track, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      ...styles.fill,
      width: `${pct}%`,
      background: accent
    } }, void 0, false, {
      fileName: "app/components/ProgressBar.jsx",
      lineNumber: 42,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/ProgressBar.jsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.counts, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
        color: accent,
        fontWeight: 700
      }, children: value }, void 0, false, {
        fileName: "app/components/ProgressBar.jsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.divider, children: "/" }, void 0, false, {
        fileName: "app/components/ProgressBar.jsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: max }, void 0, false, {
        fileName: "app/components/ProgressBar.jsx",
        lineNumber: 54,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ProgressBar.jsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ProgressBar.jsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_c = ProgressBar;
var styles = {
  wrapper: {
    width: "100%"
  },
  label: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 13,
    fontWeight: 600,
    color: "var(--luc-text-muted)",
    marginBottom: 6
  },
  track: {
    height: 8,
    background: "#e5e7eb",
    borderRadius: 4,
    overflow: "hidden"
  },
  fill: {
    height: "100%",
    borderRadius: 4,
    transition: "width 0.5s ease"
  },
  counts: {
    display: "flex",
    alignItems: "center",
    gap: 4,
    fontSize: 12,
    color: "var(--luc-text-muted)",
    marginTop: 4
  },
  divider: {
    opacity: 0.5
  }
};
var _c;
$RefreshReg$(_c, "ProgressBar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ProgressBar
};
//# sourceMappingURL=/build/_shared/chunk-AGL6APWJ.js.map
