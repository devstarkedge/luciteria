import {
  require_mock_db
} from "/build/_shared/chunk-4XSVQ6EC.js";
import {
  AppNav
} from "/build/_shared/chunk-2HXTESER.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
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

// app/routes/app.cabinet.preferences.jsx
var import_node = __toESM(require_node());
var db = __toESM(require_mock_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.cabinet.preferences.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.cabinet.preferences.jsx"
  );
  import.meta.hot.lastModified = "1779491625689.3672";
}
var DUPLICATE_OPTIONS = [{
  value: "never",
  label: "Never send duplicates",
  description: "Only elements I don't already own. The purist's choice.",
  icon: "\u{1F6AB}"
}, {
  value: "missing_only",
  label: "Only send missing items",
  description: "Same as above, plus excludes previously shipped items.",
  icon: "\u{1F50D}"
}, {
  value: "curated_subs",
  label: "Allow curated substitutions",
  description: "Allow thoughtful alternatives \u2014 even if it's something I own in a different format.",
  icon: "\u2728"
}, {
  value: "allow_if_limited",
  label: "Allow if inventory limited",
  description: "I'd rather get something than nothing. Send a duplicate if nothing else is available.",
  icon: "\u{1F504}"
}, {
  value: "surprise",
  label: "Surprise me",
  description: "I trust you. Send whatever you think is interesting.",
  icon: "\u{1F3B2}"
}];
var CATEGORY_OPTIONS = ["Lucite Cube", "Metal Bar", "Metal Cube", "Dome", "Bulk Sample", "Crystal", "Ampoule", "Display Case"];
var FORMAT_OPTIONS = ["50mm", "31mm", "25.4mm", "10.1mm", "10mm", "15x60mm"];
function PreferencesPage() {
  _s();
  const {
    customer,
    preferences,
    collectionType
  } = useLoaderData();
  const prefs = preferences || {};
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.layout, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppNav, { mode: "customer", customerName: customer?.firstName, collectionType }, void 0, false, {
      fileName: "app/routes/app.cabinet.preferences.jsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { style: styles.main, className: "luc-main", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: styles.title, children: "Your Preferences" }, void 0, false, {
        fileName: "app/routes/app.cabinet.preferences.jsx",
        lineNumber: 87,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.subtitle, children: "Fine-tune how your subscription works. These settings guide our assignment engine when picking your next element." }, void 0, false, {
        fileName: "app/routes/app.cabinet.preferences.jsx",
        lineNumber: 88,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { style: styles.section, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.sectionTitle, children: "Collection Type" }, void 0, false, {
          fileName: "app/routes/app.cabinet.preferences.jsx",
          lineNumber: 95,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.collectionTypeDisplay, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.ctIcon, children: "\u{1F9CA}" }, void 0, false, {
            fileName: "app/routes/app.cabinet.preferences.jsx",
            lineNumber: 97,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.ctName, children: collectionType }, void 0, false, {
              fileName: "app/routes/app.cabinet.preferences.jsx",
              lineNumber: 99,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.ctNote, children: "\u{1F512} Collection type is locked in the current phase. Multi-collection support coming soon." }, void 0, false, {
              fileName: "app/routes/app.cabinet.preferences.jsx",
              lineNumber: 100,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.cabinet.preferences.jsx",
            lineNumber: 98,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.cabinet.preferences.jsx",
          lineNumber: 96,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.cabinet.preferences.jsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { style: styles.section, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.sectionTitle, children: "Duplicate Handling" }, void 0, false, {
          fileName: "app/routes/app.cabinet.preferences.jsx",
          lineNumber: 107,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.sectionDesc, children: "What should we do when your missing items are running low or out of stock?" }, void 0, false, {
          fileName: "app/routes/app.cabinet.preferences.jsx",
          lineNumber: 108,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.radioGroup, children: DUPLICATE_OPTIONS.map((opt) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { style: {
          ...styles.radioCard,
          ...prefs.duplicateHandling === opt.value ? styles.radioCardSelected : {}
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.radioHeader, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.radioIcon, children: opt.icon }, void 0, false, {
              fileName: "app/routes/app.cabinet.preferences.jsx",
              lineNumber: 117,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "radio", name: "duplicateHandling", value: opt.value, defaultChecked: prefs.duplicateHandling === opt.value, style: styles.radioInput }, void 0, false, {
              fileName: "app/routes/app.cabinet.preferences.jsx",
              lineNumber: 118,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.radioLabel, children: opt.label }, void 0, false, {
              fileName: "app/routes/app.cabinet.preferences.jsx",
              lineNumber: 119,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.cabinet.preferences.jsx",
            lineNumber: 116,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.radioDesc, children: opt.description }, void 0, false, {
            fileName: "app/routes/app.cabinet.preferences.jsx",
            lineNumber: 121,
            columnNumber: 17
          }, this)
        ] }, opt.value, true, {
          fileName: "app/routes/app.cabinet.preferences.jsx",
          lineNumber: 112,
          columnNumber: 43
        }, this)) }, void 0, false, {
          fileName: "app/routes/app.cabinet.preferences.jsx",
          lineNumber: 111,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.cabinet.preferences.jsx",
        lineNumber: 106,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { style: styles.section, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.sectionTitle, children: "Preferred Product Categories" }, void 0, false, {
          fileName: "app/routes/app.cabinet.preferences.jsx",
          lineNumber: 128,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.sectionDesc, children: "Select the types of products you love most. We'll prioritize these in your assignments." }, void 0, false, {
          fileName: "app/routes/app.cabinet.preferences.jsx",
          lineNumber: 129,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.checkboxGrid, children: CATEGORY_OPTIONS.map((cat) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { style: styles.checkboxCard, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", defaultChecked: (prefs.preferredCategories || []).includes(cat), style: styles.checkbox }, void 0, false, {
            fileName: "app/routes/app.cabinet.preferences.jsx",
            lineNumber: 134,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: cat }, void 0, false, {
            fileName: "app/routes/app.cabinet.preferences.jsx",
            lineNumber: 135,
            columnNumber: 17
          }, this)
        ] }, cat, true, {
          fileName: "app/routes/app.cabinet.preferences.jsx",
          lineNumber: 133,
          columnNumber: 42
        }, this)) }, void 0, false, {
          fileName: "app/routes/app.cabinet.preferences.jsx",
          lineNumber: 132,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.cabinet.preferences.jsx",
        lineNumber: 127,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { style: styles.section, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.sectionTitle, children: "Preferred Formats" }, void 0, false, {
          fileName: "app/routes/app.cabinet.preferences.jsx",
          lineNumber: 142,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.checkboxGrid, children: FORMAT_OPTIONS.map((fmt) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { style: styles.checkboxCard, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", defaultChecked: (prefs.preferredFormats || []).includes(fmt), style: styles.checkbox }, void 0, false, {
            fileName: "app/routes/app.cabinet.preferences.jsx",
            lineNumber: 145,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: fmt }, void 0, false, {
            fileName: "app/routes/app.cabinet.preferences.jsx",
            lineNumber: 146,
            columnNumber: 17
          }, this)
        ] }, fmt, true, {
          fileName: "app/routes/app.cabinet.preferences.jsx",
          lineNumber: 144,
          columnNumber: 40
        }, this)) }, void 0, false, {
          fileName: "app/routes/app.cabinet.preferences.jsx",
          lineNumber: 143,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.cabinet.preferences.jsx",
        lineNumber: 141,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { style: styles.section, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.sectionTitle, children: "Budget Preference" }, void 0, false, {
          fileName: "app/routes/app.cabinet.preferences.jsx",
          lineNumber: 153,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.inputGroup, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.inputPrefix, children: "$" }, void 0, false, {
            fileName: "app/routes/app.cabinet.preferences.jsx",
            lineNumber: 155,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "number", placeholder: "No limit", defaultValue: prefs.budgetMaxUsd || "", style: styles.textInput }, void 0, false, {
            fileName: "app/routes/app.cabinet.preferences.jsx",
            lineNumber: 156,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.inputSuffix, children: "per item" }, void 0, false, {
            fileName: "app/routes/app.cabinet.preferences.jsx",
            lineNumber: 157,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.cabinet.preferences.jsx",
          lineNumber: 154,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.cabinet.preferences.jsx",
        lineNumber: 152,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { style: styles.section, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.sectionTitle, children: "Notification Preferences" }, void 0, false, {
          fileName: "app/routes/app.cabinet.preferences.jsx",
          lineNumber: 163,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.sectionDesc, children: "Control how you hear from us. All notifications are logged to our system." }, void 0, false, {
          fileName: "app/routes/app.cabinet.preferences.jsx",
          lineNumber: 164,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.toggleList, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToggleRow, { label: "Email notifications", description: "Shipment updates, assignment previews, collection milestones", checked: prefs.communicationEmail !== false }, void 0, false, {
            fileName: "app/routes/app.cabinet.preferences.jsx",
            lineNumber: 168,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToggleRow, { label: "SMS notifications", description: "Text alerts for shipments and rare item availability", checked: prefs.communicationSms === true }, void 0, false, {
            fileName: "app/routes/app.cabinet.preferences.jsx",
            lineNumber: 169,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToggleRow, { label: "Shipment tracking alerts", description: "Real-time tracking updates when your element ships", checked: prefs.shipmentNotifications !== false }, void 0, false, {
            fileName: "app/routes/app.cabinet.preferences.jsx",
            lineNumber: 170,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToggleRow, { label: "Restock alerts", description: "Get notified when wishlisted out-of-stock items become available", checked: prefs.restockAlerts !== false }, void 0, false, {
            fileName: "app/routes/app.cabinet.preferences.jsx",
            lineNumber: 171,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToggleRow, { label: "Price change notices", description: "Be notified when your grandfathered rate is about to expire", checked: true }, void 0, false, {
            fileName: "app/routes/app.cabinet.preferences.jsx",
            lineNumber: 172,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ToggleRow, { label: "Collection milestones", description: "Celebrate when you hit 10, 25, 50, 75, 100, or 118 elements", checked: true }, void 0, false, {
            fileName: "app/routes/app.cabinet.preferences.jsx",
            lineNumber: 173,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.cabinet.preferences.jsx",
          lineNumber: 167,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.cabinet.preferences.jsx",
        lineNumber: 162,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.saveRow, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: styles.saveBtn, children: "Save Preferences" }, void 0, false, {
          fileName: "app/routes/app.cabinet.preferences.jsx",
          lineNumber: 179,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.saveNote, children: "Changes take effect for your next subscription assignment." }, void 0, false, {
          fileName: "app/routes/app.cabinet.preferences.jsx",
          lineNumber: 180,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.cabinet.preferences.jsx",
        lineNumber: 178,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.cabinet.preferences.jsx",
      lineNumber: 86,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.cabinet.preferences.jsx",
    lineNumber: 84,
    columnNumber: 10
  }, this);
}
_s(PreferencesPage, "Zooz9EOHDEqbQg6b8t9WPmfuwW4=", false, function() {
  return [useLoaderData];
});
_c = PreferencesPage;
function ToggleRow({
  label,
  description,
  checked
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { style: styles.toggleRow, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.toggleInfo, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.toggleLabel, children: label }, void 0, false, {
        fileName: "app/routes/app.cabinet.preferences.jsx",
        lineNumber: 196,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.toggleDesc, children: description }, void 0, false, {
        fileName: "app/routes/app.cabinet.preferences.jsx",
        lineNumber: 197,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.cabinet.preferences.jsx",
      lineNumber: 195,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      ...styles.toggle,
      background: checked ? "var(--luc-accent)" : "#d1d5db"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      ...styles.toggleKnob,
      transform: checked ? "translateX(18px)" : "translateX(2px)"
    } }, void 0, false, {
      fileName: "app/routes/app.cabinet.preferences.jsx",
      lineNumber: 203,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/app.cabinet.preferences.jsx",
      lineNumber: 199,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.cabinet.preferences.jsx",
    lineNumber: 194,
    columnNumber: 10
  }, this);
}
_c2 = ToggleRow;
var styles = {
  layout: {
    display: "flex",
    minHeight: "100vh"
  },
  main: {
    marginLeft: 240,
    flex: 1,
    padding: "24px 40px 60px",
    maxWidth: 720
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    color: "var(--luc-text)",
    margin: 0
  },
  subtitle: {
    fontSize: 14,
    color: "var(--luc-text-muted)",
    margin: "4px 0 32px",
    lineHeight: 1.5
  },
  section: {
    marginBottom: 36
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: "var(--luc-text)",
    marginBottom: 4
  },
  sectionDesc: {
    fontSize: 13,
    color: "var(--luc-text-muted)",
    margin: "0 0 16px",
    lineHeight: 1.5
  },
  collectionTypeDisplay: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: 16,
    background: "#EBF3FC",
    border: "1px solid #bfdbfe",
    borderRadius: 10,
    marginTop: 12
  },
  ctIcon: {
    fontSize: 28
  },
  ctName: {
    fontSize: 16,
    fontWeight: 700,
    color: "var(--luc-accent)",
    textTransform: "capitalize"
  },
  ctNote: {
    fontSize: 12,
    color: "var(--luc-text-muted)",
    marginTop: 2
  },
  radioGroup: {
    display: "flex",
    flexDirection: "column",
    gap: 8
  },
  radioCard: {
    display: "block",
    padding: 16,
    background: "#ffffff",
    border: "1px solid var(--luc-border)",
    borderRadius: 10,
    cursor: "pointer",
    transition: "border-color 0.15s ease"
  },
  radioCardSelected: {
    borderColor: "var(--luc-accent)",
    background: "#EBF3FC"
  },
  radioHeader: {
    display: "flex",
    alignItems: "center",
    gap: 10
  },
  radioIcon: {
    fontSize: 18
  },
  radioInput: {
    accentColor: "var(--luc-accent)"
  },
  radioLabel: {
    fontSize: 14,
    fontWeight: 600,
    color: "var(--luc-text)"
  },
  radioDesc: {
    fontSize: 12,
    color: "var(--luc-text-muted)",
    margin: "6px 0 0 28px",
    lineHeight: 1.4
  },
  checkboxGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8
  },
  checkboxCard: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 14px",
    background: "#ffffff",
    border: "1px solid var(--luc-border)",
    borderRadius: 8,
    fontSize: 13,
    color: "var(--luc-text)",
    cursor: "pointer"
  },
  checkbox: {
    accentColor: "var(--luc-accent)"
  },
  inputGroup: {
    display: "flex",
    alignItems: "center",
    gap: 8
  },
  inputPrefix: {
    fontSize: 16,
    color: "var(--luc-text-muted)",
    fontWeight: 600
  },
  textInput: {
    padding: "8px 14px",
    background: "#ffffff",
    border: "1px solid var(--luc-border)",
    borderRadius: 8,
    color: "var(--luc-text)",
    fontSize: 14,
    width: 120,
    outline: "none"
  },
  inputSuffix: {
    fontSize: 13,
    color: "var(--luc-text-muted)"
  },
  toggleList: {
    display: "flex",
    flexDirection: "column",
    gap: 12
  },
  toggleRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    background: "#ffffff",
    border: "1px solid var(--luc-border)",
    borderRadius: 10,
    cursor: "pointer"
  },
  toggleInfo: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    flex: 1
  },
  toggleLabel: {
    fontSize: 14,
    fontWeight: 600,
    color: "var(--luc-text)"
  },
  toggleDesc: {
    fontSize: 12,
    color: "var(--luc-text-muted)"
  },
  toggle: {
    width: 42,
    height: 24,
    borderRadius: 12,
    position: "relative",
    transition: "background 0.2s ease",
    flexShrink: 0,
    marginLeft: 16
  },
  toggleKnob: {
    width: 20,
    height: 20,
    borderRadius: "50%",
    background: "#fff",
    position: "absolute",
    top: 2,
    transition: "transform 0.2s ease",
    boxShadow: "0 1px 2px rgba(0,0,0,0.1)"
  },
  saveRow: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    paddingTop: 24,
    borderTop: "1px solid var(--luc-border)"
  },
  saveBtn: {
    padding: "10px 24px",
    background: "var(--luc-accent)",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer"
  },
  saveNote: {
    fontSize: 12,
    color: "var(--luc-text-muted)"
  }
};
var _c;
var _c2;
$RefreshReg$(_c, "PreferencesPage");
$RefreshReg$(_c2, "ToggleRow");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  PreferencesPage as default
};
//# sourceMappingURL=/build/routes/app.cabinet.preferences-PHT3P7C4.js.map
