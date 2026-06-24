import {
  require_milestones
} from "/build/_shared/chunk-3B53PNDY.js";
import {
  PeriodicTable
} from "/build/_shared/chunk-UYCKJRA2.js";
import {
  require_elements
} from "/build/_shared/chunk-L2WTGI6U.js";
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
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
  useLoaderData,
  useNavigation
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

// app/routes/onboarding.log-owned.jsx
var import_node = __toESM(require_node());
var import_react2 = __toESM(require_react());
var import_session = __toESM(require_session());
var import_auth = __toESM(require_auth());
var import_collection = __toESM(require_collection());
var import_milestones = __toESM(require_milestones());
var import_elements = __toESM(require_elements());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/onboarding.log-owned.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/onboarding.log-owned.jsx"
  );
  import.meta.hot.lastModified = "1779909106685.871";
}
function LogOwnedStep() {
  _s();
  const {
    userName,
    elements
  } = useLoaderData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [ownedSet, setOwnedSet] = (0, import_react2.useState)({});
  const handleStateChange = (0, import_react2.useCallback)((symbol, newState) => {
    setOwnedSet((prev) => {
      const next = {
        ...prev
      };
      if (newState === "OWNED") {
        next[symbol] = "OWNED";
      } else {
        delete next[symbol];
      }
      return next;
    });
  }, []);
  const ownedCount = Object.keys(ownedSet).length;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.container, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.card, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.stepBadge, children: "Step 3 of 5" }, void 0, false, {
      fileName: "app/routes/onboarding.log-owned.jsx",
      lineNumber: 105,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { style: styles.title, children: [
      "What do you already own, ",
      userName,
      "?"
    ] }, void 0, true, {
      fileName: "app/routes/onboarding.log-owned.jsx",
      lineNumber: 106,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.subtitle, children: "Click elements to mark them as owned. This helps us track your progress and recommend what to collect next. You can always update this later." }, void 0, false, {
      fileName: "app/routes/onboarding.log-owned.jsx",
      lineNumber: 107,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.counter, children: ownedCount > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.counterText, children: [
      "\u2713 ",
      ownedCount,
      " element",
      ownedCount !== 1 ? "s" : "",
      " selected"
    ] }, void 0, true, {
      fileName: "app/routes/onboarding.log-owned.jsx",
      lineNumber: 113,
      columnNumber: 29
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.counterEmpty, children: "No elements selected yet \u2014 that's okay!" }, void 0, false, {
      fileName: "app/routes/onboarding.log-owned.jsx",
      lineNumber: 115,
      columnNumber: 23
    }, this) }, void 0, false, {
      fileName: "app/routes/onboarding.log-owned.jsx",
      lineNumber: 112,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.tableWrapper, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PeriodicTable, { elements, collectionStates: ownedSet, onStateChange: handleStateChange, showFilters: false, compact: true }, void 0, false, {
      fileName: "app/routes/onboarding.log-owned.jsx",
      lineNumber: 119,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/onboarding.log-owned.jsx",
      lineNumber: 118,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "ownedSymbols", value: Object.keys(ownedSet).join(",") }, void 0, false, {
        fileName: "app/routes/onboarding.log-owned.jsx",
        lineNumber: 123,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.actions, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isSubmitting, style: styles.continueBtn, children: isSubmitting ? "Saving..." : ownedCount > 0 ? `Save ${ownedCount} Elements & Continue \u2192` : "Skip for Now \u2192" }, void 0, false, {
        fileName: "app/routes/onboarding.log-owned.jsx",
        lineNumber: 125,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/onboarding.log-owned.jsx",
        lineNumber: 124,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/onboarding.log-owned.jsx",
      lineNumber: 122,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/onboarding.log-owned.jsx",
    lineNumber: 104,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/onboarding.log-owned.jsx",
    lineNumber: 103,
    columnNumber: 10
  }, this);
}
_s(LogOwnedStep, "uV1/RUSxJzsuR23+3psz+9ro8/I=", false, function() {
  return [useLoaderData, useNavigation];
});
_c = LogOwnedStep;
var styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
    padding: 24
  },
  card: {
    background: "#fff",
    borderRadius: 20,
    padding: "32px 40px",
    maxWidth: 900,
    width: "100%",
    boxShadow: "0 8px 32px rgba(0,0,0,0.08)"
  },
  stepBadge: {
    display: "inline-block",
    padding: "4px 12px",
    borderRadius: 20,
    background: "#e3f2fd",
    color: "#1976D2",
    fontSize: 12,
    fontWeight: 600,
    marginBottom: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 800,
    color: "#1a1a2e",
    margin: "0 0 8px"
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    margin: "0 0 20px",
    lineHeight: 1.5
  },
  counter: {
    padding: "10px 16px",
    borderRadius: 10,
    background: "#f8f9fa",
    marginBottom: 16,
    textAlign: "center"
  },
  counterText: {
    fontSize: 14,
    fontWeight: 700,
    color: "#388E3C"
  },
  counterEmpty: {
    fontSize: 13,
    color: "#999",
    fontStyle: "italic"
  },
  tableWrapper: {
    marginBottom: 20,
    overflowX: "auto"
  },
  actions: {
    display: "flex",
    justifyContent: "center"
  },
  continueBtn: {
    padding: "14px 32px",
    borderRadius: 12,
    background: "#1976D2",
    color: "#fff",
    border: "none",
    fontSize: 16,
    fontWeight: 700,
    cursor: "pointer",
    minWidth: 280
  }
};
var _c;
$RefreshReg$(_c, "LogOwnedStep");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  LogOwnedStep as default
};
//# sourceMappingURL=/build/routes/onboarding.log-owned-P3MYOAUR.js.map
