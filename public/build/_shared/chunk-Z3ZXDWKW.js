import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-ORVFF776.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/OnboardingLayout.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/OnboardingLayout.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/OnboardingLayout.jsx"
  );
  import.meta.hot.lastModified = "1779859379577.0422";
}
var STEPS = [{
  num: 1,
  label: "Account"
}, {
  num: 2,
  label: "User Type"
}, {
  num: 3,
  label: "Formats"
}, {
  num: 4,
  label: "Collection"
}, {
  num: 5,
  label: "Complete"
}];
function OnboardingLayout({
  step = 1,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.wrapper, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.container, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.brand, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.logo, children: "\u269B\uFE0F" }, void 0, false, {
        fileName: "app/components/OnboardingLayout.jsx",
        lineNumber: 50,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.brandName, children: "Luciteria" }, void 0, false, {
          fileName: "app/components/OnboardingLayout.jsx",
          lineNumber: 52,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.brandSub, children: "Collector Cabinet" }, void 0, false, {
          fileName: "app/components/OnboardingLayout.jsx",
          lineNumber: 53,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/OnboardingLayout.jsx",
        lineNumber: 51,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/OnboardingLayout.jsx",
      lineNumber: 49,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.progress, children: STEPS.map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.stepItem, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        ...styles.stepCircle,
        ...s.num < step ? styles.stepDone : {},
        ...s.num === step ? styles.stepActive : {},
        ...s.num > step ? styles.stepPending : {}
      }, children: s.num < step ? "\u2713" : s.num }, void 0, false, {
        fileName: "app/components/OnboardingLayout.jsx",
        lineNumber: 60,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
        ...styles.stepLabel,
        color: s.num <= step ? "var(--luc-accent)" : "var(--luc-text-muted)",
        fontWeight: s.num === step ? 600 : 400
      }, children: s.label }, void 0, false, {
        fileName: "app/components/OnboardingLayout.jsx",
        lineNumber: 68,
        columnNumber: 15
      }, this),
      s.num < STEPS.length && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        ...styles.stepLine,
        background: s.num < step ? "var(--luc-accent)" : "var(--luc-border)"
      } }, void 0, false, {
        fileName: "app/components/OnboardingLayout.jsx",
        lineNumber: 75,
        columnNumber: 40
      }, this)
    ] }, s.num, true, {
      fileName: "app/components/OnboardingLayout.jsx",
      lineNumber: 59,
      columnNumber: 27
    }, this)) }, void 0, false, {
      fileName: "app/components/OnboardingLayout.jsx",
      lineNumber: 58,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.content, children }, void 0, false, {
      fileName: "app/components/OnboardingLayout.jsx",
      lineNumber: 83,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.footer, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.footerText, children: [
      "Step ",
      step,
      " of 5 \xB7 Your data is saved automatically"
    ] }, void 0, true, {
      fileName: "app/components/OnboardingLayout.jsx",
      lineNumber: 87,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/OnboardingLayout.jsx",
      lineNumber: 86,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/OnboardingLayout.jsx",
    lineNumber: 47,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/OnboardingLayout.jsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
}
_c = OnboardingLayout;
var styles = {
  wrapper: {
    minHeight: "100vh",
    background: "var(--luc-bg, #f5f7fa)",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "40px 20px"
  },
  container: {
    width: "100%",
    maxWidth: 680
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 32,
    justifyContent: "center"
  },
  logo: {
    fontSize: 32
  },
  brandName: {
    fontSize: 22,
    fontWeight: 700,
    color: "var(--luc-text, #1a1a2e)",
    display: "block"
  },
  brandSub: {
    fontSize: 12,
    color: "var(--luc-text-muted, #6b7280)",
    display: "block"
  },
  progress: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 0,
    marginBottom: 32
  },
  stepItem: {
    display: "flex",
    alignItems: "center",
    gap: 0
  },
  stepCircle: {
    width: 32,
    height: 32,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 13,
    fontWeight: 700,
    flexShrink: 0
  },
  stepDone: {
    background: "var(--luc-accent, #4A90E2)",
    color: "#fff",
    border: "2px solid var(--luc-accent, #4A90E2)"
  },
  stepActive: {
    background: "#fff",
    color: "var(--luc-accent, #4A90E2)",
    border: "2px solid var(--luc-accent, #4A90E2)",
    boxShadow: "0 0 0 3px rgba(74, 144, 226, 0.15)"
  },
  stepPending: {
    background: "#fff",
    color: "var(--luc-text-muted, #6b7280)",
    border: "2px solid var(--luc-border, #e2e5ea)"
  },
  stepLabel: {
    fontSize: 11,
    marginLeft: 4,
    marginRight: 4,
    whiteSpace: "nowrap"
  },
  stepLine: {
    width: 28,
    height: 2,
    borderRadius: 1,
    flexShrink: 0
  },
  content: {
    background: "#ffffff",
    borderRadius: 16,
    padding: "32px 36px",
    border: "1px solid var(--luc-border, #e2e5ea)",
    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
    minHeight: 300
  },
  footer: {
    textAlign: "center",
    marginTop: 20
  },
  footerText: {
    fontSize: 12,
    color: "var(--luc-text-muted, #6b7280)"
  }
};
var _c;
$RefreshReg$(_c, "OnboardingLayout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  OnboardingLayout
};
//# sourceMappingURL=/build/_shared/chunk-Z3ZXDWKW.js.map
