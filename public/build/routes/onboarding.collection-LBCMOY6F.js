import {
  Toast
} from "/build/_shared/chunk-G3NSOU4G.js";
import {
  OnboardingLayout
} from "/build/_shared/chunk-Z3ZXDWKW.js";
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
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  useActionData,
  useLoaderData,
  useNavigation,
  useSubmit
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

// app/routes/onboarding.collection.jsx
var import_node = __toESM(require_node());
var import_react2 = __toESM(require_react());
var import_auth = __toESM(require_auth());
var import_session = __toESM(require_session());
var import_elements = __toESM(require_elements());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/onboarding.collection.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/onboarding.collection.jsx"
  );
  import.meta.hot.lastModified = "1779859556749.4722";
}
var TABLE_ROWS = 10;
var TABLE_COLS = 18;
var GROUP_COLORS = {
  "Alkali Metal": {
    bg: "#fce4ec",
    text: "#b71c1c"
  },
  "Alkaline Earth": {
    bg: "#fff3e0",
    text: "#e65100"
  },
  "Transition Metal": {
    bg: "#e3f2fd",
    text: "#1565c0"
  },
  "Post-Transition Metal": {
    bg: "#e0f7fa",
    text: "#00838f"
  },
  "Metalloid": {
    bg: "#ede7f6",
    text: "#4527a0"
  },
  "Nonmetal": {
    bg: "#e8f5e9",
    text: "#2e7d32"
  },
  "Halogen": {
    bg: "#fffde7",
    text: "#f57f17"
  },
  "Noble Gas": {
    bg: "#f3e5f5",
    text: "#6a1b9a"
  },
  "Lanthanide": {
    bg: "#fce4ec",
    text: "#ad1457"
  },
  "Actinide": {
    bg: "#fbe9e7",
    text: "#bf360c"
  }
};
function OnboardingCollection() {
  _s();
  const {
    user,
    elements,
    ownedSymbols: existingOwned
  } = useLoaderData();
  const actionData = useActionData();
  const navigation = useNavigation();
  const submit = useSubmit();
  const isSubmitting = navigation.state === "submitting";
  const [selected, setSelected] = (0, import_react2.useState)(new Set(existingOwned || []));
  const [search, setSearch] = (0, import_react2.useState)("");
  const toggle = (0, import_react2.useCallback)((sym) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(sym))
        next.delete(sym);
      else
        next.add(sym);
      return next;
    });
  }, []);
  const matchesSearch = (0, import_react2.useCallback)((el) => {
    if (!search)
      return true;
    const q = search.toLowerCase();
    return el.name.toLowerCase().includes(q) || el.sym.toLowerCase().includes(q) || String(el.z).includes(q);
  }, [search]);
  const grid = (0, import_react2.useMemo)(() => {
    const g = {};
    elements.forEach((el) => {
      g[`${el.row}-${el.col}`] = el;
    });
    return g;
  }, [elements]);
  const handleSubmit = (intent) => {
    const formData = new FormData();
    formData.set("intent", intent);
    if (intent === "save") {
      const selectedElements = elements.filter((el) => selected.has(el.sym)).map((el) => ({
        symbol: el.sym,
        name: el.name,
        atomicNumber: el.z
      }));
      formData.set("selectedElements", JSON.stringify(selectedElements));
    }
    submit(formData, {
      method: "post"
    });
  };
  const cellSize = 44;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OnboardingLayout, { step: 4, children: [
    actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toast, { message: actionData.error, type: "error" }, void 0, false, {
      fileName: "app/routes/onboarding.collection.jsx",
      lineNumber: 202,
      columnNumber: 29
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.header, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: styles.title, children: "What do you already own?" }, void 0, false, {
        fileName: "app/routes/onboarding.collection.jsx",
        lineNumber: 205,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.subtitle, children: "Click on elements you have in your collection. Don't worry \u2014 you can always update this later." }, void 0, false, {
        fileName: "app/routes/onboarding.collection.jsx",
        lineNumber: 206,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/onboarding.collection.jsx",
      lineNumber: 204,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.toolbar, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.searchWrap, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", placeholder: "Search elements...", value: search, onChange: (e) => setSearch(e.target.value), style: styles.searchInput }, void 0, false, {
          fileName: "app/routes/onboarding.collection.jsx",
          lineNumber: 214,
          columnNumber: 11
        }, this),
        search && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setSearch(""), style: styles.clearBtn, children: "\u2715" }, void 0, false, {
          fileName: "app/routes/onboarding.collection.jsx",
          lineNumber: 215,
          columnNumber: 22
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/onboarding.collection.jsx",
        lineNumber: 213,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.counter, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.counterNum, children: selected.size }, void 0, false, {
          fileName: "app/routes/onboarding.collection.jsx",
          lineNumber: 218,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.counterLabel, children: " / 118 selected" }, void 0, false, {
          fileName: "app/routes/onboarding.collection.jsx",
          lineNumber: 219,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/onboarding.collection.jsx",
        lineNumber: 217,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/onboarding.collection.jsx",
      lineNumber: 212,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.tableScroll, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      display: "grid",
      gridTemplateColumns: `repeat(${TABLE_COLS}, ${cellSize}px)`,
      gridTemplateRows: `repeat(${TABLE_ROWS}, ${cellSize}px)`,
      gap: "2px",
      width: "fit-content",
      margin: "0 auto"
    }, children: Array.from({
      length: TABLE_ROWS
    }, (_, r) => Array.from({
      length: TABLE_COLS
    }, (_2, c) => {
      const row = r + 1;
      const col = c + 1;
      const key = `${row}-${col}`;
      const el = grid[key];
      if (row === 8)
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          gridRow: row,
          gridColumn: col
        } }, key, false, {
          fileName: "app/routes/onboarding.collection.jsx",
          lineNumber: 242,
          columnNumber: 33
        }, this);
      if (!el)
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          gridRow: row,
          gridColumn: col
        } }, key, false, {
          fileName: "app/routes/onboarding.collection.jsx",
          lineNumber: 246,
          columnNumber: 27
        }, this);
      const isSelected = selected.has(el.sym);
      const isMatch = matchesSearch(el);
      const groupColor = GROUP_COLORS[el.group] || {
        bg: "#fff",
        text: "#333"
      };
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => toggle(el.sym), style: {
        gridRow: row,
        gridColumn: col,
        width: cellSize,
        height: cellSize,
        borderRadius: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        position: "relative",
        transition: "all 0.1s",
        opacity: isMatch ? 1 : 0.2,
        background: isSelected ? "#e8f5e9" : groupColor.bg,
        border: isSelected ? "2px solid #4CAF50" : "2px solid rgba(0,0,0,0.08)",
        transform: isSelected ? "scale(1.05)" : "scale(1)",
        boxShadow: isSelected ? "0 2px 6px rgba(76,175,80,0.3)" : "none"
      }, title: `${el.z}. ${el.name} (${el.sym})`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
          fontSize: 8,
          fontWeight: 600,
          color: isSelected ? "#2e7d32" : groupColor.text,
          lineHeight: 1
        }, children: el.z }, void 0, false, {
          fileName: "app/routes/onboarding.collection.jsx",
          lineNumber: 275,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
          fontSize: 14,
          fontWeight: 800,
          color: isSelected ? "#2e7d32" : groupColor.text,
          lineHeight: 1.1
        }, children: el.sym }, void 0, false, {
          fileName: "app/routes/onboarding.collection.jsx",
          lineNumber: 281,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
          fontSize: 5.5,
          color: isSelected ? "#388e3c" : "#666",
          lineHeight: 1,
          maxWidth: cellSize - 4,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        }, children: el.name }, void 0, false, {
          fileName: "app/routes/onboarding.collection.jsx",
          lineNumber: 287,
          columnNumber: 19
        }, this),
        isSelected && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
          position: "absolute",
          top: -4,
          right: -4,
          fontSize: 10,
          color: "#fff",
          background: "#4CAF50",
          borderRadius: "50%",
          width: 14,
          height: 14,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          boxShadow: "0 1px 3px rgba(0,0,0,0.2)"
        }, children: "\u2713" }, void 0, false, {
          fileName: "app/routes/onboarding.collection.jsx",
          lineNumber: 296,
          columnNumber: 34
        }, this)
      ] }, key, true, {
        fileName: "app/routes/onboarding.collection.jsx",
        lineNumber: 256,
        columnNumber: 18
      }, this);
    })) }, void 0, false, {
      fileName: "app/routes/onboarding.collection.jsx",
      lineNumber: 225,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/onboarding.collection.jsx",
      lineNumber: 224,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.legend, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.legendItem, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.legendSwatch("#4CAF50") }, void 0, false, {
          fileName: "app/routes/onboarding.collection.jsx",
          lineNumber: 320,
          columnNumber: 11
        }, this),
        " Selected (owned)"
      ] }, void 0, true, {
        fileName: "app/routes/onboarding.collection.jsx",
        lineNumber: 319,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.legendItem, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.legendSwatch("#ddd") }, void 0, false, {
          fileName: "app/routes/onboarding.collection.jsx",
          lineNumber: 323,
          columnNumber: 11
        }, this),
        " Not selected"
      ] }, void 0, true, {
        fileName: "app/routes/onboarding.collection.jsx",
        lineNumber: 322,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
        ...styles.legendItem,
        marginLeft: "auto",
        fontWeight: 600,
        color: "#4A90E2"
      }, children: "Click to toggle" }, void 0, false, {
        fileName: "app/routes/onboarding.collection.jsx",
        lineNumber: 325,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/onboarding.collection.jsx",
      lineNumber: 318,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.actions, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => handleSubmit("skip"), disabled: isSubmitting, style: styles.skipBtn, children: "Skip for Now" }, void 0, false, {
        fileName: "app/routes/onboarding.collection.jsx",
        lineNumber: 337,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => handleSubmit("save"), disabled: isSubmitting, style: styles.continueBtn, children: isSubmitting ? "Saving..." : selected.size > 0 ? `Save ${selected.size} Element${selected.size !== 1 ? "s" : ""} & Continue \u2192` : "Continue \u2192" }, void 0, false, {
        fileName: "app/routes/onboarding.collection.jsx",
        lineNumber: 340,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/onboarding.collection.jsx",
      lineNumber: 336,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/onboarding.collection.jsx",
    lineNumber: 201,
    columnNumber: 10
  }, this);
}
_s(OnboardingCollection, "16OpOa0225NEKVjEXeaZb77uW/c=", false, function() {
  return [useLoaderData, useActionData, useNavigation, useSubmit];
});
_c = OnboardingCollection;
var styles = {
  header: {
    textAlign: "center",
    marginBottom: 20
  },
  title: {
    fontSize: 22,
    fontWeight: 700,
    color: "var(--luc-text, #1a1a2e)",
    margin: 0
  },
  subtitle: {
    fontSize: 13,
    color: "var(--luc-text-muted, #6b7280)",
    marginTop: 6,
    lineHeight: 1.4
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 16,
    flexWrap: "wrap"
  },
  searchWrap: {
    flex: 1,
    minWidth: 180,
    position: "relative"
  },
  searchInput: {
    width: "100%",
    padding: "8px 32px 8px 12px",
    borderRadius: 8,
    border: "1px solid var(--luc-border, #e2e5ea)",
    fontSize: 13,
    outline: "none",
    boxSizing: "border-box"
  },
  clearBtn: {
    position: "absolute",
    right: 8,
    top: "50%",
    transform: "translateY(-50%)",
    background: "none",
    border: "none",
    color: "#999",
    cursor: "pointer",
    fontSize: 14
  },
  counter: {
    flexShrink: 0,
    padding: "6px 14px",
    background: "#e8f5e9",
    borderRadius: 8,
    fontSize: 14
  },
  counterNum: {
    fontWeight: 700,
    color: "#2e7d32"
  },
  counterLabel: {
    color: "#555",
    fontSize: 13
  },
  tableScroll: {
    overflowX: "auto",
    paddingBottom: 8,
    WebkitOverflowScrolling: "touch",
    marginBottom: 12
  },
  legend: {
    display: "flex",
    gap: 16,
    fontSize: 12,
    color: "#666",
    marginBottom: 20,
    alignItems: "center",
    flexWrap: "wrap"
  },
  legendItem: {
    display: "flex",
    alignItems: "center",
    gap: 5
  },
  legendSwatch: (color) => ({
    width: 12,
    height: 12,
    borderRadius: 3,
    border: `2px solid ${color}`,
    background: color === "#ddd" ? "#fff" : color + "33",
    display: "inline-block"
  }),
  actions: {
    display: "flex",
    gap: 12,
    justifyContent: "flex-end"
  },
  skipBtn: {
    padding: "12px 24px",
    borderRadius: 10,
    border: "1px solid var(--luc-border, #e2e5ea)",
    background: "#fff",
    color: "var(--luc-text-muted, #6b7280)",
    fontSize: 14,
    fontWeight: 500,
    cursor: "pointer"
  },
  continueBtn: {
    padding: "12px 24px",
    borderRadius: 10,
    border: "none",
    background: "var(--luc-accent, #4A90E2)",
    color: "#fff",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer"
  }
};
var _c;
$RefreshReg$(_c, "OnboardingCollection");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  OnboardingCollection as default
};
//# sourceMappingURL=/build/routes/onboarding.collection-LBCMOY6F.js.map
