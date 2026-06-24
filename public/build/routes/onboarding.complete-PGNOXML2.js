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
  Link,
  useLoaderData
} from "/build/_shared/chunk-PYMWJPZY.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  createHotContext
} from "/build/_shared/chunk-ORVFF776.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/onboarding.complete.jsx
var import_node = __toESM(require_node());
var import_auth = __toESM(require_auth());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/onboarding.complete.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/onboarding.complete.jsx"
  );
  import.meta.hot.lastModified = "1779862400072.961";
}
function OnboardingComplete() {
  _s();
  const {
    user
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OnboardingLayout, { step: 5, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.wrapper, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.celebration, children: "\u269B\uFE0F" }, void 0, false, {
      fileName: "app/routes/onboarding.complete.jsx",
      lineNumber: 66,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: styles.title, children: [
      "You're All Set, ",
      user.firstName,
      "!"
    ] }, void 0, true, {
      fileName: "app/routes/onboarding.complete.jsx",
      lineNumber: 67,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.subtitle, children: user.isSubscriber ? "Your Collector Cabinet is ready. We'll track your subscription shipments and make sure you never get a duplicate." : "Your Collector Cabinet is ready. Start tracking, wishlisting, and completing your element collection." }, void 0, false, {
      fileName: "app/routes/onboarding.complete.jsx",
      lineNumber: 68,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.summary, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.summaryItem, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.summaryIcon, children: "\u{1F9CA}" }, void 0, false, {
          fileName: "app/routes/onboarding.complete.jsx",
          lineNumber: 75,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.summaryText, children: user.ownedCount > 0 ? `${user.ownedCount} element${user.ownedCount !== 1 ? "s" : ""} in your collection` : "Collection is empty \u2014 let's fill it up!" }, void 0, false, {
          fileName: "app/routes/onboarding.complete.jsx",
          lineNumber: 76,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/onboarding.complete.jsx",
        lineNumber: 74,
        columnNumber: 11
      }, this),
      user.isSubscriber && user.subscriptionFormat && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.summaryItem, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.summaryIcon, children: "\u{1F4EC}" }, void 0, false, {
          fileName: "app/routes/onboarding.complete.jsx",
          lineNumber: 81,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.summaryText, children: [
          "Subscriber \u2014 ",
          FORMAT_LABELS[user.subscriptionFormat] || user.subscriptionFormat,
          " format"
        ] }, void 0, true, {
          fileName: "app/routes/onboarding.complete.jsx",
          lineNumber: 82,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/onboarding.complete.jsx",
        lineNumber: 80,
        columnNumber: 60
      }, this),
      !user.isSubscriber && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.summaryItem, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.summaryIcon, children: "\u{1F5C4}\uFE0F" }, void 0, false, {
          fileName: "app/routes/onboarding.complete.jsx",
          lineNumber: 87,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.summaryText, children: "Independent collector \u2014 full tracking enabled" }, void 0, false, {
          fileName: "app/routes/onboarding.complete.jsx",
          lineNumber: 88,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/onboarding.complete.jsx",
        lineNumber: 86,
        columnNumber: 34
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/onboarding.complete.jsx",
      lineNumber: 73,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/app/cabinet", style: styles.ctaBtn, children: "Open My Collector Cabinet \u2192" }, void 0, false, {
      fileName: "app/routes/onboarding.complete.jsx",
      lineNumber: 93,
      columnNumber: 9
    }, this),
    user.isSubscriber && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.note, children: [
      "\u{1F4A1} ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Note:" }, void 0, false, {
        fileName: "app/routes/onboarding.complete.jsx",
        lineNumber: 98,
        columnNumber: 16
      }, this),
      " We select your next element based on availability and what you already own. No action needed on your part!"
    ] }, void 0, true, {
      fileName: "app/routes/onboarding.complete.jsx",
      lineNumber: 97,
      columnNumber: 31
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/onboarding.complete.jsx",
    lineNumber: 64,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/onboarding.complete.jsx",
    lineNumber: 63,
    columnNumber: 10
  }, this);
}
_s(OnboardingComplete, "FpjQZylbefWQChk+MjGNfSb2jDo=", false, function() {
  return [useLoaderData];
});
_c = OnboardingComplete;
var FORMAT_LABELS = {
  "10mm": "10mm Cube",
  "25.4mm": "25.4mm Cube",
  "50mm": "50mm Cube",
  "lucite": "Lucite Cube",
  "ampoules": "Ampoule"
};
var styles = {
  wrapper: {
    textAlign: "center"
  },
  celebration: {
    fontSize: 64,
    marginBottom: 12,
    animation: "pulse 2s infinite"
  },
  title: {
    fontSize: 26,
    fontWeight: 700,
    color: "var(--luc-text, #1a1a2e)",
    margin: "0 0 10px"
  },
  subtitle: {
    fontSize: 14,
    color: "var(--luc-text-muted, #6b7280)",
    lineHeight: 1.5,
    marginBottom: 28,
    maxWidth: 420,
    marginLeft: "auto",
    marginRight: "auto"
  },
  summary: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    padding: "16px 20px",
    background: "var(--luc-bg, #f5f7fa)",
    borderRadius: 12,
    marginBottom: 28
  },
  summaryItem: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    fontSize: 14,
    color: "var(--luc-text, #1a1a2e)"
  },
  summaryIcon: {
    fontSize: 20,
    flexShrink: 0
  },
  summaryText: {
    fontWeight: 500
  },
  ctaBtn: {
    display: "inline-block",
    padding: "14px 32px",
    borderRadius: 10,
    background: "var(--luc-accent, #4A90E2)",
    color: "#fff",
    fontSize: 16,
    fontWeight: 600,
    textDecoration: "none",
    marginBottom: 20,
    transition: "background 0.15s",
    boxShadow: "0 2px 8px rgba(74, 144, 226, 0.3)"
  },
  note: {
    fontSize: 12,
    color: "var(--luc-text-muted, #6b7280)",
    lineHeight: 1.5,
    background: "#fffde7",
    padding: "10px 16px",
    borderRadius: 8,
    border: "1px solid #fff3e0",
    maxWidth: 400,
    margin: "0 auto",
    textAlign: "left"
  }
};
var _c;
$RefreshReg$(_c, "OnboardingComplete");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  OnboardingComplete as default
};
//# sourceMappingURL=/build/routes/onboarding.complete-PGNOXML2.js.map
