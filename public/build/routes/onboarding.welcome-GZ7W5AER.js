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

// app/routes/onboarding.welcome.jsx
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
    window.$RefreshRuntime$.register(type, '"app/routes/onboarding.welcome.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/onboarding.welcome.jsx"
  );
  import.meta.hot.lastModified = "1779862387780.4495";
}
function OnboardingWelcome() {
  _s();
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [mode, setMode] = (0, import_react2.useState)(actionData?.intent === "login" ? "login" : "signup");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OnboardingLayout, { step: 1, children: [
    actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toast, { message: actionData.error, type: "error" }, void 0, false, {
      fileName: "app/routes/onboarding.welcome.jsx",
      lineNumber: 121,
      columnNumber: 29
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.header, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: styles.title, children: mode === "signup" ? "Create Your Collection" : "Welcome Back" }, void 0, false, {
        fileName: "app/routes/onboarding.welcome.jsx",
        lineNumber: 124,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.subtitle, children: mode === "signup" ? "Join the Luciteria community and start tracking your element collection." : "Log in to continue where you left off." }, void 0, false, {
        fileName: "app/routes/onboarding.welcome.jsx",
        lineNumber: 127,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/onboarding.welcome.jsx",
      lineNumber: 123,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", style: styles.form, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: mode }, void 0, false, {
        fileName: "app/routes/onboarding.welcome.jsx",
        lineNumber: 133,
        columnNumber: 9
      }, this),
      mode === "signup" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.nameRow, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.field, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { style: styles.label, children: "First Name" }, void 0, false, {
            fileName: "app/routes/onboarding.welcome.jsx",
            lineNumber: 138,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "firstName", type: "text", placeholder: "Chris", required: true, style: styles.input, autoComplete: "given-name" }, void 0, false, {
            fileName: "app/routes/onboarding.welcome.jsx",
            lineNumber: 139,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/onboarding.welcome.jsx",
          lineNumber: 137,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.field, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { style: styles.label, children: "Last Name" }, void 0, false, {
            fileName: "app/routes/onboarding.welcome.jsx",
            lineNumber: 142,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "lastName", type: "text", placeholder: "Smith", required: true, style: styles.input, autoComplete: "family-name" }, void 0, false, {
            fileName: "app/routes/onboarding.welcome.jsx",
            lineNumber: 143,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/onboarding.welcome.jsx",
          lineNumber: 141,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/onboarding.welcome.jsx",
        lineNumber: 136,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/onboarding.welcome.jsx",
        lineNumber: 135,
        columnNumber: 31
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.field, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { style: styles.label, children: "Email" }, void 0, false, {
          fileName: "app/routes/onboarding.welcome.jsx",
          lineNumber: 149,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "email", type: "email", placeholder: "collector@example.com", required: true, style: styles.input, autoComplete: "email" }, void 0, false, {
          fileName: "app/routes/onboarding.welcome.jsx",
          lineNumber: 150,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/onboarding.welcome.jsx",
        lineNumber: 148,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.field, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { style: styles.label, children: "Password" }, void 0, false, {
          fileName: "app/routes/onboarding.welcome.jsx",
          lineNumber: 154,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "password", type: "password", placeholder: mode === "signup" ? "Min 6 characters" : "Your password", required: true, minLength: 6, style: styles.input, autoComplete: mode === "signup" ? "new-password" : "current-password" }, void 0, false, {
          fileName: "app/routes/onboarding.welcome.jsx",
          lineNumber: 155,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/onboarding.welcome.jsx",
        lineNumber: 153,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isSubmitting, style: {
        ...styles.submitBtn,
        opacity: isSubmitting ? 0.7 : 1
      }, children: isSubmitting ? "Please wait..." : mode === "signup" ? "Create Account & Continue \u2192" : "Log In \u2192" }, void 0, false, {
        fileName: "app/routes/onboarding.welcome.jsx",
        lineNumber: 158,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/onboarding.welcome.jsx",
      lineNumber: 132,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.toggle, children: mode === "signup" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
      "Already have an account?",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setMode("login"), style: styles.toggleBtn, children: "Log In" }, void 0, false, {
        fileName: "app/routes/onboarding.welcome.jsx",
        lineNumber: 169,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/onboarding.welcome.jsx",
      lineNumber: 167,
      columnNumber: 30
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
      "New here?",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setMode("signup"), style: styles.toggleBtn, children: "Create Account" }, void 0, false, {
        fileName: "app/routes/onboarding.welcome.jsx",
        lineNumber: 174,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/onboarding.welcome.jsx",
      lineNumber: 172,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/onboarding.welcome.jsx",
      lineNumber: 166,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/onboarding.welcome.jsx",
    lineNumber: 120,
    columnNumber: 10
  }, this);
}
_s(OnboardingWelcome, "YLxtPeI9K0KBmChSeGYdDKQ2q5I=", false, function() {
  return [useActionData, useNavigation];
});
_c = OnboardingWelcome;
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
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 18
  },
  nameRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 14
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: 6
  },
  label: {
    fontSize: 13,
    fontWeight: 600,
    color: "var(--luc-text, #1a1a2e)"
  },
  input: {
    padding: "10px 14px",
    borderRadius: 8,
    border: "1px solid var(--luc-border, #e2e5ea)",
    fontSize: 14,
    color: "var(--luc-text, #1a1a2e)",
    outline: "none",
    transition: "border-color 0.15s",
    background: "#fff"
  },
  submitBtn: {
    padding: "12px 24px",
    borderRadius: 10,
    border: "none",
    background: "var(--luc-accent, #4A90E2)",
    color: "#fff",
    fontSize: 15,
    fontWeight: 600,
    cursor: "pointer",
    marginTop: 4,
    transition: "background 0.15s"
  },
  toggle: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 13,
    color: "var(--luc-text-muted, #6b7280)"
  },
  toggleBtn: {
    background: "none",
    border: "none",
    color: "var(--luc-accent, #4A90E2)",
    fontWeight: 600,
    cursor: "pointer",
    fontSize: 13,
    textDecoration: "underline",
    padding: 0
  }
};
var _c;
$RefreshReg$(_c, "OnboardingWelcome");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  OnboardingWelcome as default
};
//# sourceMappingURL=/build/routes/onboarding.welcome-GZ7W5AER.js.map
