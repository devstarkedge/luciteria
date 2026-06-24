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
  Link
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

// app/routes/_index.jsx
var import_node = __toESM(require_node());
var import_session = __toESM(require_session());
var import_auth = __toESM(require_auth());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.jsx"
  );
  import.meta.hot.lastModified = "1779859745880.5046";
}
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.page, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.container, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.hero, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.logo, children: "\u269B\uFE0F" }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 58,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { style: styles.title, children: "Luciteria Collector Cabinet" }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 59,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.subtitle, children: "The ultimate tool for tracking your element collection. Never get a duplicate. See what you're missing. Share your wishlist." }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 60,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 57,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.features, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.feature, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.featureIcon, children: "\u{1F9CA}" }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 69,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.featureTitle, children: "Track Your Collection" }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 70,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.featureDesc, children: "Interactive periodic table showing every element you own across all formats." }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 71,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 68,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.feature, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.featureIcon, children: "\u{1F4EC}" }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 76,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.featureTitle, children: "Subscription Intelligence" }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 77,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.featureDesc, children: "Cube of the Month subscribers: we prevent duplicates and pick the next best element for you." }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 78,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 75,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.feature, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.featureIcon, children: "\u2B50" }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 83,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.featureTitle, children: "Shareable Wishlist" }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 84,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.featureDesc, children: "Share your wishlist with friends and family \u2014 perfect for gifts and holidays." }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 85,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 82,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 67,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.ctaSection, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/onboarding/welcome", style: styles.ctaBtn, children: "Get Started \u2192" }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 93,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.ctaSub, children: [
        "Already have an account? ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/onboarding/welcome", style: styles.ctaLink, children: "Log In" }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 97,
          columnNumber: 38
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 96,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 92,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.footer, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      "\xA9 ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Luciteria \u2014 Every element tells a story."
    ] }, void 0, true, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 103,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 102,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 55,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 54,
    columnNumber: 10
  }, this);
}
_c = Index;
var styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f5f7fa 0%, #e8edf5 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  container: {
    maxWidth: 700,
    textAlign: "center"
  },
  hero: {
    marginBottom: 40
  },
  logo: {
    fontSize: 64,
    display: "block",
    marginBottom: 16
  },
  title: {
    fontSize: 36,
    fontWeight: 800,
    color: "#1a1a2e",
    margin: "0 0 12px",
    lineHeight: 1.2
  },
  subtitle: {
    fontSize: 17,
    color: "#6b7280",
    lineHeight: 1.6,
    maxWidth: 520,
    margin: "0 auto"
  },
  features: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: 20,
    marginBottom: 40
  },
  feature: {
    background: "#fff",
    border: "1px solid #e2e5ea",
    borderRadius: 14,
    padding: "24px 18px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
  },
  featureIcon: {
    fontSize: 32,
    display: "block",
    marginBottom: 10
  },
  featureTitle: {
    fontSize: 15,
    fontWeight: 700,
    color: "#1a1a2e",
    margin: "0 0 6px"
  },
  featureDesc: {
    fontSize: 13,
    color: "#6b7280",
    lineHeight: 1.4,
    margin: 0
  },
  ctaSection: {
    marginBottom: 40
  },
  ctaBtn: {
    display: "inline-block",
    padding: "16px 40px",
    borderRadius: 12,
    background: "#4A90E2",
    color: "#fff",
    fontSize: 18,
    fontWeight: 700,
    textDecoration: "none",
    boxShadow: "0 4px 16px rgba(74, 144, 226, 0.3)",
    transition: "transform 0.15s, box-shadow 0.15s"
  },
  ctaSub: {
    fontSize: 13,
    color: "#6b7280",
    marginTop: 14
  },
  ctaLink: {
    color: "#4A90E2",
    fontWeight: 600,
    textDecoration: "none"
  },
  footer: {
    fontSize: 12,
    color: "#9ca3af"
  }
};
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_index-23IHKTAS.js.map
