import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  createHotContext
} from "/build/_shared/chunk-ORVFF776.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/PeriodicTable.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/PeriodicTable.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/PeriodicTable.jsx"
  );
  import.meta.hot.lastModified = "1779908861309.8813";
}
var TABLE_ROWS = 10;
var TABLE_COLS = 18;
var STATE_CONFIG = {
  OWNED: {
    bg: "#c8e6c9",
    border: "#388E3C",
    badge: "\u2713",
    badgeColor: "#1b5e20",
    label: "Owned"
  },
  WANTED: {
    bg: "#fff9c4",
    border: "#F9A825",
    badge: "\u2661",
    badgeColor: "#f57f17",
    label: "Wanted"
  },
  WATCHLIST: {
    bg: "#bbdefb",
    border: "#1976D2",
    badge: "\u{1F441}",
    badgeColor: "#0d47a1",
    label: "Watchlist"
  },
  MISSING: {
    bg: "#ffffff",
    border: "#e0e0e0",
    badge: "",
    badgeColor: "#9e9e9e",
    label: "Missing"
  }
};
var STATE_CYCLE = ["MISSING", "OWNED", "WANTED", "WATCHLIST"];
var GROUP_COLORS = {
  "Alkali Metal": {
    bg: "#fce4ec",
    border: "#e8425c",
    text: "#b71c1c"
  },
  "Alkaline Earth": {
    bg: "#fff3e0",
    border: "#f58442",
    text: "#e65100"
  },
  "Transition Metal": {
    bg: "#e3f2fd",
    border: "#4a90e2",
    text: "#1565c0"
  },
  "Post-Transition Metal": {
    bg: "#e0f7fa",
    border: "#45b7d1",
    text: "#00838f"
  },
  "Metalloid": {
    bg: "#ede7f6",
    border: "#6c5ce7",
    text: "#4527a0"
  },
  "Nonmetal": {
    bg: "#e8f5e9",
    border: "#00b894",
    text: "#2e7d32"
  },
  "Halogen": {
    bg: "#fffde7",
    border: "#f9a825",
    text: "#f57f17"
  },
  "Noble Gas": {
    bg: "#f3e5f5",
    border: "#a29bfe",
    text: "#6a1b9a"
  },
  "Lanthanide": {
    bg: "#fce4ec",
    border: "#fd79a8",
    text: "#ad1457"
  },
  "Actinide": {
    bg: "#fbe9e7",
    border: "#fab1a0",
    text: "#bf360c"
  }
};
function PeriodicTable({
  elements = [],
  collectionStates = {},
  // { "Fe": "OWNED", "He": "WANTED", ... }
  collectionType = "lucite",
  isAvailableForCollection,
  isPreciousMetal,
  onStateChange,
  // (elementSymbol, newState) => void
  onElementClick,
  // (element) => void — for detail view
  compact = false,
  readOnly = false,
  // Disable click toggling
  showFilters = true
  // Show filter controls
}) {
  _s();
  const [hoveredElement, setHoveredElement] = (0, import_react.useState)(null);
  const [selectedElement, setSelectedElement] = (0, import_react.useState)(null);
  const [filterState, setFilterState] = (0, import_react.useState)("ALL");
  const [filterGroup, setFilterGroup] = (0, import_react.useState)("ALL");
  const stateMap = (0, import_react.useMemo)(() => {
    if (collectionStates instanceof Map) {
      return Object.fromEntries(collectionStates);
    }
    return collectionStates || {};
  }, [collectionStates]);
  const groups = (0, import_react.useMemo)(() => {
    const g = [...new Set(elements.map((el) => el.group))];
    return g.sort();
  }, [elements]);
  const grid = (0, import_react.useMemo)(() => {
    const g = {};
    elements.forEach((el) => {
      const key = `${el.row}-${el.col}`;
      const isAvailable = el.available !== void 0 ? el.available : isAvailableForCollection?.(el.z, collectionType) ?? true;
      const isPrecious = el.precious !== void 0 ? el.precious : isPreciousMetal?.(el.sym) ?? false;
      const state = stateMap[el.sym] || "MISSING";
      let visible = true;
      if (filterState !== "ALL" && state !== filterState)
        visible = false;
      if (filterGroup !== "ALL" && el.group !== filterGroup)
        visible = false;
      g[key] = {
        ...el,
        state,
        isAvailable,
        isPrecious,
        visible
      };
    });
    return g;
  }, [elements, stateMap, collectionType, isAvailableForCollection, isPreciousMetal, filterState, filterGroup]);
  const stats = (0, import_react.useMemo)(() => {
    const counts = {
      OWNED: 0,
      WANTED: 0,
      WATCHLIST: 0,
      MISSING: 0
    };
    elements.forEach((el) => {
      const state = stateMap[el.sym] || "MISSING";
      counts[state] = (counts[state] || 0) + 1;
    });
    return counts;
  }, [elements, stateMap]);
  const handleCellClick = (0, import_react.useCallback)((el) => {
    if (readOnly || !el.isAvailable) {
      setSelectedElement(el);
      onElementClick?.(el);
      return;
    }
    const currentState = el.state || "MISSING";
    const currentIdx = STATE_CYCLE.indexOf(currentState);
    const nextState = STATE_CYCLE[(currentIdx + 1) % STATE_CYCLE.length];
    onStateChange?.(el.sym, nextState);
    onElementClick?.(el);
  }, [readOnly, onStateChange, onElementClick]);
  const cellSize = compact ? 36 : 48;
  const gap = compact ? 2 : 3;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.wrapper, children: [
    showFilters && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.filters, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.filterGroup, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { style: styles.filterLabel, children: "State:" }, void 0, false, {
          fileName: "app/components/PeriodicTable.jsx",
          lineNumber: 215,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { style: styles.filterSelect, value: filterState, onChange: (e) => setFilterState(e.target.value), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "ALL", children: "All States" }, void 0, false, {
            fileName: "app/components/PeriodicTable.jsx",
            lineNumber: 217,
            columnNumber: 15
          }, this),
          STATE_CYCLE.map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: s, children: [
            STATE_CONFIG[s].label,
            " (",
            stats[s] || 0,
            ")"
          ] }, s, true, {
            fileName: "app/components/PeriodicTable.jsx",
            lineNumber: 218,
            columnNumber: 37
          }, this))
        ] }, void 0, true, {
          fileName: "app/components/PeriodicTable.jsx",
          lineNumber: 216,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/PeriodicTable.jsx",
        lineNumber: 214,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.filterGroup, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { style: styles.filterLabel, children: "Group:" }, void 0, false, {
          fileName: "app/components/PeriodicTable.jsx",
          lineNumber: 222,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { style: styles.filterSelect, value: filterGroup, onChange: (e) => setFilterGroup(e.target.value), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "ALL", children: "All Groups" }, void 0, false, {
            fileName: "app/components/PeriodicTable.jsx",
            lineNumber: 224,
            columnNumber: 15
          }, this),
          groups.map((g) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: g, children: g }, g, false, {
            fileName: "app/components/PeriodicTable.jsx",
            lineNumber: 225,
            columnNumber: 32
          }, this))
        ] }, void 0, true, {
          fileName: "app/components/PeriodicTable.jsx",
          lineNumber: 223,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/PeriodicTable.jsx",
        lineNumber: 221,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/PeriodicTable.jsx",
      lineNumber: 213,
      columnNumber: 23
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.legend, children: [
      Object.entries(STATE_CONFIG).map(([key, cfg]) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LegendItem, { color: cfg.border, label: `${cfg.label} (${stats[key] || 0})`, icon: cfg.badge }, key, false, {
        fileName: "app/components/PeriodicTable.jsx",
        lineNumber: 232,
        columnNumber: 59
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.legendStat, children: [
        stats.OWNED,
        " / ",
        elements.length,
        " collected (",
        Math.round(stats.OWNED / Math.max(elements.length, 1) * 100),
        "%)"
      ] }, void 0, true, {
        fileName: "app/components/PeriodicTable.jsx",
        lineNumber: 233,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/PeriodicTable.jsx",
      lineNumber: 231,
      columnNumber: 7
    }, this),
    !readOnly && !compact && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.clickHint, children: "\u{1F4A1} Click an element to cycle: Missing \u2192 Owned \u2192 Wanted \u2192 Watchlist" }, void 0, false, {
      fileName: "app/components/PeriodicTable.jsx",
      lineNumber: 239,
      columnNumber: 33
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.tableScroll, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      display: "grid",
      gridTemplateColumns: `repeat(${TABLE_COLS}, ${cellSize}px)`,
      gridTemplateRows: `repeat(${TABLE_ROWS}, ${cellSize}px)`,
      gap: `${gap}px`,
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
      if (row === 8) {
        if (col === 3) {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            ...styles.labelCell,
            gridRow: row,
            gridColumn: col
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.seriesLabel, children: "La" }, void 0, false, {
            fileName: "app/components/PeriodicTable.jsx",
            lineNumber: 269,
            columnNumber: 21
          }, this) }, key, false, {
            fileName: "app/components/PeriodicTable.jsx",
            lineNumber: 264,
            columnNumber: 22
          }, this);
        }
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          gridRow: row,
          gridColumn: col
        } }, key, false, {
          fileName: "app/components/PeriodicTable.jsx",
          lineNumber: 272,
          columnNumber: 20
        }, this);
      }
      if (!el) {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          gridRow: row,
          gridColumn: col
        } }, key, false, {
          fileName: "app/components/PeriodicTable.jsx",
          lineNumber: 278,
          columnNumber: 20
        }, this);
      }
      const stateCfg = STATE_CONFIG[el.state] || STATE_CONFIG.MISSING;
      const groupColor = GROUP_COLORS[el.group] || {
        bg: "#fff",
        border: "#ccc",
        text: "#333"
      };
      const isDisabled = !el.isAvailable;
      const isFiltered = !el.visible;
      const isActive = selectedElement?.z === el.z;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        gridRow: row,
        gridColumn: col,
        width: cellSize,
        height: cellSize,
        background: isDisabled ? "#f5f5f5" : isFiltered ? "#fafafa" : stateCfg.bg,
        border: `2px solid ${isActive ? "#1565c0" : isDisabled ? "#e0e0e0" : isFiltered ? "#eee" : stateCfg.border}`,
        borderRadius: compact ? 4 : 6,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: isDisabled ? "default" : "pointer",
        opacity: isDisabled ? 0.3 : isFiltered ? 0.2 : 1,
        position: "relative",
        transition: "transform 0.1s, box-shadow 0.1s, opacity 0.2s",
        transform: isActive ? "scale(1.1)" : "scale(1)",
        boxShadow: isActive ? "0 2px 8px rgba(0,0,0,0.15)" : "none",
        zIndex: isActive ? 10 : 1
      }, onClick: () => handleCellClick(el), onMouseEnter: () => setHoveredElement(el), onMouseLeave: () => setHoveredElement(null), title: `${el.z}. ${el.name} (${el.sym}) \u2014 ${stateCfg.label}${!readOnly ? " \xB7 Click to change" : ""}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
          fontSize: compact ? 7 : 9,
          color: isDisabled ? "#bdbdbd" : groupColor.text,
          fontWeight: 600,
          lineHeight: 1
        }, children: el.z }, void 0, false, {
          fileName: "app/components/PeriodicTable.jsx",
          lineNumber: 312,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
          fontSize: compact ? 12 : 16,
          fontWeight: 800,
          color: isDisabled ? "#bdbdbd" : groupColor.text,
          lineHeight: 1.1
        }, children: el.sym }, void 0, false, {
          fileName: "app/components/PeriodicTable.jsx",
          lineNumber: 318,
          columnNumber: 19
        }, this),
        !compact && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
          fontSize: 6,
          color: isDisabled ? "#bdbdbd" : "#666",
          lineHeight: 1,
          maxWidth: cellSize - 4,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        }, children: el.name }, void 0, false, {
          fileName: "app/components/PeriodicTable.jsx",
          lineNumber: 324,
          columnNumber: 32
        }, this),
        stateCfg.badge && !isFiltered && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
          position: "absolute",
          top: -3,
          right: -3,
          fontSize: compact ? 8 : 10,
          color: stateCfg.badgeColor,
          background: "#fff",
          borderRadius: "50%",
          width: compact ? 12 : 14,
          height: compact ? 12 : 14,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 1px 2px rgba(0,0,0,0.1)"
        }, children: stateCfg.badge }, void 0, false, {
          fileName: "app/components/PeriodicTable.jsx",
          lineNumber: 333,
          columnNumber: 53
        }, this)
      ] }, key, true, {
        fileName: "app/components/PeriodicTable.jsx",
        lineNumber: 292,
        columnNumber: 18
      }, this);
    })) }, void 0, false, {
      fileName: "app/components/PeriodicTable.jsx",
      lineNumber: 245,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/PeriodicTable.jsx",
      lineNumber: 244,
      columnNumber: 7
    }, this),
    selectedElement && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.popover, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.popoverHeader, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.popoverZ, children: selectedElement.z }, void 0, false, {
            fileName: "app/components/PeriodicTable.jsx",
            lineNumber: 357,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.popoverSym, children: selectedElement.sym }, void 0, false, {
            fileName: "app/components/PeriodicTable.jsx",
            lineNumber: 358,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/PeriodicTable.jsx",
          lineNumber: 356,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: styles.popoverClose, onClick: () => setSelectedElement(null), children: "\u2715" }, void 0, false, {
          fileName: "app/components/PeriodicTable.jsx",
          lineNumber: 360,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/PeriodicTable.jsx",
        lineNumber: 355,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { style: styles.popoverName, children: selectedElement.name }, void 0, false, {
        fileName: "app/components/PeriodicTable.jsx",
        lineNumber: 362,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.popoverMeta, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
          "Group: ",
          selectedElement.group
        ] }, void 0, true, {
          fileName: "app/components/PeriodicTable.jsx",
          lineNumber: 364,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
          "Phase: ",
          selectedElement.phase
        ] }, void 0, true, {
          fileName: "app/components/PeriodicTable.jsx",
          lineNumber: 365,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/PeriodicTable.jsx",
        lineNumber: 363,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        ...styles.popoverStatus,
        color: STATE_CONFIG[selectedElement.state]?.badgeColor || "#333",
        background: STATE_CONFIG[selectedElement.state]?.bg || "#f8f8f8"
      }, children: [
        STATE_CONFIG[selectedElement.state]?.badge,
        " ",
        STATE_CONFIG[selectedElement.state]?.label || "Unknown"
      ] }, void 0, true, {
        fileName: "app/components/PeriodicTable.jsx",
        lineNumber: 367,
        columnNumber: 11
      }, this),
      !readOnly && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.popoverActions, children: STATE_CYCLE.map((state) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: {
        ...styles.popoverBtn,
        ...selectedElement.state === state ? {
          background: STATE_CONFIG[state].bg,
          borderColor: STATE_CONFIG[state].border,
          fontWeight: 700
        } : {}
      }, onClick: () => {
        onStateChange?.(selectedElement.sym, state);
        setSelectedElement(null);
      }, children: [
        STATE_CONFIG[state].badge,
        " ",
        STATE_CONFIG[state].label
      ] }, state, true, {
        fileName: "app/components/PeriodicTable.jsx",
        lineNumber: 375,
        columnNumber: 41
      }, this)) }, void 0, false, {
        fileName: "app/components/PeriodicTable.jsx",
        lineNumber: 374,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/PeriodicTable.jsx",
      lineNumber: 354,
      columnNumber: 27
    }, this),
    hoveredElement && !selectedElement && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.tooltip, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: [
        hoveredElement.z,
        ". ",
        hoveredElement.name
      ] }, void 0, true, {
        fileName: "app/components/PeriodicTable.jsx",
        lineNumber: 393,
        columnNumber: 11
      }, this),
      " (",
      hoveredElement.sym,
      ")",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/components/PeriodicTable.jsx",
        lineNumber: 394,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
        fontSize: 11,
        color: "#aaa"
      }, children: [
        hoveredElement.group,
        " \xB7 ",
        STATE_CONFIG[hoveredElement.state]?.label || "Missing",
        !readOnly && " \xB7 Click to change"
      ] }, void 0, true, {
        fileName: "app/components/PeriodicTable.jsx",
        lineNumber: 395,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/PeriodicTable.jsx",
      lineNumber: 392,
      columnNumber: 46
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/PeriodicTable.jsx",
    lineNumber: 211,
    columnNumber: 10
  }, this);
}
_s(PeriodicTable, "/xQJ1GfTOSMwDQ+oRlXFsjyPRmU=");
_c = PeriodicTable;
function LegendItem({
  color,
  label,
  icon
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.legendItem, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
      width: 14,
      height: 14,
      borderRadius: 3,
      border: `2px solid ${color}`,
      background: color === "#e0e0e0" ? "#f5f5f5" : color + "22",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 8,
      color
    }, children: icon }, void 0, false, {
      fileName: "app/components/PeriodicTable.jsx",
      lineNumber: 413,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: label }, void 0, false, {
      fileName: "app/components/PeriodicTable.jsx",
      lineNumber: 425,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/PeriodicTable.jsx",
    lineNumber: 412,
    columnNumber: 10
  }, this);
}
_c2 = LegendItem;
var styles = {
  wrapper: {
    position: "relative"
  },
  filters: {
    display: "flex",
    flexWrap: "wrap",
    gap: 16,
    marginBottom: 12,
    padding: "8px 12px",
    background: "#f8f9fa",
    borderRadius: 8,
    border: "1px solid #e9ecef"
  },
  filterGroup: {
    display: "flex",
    alignItems: "center",
    gap: 6
  },
  filterLabel: {
    fontSize: 12,
    fontWeight: 600,
    color: "#555"
  },
  filterSelect: {
    fontSize: 12,
    padding: "4px 8px",
    borderRadius: 6,
    border: "1px solid #dee2e6",
    background: "#fff",
    cursor: "pointer"
  },
  legend: {
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
    marginBottom: 12,
    fontSize: 12,
    color: "#555",
    alignItems: "center"
  },
  legendItem: {
    display: "flex",
    alignItems: "center",
    gap: 4
  },
  legendStat: {
    marginLeft: "auto",
    fontWeight: 700,
    color: "#388E3C",
    fontSize: 13
  },
  clickHint: {
    fontSize: 11,
    color: "#888",
    textAlign: "center",
    marginBottom: 8,
    fontStyle: "italic"
  },
  tableScroll: {
    overflowX: "auto",
    paddingBottom: 8,
    WebkitOverflowScrolling: "touch"
  },
  labelCell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  seriesLabel: {
    fontSize: 9,
    color: "#999",
    fontWeight: 600
  },
  popover: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "#fff",
    borderRadius: 12,
    boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
    padding: 24,
    minWidth: 300,
    zIndex: 1e3,
    border: "1px solid #e0e0e0"
  },
  popoverHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8
  },
  popoverZ: {
    fontSize: 13,
    color: "#888",
    fontWeight: 600,
    display: "block"
  },
  popoverSym: {
    fontSize: 40,
    fontWeight: 800,
    color: "#333",
    lineHeight: 1
  },
  popoverClose: {
    background: "none",
    border: "none",
    fontSize: 20,
    color: "#999",
    cursor: "pointer",
    padding: 4
  },
  popoverName: {
    fontSize: 18,
    fontWeight: 700,
    color: "#333",
    margin: "0 0 8px"
  },
  popoverMeta: {
    display: "flex",
    gap: 12,
    fontSize: 12,
    color: "#888",
    marginBottom: 12
  },
  popoverStatus: {
    fontSize: 14,
    fontWeight: 600,
    padding: "8px 12px",
    borderRadius: 8,
    marginBottom: 16
  },
  popoverActions: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap"
  },
  popoverBtn: {
    padding: "6px 12px",
    borderRadius: 8,
    border: "1px solid #e0e0e0",
    background: "#fff",
    color: "#333",
    fontSize: 12,
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.15s"
  },
  tooltip: {
    position: "fixed",
    bottom: 20,
    left: "50%",
    transform: "translateX(-50%)",
    background: "#333",
    color: "#fff",
    padding: "8px 16px",
    borderRadius: 8,
    fontSize: 13,
    zIndex: 999,
    pointerEvents: "none",
    whiteSpace: "nowrap",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
  }
};
var _c;
var _c2;
$RefreshReg$(_c, "PeriodicTable");
$RefreshReg$(_c2, "LegendItem");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  PeriodicTable
};
//# sourceMappingURL=/build/_shared/chunk-UYCKJRA2.js.map
