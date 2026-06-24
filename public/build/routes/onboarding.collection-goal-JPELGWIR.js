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
  require_elements_server
} from "/build/_shared/chunk-VLZG2WVK.js";
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

// app/routes/onboarding.collection-goal.jsx
var import_node = __toESM(require_node());
var import_react2 = __toESM(require_react());
var import_session = __toESM(require_session());
var import_auth = __toESM(require_auth());
var import_collection = __toESM(require_collection());

// app/lib/formats.js
var import_elements_server = __toESM(require_elements_server());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/lib/formats.js"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/lib/formats.js"
  );
  import.meta.hot.lastModified = "1779908910883.5193";
}
var FORMATS = {
  "10mm": {
    id: "10mm",
    name: "10mm Cube",
    icon: "\u2B1B",
    sortOrder: 1,
    description: "Small display cube"
  },
  "25.4mm": {
    id: "25.4mm",
    name: "1-inch Cube",
    icon: "\u{1F7EB}",
    sortOrder: 2,
    description: "Standard display cube"
  },
  "50mm": {
    id: "50mm",
    name: "50mm Cube",
    icon: "\u{1F7E7}",
    sortOrder: 3,
    description: "Large display cube"
  },
  "lucite": {
    id: "lucite",
    name: "Lucite Cube",
    icon: "\u{1F48E}",
    sortOrder: 4,
    description: "Element embedded in clear acrylic"
  },
  "ampoules": {
    id: "ampoules",
    name: "Ampoule",
    icon: "\u{1F9EA}",
    sortOrder: 5,
    description: "Sealed glass ampoule"
  }
};
var FORMAT_LIST = Object.values(FORMATS).sort(_c = (a, b) => a.sortOrder - b.sortOrder);
_c2 = FORMAT_LIST;
var FORMAT_IDS = FORMAT_LIST.map(_c3 = (f) => f.id);
_c4 = FORMAT_IDS;
var RADIOACTIVE_EXCLUDED = import_elements_server.ELEMENTS_118.filter((el) => el.z >= 84 && el.z <= 103 && el.z !== 92).map(_c5 = (el) => el.sym);
_c6 = RADIOACTIVE_EXCLUDED;
var GAS_ELEMENTS = import_elements_server.ELEMENTS_118.filter((el) => el.phase === "gas").map(_c7 = (el) => el.sym);
_c8 = GAS_ELEMENTS;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
var _c7;
var _c8;
$RefreshReg$(_c, "FORMAT_LIST$Object.values(FORMATS).sort");
$RefreshReg$(_c2, "FORMAT_LIST");
$RefreshReg$(_c3, "FORMAT_IDS$FORMAT_LIST.map");
$RefreshReg$(_c4, "FORMAT_IDS");
$RefreshReg$(_c5, "RADIOACTIVE_EXCLUDED$ELEMENTS_118\n  .filter(el => el.z >= 84 && el.z <= 103 && el.z !== 92)\n  .map");
$RefreshReg$(_c6, "RADIOACTIVE_EXCLUDED");
$RefreshReg$(_c7, "GAS_ELEMENTS$ELEMENTS_118.filter(el => el.phase === 'gas').map");
$RefreshReg$(_c8, "GAS_ELEMENTS");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/onboarding.collection-goal.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/onboarding.collection-goal.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/onboarding.collection-goal.jsx"
  );
  import.meta.hot.lastModified = "1779909085325.6577";
}
var GOAL_OPTIONS = [{
  id: "full_set",
  icon: "\u{1F31F}",
  title: "Complete Full Set",
  description: "Collect all 118 elements \u2014 the ultimate achievement!",
  goalType: "full_set",
  goalTitle: "Complete Full Periodic Table"
}, {
  id: "format_complete",
  icon: "\u{1F48E}",
  title: "Complete a Format",
  description: "Collect every available element in one format (e.g., all Lucite cubes).",
  goalType: "format_complete",
  needsFormat: true
}, {
  id: "count_50",
  icon: "\u2B50",
  title: "Reach 50 Elements",
  description: "A great milestone \u2014 half the periodic table!",
  goalType: "count_target",
  goalTitle: "Collect 50 Elements",
  targetCount: 50
}, {
  id: "count_25",
  icon: "\u{1F3AF}",
  title: "Reach 25 Elements",
  description: "A solid starter goal for new collectors.",
  goalType: "count_target",
  goalTitle: "Collect 25 Elements",
  targetCount: 25
}, {
  id: "just_exploring",
  icon: "\u{1F50D}",
  title: "Just Exploring",
  description: "No specific goal yet \u2014 I'll set one later.",
  goalType: null
}];
function CollectionGoalStep() {
  _s();
  const {
    userName,
    formats
  } = useLoaderData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [selected, setSelected] = (0, import_react2.useState)(null);
  const [selectedFormat, setSelectedFormat] = (0, import_react2.useState)(null);
  const option = GOAL_OPTIONS.find((o) => o.id === selected);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.container, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.card, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.stepBadge, children: "Step 2 of 5" }, void 0, false, {
      fileName: "app/routes/onboarding.collection-goal.jsx",
      lineNumber: 139,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { style: styles.title, children: [
      "What's your collecting goal, ",
      userName,
      "?"
    ] }, void 0, true, {
      fileName: "app/routes/onboarding.collection-goal.jsx",
      lineNumber: 140,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.subtitle, children: "Choose a goal to help us personalize your experience. You can always change this later." }, void 0, false, {
      fileName: "app/routes/onboarding.collection-goal.jsx",
      lineNumber: 141,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.optionsGrid, children: GOAL_OPTIONS.map((opt) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", style: {
      ...styles.optionCard,
      ...selected === opt.id ? styles.optionSelected : {}
    }, onClick: () => {
      setSelected(opt.id);
      setSelectedFormat(null);
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.optionIcon, children: opt.icon }, void 0, false, {
        fileName: "app/routes/onboarding.collection-goal.jsx",
        lineNumber: 153,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.optionTitle, children: opt.title }, void 0, false, {
        fileName: "app/routes/onboarding.collection-goal.jsx",
        lineNumber: 154,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.optionDesc, children: opt.description }, void 0, false, {
        fileName: "app/routes/onboarding.collection-goal.jsx",
        lineNumber: 155,
        columnNumber: 15
      }, this)
    ] }, opt.id, true, {
      fileName: "app/routes/onboarding.collection-goal.jsx",
      lineNumber: 146,
      columnNumber: 36
    }, this)) }, void 0, false, {
      fileName: "app/routes/onboarding.collection-goal.jsx",
      lineNumber: 145,
      columnNumber: 9
    }, this),
    option?.needsFormat && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.formatSection, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.formatLabel, children: "Which format?" }, void 0, false, {
        fileName: "app/routes/onboarding.collection-goal.jsx",
        lineNumber: 161,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.formatGrid, children: formats.map((f) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", style: {
        ...styles.formatBtn,
        ...selectedFormat === f.id ? styles.formatBtnActive : {}
      }, onClick: () => setSelectedFormat(f.id), children: [
        f.icon,
        " ",
        f.name
      ] }, f.id, true, {
        fileName: "app/routes/onboarding.collection-goal.jsx",
        lineNumber: 163,
        columnNumber: 33
      }, this)) }, void 0, false, {
        fileName: "app/routes/onboarding.collection-goal.jsx",
        lineNumber: 162,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/onboarding.collection-goal.jsx",
      lineNumber: 160,
      columnNumber: 33
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "goalId", value: selected || "" }, void 0, false, {
        fileName: "app/routes/onboarding.collection-goal.jsx",
        lineNumber: 173,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "selectedFormat", value: selectedFormat || "" }, void 0, false, {
        fileName: "app/routes/onboarding.collection-goal.jsx",
        lineNumber: 174,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: !selected || isSubmitting || option?.needsFormat && !selectedFormat, style: {
        ...styles.continueBtn,
        opacity: !selected || isSubmitting || option?.needsFormat && !selectedFormat ? 0.5 : 1
      }, children: isSubmitting ? "Saving..." : "Continue \u2192" }, void 0, false, {
        fileName: "app/routes/onboarding.collection-goal.jsx",
        lineNumber: 175,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/onboarding.collection-goal.jsx",
      lineNumber: 172,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/onboarding.collection-goal.jsx",
    lineNumber: 138,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/onboarding.collection-goal.jsx",
    lineNumber: 137,
    columnNumber: 10
  }, this);
}
_s(CollectionGoalStep, "ykz6RVjOSoctQ8KWN5oPDWBpTA0=", false, function() {
  return [useLoaderData, useNavigation];
});
_c9 = CollectionGoalStep;
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
    padding: "40px 48px",
    maxWidth: 640,
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
    fontSize: 26,
    fontWeight: 800,
    color: "#1a1a2e",
    margin: "0 0 8px"
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    margin: "0 0 24px"
  },
  optionsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
    marginBottom: 24
  },
  optionCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
    padding: "20px 16px",
    borderRadius: 12,
    border: "2px solid #e9ecef",
    background: "#fafafa",
    cursor: "pointer",
    textAlign: "center",
    transition: "all 0.15s"
  },
  optionSelected: {
    borderColor: "#1976D2",
    background: "#e3f2fd"
  },
  optionIcon: {
    fontSize: 32
  },
  optionTitle: {
    fontSize: 14,
    fontWeight: 700,
    color: "#333"
  },
  optionDesc: {
    fontSize: 11,
    color: "#888",
    lineHeight: 1.4
  },
  formatSection: {
    marginBottom: 24
  },
  formatLabel: {
    fontSize: 13,
    fontWeight: 600,
    color: "#333",
    marginBottom: 8
  },
  formatGrid: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap"
  },
  formatBtn: {
    padding: "8px 14px",
    borderRadius: 8,
    border: "1px solid #dee2e6",
    background: "#fff",
    fontSize: 12,
    fontWeight: 600,
    cursor: "pointer"
  },
  formatBtnActive: {
    background: "#1976D2",
    color: "#fff",
    borderColor: "#1976D2"
  },
  continueBtn: {
    width: "100%",
    padding: "14px 24px",
    borderRadius: 12,
    background: "#1976D2",
    color: "#fff",
    border: "none",
    fontSize: 16,
    fontWeight: 700,
    cursor: "pointer"
  }
};
var _c9;
$RefreshReg$(_c9, "CollectionGoalStep");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  CollectionGoalStep as default
};
//# sourceMappingURL=/build/routes/onboarding.collection-goal-JPELGWIR.js.map
