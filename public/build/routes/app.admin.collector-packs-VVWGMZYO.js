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

// app/routes/app.admin.collector-packs.jsx
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
    window.$RefreshRuntime$.register(type, '"app/routes/app.admin.collector-packs.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.admin.collector-packs.jsx"
  );
  import.meta.hot.lastModified = "1779902387829.5386";
}
function AdminCollectorPacks() {
  _s();
  const {
    packs,
    products,
    tiers,
    eligibleCount
  } = useLoaderData();
  const actionData = useActionData();
  const navigation = useNavigation();
  const [showCreate, setShowCreate] = (0, import_react2.useState)(false);
  const [selectedSkus, setSelectedSkus] = (0, import_react2.useState)([]);
  const [itemCount, setItemCount] = (0, import_react2.useState)(3);
  const [previewPack, setPreviewPack] = (0, import_react2.useState)(null);
  const toggleSku = (sku) => {
    setSelectedSkus((prev) => {
      if (prev.includes(sku))
        return prev.filter((s) => s !== sku);
      if (prev.length >= itemCount)
        return prev;
      return [...prev, sku];
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.layout, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppNav, { mode: "admin" }, void 0, false, {
      fileName: "app/routes/app.admin.collector-packs.jsx",
      lineNumber: 193,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { style: styles.main, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.header, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: styles.title, children: "Collector Packs" }, void 0, false, {
            fileName: "app/routes/app.admin.collector-packs.jsx",
            lineNumber: 197,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.subtitle, children: [
            packs.length,
            " packs \xB7 ",
            eligibleCount,
            " eligible SKUs"
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.collector-packs.jsx",
            lineNumber: 198,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.collector-packs.jsx",
          lineNumber: 196,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: styles.createBtn, onClick: () => setShowCreate(!showCreate), children: showCreate ? "Cancel" : "+ New Pack" }, void 0, false, {
          fileName: "app/routes/app.admin.collector-packs.jsx",
          lineNumber: 200,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.collector-packs.jsx",
        lineNumber: 195,
        columnNumber: 9
      }, this),
      actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.error, children: actionData.error }, void 0, false, {
        fileName: "app/routes/app.admin.collector-packs.jsx",
        lineNumber: 205,
        columnNumber: 31
      }, this),
      actionData?.success && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.success, children: actionData.success }, void 0, false, {
        fileName: "app/routes/app.admin.collector-packs.jsx",
        lineNumber: 206,
        columnNumber: 33
      }, this),
      showCreate && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.createPanel, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: {
          margin: "0 0 16px"
        }, children: "Create New Pack" }, void 0, false, {
          fileName: "app/routes/app.admin.collector-packs.jsx",
          lineNumber: 209,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: "create" }, void 0, false, {
            fileName: "app/routes/app.admin.collector-packs.jsx",
            lineNumber: 213,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "skuList", value: selectedSkus.join(",") }, void 0, false, {
            fileName: "app/routes/app.admin.collector-packs.jsx",
            lineNumber: 214,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "itemCount", value: itemCount }, void 0, false, {
            fileName: "app/routes/app.admin.collector-packs.jsx",
            lineNumber: 215,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.formGrid, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { style: styles.field, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Pack Name" }, void 0, false, {
                fileName: "app/routes/app.admin.collector-packs.jsx",
                lineNumber: 219,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "name", required: true, placeholder: "e.g. Rare Earth Pack", style: styles.input }, void 0, false, {
                fileName: "app/routes/app.admin.collector-packs.jsx",
                lineNumber: 220,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.collector-packs.jsx",
              lineNumber: 218,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { style: styles.field, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Item Count" }, void 0, false, {
                fileName: "app/routes/app.admin.collector-packs.jsx",
                lineNumber: 223,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { style: styles.input, value: itemCount, onChange: (e) => {
                setItemCount(parseInt(e.target.value));
                setSelectedSkus([]);
              }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "3", children: "3 items" }, void 0, false, {
                  fileName: "app/routes/app.admin.collector-packs.jsx",
                  lineNumber: 228,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "5", children: "5 items" }, void 0, false, {
                  fileName: "app/routes/app.admin.collector-packs.jsx",
                  lineNumber: 229,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/app.admin.collector-packs.jsx",
                lineNumber: 224,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.collector-packs.jsx",
              lineNumber: 222,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { style: {
              ...styles.field,
              gridColumn: "span 2"
            }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Description" }, void 0, false, {
                fileName: "app/routes/app.admin.collector-packs.jsx",
                lineNumber: 236,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { name: "description", required: true, placeholder: "A curated collection of...", style: {
                ...styles.input,
                minHeight: "60px"
              } }, void 0, false, {
                fileName: "app/routes/app.admin.collector-packs.jsx",
                lineNumber: 237,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.collector-packs.jsx",
              lineNumber: 232,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { style: styles.field, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Price ($, optional)" }, void 0, false, {
                fileName: "app/routes/app.admin.collector-packs.jsx",
                lineNumber: 243,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "price", type: "number", step: "0.01", placeholder: "Leave blank for no direct price", style: styles.input }, void 0, false, {
                fileName: "app/routes/app.admin.collector-packs.jsx",
                lineNumber: 244,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.collector-packs.jsx",
              lineNumber: 242,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { style: styles.field, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Credit Cost (optional)" }, void 0, false, {
                fileName: "app/routes/app.admin.collector-packs.jsx",
                lineNumber: 247,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "creditCost", type: "number", step: "0.01", placeholder: "Leave blank", style: styles.input }, void 0, false, {
                fileName: "app/routes/app.admin.collector-packs.jsx",
                lineNumber: 248,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.collector-packs.jsx",
              lineNumber: 246,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { style: styles.field, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Tier Restriction" }, void 0, false, {
                fileName: "app/routes/app.admin.collector-packs.jsx",
                lineNumber: 251,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "tierId", style: styles.input, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "No restriction" }, void 0, false, {
                  fileName: "app/routes/app.admin.collector-packs.jsx",
                  lineNumber: 253,
                  columnNumber: 21
                }, this),
                tiers.map((t) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: t.id, children: t.displayName }, t.id, false, {
                  fileName: "app/routes/app.admin.collector-packs.jsx",
                  lineNumber: 254,
                  columnNumber: 37
                }, this))
              ] }, void 0, true, {
                fileName: "app/routes/app.admin.collector-packs.jsx",
                lineNumber: 252,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.collector-packs.jsx",
              lineNumber: 250,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { style: styles.field, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Stock Limit" }, void 0, false, {
                fileName: "app/routes/app.admin.collector-packs.jsx",
                lineNumber: 258,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "stockLimit", type: "number", placeholder: "Unlimited", style: styles.input }, void 0, false, {
                fileName: "app/routes/app.admin.collector-packs.jsx",
                lineNumber: 259,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.collector-packs.jsx",
              lineNumber: 257,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.collector-packs.jsx",
            lineNumber: 217,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { style: {
            margin: "16px 0 8px"
          }, children: [
            "Select ",
            itemCount,
            " SKUs (",
            selectedSkus.length,
            "/",
            itemCount,
            ")"
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.collector-packs.jsx",
            lineNumber: 263,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.skuGrid, children: products.map((p) => {
            const selected = selectedSkus.includes(p.sku);
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", style: {
              ...styles.skuItem,
              ...selected ? styles.skuSelected : {}
            }, onClick: () => toggleSku(p.sku), disabled: !selected && selectedSkus.length >= itemCount, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: p.elementSymbol }, void 0, false, {
                fileName: "app/routes/app.admin.collector-packs.jsx",
                lineNumber: 273,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
                fontSize: "11px"
              }, children: p.sku }, void 0, false, {
                fileName: "app/routes/app.admin.collector-packs.jsx",
                lineNumber: 274,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
                fontSize: "11px",
                color: "#6B7280"
              }, children: [
                "$",
                p.priceUsd?.toFixed(2)
              ] }, void 0, true, {
                fileName: "app/routes/app.admin.collector-packs.jsx",
                lineNumber: 277,
                columnNumber: 23
              }, this),
              selected && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.check, children: "\u2713" }, void 0, false, {
                fileName: "app/routes/app.admin.collector-packs.jsx",
                lineNumber: 281,
                columnNumber: 36
              }, this)
            ] }, p.sku, true, {
              fileName: "app/routes/app.admin.collector-packs.jsx",
              lineNumber: 269,
              columnNumber: 22
            }, this);
          }) }, void 0, false, {
            fileName: "app/routes/app.admin.collector-packs.jsx",
            lineNumber: 266,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", style: {
            ...styles.submitBtn,
            opacity: selectedSkus.length !== itemCount ? 0.5 : 1
          }, disabled: selectedSkus.length !== itemCount || navigation.state === "submitting", children: [
            "Create Pack (",
            selectedSkus.length,
            "/",
            itemCount,
            " selected)"
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.collector-packs.jsx",
            lineNumber: 286,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.collector-packs.jsx",
          lineNumber: 212,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.collector-packs.jsx",
        lineNumber: 208,
        columnNumber: 24
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.packGrid, children: packs.map((pack) => {
        const skuList = JSON.parse(pack.skuList || "[]");
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          ...styles.packCard,
          opacity: pack.isActive ? 1 : 0.6
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.packHeader, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.packName, children: pack.name }, void 0, false, {
              fileName: "app/routes/app.admin.collector-packs.jsx",
              lineNumber: 303,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
              ...styles.badge,
              backgroundColor: pack.isActive ? "#D1FAE5" : "#F3F4F6"
            }, children: pack.isActive ? "Active" : "Inactive" }, void 0, false, {
              fileName: "app/routes/app.admin.collector-packs.jsx",
              lineNumber: 304,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.collector-packs.jsx",
            lineNumber: 302,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.packDesc, children: pack.description }, void 0, false, {
            fileName: "app/routes/app.admin.collector-packs.jsx",
            lineNumber: 311,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.packMeta, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
              "\u{1F4E6} ",
              pack.itemCount,
              " items"
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.collector-packs.jsx",
              lineNumber: 313,
              columnNumber: 19
            }, this),
            pack.price && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
              "\u{1F4B5} $",
              pack.price.toFixed(2)
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.collector-packs.jsx",
              lineNumber: 314,
              columnNumber: 34
            }, this),
            pack.creditCost && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
              "\u{1F4B0} ",
              pack.creditCost,
              " credits"
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.collector-packs.jsx",
              lineNumber: 315,
              columnNumber: 39
            }, this),
            pack.tier && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
              "\u{1F3C6} ",
              pack.tier.displayName,
              "+"
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.collector-packs.jsx",
              lineNumber: 316,
              columnNumber: 33
            }, this),
            pack.stockLimit && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
              "\u{1F4CA} Limit: ",
              pack.stockLimit
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.collector-packs.jsx",
              lineNumber: 317,
              columnNumber: 39
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.collector-packs.jsx",
            lineNumber: 312,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.skuTags, children: skuList.map((sku) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.skuTag, children: sku }, sku, false, {
            fileName: "app/routes/app.admin.collector-packs.jsx",
            lineNumber: 320,
            columnNumber: 39
          }, this)) }, void 0, false, {
            fileName: "app/routes/app.admin.collector-packs.jsx",
            lineNumber: 319,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.packActions, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", style: {
              display: "inline"
            }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: "toggle" }, void 0, false, {
                fileName: "app/routes/app.admin.collector-packs.jsx",
                lineNumber: 326,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "packId", value: pack.id }, void 0, false, {
                fileName: "app/routes/app.admin.collector-packs.jsx",
                lineNumber: 327,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", style: styles.actionBtn, children: pack.isActive ? "\u23F8 Deactivate" : "\u25B6 Activate" }, void 0, false, {
                fileName: "app/routes/app.admin.collector-packs.jsx",
                lineNumber: 328,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.collector-packs.jsx",
              lineNumber: 323,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", style: {
              display: "inline"
            }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: "delete" }, void 0, false, {
                fileName: "app/routes/app.admin.collector-packs.jsx",
                lineNumber: 333,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "packId", value: pack.id }, void 0, false, {
                fileName: "app/routes/app.admin.collector-packs.jsx",
                lineNumber: 334,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", style: {
                ...styles.actionBtn,
                color: "#DC2626"
              }, children: "\u{1F5D1} Delete" }, void 0, false, {
                fileName: "app/routes/app.admin.collector-packs.jsx",
                lineNumber: 335,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.collector-packs.jsx",
              lineNumber: 330,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.collector-packs.jsx",
            lineNumber: 322,
            columnNumber: 17
          }, this)
        ] }, pack.id, true, {
          fileName: "app/routes/app.admin.collector-packs.jsx",
          lineNumber: 298,
          columnNumber: 18
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/app.admin.collector-packs.jsx",
        lineNumber: 295,
        columnNumber: 9
      }, this),
      packs.length === 0 && !showCreate && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.emptyState, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
          fontSize: "48px"
        }, children: "\u{1F4E6}" }, void 0, false, {
          fileName: "app/routes/app.admin.collector-packs.jsx",
          lineNumber: 346,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "No collector packs yet" }, void 0, false, {
          fileName: "app/routes/app.admin.collector-packs.jsx",
          lineNumber: 349,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "First mark SKUs as eligible, then create themed packs here." }, void 0, false, {
          fileName: "app/routes/app.admin.collector-packs.jsx",
          lineNumber: 350,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.collector-packs.jsx",
        lineNumber: 345,
        columnNumber: 47
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.admin.collector-packs.jsx",
      lineNumber: 194,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.admin.collector-packs.jsx",
    lineNumber: 192,
    columnNumber: 10
  }, this);
}
_s(AdminCollectorPacks, "y6jFMGuB3LPmUnddlwWB8dB1Ycc=", false, function() {
  return [useLoaderData, useActionData, useNavigation];
});
_c = AdminCollectorPacks;
var styles = {
  layout: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#F9FAFB"
  },
  main: {
    flex: 1,
    padding: "32px",
    maxWidth: "1100px"
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
    fontWeight: 700
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
  createPanel: {
    padding: "24px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    border: "1px solid #E5E7EB",
    marginBottom: "24px"
  },
  formGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px"
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
  skuGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))",
    gap: "8px",
    marginBottom: "16px",
    maxHeight: "300px",
    overflowY: "auto"
  },
  skuItem: {
    padding: "8px",
    backgroundColor: "#F9FAFB",
    border: "1px solid #E5E7EB",
    borderRadius: "6px",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2px",
    fontSize: "13px",
    position: "relative",
    transition: "all 0.1s"
  },
  skuSelected: {
    backgroundColor: "#EEF2FF",
    borderColor: "#6366F1"
  },
  check: {
    position: "absolute",
    top: "4px",
    right: "4px",
    color: "#059669",
    fontWeight: 700
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
  packGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "16px"
  },
  packCard: {
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    border: "1px solid #E5E7EB"
  },
  packHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px"
  },
  packName: {
    margin: 0,
    fontSize: "18px",
    fontWeight: 700
  },
  badge: {
    fontSize: "11px",
    padding: "2px 8px",
    borderRadius: "4px",
    fontWeight: 600
  },
  packDesc: {
    fontSize: "13px",
    color: "#6B7280",
    margin: "0 0 12px"
  },
  packMeta: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    fontSize: "12px",
    color: "#374151",
    marginBottom: "12px"
  },
  skuTags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "4px",
    marginBottom: "12px"
  },
  skuTag: {
    fontSize: "10px",
    padding: "2px 6px",
    backgroundColor: "#EEF2FF",
    color: "#4338CA",
    borderRadius: "3px",
    fontFamily: "monospace"
  },
  packActions: {
    display: "flex",
    gap: "8px"
  },
  actionBtn: {
    padding: "5px 12px",
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
$RefreshReg$(_c, "AdminCollectorPacks");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AdminCollectorPacks as default
};
//# sourceMappingURL=/build/routes/app.admin.collector-packs-VVWGMZYO.js.map
