import {
  require_db_server
} from "/build/_shared/chunk-KD5OEAVH.js";
import {
  AppNav
} from "/build/_shared/chunk-2HXTESER.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  useFetcher,
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

// app/routes/app.admin.feature-flags.jsx
var import_node = __toESM(require_node());
var import_db_server = __toESM(require_db_server());

// app/components/PhaseToggle.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/PhaseToggle.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/PhaseToggle.jsx"
  );
  import.meta.hot.lastModified = "1779902200102.9841";
}
function PhaseToggle({
  flagName,
  label,
  description,
  isEnabled,
  onToggle
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.row, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.info, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.label, children: label }, void 0, false, {
        fileName: "app/components/PhaseToggle.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.desc, children: description }, void 0, false, {
        fileName: "app/components/PhaseToggle.jsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { style: styles.code, children: flagName }, void 0, false, {
        fileName: "app/components/PhaseToggle.jsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/PhaseToggle.jsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: {
      ...styles.toggle,
      backgroundColor: isEnabled ? "#059669" : "#D1D5DB"
    }, onClick: () => onToggle && onToggle(flagName, !isEnabled), "aria-label": `Toggle ${flagName}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
      ...styles.knob,
      transform: isEnabled ? "translateX(20px)" : "translateX(0)"
    } }, void 0, false, {
      fileName: "app/components/PhaseToggle.jsx",
      lineNumber: 42,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/PhaseToggle.jsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/PhaseToggle.jsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_c = PhaseToggle;
var styles = {
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    border: "1px solid #E5E7EB"
  },
  info: {
    flex: 1,
    marginRight: "16px"
  },
  label: {
    fontSize: "15px",
    fontWeight: 600,
    color: "#111827",
    marginBottom: "2px"
  },
  desc: {
    fontSize: "13px",
    color: "#6B7280",
    marginBottom: "4px"
  },
  code: {
    fontSize: "11px",
    color: "#6366F1",
    backgroundColor: "#EEF2FF",
    padding: "2px 6px",
    borderRadius: "4px"
  },
  toggle: {
    width: "48px",
    height: "28px",
    borderRadius: "14px",
    border: "none",
    cursor: "pointer",
    position: "relative",
    transition: "background-color 0.2s",
    flexShrink: 0
  },
  knob: {
    position: "absolute",
    top: "2px",
    left: "2px",
    width: "24px",
    height: "24px",
    borderRadius: "12px",
    backgroundColor: "#fff",
    boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
    transition: "transform 0.2s"
  }
};
var _c;
$RefreshReg$(_c, "PhaseToggle");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/app.admin.feature-flags.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.admin.feature-flags.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.admin.feature-flags.jsx"
  );
  import.meta.hot.lastModified = "1779902446917.6362";
}
var FLAG_META = {
  phase2_ownership_tracking: {
    label: "Phase 2: Ownership Tracking",
    phase: 2
  },
  phase2_completion_display: {
    label: "Phase 2: Completion Progress UI",
    phase: 2
  },
  phase2_suggestions: {
    label: "Phase 2: Missing Element Suggestions",
    phase: 2
  },
  phase3_enabled: {
    label: "Phase 3: Dynamic Curation",
    phase: 3
  }
};
function AdminFeatureFlags() {
  _s();
  const {
    flags
  } = useLoaderData();
  const fetcher = useFetcher();
  const flagMap = {};
  for (const f of flags)
    flagMap[f.flagName] = f;
  const handleToggle = (flagName, newValue) => {
    fetcher.submit({
      flagName,
      isEnabled: String(newValue)
    }, {
      method: "post"
    });
  };
  const phase2Flags = flags.filter((f) => f.flagName.startsWith("phase2_"));
  const phase3Flags = flags.filter((f) => f.flagName.startsWith("phase3_"));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: styles2.layout, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AppNav, { mode: "admin" }, void 0, false, {
      fileName: "app/routes/app.admin.feature-flags.jsx",
      lineNumber: 110,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { style: styles2.main, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { style: styles2.title, children: "Feature Flags" }, void 0, false, {
        fileName: "app/routes/app.admin.feature-flags.jsx",
        lineNumber: 112,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { style: styles2.subtitle, children: "Control phased feature rollout. Phase 2 features are built but dormant by default." }, void 0, false, {
        fileName: "app/routes/app.admin.feature-flags.jsx",
        lineNumber: 113,
        columnNumber: 9
      }, this),
      fetcher.data?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: styles2.error, children: fetcher.data.error }, void 0, false, {
        fileName: "app/routes/app.admin.feature-flags.jsx",
        lineNumber: 115,
        columnNumber: 33
      }, this),
      fetcher.data?.success && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: styles2.success, children: fetcher.data.success }, void 0, false, {
        fileName: "app/routes/app.admin.feature-flags.jsx",
        lineNumber: 116,
        columnNumber: 35
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { style: styles2.section, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: styles2.sectionHeader, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { style: styles2.sectionTitle, children: "Phase 2 \u2014 Ownership & Suggestions" }, void 0, false, {
            fileName: "app/routes/app.admin.feature-flags.jsx",
            lineNumber: 120,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { style: styles2.phaseBadge, children: "Built, Dormant" }, void 0, false, {
            fileName: "app/routes/app.admin.feature-flags.jsx",
            lineNumber: 121,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.feature-flags.jsx",
          lineNumber: 119,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { style: styles2.sectionDesc, children: "These features track per-user SKU ownership, show completion progress, and suggest missing elements. Enable when ready to roll out to subscribers." }, void 0, false, {
          fileName: "app/routes/app.admin.feature-flags.jsx",
          lineNumber: 123,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: styles2.flagList, children: phase2Flags.map((f) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PhaseToggle, { flagName: f.flagName, label: FLAG_META[f.flagName]?.label || f.flagName, description: f.description, isEnabled: f.isEnabled, onToggle: handleToggle }, f.flagName, false, {
          fileName: "app/routes/app.admin.feature-flags.jsx",
          lineNumber: 128,
          columnNumber: 35
        }, this)) }, void 0, false, {
          fileName: "app/routes/app.admin.feature-flags.jsx",
          lineNumber: 127,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.feature-flags.jsx",
        lineNumber: 118,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { style: styles2.section, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: styles2.sectionHeader, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { style: styles2.sectionTitle, children: "Phase 3 \u2014 Dynamic Curation" }, void 0, false, {
            fileName: "app/routes/app.admin.feature-flags.jsx",
            lineNumber: 134,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { style: {
            ...styles2.phaseBadge,
            backgroundColor: "#FEF3C7",
            color: "#92400E"
          }, children: "Scaffold Only" }, void 0, false, {
            fileName: "app/routes/app.admin.feature-flags.jsx",
            lineNumber: 135,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.feature-flags.jsx",
          lineNumber: 133,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { style: styles2.sectionDesc, children: "Phase 3 curation system is scaffolded but NOT functional. Stubs exist for future implementation. This flag cannot be enabled at this time." }, void 0, false, {
          fileName: "app/routes/app.admin.feature-flags.jsx",
          lineNumber: 141,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: styles2.flagList, children: phase3Flags.map((f) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PhaseToggle, { flagName: f.flagName, label: FLAG_META[f.flagName]?.label || f.flagName, description: f.description, isEnabled: f.isEnabled, onToggle: handleToggle }, f.flagName, false, {
          fileName: "app/routes/app.admin.feature-flags.jsx",
          lineNumber: 146,
          columnNumber: 35
        }, this)) }, void 0, false, {
          fileName: "app/routes/app.admin.feature-flags.jsx",
          lineNumber: 145,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.feature-flags.jsx",
        lineNumber: 132,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { style: styles2.infoBox, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h4", { style: {
          margin: "0 0 8px"
        }, children: "\u{1F527} How Feature Flags Work" }, void 0, false, {
          fileName: "app/routes/app.admin.feature-flags.jsx",
          lineNumber: 151,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { style: {
          margin: 0,
          paddingLeft: "20px",
          fontSize: "13px",
          color: "#374151",
          lineHeight: 1.8
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("strong", { children: "phase2_ownership_tracking" }, void 0, false, {
              fileName: "app/routes/app.admin.feature-flags.jsx",
              lineNumber: 161,
              columnNumber: 17
            }, this),
            " \u2014 Enables creating UserOwnedSku records when purchases occur"
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.feature-flags.jsx",
            lineNumber: 161,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("strong", { children: "phase2_completion_display" }, void 0, false, {
              fileName: "app/routes/app.admin.feature-flags.jsx",
              lineNumber: 162,
              columnNumber: 17
            }, this),
            " \u2014 Shows collection completion rings on the dashboard"
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.feature-flags.jsx",
            lineNumber: 162,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("strong", { children: "phase2_suggestions" }, void 0, false, {
              fileName: "app/routes/app.admin.feature-flags.jsx",
              lineNumber: 163,
              columnNumber: 17
            }, this),
            ` \u2014 Displays "You're missing these" element suggestions`
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.feature-flags.jsx",
            lineNumber: 163,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("strong", { children: "phase3_enabled" }, void 0, false, {
              fileName: "app/routes/app.admin.feature-flags.jsx",
              lineNumber: 164,
              columnNumber: 17
            }, this),
            " \u2014 Dynamic curation system (always disabled for now)"
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.feature-flags.jsx",
            lineNumber: 164,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.feature-flags.jsx",
          lineNumber: 154,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.feature-flags.jsx",
        lineNumber: 150,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.admin.feature-flags.jsx",
      lineNumber: 111,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.admin.feature-flags.jsx",
    lineNumber: 109,
    columnNumber: 10
  }, this);
}
_s(AdminFeatureFlags, "NxDFflVRtcm5MueECY8tA3kDLWI=", false, function() {
  return [useLoaderData, useFetcher];
});
_c2 = AdminFeatureFlags;
var styles2 = {
  layout: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#F9FAFB"
  },
  main: {
    flex: 1,
    padding: "32px",
    maxWidth: "800px"
  },
  title: {
    margin: 0,
    fontSize: "24px",
    fontWeight: 700
  },
  subtitle: {
    margin: "4px 0 24px",
    fontSize: "14px",
    color: "#6B7280"
  },
  error: {
    padding: "12px",
    backgroundColor: "#FEF2F2",
    color: "#DC2626",
    borderRadius: "8px",
    marginBottom: "16px"
  },
  success: {
    padding: "12px",
    backgroundColor: "#F0FDF4",
    color: "#065F46",
    borderRadius: "8px",
    marginBottom: "16px"
  },
  section: {
    marginBottom: "32px"
  },
  sectionHeader: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "8px"
  },
  sectionTitle: {
    margin: 0,
    fontSize: "18px",
    fontWeight: 700
  },
  phaseBadge: {
    fontSize: "11px",
    padding: "2px 10px",
    backgroundColor: "#EEF2FF",
    color: "#4338CA",
    borderRadius: "4px",
    fontWeight: 600
  },
  sectionDesc: {
    fontSize: "13px",
    color: "#6B7280",
    margin: "0 0 16px",
    lineHeight: 1.5
  },
  flagList: {
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  },
  infoBox: {
    padding: "20px",
    backgroundColor: "#F0F9FF",
    borderRadius: "12px",
    border: "1px solid #BAE6FD"
  }
};
var _c2;
$RefreshReg$(_c2, "AdminFeatureFlags");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AdminFeatureFlags as default
};
//# sourceMappingURL=/build/routes/app.admin.feature-flags-L5QVQ5DN.js.map
