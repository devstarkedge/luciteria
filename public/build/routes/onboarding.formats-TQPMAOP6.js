import {
  Toast
} from "/build/_shared/chunk-G3NSOU4G.js";
import {
  OnboardingLayout
} from "/build/_shared/chunk-Z3ZXDWKW.js";
import {
  require_session
} from "/build/_shared/chunk-IYCODHKJ.js";
import {
  require_auth
} from "/build/_shared/chunk-U26VATEP.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
  useActionData,
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

// app/routes/onboarding.formats.jsx
var import_node = __toESM(require_node());
var import_react2 = __toESM(require_react());
var import_auth = __toESM(require_auth());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/onboarding.formats.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/onboarding.formats.jsx"
  );
  import.meta.hot.lastModified = "1779859509073.469";
}
var FORMATS = [{
  id: "10mm",
  label: "10mm Cubes",
  desc: "Pocket-sized precision cubes",
  icon: "\u{1F538}"
}, {
  id: "25.4mm",
  label: "25.4mm Cubes (1 inch)",
  desc: "Our most popular size",
  icon: "\u{1F536}"
}, {
  id: "50mm",
  label: "50mm Cubes",
  desc: "Statement pieces, museum-grade",
  icon: "\u{1F7E7}"
}, {
  id: "lucite",
  label: "Lucite Cubes",
  desc: "Elements embedded in crystal-clear acrylic",
  icon: "\u{1F48E}"
}, {
  id: "ampoules",
  label: "Ampoules",
  desc: "Sealed glass vials for reactive elements",
  icon: "\u{1F9EA}"
}];
function OnboardingFormats() {
  _s();
  const {
    user
  } = useLoaderData();
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const existingTracked = (() => {
    try {
      return JSON.parse(user.trackedFormats || "[]");
    } catch {
      return [];
    }
  })();
  const [subFormat, setSubFormat] = (0, import_react2.useState)(user.subscriptionFormat || "");
  const [trackedFormats, setTrackedFormats] = (0, import_react2.useState)(new Set(existingTracked));
  const toggleTracked = (id) => {
    setTrackedFormats((prev) => {
      const next = new Set(prev);
      if (next.has(id))
        next.delete(id);
      else
        next.add(id);
      return next;
    });
  };
  const isValid = user.isSubscriber ? !!subFormat : trackedFormats.size > 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OnboardingLayout, { step: 3, children: [
    actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toast, { message: actionData.error, type: "error" }, void 0, false, {
      fileName: "app/routes/onboarding.formats.jsx",
      lineNumber: 135,
      columnNumber: 29
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.header, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: styles.title, children: user.isSubscriber ? "Your Subscription Format" : "What Do You Collect?" }, void 0, false, {
        fileName: "app/routes/onboarding.formats.jsx",
        lineNumber: 138,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.subtitle, children: user.isSubscriber ? "Select which format your Cube of the Month subscription delivers, plus any other formats you track." : "Choose all the formats you collect or want to track." }, void 0, false, {
        fileName: "app/routes/onboarding.formats.jsx",
        lineNumber: 141,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/onboarding.formats.jsx",
      lineNumber: 137,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
      user.isSubscriber && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.section, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { style: styles.sectionLabel, children: "Subscription Format *" }, void 0, false, {
          fileName: "app/routes/onboarding.formats.jsx",
          lineNumber: 149,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "subscriptionFormat", value: subFormat, onChange: (e) => setSubFormat(e.target.value), style: styles.select, required: true, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Select your subscription format..." }, void 0, false, {
            fileName: "app/routes/onboarding.formats.jsx",
            lineNumber: 151,
            columnNumber: 15
          }, this),
          FORMATS.map((f) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: f.id, children: [
            f.icon,
            " ",
            f.label
          ] }, f.id, true, {
            fileName: "app/routes/onboarding.formats.jsx",
            lineNumber: 152,
            columnNumber: 33
          }, this))
        ] }, void 0, true, {
          fileName: "app/routes/onboarding.formats.jsx",
          lineNumber: 150,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/onboarding.formats.jsx",
        lineNumber: 148,
        columnNumber: 31
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.section, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { style: styles.sectionLabel, children: user.isSubscriber ? "Also tracking (optional)" : "Formats you collect *" }, void 0, false, {
          fileName: "app/routes/onboarding.formats.jsx",
          lineNumber: 158,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.formatGrid, children: FORMATS.map((f) => {
          const isChecked = trackedFormats.has(f.id);
          const isSubFormat = user.isSubscriber && subFormat === f.id;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { style: {
            ...styles.formatCard,
            ...isChecked || isSubFormat ? styles.formatCardSelected : {},
            ...isSubFormat ? {
              opacity: 0.6,
              pointerEvents: "none"
            } : {}
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", name: "trackedFormats", value: f.id, checked: isChecked || isSubFormat, onChange: () => !isSubFormat && toggleTracked(f.id), style: {
              display: "none"
            } }, void 0, false, {
              fileName: "app/routes/onboarding.formats.jsx",
              lineNumber: 173,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.formatIcon, children: f.icon }, void 0, false, {
              fileName: "app/routes/onboarding.formats.jsx",
              lineNumber: 176,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.formatLabel, children: f.label }, void 0, false, {
              fileName: "app/routes/onboarding.formats.jsx",
              lineNumber: 177,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.formatDesc, children: f.desc }, void 0, false, {
              fileName: "app/routes/onboarding.formats.jsx",
              lineNumber: 178,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
              ...styles.checkbox,
              ...isChecked || isSubFormat ? styles.checkboxChecked : {}
            }, children: isChecked || isSubFormat ? "\u2713" : "" }, void 0, false, {
              fileName: "app/routes/onboarding.formats.jsx",
              lineNumber: 179,
              columnNumber: 19
            }, this)
          ] }, f.id, true, {
            fileName: "app/routes/onboarding.formats.jsx",
            lineNumber: 165,
            columnNumber: 20
          }, this);
        }) }, void 0, false, {
          fileName: "app/routes/onboarding.formats.jsx",
          lineNumber: 161,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/onboarding.formats.jsx",
        lineNumber: 157,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: !isValid || isSubmitting, style: {
        ...styles.submitBtn,
        opacity: !isValid || isSubmitting ? 0.5 : 1
      }, children: isSubmitting ? "Saving..." : "Continue \u2192" }, void 0, false, {
        fileName: "app/routes/onboarding.formats.jsx",
        lineNumber: 190,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/onboarding.formats.jsx",
      lineNumber: 146,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/onboarding.formats.jsx",
    lineNumber: 134,
    columnNumber: 10
  }, this);
}
_s(OnboardingFormats, "rD5jSp07dP9Ho8JetVae6neyDfo=", false, function() {
  return [useLoaderData, useActionData, useNavigation];
});
_c = OnboardingFormats;
var styles = {
  header: {
    textAlign: "center",
    marginBottom: 28
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    color: "var(--luc-text, #1a1a2e)",
    margin: 0
  },
  subtitle: {
    fontSize: 14,
    color: "var(--luc-text-muted, #6b7280)",
    marginTop: 8,
    lineHeight: 1.5
  },
  section: {
    marginBottom: 24
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: 600,
    color: "var(--luc-text, #1a1a2e)",
    marginBottom: 10,
    display: "block"
  },
  select: {
    width: "100%",
    padding: "10px 14px",
    borderRadius: 8,
    border: "1px solid var(--luc-border, #e2e5ea)",
    fontSize: 14,
    color: "var(--luc-text, #1a1a2e)",
    background: "#fff",
    outline: "none"
  },
  formatGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    gap: 10
  },
  formatCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
    padding: "16px 12px",
    borderRadius: 12,
    border: "2px solid var(--luc-border, #e2e5ea)",
    background: "#fff",
    cursor: "pointer",
    textAlign: "center",
    transition: "all 0.15s",
    position: "relative"
  },
  formatCardSelected: {
    borderColor: "var(--luc-accent, #4A90E2)",
    background: "#f0f7ff",
    boxShadow: "0 0 0 3px rgba(74, 144, 226, 0.1)"
  },
  formatIcon: {
    fontSize: 28
  },
  formatLabel: {
    fontSize: 13,
    fontWeight: 600,
    color: "var(--luc-text, #1a1a2e)"
  },
  formatDesc: {
    fontSize: 11,
    color: "var(--luc-text-muted, #6b7280)",
    lineHeight: 1.3
  },
  checkbox: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 20,
    height: 20,
    borderRadius: 4,
    border: "2px solid #ccc",
    fontSize: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: 700
  },
  checkboxChecked: {
    background: "var(--luc-accent, #4A90E2)",
    borderColor: "var(--luc-accent, #4A90E2)"
  },
  submitBtn: {
    width: "100%",
    padding: "14px 24px",
    borderRadius: 10,
    border: "none",
    background: "var(--luc-accent, #4A90E2)",
    color: "#fff",
    fontSize: 15,
    fontWeight: 600,
    cursor: "pointer",
    transition: "opacity 0.15s"
  }
};
var _c;
$RefreshReg$(_c, "OnboardingFormats");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  OnboardingFormats as default
};
//# sourceMappingURL=/build/routes/onboarding.formats-TQPMAOP6.js.map
