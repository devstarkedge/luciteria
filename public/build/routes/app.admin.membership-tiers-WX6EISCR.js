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

// app/routes/app.admin.membership-tiers.jsx
var import_node = __toESM(require_node());
var import_react2 = __toESM(require_react());
var import_db_server = __toESM(require_db_server());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.admin.membership-tiers.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.admin.membership-tiers.jsx"
  );
  import.meta.hot.lastModified = "1779902304381.3794";
}
function AdminMembershipTiers() {
  _s();
  const {
    tiers
  } = useLoaderData();
  const actionData = useActionData();
  const navigation = useNavigation();
  const [showCreate, setShowCreate] = (0, import_react2.useState)(false);
  const [editingId, setEditingId] = (0, import_react2.useState)(null);
  const isSubmitting = navigation.state === "submitting";
  const activeTiers = tiers.filter((t) => t.isActive);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.layout, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppNav, { mode: "admin" }, void 0, false, {
      fileName: "app/routes/app.admin.membership-tiers.jsx",
      lineNumber: 175,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { style: styles.main, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.header, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: styles.title, children: "Membership Tiers" }, void 0, false, {
            fileName: "app/routes/app.admin.membership-tiers.jsx",
            lineNumber: 179,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.subtitle, children: [
            activeTiers.length,
            "/3 active tiers"
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.membership-tiers.jsx",
            lineNumber: 180,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.membership-tiers.jsx",
          lineNumber: 178,
          columnNumber: 11
        }, this),
        activeTiers.length < 3 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: styles.createBtn, onClick: () => setShowCreate(!showCreate), children: showCreate ? "Cancel" : "+ New Tier" }, void 0, false, {
          fileName: "app/routes/app.admin.membership-tiers.jsx",
          lineNumber: 182,
          columnNumber: 38
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.membership-tiers.jsx",
        lineNumber: 177,
        columnNumber: 9
      }, this),
      actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.error, children: actionData.error }, void 0, false, {
        fileName: "app/routes/app.admin.membership-tiers.jsx",
        lineNumber: 187,
        columnNumber: 31
      }, this),
      actionData?.success && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.success, children: actionData.success }, void 0, false, {
        fileName: "app/routes/app.admin.membership-tiers.jsx",
        lineNumber: 188,
        columnNumber: 33
      }, this),
      showCreate && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", style: styles.form, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: "create" }, void 0, false, {
          fileName: "app/routes/app.admin.membership-tiers.jsx",
          lineNumber: 191,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.formGrid, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { style: styles.field, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Internal Name" }, void 0, false, {
              fileName: "app/routes/app.admin.membership-tiers.jsx",
              lineNumber: 194,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "name", required: true, placeholder: "e.g. Gold", style: styles.input }, void 0, false, {
              fileName: "app/routes/app.admin.membership-tiers.jsx",
              lineNumber: 195,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.membership-tiers.jsx",
            lineNumber: 193,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { style: styles.field, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Display Name" }, void 0, false, {
              fileName: "app/routes/app.admin.membership-tiers.jsx",
              lineNumber: 198,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "displayName", required: true, placeholder: "e.g. Gold Collector", style: styles.input }, void 0, false, {
              fileName: "app/routes/app.admin.membership-tiers.jsx",
              lineNumber: 199,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.membership-tiers.jsx",
            lineNumber: 197,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { style: styles.field, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Monthly Price ($)" }, void 0, false, {
              fileName: "app/routes/app.admin.membership-tiers.jsx",
              lineNumber: 202,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "monthlyPrice", type: "number", step: "0.01", required: true, style: styles.input }, void 0, false, {
              fileName: "app/routes/app.admin.membership-tiers.jsx",
              lineNumber: 203,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.membership-tiers.jsx",
            lineNumber: 201,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { style: styles.field, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Store Credit ($)" }, void 0, false, {
              fileName: "app/routes/app.admin.membership-tiers.jsx",
              lineNumber: 206,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "storeCredit", type: "number", step: "0.01", required: true, style: styles.input }, void 0, false, {
              fileName: "app/routes/app.admin.membership-tiers.jsx",
              lineNumber: 207,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.membership-tiers.jsx",
            lineNumber: 205,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { style: styles.field, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Early Access (days)" }, void 0, false, {
              fileName: "app/routes/app.admin.membership-tiers.jsx",
              lineNumber: 210,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "earlyAccessDays", type: "number", defaultValue: "0", style: styles.input }, void 0, false, {
              fileName: "app/routes/app.admin.membership-tiers.jsx",
              lineNumber: 211,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.membership-tiers.jsx",
            lineNumber: 209,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.membership-tiers.jsx",
          lineNumber: 192,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", style: styles.submitBtn, disabled: isSubmitting, children: isSubmitting ? "Creating..." : "Create Tier" }, void 0, false, {
          fileName: "app/routes/app.admin.membership-tiers.jsx",
          lineNumber: 214,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.membership-tiers.jsx",
        lineNumber: 190,
        columnNumber: 24
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.tierGrid, children: tiers.map((tier) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        ...styles.tierCard,
        opacity: tier.isActive ? 1 : 0.6
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.tierHeader, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.tierIcon, children: tier.sortOrder === 1 ? "\u{1F949}" : tier.sortOrder === 2 ? "\u{1F948}" : "\u{1F947}" }, void 0, false, {
            fileName: "app/routes/app.admin.membership-tiers.jsx",
            lineNumber: 225,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.tierName, children: tier.displayName }, void 0, false, {
              fileName: "app/routes/app.admin.membership-tiers.jsx",
              lineNumber: 229,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { style: styles.tierCode, children: tier.name }, void 0, false, {
              fileName: "app/routes/app.admin.membership-tiers.jsx",
              lineNumber: 230,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.membership-tiers.jsx",
            lineNumber: 228,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
            ...styles.statusBadge,
            backgroundColor: tier.isActive ? "#D1FAE5" : "#F3F4F6",
            color: tier.isActive ? "#065F46" : "#6B7280"
          }, children: tier.isActive ? "Active" : "Inactive" }, void 0, false, {
            fileName: "app/routes/app.admin.membership-tiers.jsx",
            lineNumber: 232,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.membership-tiers.jsx",
          lineNumber: 224,
          columnNumber: 15
        }, this),
        editingId === tier.id ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", style: styles.editForm, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: "update" }, void 0, false, {
            fileName: "app/routes/app.admin.membership-tiers.jsx",
            lineNumber: 242,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "tierId", value: tier.id }, void 0, false, {
            fileName: "app/routes/app.admin.membership-tiers.jsx",
            lineNumber: 243,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { style: styles.field, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Display Name" }, void 0, false, {
              fileName: "app/routes/app.admin.membership-tiers.jsx",
              lineNumber: 244,
              columnNumber: 47
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "displayName", defaultValue: tier.displayName, style: styles.input }, void 0, false, {
              fileName: "app/routes/app.admin.membership-tiers.jsx",
              lineNumber: 244,
              columnNumber: 72
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.membership-tiers.jsx",
            lineNumber: 244,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { style: styles.field, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Monthly ($)" }, void 0, false, {
              fileName: "app/routes/app.admin.membership-tiers.jsx",
              lineNumber: 245,
              columnNumber: 47
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "monthlyPrice", type: "number", step: "0.01", defaultValue: tier.monthlyPrice, style: styles.input }, void 0, false, {
              fileName: "app/routes/app.admin.membership-tiers.jsx",
              lineNumber: 245,
              columnNumber: 71
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.membership-tiers.jsx",
            lineNumber: 245,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { style: styles.field, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Credit ($)" }, void 0, false, {
              fileName: "app/routes/app.admin.membership-tiers.jsx",
              lineNumber: 246,
              columnNumber: 47
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "storeCredit", type: "number", step: "0.01", defaultValue: tier.storeCredit, style: styles.input }, void 0, false, {
              fileName: "app/routes/app.admin.membership-tiers.jsx",
              lineNumber: 246,
              columnNumber: 70
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.membership-tiers.jsx",
            lineNumber: 246,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { style: styles.field, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Early Access (days)" }, void 0, false, {
              fileName: "app/routes/app.admin.membership-tiers.jsx",
              lineNumber: 247,
              columnNumber: 47
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "earlyAccessDays", type: "number", defaultValue: tier.earlyAccessDays, style: styles.input }, void 0, false, {
              fileName: "app/routes/app.admin.membership-tiers.jsx",
              lineNumber: 247,
              columnNumber: 79
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.membership-tiers.jsx",
            lineNumber: 247,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.editActions, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", style: styles.saveBtn, disabled: isSubmitting, children: "Save" }, void 0, false, {
              fileName: "app/routes/app.admin.membership-tiers.jsx",
              lineNumber: 249,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", style: styles.cancelBtn, onClick: () => setEditingId(null), children: "Cancel" }, void 0, false, {
              fileName: "app/routes/app.admin.membership-tiers.jsx",
              lineNumber: 250,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.membership-tiers.jsx",
            lineNumber: 248,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.membership-tiers.jsx",
          lineNumber: 241,
          columnNumber: 40
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.stats, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.stat, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.statLabel, children: "Monthly" }, void 0, false, {
                fileName: "app/routes/app.admin.membership-tiers.jsx",
                lineNumber: 254,
                columnNumber: 46
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.statValue, children: [
                "$",
                tier.monthlyPrice.toFixed(2)
              ] }, void 0, true, {
                fileName: "app/routes/app.admin.membership-tiers.jsx",
                lineNumber: 254,
                columnNumber: 91
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.membership-tiers.jsx",
              lineNumber: 254,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.stat, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.statLabel, children: "Credit" }, void 0, false, {
                fileName: "app/routes/app.admin.membership-tiers.jsx",
                lineNumber: 255,
                columnNumber: 46
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.statValue, children: [
                "$",
                tier.storeCredit.toFixed(2)
              ] }, void 0, true, {
                fileName: "app/routes/app.admin.membership-tiers.jsx",
                lineNumber: 255,
                columnNumber: 90
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.membership-tiers.jsx",
              lineNumber: 255,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.stat, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.statLabel, children: "Early Access" }, void 0, false, {
                fileName: "app/routes/app.admin.membership-tiers.jsx",
                lineNumber: 256,
                columnNumber: 46
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.statValue, children: [
                tier.earlyAccessDays,
                "d"
              ] }, void 0, true, {
                fileName: "app/routes/app.admin.membership-tiers.jsx",
                lineNumber: 256,
                columnNumber: 96
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.membership-tiers.jsx",
              lineNumber: 256,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.stat, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.statLabel, children: "Members" }, void 0, false, {
                fileName: "app/routes/app.admin.membership-tiers.jsx",
                lineNumber: 257,
                columnNumber: 46
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.statValue, children: tier._count.users }, void 0, false, {
                fileName: "app/routes/app.admin.membership-tiers.jsx",
                lineNumber: 257,
                columnNumber: 91
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.membership-tiers.jsx",
              lineNumber: 257,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.membership-tiers.jsx",
            lineNumber: 253,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.tierActions, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: styles.editBtn, onClick: () => setEditingId(tier.id), children: "\u270F\uFE0F Edit" }, void 0, false, {
              fileName: "app/routes/app.admin.membership-tiers.jsx",
              lineNumber: 260,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", style: {
              display: "inline"
            }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: "toggle" }, void 0, false, {
                fileName: "app/routes/app.admin.membership-tiers.jsx",
                lineNumber: 264,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "tierId", value: tier.id }, void 0, false, {
                fileName: "app/routes/app.admin.membership-tiers.jsx",
                lineNumber: 265,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", style: styles.toggleBtn, children: tier.isActive ? "\u23F8 Deactivate" : "\u25B6 Activate" }, void 0, false, {
                fileName: "app/routes/app.admin.membership-tiers.jsx",
                lineNumber: 266,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.membership-tiers.jsx",
              lineNumber: 261,
              columnNumber: 21
            }, this),
            tier._count.users === 0 && tier._count.userSubscriptions === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", style: {
              display: "inline"
            }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: "delete" }, void 0, false, {
                fileName: "app/routes/app.admin.membership-tiers.jsx",
                lineNumber: 271,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "tierId", value: tier.id }, void 0, false, {
                fileName: "app/routes/app.admin.membership-tiers.jsx",
                lineNumber: 272,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", style: styles.deleteBtn, children: "\u{1F5D1} Delete" }, void 0, false, {
                fileName: "app/routes/app.admin.membership-tiers.jsx",
                lineNumber: 273,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.membership-tiers.jsx",
              lineNumber: 268,
              columnNumber: 88
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.membership-tiers.jsx",
            lineNumber: 259,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.membership-tiers.jsx",
          lineNumber: 252,
          columnNumber: 27
        }, this)
      ] }, tier.id, true, {
        fileName: "app/routes/app.admin.membership-tiers.jsx",
        lineNumber: 220,
        columnNumber: 30
      }, this)) }, void 0, false, {
        fileName: "app/routes/app.admin.membership-tiers.jsx",
        lineNumber: 219,
        columnNumber: 9
      }, this),
      tiers.length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.emptyState, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
          fontSize: "48px"
        }, children: "\u{1F3C6}" }, void 0, false, {
          fileName: "app/routes/app.admin.membership-tiers.jsx",
          lineNumber: 281,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "No membership tiers yet" }, void 0, false, {
          fileName: "app/routes/app.admin.membership-tiers.jsx",
          lineNumber: 284,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Create up to 3 tiers (e.g., Bronze, Silver, Gold) to get started." }, void 0, false, {
          fileName: "app/routes/app.admin.membership-tiers.jsx",
          lineNumber: 285,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.membership-tiers.jsx",
        lineNumber: 280,
        columnNumber: 32
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.admin.membership-tiers.jsx",
      lineNumber: 176,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.admin.membership-tiers.jsx",
    lineNumber: 174,
    columnNumber: 10
  }, this);
}
_s(AdminMembershipTiers, "XM7Mczl6FjMnqVR4o52N5CbaH/A=", false, function() {
  return [useLoaderData, useActionData, useNavigation];
});
_c = AdminMembershipTiers;
var styles = {
  layout: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#F9FAFB"
  },
  main: {
    flex: 1,
    padding: "32px",
    maxWidth: "960px"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "24px"
  },
  title: {
    margin: 0,
    fontSize: "24px",
    fontWeight: 700,
    color: "#111827"
  },
  subtitle: {
    margin: "4px 0 0",
    fontSize: "14px",
    color: "#6B7280"
  },
  createBtn: {
    padding: "8px 20px",
    backgroundColor: "#2563EB",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer"
  },
  error: {
    padding: "12px 16px",
    backgroundColor: "#FEF2F2",
    color: "#DC2626",
    borderRadius: "8px",
    marginBottom: "16px",
    fontSize: "14px"
  },
  success: {
    padding: "12px 16px",
    backgroundColor: "#F0FDF4",
    color: "#065F46",
    borderRadius: "8px",
    marginBottom: "16px",
    fontSize: "14px"
  },
  form: {
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    border: "1px solid #E5E7EB",
    marginBottom: "24px"
  },
  formGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
    marginBottom: "16px"
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    fontSize: "13px",
    fontWeight: 600,
    color: "#374151"
  },
  input: {
    padding: "8px 12px",
    border: "1px solid #D1D5DB",
    borderRadius: "6px",
    fontSize: "14px"
  },
  submitBtn: {
    padding: "10px 24px",
    backgroundColor: "#2563EB",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer"
  },
  tierGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "16px"
  },
  tierCard: {
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    border: "1px solid #E5E7EB"
  },
  tierHeader: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "16px"
  },
  tierIcon: {
    fontSize: "28px"
  },
  tierName: {
    margin: 0,
    fontSize: "18px",
    fontWeight: 700,
    color: "#111827"
  },
  tierCode: {
    fontSize: "11px",
    color: "#6366F1",
    backgroundColor: "#EEF2FF",
    padding: "1px 6px",
    borderRadius: "4px"
  },
  statusBadge: {
    marginLeft: "auto",
    fontSize: "11px",
    padding: "2px 8px",
    borderRadius: "4px",
    fontWeight: 600
  },
  stats: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "8px",
    marginBottom: "16px"
  },
  stat: {
    display: "flex",
    flexDirection: "column"
  },
  statLabel: {
    fontSize: "11px",
    color: "#6B7280",
    textTransform: "uppercase"
  },
  statValue: {
    fontSize: "16px",
    fontWeight: 700,
    color: "#111827"
  },
  tierActions: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap"
  },
  editBtn: {
    padding: "5px 12px",
    backgroundColor: "#EEF2FF",
    color: "#4338CA",
    border: "none",
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: 600,
    cursor: "pointer"
  },
  toggleBtn: {
    padding: "5px 12px",
    backgroundColor: "#FEF3C7",
    color: "#92400E",
    border: "none",
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: 600,
    cursor: "pointer"
  },
  deleteBtn: {
    padding: "5px 12px",
    backgroundColor: "#FEF2F2",
    color: "#DC2626",
    border: "none",
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: 600,
    cursor: "pointer"
  },
  editForm: {
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  },
  editActions: {
    display: "flex",
    gap: "8px",
    marginTop: "8px"
  },
  saveBtn: {
    padding: "6px 16px",
    backgroundColor: "#059669",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: 600,
    cursor: "pointer"
  },
  cancelBtn: {
    padding: "6px 16px",
    backgroundColor: "#F3F4F6",
    color: "#374151",
    border: "none",
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: 600,
    cursor: "pointer"
  },
  emptyState: {
    textAlign: "center",
    padding: "48px",
    color: "#6B7280"
  }
};
var _c;
$RefreshReg$(_c, "AdminMembershipTiers");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AdminMembershipTiers as default
};
//# sourceMappingURL=/build/routes/app.admin.membership-tiers-WX6EISCR.js.map
