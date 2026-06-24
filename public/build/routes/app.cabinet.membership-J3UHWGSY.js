import {
  require_credits_server
} from "/build/_shared/chunk-ARBW5MES.js";
import {
  CreditBalance
} from "/build/_shared/chunk-ATUZTG6B.js";
import {
  TierBadge
} from "/build/_shared/chunk-LFX7UVIL.js";
import {
  require_session_server
} from "/build/_shared/chunk-6O6WWWLW.js";
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
  Form,
  useActionData,
  useFetcher,
  useLoaderData
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
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:../lib/feature-flags.server.js
var require_feature_flags_server = __commonJS({
  "empty-module:../lib/feature-flags.server.js"(exports, module) {
    module.exports = {};
  }
});

// app/routes/app.cabinet.membership.jsx
var import_node = __toESM(require_node());
var import_db_server = __toESM(require_db_server());
var import_session_server = __toESM(require_session_server());
var import_credits_server = __toESM(require_credits_server());
var import_feature_flags_server = __toESM(require_feature_flags_server());

// app/components/SubscriptionControls.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/SubscriptionControls.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/SubscriptionControls.jsx"
  );
  import.meta.hot.lastModified = "1779902172290.5237";
}
function SubscriptionControls({
  subscription,
  onAction
}) {
  _s();
  const [confirmAction, setConfirmAction] = (0, import_react.useState)(null);
  if (!subscription)
    return null;
  const isPaused = subscription.status === "PAUSED";
  const isCancelled = subscription.status === "CANCELLED";
  const handleAction = (action) => {
    if (action === "cancel" && confirmAction !== "cancel") {
      setConfirmAction("cancel");
      return;
    }
    setConfirmAction(null);
    if (onAction)
      onAction(action);
  };
  if (isCancelled) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.container, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.cancelled, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
          fontSize: "18px"
        }, children: "\u274C" }, void 0, false, {
          fileName: "app/components/SubscriptionControls.jsx",
          lineNumber: 46,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Subscription cancelled" }, void 0, false, {
          fileName: "app/components/SubscriptionControls.jsx",
          lineNumber: 49,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/SubscriptionControls.jsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: {
        ...styles.btn,
        ...styles.btnPrimary
      }, onClick: () => handleAction("reactivate"), children: "Reactivate Subscription" }, void 0, false, {
        fileName: "app/components/SubscriptionControls.jsx",
        lineNumber: 51,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/SubscriptionControls.jsx",
      lineNumber: 44,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.container, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.buttonRow, children: [
      isPaused ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: {
        ...styles.btn,
        ...styles.btnPrimary
      }, onClick: () => handleAction("resume"), children: "\u25B6 Resume Subscription" }, void 0, false, {
        fileName: "app/components/SubscriptionControls.jsx",
        lineNumber: 61,
        columnNumber: 21
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: {
        ...styles.btn,
        ...styles.btnWarning
      }, onClick: () => handleAction("pause"), children: "\u23F8 Pause Subscription" }, void 0, false, {
        fileName: "app/components/SubscriptionControls.jsx",
        lineNumber: 66,
        columnNumber: 23
      }, this),
      !isPaused && subscription.canSkipNext && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: {
        ...styles.btn,
        ...styles.btnOutline
      }, onClick: () => handleAction("skip"), children: "\u23ED Skip Next Month" }, void 0, false, {
        fileName: "app/components/SubscriptionControls.jsx",
        lineNumber: 73,
        columnNumber: 51
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/SubscriptionControls.jsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    confirmAction === "cancel" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.confirmBox, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
        margin: 0,
        fontWeight: 600,
        color: "#DC2626"
      }, children: "Are you sure you want to cancel?" }, void 0, false, {
        fileName: "app/components/SubscriptionControls.jsx",
        lineNumber: 82,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
        margin: "4px 0 12px",
        fontSize: "13px",
        color: "#6B7280"
      }, children: "You'll lose access to subscriber benefits and store credits." }, void 0, false, {
        fileName: "app/components/SubscriptionControls.jsx",
        lineNumber: 87,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.buttonRow, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: {
          ...styles.btn,
          ...styles.btnDanger
        }, onClick: () => handleAction("cancel"), children: "Yes, Cancel Subscription" }, void 0, false, {
          fileName: "app/components/SubscriptionControls.jsx",
          lineNumber: 95,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: {
          ...styles.btn,
          ...styles.btnOutline
        }, onClick: () => setConfirmAction(null), children: "Keep My Subscription" }, void 0, false, {
          fileName: "app/components/SubscriptionControls.jsx",
          lineNumber: 101,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/SubscriptionControls.jsx",
        lineNumber: 94,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/SubscriptionControls.jsx",
      lineNumber: 81,
      columnNumber: 37
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: {
      ...styles.btn,
      ...styles.btnDangerOutline
    }, onClick: () => handleAction("cancel"), children: "Cancel Subscription" }, void 0, false, {
      fileName: "app/components/SubscriptionControls.jsx",
      lineNumber: 108,
      columnNumber: 18
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/SubscriptionControls.jsx",
    lineNumber: 59,
    columnNumber: 10
  }, this);
}
_s(SubscriptionControls, "DUJ5boRaj9Us0dl2Ug6L2ZzqGrU=");
_c = SubscriptionControls;
var styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },
  buttonRow: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap"
  },
  btn: {
    padding: "8px 16px",
    borderRadius: "8px",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer",
    border: "none",
    transition: "all 0.15s"
  },
  btnPrimary: {
    backgroundColor: "#2563EB",
    color: "#fff"
  },
  btnWarning: {
    backgroundColor: "#F59E0B",
    color: "#fff"
  },
  btnOutline: {
    backgroundColor: "#fff",
    color: "#374151",
    border: "1px solid #D1D5DB"
  },
  btnDanger: {
    backgroundColor: "#DC2626",
    color: "#fff"
  },
  btnDangerOutline: {
    backgroundColor: "#fff",
    color: "#DC2626",
    border: "1px solid #FCA5A5",
    fontSize: "12px"
  },
  confirmBox: {
    padding: "12px 16px",
    backgroundColor: "#FEF2F2",
    border: "1px solid #FCA5A5",
    borderRadius: "8px"
  },
  cancelled: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "12px",
    backgroundColor: "#F3F4F6",
    borderRadius: "8px",
    color: "#6B7280"
  }
};
var _c;
$RefreshReg$(_c, "SubscriptionControls");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/CompletionProgress.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/CompletionProgress.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/CompletionProgress.jsx"
  );
  import.meta.hot.lastModified = "1779902214844.3083";
}
var FORMAT_LABELS = {
  "10mm": "10mm Cubes",
  "25.4mm": "25.4mm Cubes",
  "50mm": "50mm Cubes",
  "lucite": "Lucite Cubes",
  "ampoules": "Ampoules"
};
function ProgressRing({
  owned,
  total,
  format,
  size = 90
}) {
  const pct = total > 0 ? Math.round(owned / total * 100) : 0;
  const radius = (size - 10) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - pct / 100 * circumference;
  const color = pct >= 75 ? "#059669" : pct >= 40 ? "#F59E0B" : "#6366F1";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: {
    textAlign: "center"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { width: size, height: size, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("circle", { cx: size / 2, cy: size / 2, r: radius, fill: "none", stroke: "#E5E7EB", strokeWidth: "6" }, void 0, false, {
        fileName: "app/components/CompletionProgress.jsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("circle", { cx: size / 2, cy: size / 2, r: radius, fill: "none", stroke: color, strokeWidth: "6", strokeLinecap: "round", strokeDasharray: circumference, strokeDashoffset: offset, transform: `rotate(-90 ${size / 2} ${size / 2})`, style: {
        transition: "stroke-dashoffset 0.5s ease"
      } }, void 0, false, {
        fileName: "app/components/CompletionProgress.jsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("text", { x: size / 2, y: size / 2 - 4, textAnchor: "middle", fontSize: "16", fontWeight: "700", fill: "#111827", children: [
        pct,
        "%"
      ] }, void 0, true, {
        fileName: "app/components/CompletionProgress.jsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("text", { x: size / 2, y: size / 2 + 12, textAnchor: "middle", fontSize: "10", fill: "#6B7280", children: [
        owned,
        "/",
        total
      ] }, void 0, true, {
        fileName: "app/components/CompletionProgress.jsx",
        lineNumber: 56,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/CompletionProgress.jsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: {
      fontSize: "12px",
      fontWeight: 600,
      color: "#374151",
      marginTop: "4px"
    }, children: FORMAT_LABELS[format] || format }, void 0, false, {
      fileName: "app/components/CompletionProgress.jsx",
      lineNumber: 60,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/CompletionProgress.jsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
}
_c2 = ProgressRing;
function CompletionProgress({
  progressData = []
}) {
  if (!progressData || progressData.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: styles2.empty, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { style: {
        fontSize: "24px"
      }, children: "\u{1F4CA}" }, void 0, false, {
        fileName: "app/components/CompletionProgress.jsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "No completion data available yet." }, void 0, false, {
        fileName: "app/components/CompletionProgress.jsx",
        lineNumber: 79,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/CompletionProgress.jsx",
      lineNumber: 75,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: styles2.container, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h4", { style: styles2.heading, children: "Collection Completion" }, void 0, false, {
      fileName: "app/components/CompletionProgress.jsx",
      lineNumber: 83,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: styles2.grid, children: progressData.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProgressRing, { owned: p.owned, total: p.total, format: p.format }, p.format, false, {
      fileName: "app/components/CompletionProgress.jsx",
      lineNumber: 85,
      columnNumber: 32
    }, this)) }, void 0, false, {
      fileName: "app/components/CompletionProgress.jsx",
      lineNumber: 84,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/CompletionProgress.jsx",
    lineNumber: 82,
    columnNumber: 10
  }, this);
}
_c22 = CompletionProgress;
var styles2 = {
  container: {
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    border: "1px solid #E5E7EB"
  },
  heading: {
    margin: "0 0 16px",
    fontSize: "16px",
    fontWeight: 700,
    color: "#111827"
  },
  grid: {
    display: "flex",
    gap: "24px",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  empty: {
    textAlign: "center",
    padding: "24px",
    color: "#6B7280",
    backgroundColor: "#F9FAFB",
    borderRadius: "12px"
  }
};
var _c2;
var _c22;
$RefreshReg$(_c2, "ProgressRing");
$RefreshReg$(_c22, "CompletionProgress");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/MissingSuggestions.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/MissingSuggestions.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/MissingSuggestions.jsx"
  );
  import.meta.hot.lastModified = "1779902228804.2458";
}
function MissingSuggestions({
  suggestions = []
}) {
  if (!suggestions || suggestions.length === 0)
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { style: styles3.container, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h4", { style: styles3.heading, children: "\u2728 You're Missing These" }, void 0, false, {
      fileName: "app/components/MissingSuggestions.jsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { style: styles3.subtitle, children: "Elements available in our catalog that you don't own yet" }, void 0, false, {
      fileName: "app/components/MissingSuggestions.jsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { style: styles3.list, children: suggestions.map((s, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { style: styles3.item, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { style: styles3.symbol, children: s.elementSymbol }, void 0, false, {
        fileName: "app/components/MissingSuggestions.jsx",
        lineNumber: 36,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { style: styles3.info, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { style: styles3.name, children: [
          s.elementName,
          s.isWishlisted && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { style: styles3.wishBadge, children: "\u2665 Wishlisted" }, void 0, false, {
            fileName: "app/components/MissingSuggestions.jsx",
            lineNumber: 40,
            columnNumber: 36
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/MissingSuggestions.jsx",
          lineNumber: 38,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { style: styles3.meta, children: [
          s.format,
          " \xB7 ",
          s.rarityTier,
          " \xB7 $",
          s.price?.toFixed(2)
        ] }, void 0, true, {
          fileName: "app/components/MissingSuggestions.jsx",
          lineNumber: 42,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/MissingSuggestions.jsx",
        lineNumber: 37,
        columnNumber: 13
      }, this),
      s.inStock ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { style: styles3.inStock, children: "In Stock" }, void 0, false, {
        fileName: "app/components/MissingSuggestions.jsx",
        lineNumber: 46,
        columnNumber: 26
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { style: styles3.oos, children: "Out of Stock" }, void 0, false, {
        fileName: "app/components/MissingSuggestions.jsx",
        lineNumber: 46,
        columnNumber: 73
      }, this)
    ] }, i, true, {
      fileName: "app/components/MissingSuggestions.jsx",
      lineNumber: 35,
      columnNumber: 36
    }, this)) }, void 0, false, {
      fileName: "app/components/MissingSuggestions.jsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/MissingSuggestions.jsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_c3 = MissingSuggestions;
var styles3 = {
  container: {
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    border: "1px solid #E5E7EB"
  },
  heading: {
    margin: "0 0 4px",
    fontSize: "16px",
    fontWeight: 700,
    color: "#111827"
  },
  subtitle: {
    margin: "0 0 16px",
    fontSize: "13px",
    color: "#6B7280"
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  },
  item: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "10px 12px",
    backgroundColor: "#F9FAFB",
    borderRadius: "8px"
  },
  symbol: {
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EEF2FF",
    borderRadius: "8px",
    fontWeight: 700,
    fontSize: "16px",
    color: "#4338CA",
    fontFamily: "monospace"
  },
  info: {
    flex: 1
  },
  name: {
    fontSize: "14px",
    fontWeight: 600,
    color: "#111827",
    display: "flex",
    alignItems: "center",
    gap: "6px"
  },
  meta: {
    fontSize: "12px",
    color: "#6B7280",
    marginTop: "2px"
  },
  wishBadge: {
    fontSize: "10px",
    padding: "1px 6px",
    backgroundColor: "#FEF2F2",
    color: "#DC2626",
    borderRadius: "4px"
  },
  inStock: {
    fontSize: "11px",
    padding: "2px 8px",
    backgroundColor: "#D1FAE5",
    color: "#065F46",
    borderRadius: "4px",
    fontWeight: 600
  },
  oos: {
    fontSize: "11px",
    padding: "2px 8px",
    backgroundColor: "#FEE2E2",
    color: "#991B1B",
    borderRadius: "4px",
    fontWeight: 600
  }
};
var _c3;
$RefreshReg$(_c3, "MissingSuggestions");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/app.cabinet.membership.jsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.cabinet.membership.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.cabinet.membership.jsx"
  );
  import.meta.hot.lastModified = "1779902501453.365";
}
function MembershipPage() {
  _s2();
  const {
    user,
    subscription,
    tiers,
    creditHistory,
    featureFlags,
    completionData,
    suggestions
  } = useLoaderData();
  const actionData = useActionData();
  const fetcher = useFetcher();
  const handleSubAction = (action) => {
    fetcher.submit({
      intent: action
    }, {
      method: "post"
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: styles4.layout, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AppNav, { mode: "customer", userType: user.subscriptionStatus !== "NONE" ? "subscriber" : "collector" }, void 0, false, {
      fileName: "app/routes/app.cabinet.membership.jsx",
      lineNumber: 333,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("main", { style: styles4.main, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { style: styles4.title, children: "Membership" }, void 0, false, {
        fileName: "app/routes/app.cabinet.membership.jsx",
        lineNumber: 335,
        columnNumber: 9
      }, this),
      (actionData?.error || fetcher.data?.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: styles4.error, children: actionData?.error || fetcher.data?.error }, void 0, false, {
        fileName: "app/routes/app.cabinet.membership.jsx",
        lineNumber: 337,
        columnNumber: 56
      }, this),
      (actionData?.success || fetcher.data?.success) && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: styles4.successMsg, children: actionData?.success || fetcher.data?.success }, void 0, false, {
        fileName: "app/routes/app.cabinet.membership.jsx",
        lineNumber: 338,
        columnNumber: 60
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: styles4.statusCard, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: styles4.statusRow, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: styles4.statusLabel, children: "Current Tier" }, void 0, false, {
              fileName: "app/routes/app.cabinet.membership.jsx",
              lineNumber: 344,
              columnNumber: 15
            }, this),
            user.tierName ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TierBadge, { tierName: user.tierInternalName, size: "lg" }, void 0, false, {
              fileName: "app/routes/app.cabinet.membership.jsx",
              lineNumber: 345,
              columnNumber: 32
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { style: styles4.noTier, children: "No membership" }, void 0, false, {
              fileName: "app/routes/app.cabinet.membership.jsx",
              lineNumber: 345,
              columnNumber: 91
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.cabinet.membership.jsx",
            lineNumber: 343,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CreditBalance, { amount: user.storeCreditBalance, size: "lg" }, void 0, false, {
            fileName: "app/routes/app.cabinet.membership.jsx",
            lineNumber: 347,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: styles4.statusLabel, children: "Status" }, void 0, false, {
              fileName: "app/routes/app.cabinet.membership.jsx",
              lineNumber: 349,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { style: {
              ...styles4.statusPill,
              backgroundColor: user.subscriptionStatus === "ACTIVE" ? "#D1FAE5" : user.subscriptionStatus === "PAUSED" ? "#FEF3C7" : user.subscriptionStatus === "CANCELLED" ? "#FEE2E2" : "#F3F4F6",
              color: user.subscriptionStatus === "ACTIVE" ? "#065F46" : user.subscriptionStatus === "PAUSED" ? "#92400E" : user.subscriptionStatus === "CANCELLED" ? "#991B1B" : "#6B7280"
            }, children: [
              "\u25CF",
              " ",
              user.subscriptionStatus
            ] }, void 0, true, {
              fileName: "app/routes/app.cabinet.membership.jsx",
              lineNumber: 350,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.cabinet.membership.jsx",
            lineNumber: 348,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.cabinet.membership.jsx",
          lineNumber: 342,
          columnNumber: 11
        }, this),
        subscription && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: styles4.billingInfo, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: [
            "Billing: ",
            subscription.billingCycle
          ] }, void 0, true, {
            fileName: "app/routes/app.cabinet.membership.jsx",
            lineNumber: 361,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: [
            "Next: ",
            new Date(subscription.nextBillingDate).toLocaleDateString()
          ] }, void 0, true, {
            fileName: "app/routes/app.cabinet.membership.jsx",
            lineNumber: 362,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.cabinet.membership.jsx",
          lineNumber: 360,
          columnNumber: 28
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.cabinet.membership.jsx",
        lineNumber: 341,
        columnNumber: 9
      }, this),
      subscription && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: styles4.card, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { style: styles4.cardTitle, children: "Subscription Controls" }, void 0, false, {
          fileName: "app/routes/app.cabinet.membership.jsx",
          lineNumber: 368,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SubscriptionControls, { subscription, onAction: handleSubAction }, void 0, false, {
          fileName: "app/routes/app.cabinet.membership.jsx",
          lineNumber: 369,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.cabinet.membership.jsx",
        lineNumber: 367,
        columnNumber: 26
      }, this),
      !subscription && tiers.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: styles4.card, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { style: styles4.cardTitle, children: "Choose a Membership Tier" }, void 0, false, {
          fileName: "app/routes/app.cabinet.membership.jsx",
          lineNumber: 374,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: styles4.tierGrid, children: tiers.map((tier) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: styles4.tierOption, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: styles4.tierIcon, children: tier.sortOrder === 1 ? "\u{1F949}" : tier.sortOrder === 2 ? "\u{1F948}" : "\u{1F947}" }, void 0, false, {
            fileName: "app/routes/app.cabinet.membership.jsx",
            lineNumber: 377,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h4", { style: {
            margin: 0
          }, children: tier.displayName }, void 0, false, {
            fileName: "app/routes/app.cabinet.membership.jsx",
            lineNumber: 378,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: styles4.tierPrice, children: [
            "$",
            tier.monthlyPrice.toFixed(2),
            "/mo"
          ] }, void 0, true, {
            fileName: "app/routes/app.cabinet.membership.jsx",
            lineNumber: 381,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: styles4.tierCredit, children: [
            "\u{1F4B0} $",
            tier.storeCredit.toFixed(2),
            " credit/mo"
          ] }, void 0, true, {
            fileName: "app/routes/app.cabinet.membership.jsx",
            lineNumber: 382,
            columnNumber: 19
          }, this),
          tier.earlyAccessDays > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: styles4.tierEarly, children: [
            "\u26A1 ",
            tier.earlyAccessDays,
            "d early access"
          ] }, void 0, true, {
            fileName: "app/routes/app.cabinet.membership.jsx",
            lineNumber: 383,
            columnNumber: 48
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form, { method: "post", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "hidden", name: "intent", value: "subscribe" }, void 0, false, {
              fileName: "app/routes/app.cabinet.membership.jsx",
              lineNumber: 385,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "hidden", name: "tierId", value: tier.id }, void 0, false, {
              fileName: "app/routes/app.cabinet.membership.jsx",
              lineNumber: 386,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { type: "submit", style: styles4.subscribeBtn, children: "Subscribe" }, void 0, false, {
              fileName: "app/routes/app.cabinet.membership.jsx",
              lineNumber: 387,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.cabinet.membership.jsx",
            lineNumber: 384,
            columnNumber: 19
          }, this)
        ] }, tier.id, true, {
          fileName: "app/routes/app.cabinet.membership.jsx",
          lineNumber: 376,
          columnNumber: 34
        }, this)) }, void 0, false, {
          fileName: "app/routes/app.cabinet.membership.jsx",
          lineNumber: 375,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.cabinet.membership.jsx",
        lineNumber: 373,
        columnNumber: 47
      }, this),
      featureFlags.phase2_completion_display && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: styles4.card, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CompletionProgress, { progressData: completionData }, void 0, false, {
        fileName: "app/routes/app.cabinet.membership.jsx",
        lineNumber: 395,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/app.cabinet.membership.jsx",
        lineNumber: 394,
        columnNumber: 52
      }, this),
      featureFlags.phase2_suggestions && suggestions.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: styles4.card, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(MissingSuggestions, { suggestions }, void 0, false, {
        fileName: "app/routes/app.cabinet.membership.jsx",
        lineNumber: 400,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/app.cabinet.membership.jsx",
        lineNumber: 399,
        columnNumber: 71
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: styles4.comingSoon, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { style: styles4.comingSoonTitle, children: "\u{1F381} Custom Curation (Coming Soon)" }, void 0, false, {
          fileName: "app/routes/app.cabinet.membership.jsx",
          lineNumber: 405,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { style: styles4.comingSoonDesc, children: "Request personalized element shipments based on your collection gaps." }, void 0, false, {
          fileName: "app/routes/app.cabinet.membership.jsx",
          lineNumber: 406,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { style: styles4.disabledBtn, disabled: true, children: "Request Custom Box" }, void 0, false, {
          fileName: "app/routes/app.cabinet.membership.jsx",
          lineNumber: 409,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { style: styles4.phaseNote, children: "Available in Phase 3" }, void 0, false, {
          fileName: "app/routes/app.cabinet.membership.jsx",
          lineNumber: 410,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.cabinet.membership.jsx",
        lineNumber: 404,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: styles4.card, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { style: styles4.cardTitle, children: "Credit Transaction Log" }, void 0, false, {
          fileName: "app/routes/app.cabinet.membership.jsx",
          lineNumber: 415,
          columnNumber: 11
        }, this),
        creditHistory.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { style: styles4.emptyLog, children: "No transactions yet." }, void 0, false, {
          fileName: "app/routes/app.cabinet.membership.jsx",
          lineNumber: 416,
          columnNumber: 41
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: styles4.txList, children: creditHistory.map((tx) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: styles4.txRow, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { style: {
            ...styles4.txType,
            color: tx.amount >= 0 ? "#059669" : "#DC2626"
          }, children: [
            tx.amount >= 0 ? "+" : "",
            tx.amount.toFixed(2)
          ] }, void 0, true, {
            fileName: "app/routes/app.cabinet.membership.jsx",
            lineNumber: 418,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { style: styles4.txDesc, children: tx.description }, void 0, false, {
            fileName: "app/routes/app.cabinet.membership.jsx",
            lineNumber: 424,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { style: styles4.txDate, children: new Date(tx.createdAt).toLocaleDateString() }, void 0, false, {
            fileName: "app/routes/app.cabinet.membership.jsx",
            lineNumber: 425,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { style: styles4.txBalance, children: [
            "$",
            tx.balanceAfter.toFixed(2)
          ] }, void 0, true, {
            fileName: "app/routes/app.cabinet.membership.jsx",
            lineNumber: 426,
            columnNumber: 19
          }, this)
        ] }, tx.id, true, {
          fileName: "app/routes/app.cabinet.membership.jsx",
          lineNumber: 417,
          columnNumber: 40
        }, this)) }, void 0, false, {
          fileName: "app/routes/app.cabinet.membership.jsx",
          lineNumber: 416,
          columnNumber: 95
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.cabinet.membership.jsx",
        lineNumber: 414,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.cabinet.membership.jsx",
      lineNumber: 334,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.cabinet.membership.jsx",
    lineNumber: 332,
    columnNumber: 10
  }, this);
}
_s2(MembershipPage, "a1ZMgYQlAMKzNN6Hkt26ICJ86xs=", false, function() {
  return [useLoaderData, useActionData, useFetcher];
});
_c4 = MembershipPage;
var styles4 = {
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
    margin: "0 0 24px",
    fontSize: "24px",
    fontWeight: 700
  },
  error: {
    padding: "12px",
    backgroundColor: "#FEF2F2",
    color: "#DC2626",
    borderRadius: "8px",
    marginBottom: "16px"
  },
  successMsg: {
    padding: "12px",
    backgroundColor: "#F0FDF4",
    color: "#065F46",
    borderRadius: "8px",
    marginBottom: "16px"
  },
  statusCard: {
    padding: "24px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    border: "1px solid #E5E7EB",
    marginBottom: "20px"
  },
  statusRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "24px",
    flexWrap: "wrap"
  },
  statusLabel: {
    fontSize: "11px",
    color: "#6B7280",
    textTransform: "uppercase",
    marginBottom: "4px"
  },
  noTier: {
    fontSize: "16px",
    color: "#9CA3AF"
  },
  statusPill: {
    display: "inline-block",
    padding: "4px 12px",
    borderRadius: "12px",
    fontSize: "13px",
    fontWeight: 600
  },
  billingInfo: {
    display: "flex",
    gap: "24px",
    marginTop: "16px",
    paddingTop: "16px",
    borderTop: "1px solid #F3F4F6",
    fontSize: "13px",
    color: "#6B7280"
  },
  card: {
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    border: "1px solid #E5E7EB",
    marginBottom: "20px"
  },
  cardTitle: {
    margin: "0 0 16px",
    fontSize: "16px",
    fontWeight: 700
  },
  tierGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "16px"
  },
  tierOption: {
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#F9FAFB",
    borderRadius: "10px",
    border: "1px solid #E5E7EB"
  },
  tierIcon: {
    fontSize: "32px",
    marginBottom: "8px"
  },
  tierPrice: {
    fontSize: "20px",
    fontWeight: 700,
    margin: "8px 0 4px"
  },
  tierCredit: {
    fontSize: "13px",
    color: "#059669",
    marginBottom: "4px"
  },
  tierEarly: {
    fontSize: "12px",
    color: "#6366F1",
    marginBottom: "12px"
  },
  subscribeBtn: {
    padding: "8px 24px",
    backgroundColor: "#2563EB",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer"
  },
  comingSoon: {
    padding: "24px",
    backgroundColor: "#F9FAFB",
    borderRadius: "12px",
    border: "1px dashed #D1D5DB",
    textAlign: "center",
    marginBottom: "20px"
  },
  comingSoonTitle: {
    margin: "0 0 8px",
    fontSize: "18px",
    fontWeight: 700,
    color: "#374151"
  },
  comingSoonDesc: {
    margin: "0 0 16px",
    fontSize: "14px",
    color: "#6B7280"
  },
  disabledBtn: {
    padding: "10px 24px",
    backgroundColor: "#E5E7EB",
    color: "#9CA3AF",
    border: "none",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "not-allowed"
  },
  phaseNote: {
    display: "block",
    marginTop: "8px",
    fontSize: "12px",
    color: "#9CA3AF"
  },
  emptyLog: {
    fontSize: "14px",
    color: "#9CA3AF",
    textAlign: "center",
    padding: "16px"
  },
  txList: {
    display: "flex",
    flexDirection: "column",
    gap: "4px"
  },
  txRow: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "8px 0",
    borderBottom: "1px solid #F3F4F6",
    fontSize: "13px"
  },
  txType: {
    width: "70px",
    fontWeight: 700,
    fontFamily: "monospace"
  },
  txDesc: {
    flex: 1,
    color: "#374151"
  },
  txDate: {
    width: "80px",
    color: "#9CA3AF",
    fontSize: "12px"
  },
  txBalance: {
    width: "70px",
    color: "#6B7280",
    fontFamily: "monospace",
    textAlign: "right"
  }
};
var _c4;
$RefreshReg$(_c4, "MembershipPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  MembershipPage as default
};
//# sourceMappingURL=/build/routes/app.cabinet.membership-J3UHWGSY.js.map
