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

// app/routes/onboarding.user-type.jsx
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
    window.$RefreshRuntime$.register(type, '"app/routes/onboarding.user-type.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/onboarding.user-type.jsx"
  );
  import.meta.hot.lastModified = "1779862391697.8655";
}
function OnboardingUserType() {
  _s();
  const {
    user
  } = useLoaderData();
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [selected, setSelected] = (0, import_react2.useState)(user.userType !== "collector" ? user.userType : null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OnboardingLayout, { step: 2, children: [
    actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toast, { message: actionData.error, type: "error" }, void 0, false, {
      fileName: "app/routes/onboarding.user-type.jsx",
      lineNumber: 75,
      columnNumber: 29
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.header, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: styles.title, children: "How do you collect?" }, void 0, false, {
        fileName: "app/routes/onboarding.user-type.jsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.subtitle, children: [
        "This helps us personalize your Collector Cabinet experience, ",
        user.firstName,
        "."
      ] }, void 0, true, {
        fileName: "app/routes/onboarding.user-type.jsx",
        lineNumber: 79,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/onboarding.user-type.jsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "userType", value: selected || "" }, void 0, false, {
        fileName: "app/routes/onboarding.user-type.jsx",
        lineNumber: 85,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.options, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setSelected("subscriber"), style: {
          ...styles.option,
          ...selected === "subscriber" ? styles.optionSelected : {}
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.optionIcon, children: "\u{1F4EC}" }, void 0, false, {
            fileName: "app/routes/onboarding.user-type.jsx",
            lineNumber: 93,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.optionContent, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.optionTitle, children: "I'm a Cube of the Month subscriber" }, void 0, false, {
              fileName: "app/routes/onboarding.user-type.jsx",
              lineNumber: 95,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.optionDesc, children: "I receive monthly element shipments. Track my subscription, see what's coming next, and never get duplicates." }, void 0, false, {
              fileName: "app/routes/onboarding.user-type.jsx",
              lineNumber: 96,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/onboarding.user-type.jsx",
            lineNumber: 94,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            ...styles.radio,
            ...selected === "subscriber" ? styles.radioSelected : {}
          }, children: selected === "subscriber" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.radioDot }, void 0, false, {
            fileName: "app/routes/onboarding.user-type.jsx",
            lineNumber: 104,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/onboarding.user-type.jsx",
            lineNumber: 100,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/onboarding.user-type.jsx",
          lineNumber: 89,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setSelected("collector"), style: {
          ...styles.option,
          ...selected === "collector" ? styles.optionSelected : {}
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.optionIcon, children: "\u{1F5C4}\uFE0F" }, void 0, false, {
            fileName: "app/routes/onboarding.user-type.jsx",
            lineNumber: 113,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.optionContent, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.optionTitle, children: "I just want to track my collection" }, void 0, false, {
              fileName: "app/routes/onboarding.user-type.jsx",
              lineNumber: 115,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.optionDesc, children: "I buy elements on my own. Help me track what I have, build a wishlist, and share it with friends." }, void 0, false, {
              fileName: "app/routes/onboarding.user-type.jsx",
              lineNumber: 116,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/onboarding.user-type.jsx",
            lineNumber: 114,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            ...styles.radio,
            ...selected === "collector" ? styles.radioSelected : {}
          }, children: selected === "collector" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.radioDot }, void 0, false, {
            fileName: "app/routes/onboarding.user-type.jsx",
            lineNumber: 124,
            columnNumber: 44
          }, this) }, void 0, false, {
            fileName: "app/routes/onboarding.user-type.jsx",
            lineNumber: 120,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/onboarding.user-type.jsx",
          lineNumber: 109,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/onboarding.user-type.jsx",
        lineNumber: 87,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: !selected || isSubmitting, style: {
        ...styles.submitBtn,
        opacity: !selected || isSubmitting ? 0.5 : 1
      }, children: isSubmitting ? "Saving..." : "Continue \u2192" }, void 0, false, {
        fileName: "app/routes/onboarding.user-type.jsx",
        lineNumber: 129,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/onboarding.user-type.jsx",
      lineNumber: 84,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/onboarding.user-type.jsx",
    lineNumber: 74,
    columnNumber: 10
  }, this);
}
_s(OnboardingUserType, "5RO32+dkF0xqMEjfPfi8mDrBjYg=", false, function() {
  return [useLoaderData, useActionData, useNavigation];
});
_c = OnboardingUserType;
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
  options: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
    marginBottom: 24
  },
  option: {
    display: "flex",
    alignItems: "flex-start",
    gap: 14,
    padding: "18px 20px",
    borderRadius: 12,
    border: "2px solid var(--luc-border, #e2e5ea)",
    background: "#fff",
    cursor: "pointer",
    textAlign: "left",
    transition: "all 0.15s ease",
    width: "100%",
    fontFamily: "inherit",
    fontSize: "inherit"
  },
  optionSelected: {
    borderColor: "var(--luc-accent, #4A90E2)",
    background: "#f0f7ff",
    boxShadow: "0 0 0 3px rgba(74, 144, 226, 0.12)"
  },
  optionIcon: {
    fontSize: 32,
    flexShrink: 0,
    marginTop: 2
  },
  optionContent: {
    flex: 1
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: 600,
    color: "var(--luc-text, #1a1a2e)",
    display: "block",
    marginBottom: 4
  },
  optionDesc: {
    fontSize: 13,
    color: "var(--luc-text-muted, #6b7280)",
    lineHeight: 1.4,
    display: "block"
  },
  radio: {
    width: 22,
    height: 22,
    borderRadius: "50%",
    border: "2px solid #ccc",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    marginTop: 4
  },
  radioSelected: {
    borderColor: "var(--luc-accent, #4A90E2)"
  },
  radioDot: {
    width: 12,
    height: 12,
    borderRadius: "50%",
    background: "var(--luc-accent, #4A90E2)"
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
$RefreshReg$(_c, "OnboardingUserType");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  OnboardingUserType as default
};
//# sourceMappingURL=/build/routes/onboarding.user-type-DEKJ7X4T.js.map
