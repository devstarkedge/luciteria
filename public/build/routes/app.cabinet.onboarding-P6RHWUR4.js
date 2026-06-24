import {
  require_elements_server
} from "/build/_shared/chunk-VLZG2WVK.js";
import {
  AppNav
} from "/build/_shared/chunk-2HXTESER.js";
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

// app/routes/app.cabinet.onboarding.jsx
var import_node = __toESM(require_node());
var import_elements_server = __toESM(require_elements_server());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.cabinet.onboarding.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.cabinet.onboarding.jsx"
  );
  import.meta.hot.lastModified = "1779491419299.6794";
}
function OnboardingPage() {
  _s();
  const {
    customerId,
    collectionTypes
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.layout, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppNav, { mode: "customer", customerName: "New Collector" }, void 0, false, {
      fileName: "app/routes/app.cabinet.onboarding.jsx",
      lineNumber: 93,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { style: styles.main, className: "luc-main", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.header, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { style: styles.title, children: "Choose Your Collection" }, void 0, false, {
          fileName: "app/routes/app.cabinet.onboarding.jsx",
          lineNumber: 96,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.subtitle, children: [
          "Every collector starts with a format. Pick the one that speaks to you.",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/routes/app.cabinet.onboarding.jsx",
            lineNumber: 99,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.lockNote, children: "\u{1F512} In the current phase, your collection type is locked once chosen. Multi-collection support coming soon." }, void 0, false, {
            fileName: "app/routes/app.cabinet.onboarding.jsx",
            lineNumber: 100,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.cabinet.onboarding.jsx",
          lineNumber: 97,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.cabinet.onboarding.jsx",
        lineNumber: 95,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.grid, children: collectionTypes.map((ct) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        ...styles.card,
        ...ct.popular ? styles.cardPopular : {}
      }, children: [
        ct.popular && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.popularBadge, children: "Most Popular" }, void 0, false, {
          fileName: "app/routes/app.cabinet.onboarding.jsx",
          lineNumber: 112,
          columnNumber: 30
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.cardIcon, children: ct.icon }, void 0, false, {
          fileName: "app/routes/app.cabinet.onboarding.jsx",
          lineNumber: 113,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.cardName, children: ct.name }, void 0, false, {
          fileName: "app/routes/app.cabinet.onboarding.jsx",
          lineNumber: 114,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.cardDesc, children: ct.description }, void 0, false, {
          fileName: "app/routes/app.cabinet.onboarding.jsx",
          lineNumber: 115,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.cardStats, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.stat, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.statValue, children: ct.elementCount }, void 0, false, {
              fileName: "app/routes/app.cabinet.onboarding.jsx",
              lineNumber: 119,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.statLabel, children: "Elements Available" }, void 0, false, {
              fileName: "app/routes/app.cabinet.onboarding.jsx",
              lineNumber: 120,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.cabinet.onboarding.jsx",
            lineNumber: 118,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.stat, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.statValue, children: ct.priceRange }, void 0, false, {
              fileName: "app/routes/app.cabinet.onboarding.jsx",
              lineNumber: 123,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.statLabel, children: "Price Range" }, void 0, false, {
              fileName: "app/routes/app.cabinet.onboarding.jsx",
              lineNumber: 124,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.cabinet.onboarding.jsx",
            lineNumber: 122,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.cabinet.onboarding.jsx",
          lineNumber: 117,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { style: styles.featureList, children: ct.features.map((f, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { style: styles.feature, children: [
          "\u2713 ",
          f
        ] }, i, true, {
          fileName: "app/routes/app.cabinet.onboarding.jsx",
          lineNumber: 129,
          columnNumber: 44
        }, this)) }, void 0, false, {
          fileName: "app/routes/app.cabinet.onboarding.jsx",
          lineNumber: 128,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/app/cabinet?customer=${customerId}&collection=${ct.id}`, style: {
          ...styles.selectBtn,
          ...ct.popular ? styles.selectBtnPopular : {}
        }, children: [
          "Select ",
          ct.name
        ] }, void 0, true, {
          fileName: "app/routes/app.cabinet.onboarding.jsx",
          lineNumber: 132,
          columnNumber: 15
        }, this)
      ] }, ct.id, true, {
        fileName: "app/routes/app.cabinet.onboarding.jsx",
        lineNumber: 108,
        columnNumber: 38
      }, this)) }, void 0, false, {
        fileName: "app/routes/app.cabinet.onboarding.jsx",
        lineNumber: 107,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.infoBox, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { style: styles.infoTitle, children: "\u{1F4A1} Not sure which to pick?" }, void 0, false, {
          fileName: "app/routes/app.cabinet.onboarding.jsx",
          lineNumber: 142,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.infoText, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Lucite Cubes" }, void 0, false, {
            fileName: "app/routes/app.cabinet.onboarding.jsx",
            lineNumber: 144,
            columnNumber: 13
          }, this),
          " are our most popular \u2014 they're stunning on display and cover the widest range of elements.",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: " 10mm Cubes" }, void 0, false, {
            fileName: "app/routes/app.cabinet.onboarding.jsx",
            lineNumber: 145,
            columnNumber: 13
          }, this),
          " are great for budget-conscious collectors who want pure metal.",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: " Ampoules" }, void 0, false, {
            fileName: "app/routes/app.cabinet.onboarding.jsx",
            lineNumber: 146,
            columnNumber: 13
          }, this),
          " are perfect for chemistry enthusiasts who love the scientific aesthetic."
        ] }, void 0, true, {
          fileName: "app/routes/app.cabinet.onboarding.jsx",
          lineNumber: 143,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.cabinet.onboarding.jsx",
        lineNumber: 141,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.cabinet.onboarding.jsx",
      lineNumber: 94,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.cabinet.onboarding.jsx",
    lineNumber: 92,
    columnNumber: 10
  }, this);
}
_s(OnboardingPage, "5JEoknn0E82zy4Pde3snnZNffW8=", false, function() {
  return [useLoaderData];
});
_c = OnboardingPage;
var styles = {
  layout: {
    display: "flex",
    minHeight: "100vh"
  },
  main: {
    marginLeft: 240,
    flex: 1,
    padding: "24px 40px 60px",
    maxWidth: 1100
  },
  header: {
    textAlign: "center",
    marginBottom: 40
  },
  title: {
    fontSize: 32,
    fontWeight: 800,
    color: "var(--luc-text)",
    margin: 0
  },
  subtitle: {
    fontSize: 15,
    color: "var(--luc-text-muted)",
    marginTop: 8,
    lineHeight: 1.6
  },
  lockNote: {
    display: "inline-block",
    marginTop: 8,
    fontSize: 12,
    color: "var(--luc-text-muted)",
    background: "#f9fafb",
    padding: "4px 10px",
    borderRadius: 6
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 20,
    marginBottom: 40
  },
  card: {
    background: "#ffffff",
    border: "1px solid var(--luc-border)",
    borderRadius: 16,
    padding: 24,
    display: "flex",
    flexDirection: "column",
    position: "relative",
    boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
    transition: "box-shadow 0.2s ease, transform 0.2s ease"
  },
  cardPopular: {
    borderColor: "var(--luc-accent)",
    borderWidth: 2,
    boxShadow: "0 4px 12px rgba(74,144,226,0.15)"
  },
  popularBadge: {
    position: "absolute",
    top: -10,
    right: 16,
    background: "var(--luc-accent)",
    color: "#fff",
    padding: "3px 10px",
    borderRadius: 10,
    fontSize: 11,
    fontWeight: 700
  },
  cardIcon: {
    fontSize: 40,
    marginBottom: 12
  },
  cardName: {
    fontSize: 20,
    fontWeight: 700,
    color: "var(--luc-text)",
    margin: "0 0 8px"
  },
  cardDesc: {
    fontSize: 13,
    color: "var(--luc-text-muted)",
    lineHeight: 1.5,
    margin: "0 0 16px",
    flex: 1
  },
  cardStats: {
    display: "flex",
    gap: 16,
    marginBottom: 16
  },
  stat: {
    display: "flex",
    flexDirection: "column"
  },
  statValue: {
    fontSize: 16,
    fontWeight: 700,
    color: "var(--luc-accent)"
  },
  statLabel: {
    fontSize: 10,
    color: "var(--luc-text-muted)",
    textTransform: "uppercase",
    fontWeight: 600
  },
  featureList: {
    listStyle: "none",
    padding: 0,
    margin: "0 0 16px",
    display: "flex",
    flexDirection: "column",
    gap: 4,
    fontSize: 13,
    color: "var(--luc-text-muted)"
  },
  feature: {},
  selectBtn: {
    display: "block",
    textAlign: "center",
    padding: "10px 16px",
    borderRadius: 8,
    border: "1px solid var(--luc-accent)",
    background: "transparent",
    color: "var(--luc-accent)",
    fontSize: 14,
    fontWeight: 600,
    textDecoration: "none",
    transition: "background 0.15s ease"
  },
  selectBtnPopular: {
    background: "var(--luc-accent)",
    color: "#ffffff"
  },
  infoBox: {
    background: "#f8fafc",
    border: "1px solid var(--luc-border)",
    borderRadius: 12,
    padding: 20
  },
  infoTitle: {
    fontSize: 15,
    fontWeight: 700,
    color: "var(--luc-text)",
    margin: "0 0 8px"
  },
  infoText: {
    fontSize: 13,
    color: "var(--luc-text-muted)",
    lineHeight: 1.6,
    margin: 0
  }
};
var _c;
$RefreshReg$(_c, "OnboardingPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  OnboardingPage as default
};
//# sourceMappingURL=/build/routes/app.cabinet.onboarding-P6RHWUR4.js.map
