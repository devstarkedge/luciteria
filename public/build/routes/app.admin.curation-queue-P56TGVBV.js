import {
  AppNav
} from "/build/_shared/chunk-2HXTESER.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import "/build/_shared/chunk-PYMWJPZY.js";
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

// app/routes/app.admin.curation-queue.jsx
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.admin.curation-queue.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.admin.curation-queue.jsx"
  );
  import.meta.hot.lastModified = "1779902565157.5803";
}
function AdminCurationQueue() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.layout, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppNav, { mode: "admin" }, void 0, false, {
      fileName: "app/routes/app.admin.curation-queue.jsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { style: styles.main, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: styles.title, children: "Curation Queue" }, void 0, false, {
        fileName: "app/routes/app.admin.curation-queue.jsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.placeholder, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
          fontSize: "48px"
        }, children: "\u{1F381}" }, void 0, false, {
          fileName: "app/routes/app.admin.curation-queue.jsx",
          lineNumber: 40,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: {
          margin: "12px 0 8px",
          fontSize: "20px",
          fontWeight: 700
        }, children: "Phase 3 \u2014 Coming Soon" }, void 0, false, {
          fileName: "app/routes/app.admin.curation-queue.jsx",
          lineNumber: 43,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
          maxWidth: "500px",
          marginInline: "auto",
          fontSize: "14px",
          color: "#6B7280",
          lineHeight: 1.6
        }, children: "The curation queue will allow you to review and approve custom element shipment requests from subscribers. Each request will show the user's collection gaps, preferences, and suggested box contents." }, void 0, false, {
          fileName: "app/routes/app.admin.curation-queue.jsx",
          lineNumber: 48,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.mockQueue, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.mockHeader, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Request ID" }, void 0, false, {
              fileName: "app/routes/app.admin.curation-queue.jsx",
              lineNumber: 62,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Customer" }, void 0, false, {
              fileName: "app/routes/app.admin.curation-queue.jsx",
              lineNumber: 63,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Type" }, void 0, false, {
              fileName: "app/routes/app.admin.curation-queue.jsx",
              lineNumber: 64,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Elements" }, void 0, false, {
              fileName: "app/routes/app.admin.curation-queue.jsx",
              lineNumber: 65,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Status" }, void 0, false, {
              fileName: "app/routes/app.admin.curation-queue.jsx",
              lineNumber: 66,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Action" }, void 0, false, {
              fileName: "app/routes/app.admin.curation-queue.jsx",
              lineNumber: 67,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.curation-queue.jsx",
            lineNumber: 61,
            columnNumber: 13
          }, this),
          [1, 2, 3].map((i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.mockRow, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.skeleton }, void 0, false, {
              fileName: "app/routes/app.admin.curation-queue.jsx",
              lineNumber: 70,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
              ...styles.skeleton,
              width: "80px"
            } }, void 0, false, {
              fileName: "app/routes/app.admin.curation-queue.jsx",
              lineNumber: 71,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
              ...styles.skeleton,
              width: "60px"
            } }, void 0, false, {
              fileName: "app/routes/app.admin.curation-queue.jsx",
              lineNumber: 75,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
              ...styles.skeleton,
              width: "40px"
            } }, void 0, false, {
              fileName: "app/routes/app.admin.curation-queue.jsx",
              lineNumber: 79,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
              ...styles.skeleton,
              width: "50px"
            } }, void 0, false, {
              fileName: "app/routes/app.admin.curation-queue.jsx",
              lineNumber: 83,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
              ...styles.skeleton,
              width: "70px"
            } }, void 0, false, {
              fileName: "app/routes/app.admin.curation-queue.jsx",
              lineNumber: 87,
              columnNumber: 17
            }, this)
          ] }, i, true, {
            fileName: "app/routes/app.admin.curation-queue.jsx",
            lineNumber: 69,
            columnNumber: 33
          }, this))
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.curation-queue.jsx",
          lineNumber: 60,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.infoBox, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { style: {
            margin: "0 0 8px"
          }, children: "\u{1F527} When Phase 3 Activates" }, void 0, false, {
            fileName: "app/routes/app.admin.curation-queue.jsx",
            lineNumber: 95,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { style: {
            margin: 0,
            paddingLeft: "20px",
            fontSize: "13px",
            lineHeight: 1.8
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: 'Users can request "Send me N missing elements per quarter"' }, void 0, false, {
              fileName: "app/routes/app.admin.curation-queue.jsx",
              lineNumber: 104,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "System generates curated box from their collection gaps" }, void 0, false, {
              fileName: "app/routes/app.admin.curation-queue.jsx",
              lineNumber: 105,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Admin reviews and approves each box before fulfillment" }, void 0, false, {
              fileName: "app/routes/app.admin.curation-queue.jsx",
              lineNumber: 106,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Fixed cadence, fixed box size, controlled SKU pool" }, void 0, false, {
              fileName: "app/routes/app.admin.curation-queue.jsx",
              lineNumber: 107,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.curation-queue.jsx",
            lineNumber: 98,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.curation-queue.jsx",
          lineNumber: 94,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.curation-queue.jsx",
        lineNumber: 39,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.admin.curation-queue.jsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.admin.curation-queue.jsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_c = AdminCurationQueue;
var styles = {
  layout: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#F9FAFB"
  },
  main: {
    flex: 1,
    padding: "32px",
    maxWidth: "900px"
  },
  title: {
    margin: "0 0 24px",
    fontSize: "24px",
    fontWeight: 700
  },
  placeholder: {
    textAlign: "center",
    padding: "32px"
  },
  mockQueue: {
    margin: "24px auto",
    maxWidth: "600px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    border: "1px solid #E5E7EB",
    overflow: "hidden",
    textAlign: "left"
  },
  mockHeader: {
    display: "flex",
    gap: "12px",
    padding: "10px 16px",
    backgroundColor: "#F9FAFB",
    fontSize: "11px",
    fontWeight: 700,
    color: "#6B7280",
    textTransform: "uppercase"
  },
  mockRow: {
    display: "flex",
    gap: "12px",
    padding: "12px 16px",
    borderTop: "1px solid #F3F4F6"
  },
  skeleton: {
    display: "inline-block",
    width: "60px",
    height: "14px",
    backgroundColor: "#F3F4F6",
    borderRadius: "4px"
  },
  infoBox: {
    margin: "24px auto",
    maxWidth: "500px",
    padding: "20px",
    backgroundColor: "#F0F9FF",
    borderRadius: "12px",
    border: "1px solid #BAE6FD",
    textAlign: "left"
  }
};
var _c;
$RefreshReg$(_c, "AdminCurationQueue");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AdminCurationQueue as default
};
//# sourceMappingURL=/build/routes/app.admin.curation-queue-P56TGVBV.js.map
