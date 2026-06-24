import {
  StatCard
} from "/build/_shared/chunk-EV367IRU.js";
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
  Link,
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

// empty-module:../lib/assignment-engine.server
var require_assignment_engine = __commonJS({
  "empty-module:../lib/assignment-engine.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/app.admin.operations.jsx
var import_node = __toESM(require_node());
var import_react2 = __toESM(require_react());
var db = __toESM(require_mock_db());
var import_assignment_engine = __toESM(require_assignment_engine());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.admin.operations.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.admin.operations.jsx"
  );
  import.meta.hot.lastModified = "1779603213817.3953";
}
function AdminOperations() {
  _s();
  const {
    dashStats,
    assignmentPreviews,
    pendingExceptions,
    lowStock,
    customers,
    highDiscountShipments
  } = useLoaderData();
  const [searchQuery, setSearchQuery] = (0, import_react2.useState)("");
  const filteredAssignments = assignmentPreviews.filter((a) => {
    if (!searchQuery)
      return true;
    const q = searchQuery.toLowerCase();
    const name = `${a.customer.firstName} ${a.customer.lastName}`.toLowerCase();
    const email = (a.customer.email || "").toLowerCase();
    const ct = (a.collectionType || "").toLowerCase();
    const element = a.assignmentResult?.product?.elementSymbol?.toLowerCase() || "";
    const elementName = a.assignmentResult?.product?.elementName?.toLowerCase() || "";
    return name.includes(q) || email.includes(q) || ct.includes(q) || element.includes(q) || elementName.includes(q);
  });
  const handleExportCSV = async () => {
    const {
      exportCSV,
      todayStr
    } = await import("/build/_shared/export-utils.client-AMBZKMQI.js");
    const columns = [{
      label: "Customer",
      accessor: (r) => `${r.customer.firstName} ${r.customer.lastName}`
    }, {
      label: "Email",
      accessor: (r) => r.customer.email || ""
    }, {
      label: "Collection Type",
      accessor: (r) => r.collectionType
    }, {
      label: "Element",
      accessor: (r) => r.assignmentResult?.product?.elementSymbol || "N/A"
    }, {
      label: "Product",
      accessor: (r) => r.assignmentResult?.product?.title || "N/A"
    }, {
      label: "Price",
      accessor: (r) => r.assignmentResult?.product?.priceUsd?.toFixed(2) || ""
    }, {
      label: "Discount %",
      accessor: (r) => r.assignmentResult?.discount ? (r.assignmentResult.discount.discountPct * 100).toFixed(1) : "0"
    }, {
      label: "Ship Date",
      accessor: (r) => r.nextShipmentDate
    }, {
      label: "Status",
      accessor: (r) => r.assignmentResult?.success ? "Ready" : "Exception"
    }];
    exportCSV(filteredAssignments, columns, `operations-assignments-${todayStr()}`);
  };
  const handleExportJSON = async () => {
    const {
      exportJSON,
      todayStr
    } = await import("/build/_shared/export-utils.client-AMBZKMQI.js");
    const data = filteredAssignments.map((a) => ({
      customer: `${a.customer.firstName} ${a.customer.lastName}`,
      email: a.customer.email,
      collectionType: a.collectionType,
      element: a.assignmentResult?.product?.elementSymbol || null,
      product: a.assignmentResult?.product?.title || null,
      price: a.assignmentResult?.product?.priceUsd || null,
      discountPct: a.assignmentResult?.discount?.discountPct || 0,
      shipDate: a.nextShipmentDate,
      status: a.assignmentResult?.success ? "ready" : "exception"
    }));
    exportJSON(data, `operations-assignments-${todayStr()}`);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.layout, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppNav, { mode: "admin", customerName: "Admin" }, void 0, false, {
      fileName: "app/routes/app.admin.operations.jsx",
      lineNumber: 199,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { style: styles.main, className: "luc-main", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: styles.title, children: "Operations Dashboard" }, void 0, false, {
        fileName: "app/routes/app.admin.operations.jsx",
        lineNumber: 201,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.subtitle, children: "Subscription assignment engine control center." }, void 0, false, {
        fileName: "app/routes/app.admin.operations.jsx",
        lineNumber: 202,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.statsGrid, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, { icon: "\u{1F465}", label: "Customers", value: dashStats.totalCustomers, accent: "var(--luc-accent)" }, void 0, false, {
          fileName: "app/routes/app.admin.operations.jsx",
          lineNumber: 206,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, { icon: "\u{1F4EC}", label: "Active Subs", value: dashStats.activeSubscriptions, accent: "var(--luc-success)" }, void 0, false, {
          fileName: "app/routes/app.admin.operations.jsx",
          lineNumber: 207,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, { icon: "\u{1F4B0}", label: "MRR", value: `$${(dashStats.mrr || 0).toFixed(0)}`, accent: "var(--luc-gold)" }, void 0, false, {
          fileName: "app/routes/app.admin.operations.jsx",
          lineNumber: 208,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, { icon: "\u26A0\uFE0F", label: "Exceptions", value: dashStats.pendingExceptions, accent: dashStats.pendingExceptions > 0 ? "var(--luc-danger)" : "var(--luc-success)" }, void 0, false, {
          fileName: "app/routes/app.admin.operations.jsx",
          lineNumber: 209,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, { icon: "\u{1F512}", label: "Grandfathered", value: dashStats.grandfatheredCount || 0, accent: "var(--luc-accent)" }, void 0, false, {
          fileName: "app/routes/app.admin.operations.jsx",
          lineNumber: 210,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, { icon: "\u{1F4E6}", label: "Total Shipped", value: dashStats.totalShipments, accent: "var(--luc-text-muted)" }, void 0, false, {
          fileName: "app/routes/app.admin.operations.jsx",
          lineNumber: 211,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.operations.jsx",
        lineNumber: 205,
        columnNumber: 9
      }, this),
      dashStats.collectionTypeBreakdown && dashStats.collectionTypeBreakdown.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.breakdownSection, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { style: styles.breakdownTitle, children: "Collection Type Breakdown" }, void 0, false, {
          fileName: "app/routes/app.admin.operations.jsx",
          lineNumber: 216,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.breakdownGrid, children: dashStats.collectionTypeBreakdown.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.breakdownItem, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.breakdownCount, children: item.subscribers }, void 0, false, {
            fileName: "app/routes/app.admin.operations.jsx",
            lineNumber: 219,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.breakdownLabel, children: item.label }, void 0, false, {
            fileName: "app/routes/app.admin.operations.jsx",
            lineNumber: 220,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
            fontSize: "11px",
            color: "var(--luc-text-muted)"
          }, children: [
            "$",
            (item.revenue || 0).toFixed(0),
            "/mo"
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.operations.jsx",
            lineNumber: 221,
            columnNumber: 19
          }, this)
        ] }, item.type, true, {
          fileName: "app/routes/app.admin.operations.jsx",
          lineNumber: 218,
          columnNumber: 62
        }, this)) }, void 0, false, {
          fileName: "app/routes/app.admin.operations.jsx",
          lineNumber: 217,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.operations.jsx",
        lineNumber: 215,
        columnNumber: 95
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.toolbar, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.searchWrap, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.searchIcon, children: "\u{1F50D}" }, void 0, false, {
            fileName: "app/routes/app.admin.operations.jsx",
            lineNumber: 232,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", placeholder: "Search assignments by name, email, collection type, element...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), style: styles.searchInput }, void 0, false, {
            fileName: "app/routes/app.admin.operations.jsx",
            lineNumber: 233,
            columnNumber: 13
          }, this),
          searchQuery && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setSearchQuery(""), style: styles.clearBtn, children: "\u2715" }, void 0, false, {
            fileName: "app/routes/app.admin.operations.jsx",
            lineNumber: 234,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.operations.jsx",
          lineNumber: 231,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.exportBtns, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: handleExportCSV, style: styles.exportBtn, children: "\u{1F4E5} CSV" }, void 0, false, {
            fileName: "app/routes/app.admin.operations.jsx",
            lineNumber: 237,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: handleExportJSON, style: styles.exportBtn, children: "\u{1F4E5} JSON" }, void 0, false, {
            fileName: "app/routes/app.admin.operations.jsx",
            lineNumber: 238,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.operations.jsx",
          lineNumber: 236,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.operations.jsx",
        lineNumber: 230,
        columnNumber: 9
      }, this),
      searchQuery && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.filterNote, children: [
        "Showing ",
        filteredAssignments.length,
        " of ",
        assignmentPreviews.length,
        " assignments"
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.operations.jsx",
        lineNumber: 241,
        columnNumber: 25
      }, this),
      highDiscountShipments.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.section, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.sectionTitle, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.alertDot }, void 0, false, {
            fileName: "app/routes/app.admin.operations.jsx",
            lineNumber: 246,
            columnNumber: 15
          }, this),
          "High Discount Alerts (",
          highDiscountShipments.length,
          ")"
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.operations.jsx",
          lineNumber: 245,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.discountList, children: highDiscountShipments.map((d, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.discountCard, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.discountSymbol, children: d.elementSymbol }, void 0, false, {
            fileName: "app/routes/app.admin.operations.jsx",
            lineNumber: 251,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.discountCustomer, children: d.customerName }, void 0, false, {
            fileName: "app/routes/app.admin.operations.jsx",
            lineNumber: 252,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
            ...styles.discountPct,
            color: d.discountPercent > 30 ? "var(--luc-danger)" : "var(--luc-warning)"
          }, children: [
            d.discountPercent.toFixed(1),
            "% off"
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.operations.jsx",
            lineNumber: 253,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.discountPrices, children: [
            "Retail: $",
            d.retailPrice?.toFixed(2),
            " \u2192 Sub: $",
            d.assignedPrice?.toFixed(2)
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.operations.jsx",
            lineNumber: 259,
            columnNumber: 19
          }, this)
        ] }, i, true, {
          fileName: "app/routes/app.admin.operations.jsx",
          lineNumber: 250,
          columnNumber: 52
        }, this)) }, void 0, false, {
          fileName: "app/routes/app.admin.operations.jsx",
          lineNumber: 249,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.operations.jsx",
        lineNumber: 244,
        columnNumber: 46
      }, this),
      pendingExceptions.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.section, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.sectionTitle, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.alertDot }, void 0, false, {
            fileName: "app/routes/app.admin.operations.jsx",
            lineNumber: 269,
            columnNumber: 15
          }, this),
          "Exception Queue (",
          pendingExceptions.length,
          ")"
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.operations.jsx",
          lineNumber: 268,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.exceptionList, children: pendingExceptions.map((exc) => {
          const customer = customers.find((c) => c.id === exc.customerId);
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.exceptionCard, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.excHeader, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.excCustomer, children: [
                customer?.firstName,
                " ",
                customer?.lastName
              ] }, void 0, true, {
                fileName: "app/routes/app.admin.operations.jsx",
                lineNumber: 277,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
                ...styles.excReason,
                color: exc.reason === "no_eligible_items" ? "var(--luc-danger)" : "var(--luc-warning)"
              }, children: exc.reason.replace(/_/g, " ") }, void 0, false, {
                fileName: "app/routes/app.admin.operations.jsx",
                lineNumber: 280,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.operations.jsx",
              lineNumber: 276,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.excDetails, children: exc.details }, void 0, false, {
              fileName: "app/routes/app.admin.operations.jsx",
              lineNumber: 287,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.excActions, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: styles.excBtn, children: "Override Assignment" }, void 0, false, {
                fileName: "app/routes/app.admin.operations.jsx",
                lineNumber: 289,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: styles.excBtn, children: "Skip This Month" }, void 0, false, {
                fileName: "app/routes/app.admin.operations.jsx",
                lineNumber: 290,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: styles.excBtn, children: "Assign Manually" }, void 0, false, {
                fileName: "app/routes/app.admin.operations.jsx",
                lineNumber: 291,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: {
                ...styles.excBtn,
                color: "var(--luc-success)"
              }, children: "Resolve" }, void 0, false, {
                fileName: "app/routes/app.admin.operations.jsx",
                lineNumber: 292,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.operations.jsx",
              lineNumber: 288,
              columnNumber: 21
            }, this)
          ] }, exc.id, true, {
            fileName: "app/routes/app.admin.operations.jsx",
            lineNumber: 275,
            columnNumber: 20
          }, this);
        }) }, void 0, false, {
          fileName: "app/routes/app.admin.operations.jsx",
          lineNumber: 272,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.operations.jsx",
        lineNumber: 267,
        columnNumber: 42
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.section, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.sectionTitle, children: [
          "Upcoming Subscription Assignments",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.autoNote, children: "Auto-approved \u2014 intervene only if needed" }, void 0, false, {
            fileName: "app/routes/app.admin.operations.jsx",
            lineNumber: 306,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.operations.jsx",
          lineNumber: 304,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.assignmentList, children: [
          filteredAssignments.map((a) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.assignmentCard, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.assignHeader, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/app/admin/customer/${a.customer.id}`, style: styles.customerLink, children: [
                  a.customer.firstName,
                  " ",
                  a.customer.lastName
                ] }, void 0, true, {
                  fileName: "app/routes/app.admin.operations.jsx",
                  lineNumber: 312,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.displayName, children: a.customer.displayName }, void 0, false, {
                  fileName: "app/routes/app.admin.operations.jsx",
                  lineNumber: 315,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.collectionBadge, children: a.collectionType }, void 0, false, {
                  fileName: "app/routes/app.admin.operations.jsx",
                  lineNumber: 316,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/app.admin.operations.jsx",
                lineNumber: 311,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.assignDate, children: [
                "Ships: ",
                new Date(a.nextShipmentDate).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric"
                })
              ] }, void 0, true, {
                fileName: "app/routes/app.admin.operations.jsx",
                lineNumber: 318,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.operations.jsx",
              lineNumber: 310,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.assignStats, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                "Owned: ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: a.ownedCount }, void 0, false, {
                  fileName: "app/routes/app.admin.operations.jsx",
                  lineNumber: 327,
                  columnNumber: 32
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/app.admin.operations.jsx",
                lineNumber: 327,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                "Eligible: ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { style: {
                  color: a.eligibleCount === 0 ? "var(--luc-danger)" : "var(--luc-success)"
                }, children: a.eligibleCount }, void 0, false, {
                  fileName: "app/routes/app.admin.operations.jsx",
                  lineNumber: 328,
                  columnNumber: 35
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/app.admin.operations.jsx",
                lineNumber: 328,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                "Wishlist: ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: a.wishlistCount }, void 0, false, {
                  fileName: "app/routes/app.admin.operations.jsx",
                  lineNumber: 331,
                  columnNumber: 35
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/app.admin.operations.jsx",
                lineNumber: 331,
                columnNumber: 19
              }, this),
              a.duplicateRisk && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.riskBadge, children: "\u26A0\uFE0F Low Eligible" }, void 0, false, {
                fileName: "app/routes/app.admin.operations.jsx",
                lineNumber: 332,
                columnNumber: 39
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.operations.jsx",
              lineNumber: 326,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.assignPreview, children: a.assignmentResult.success ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.previewSuccess, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.previewLabel, children: "Engine Pick:" }, void 0, false, {
                fileName: "app/routes/app.admin.operations.jsx",
                lineNumber: 338,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.previewSymbol, children: a.assignmentResult.product.elementSymbol }, void 0, false, {
                fileName: "app/routes/app.admin.operations.jsx",
                lineNumber: 339,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.previewTitle, children: a.assignmentResult.product.title }, void 0, false, {
                fileName: "app/routes/app.admin.operations.jsx",
                lineNumber: 340,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.previewPrice, children: [
                "$",
                a.assignmentResult.product.priceUsd.toFixed(2)
              ] }, void 0, true, {
                fileName: "app/routes/app.admin.operations.jsx",
                lineNumber: 341,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.previewStock, children: [
                "(",
                a.assignmentResult.product.inventoryQty,
                " in stock)"
              ] }, void 0, true, {
                fileName: "app/routes/app.admin.operations.jsx",
                lineNumber: 342,
                columnNumber: 23
              }, this),
              a.assignmentResult.discount && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
                ...styles.discountIndicator,
                color: a.assignmentResult.discount.exceedsThreshold ? "var(--luc-danger)" : "var(--luc-success)",
                background: a.assignmentResult.discount.exceedsThreshold ? "#fef2f2" : "#f0fdf4"
              }, children: [
                (a.assignmentResult.discount.discountPct * 100).toFixed(1),
                "% discount",
                a.assignmentResult.discount.exceedsThreshold && " \u26A0\uFE0F"
              ] }, void 0, true, {
                fileName: "app/routes/app.admin.operations.jsx",
                lineNumber: 345,
                columnNumber: 55
              }, this),
              a.assignmentResult.flags?.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.flagRow, children: a.assignmentResult.flags.map((f) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
                ...styles.flag,
                color: f.includes("discount") ? "var(--luc-danger)" : "var(--luc-warning)"
              }, children: [
                f === "high_value" ? "\u{1F4B0}" : f === "low_stock" ? "\u{1F4C9}" : f.includes("discount") ? "\u26A0\uFE0F" : "\u{1F48E}",
                " ",
                f.replace(/_/g, " ")
              ] }, f, true, {
                fileName: "app/routes/app.admin.operations.jsx",
                lineNumber: 355,
                columnNumber: 62
              }, this)) }, void 0, false, {
                fileName: "app/routes/app.admin.operations.jsx",
                lineNumber: 354,
                columnNumber: 64
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.operations.jsx",
              lineNumber: 337,
              columnNumber: 49
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.previewFail, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.failIcon, children: "\u26A0\uFE0F" }, void 0, false, {
                fileName: "app/routes/app.admin.operations.jsx",
                lineNumber: 363,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: a.assignmentResult.reason }, void 0, false, {
                fileName: "app/routes/app.admin.operations.jsx",
                lineNumber: 364,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.operations.jsx",
              lineNumber: 362,
              columnNumber: 30
            }, this) }, void 0, false, {
              fileName: "app/routes/app.admin.operations.jsx",
              lineNumber: 336,
              columnNumber: 17
            }, this),
            a.sequence && a.sequence.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.sequenceSection, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.sequenceLabel, children: [
                "Next ",
                a.sequence.length,
                " Shipments Preview:"
              ] }, void 0, true, {
                fileName: "app/routes/app.admin.operations.jsx",
                lineNumber: 370,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.sequenceRow, children: a.sequence.map((s, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
                ...styles.sequenceItem,
                borderColor: s.success ? s.discount?.exceedsThreshold ? "var(--luc-danger)" : "var(--luc-border)" : "var(--luc-danger)"
              }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.seqMonth, children: [
                  "Mo ",
                  s.month
                ] }, void 0, true, {
                  fileName: "app/routes/app.admin.operations.jsx",
                  lineNumber: 376,
                  columnNumber: 27
                }, this),
                s.success ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.seqSymbol, children: s.product.elementSymbol }, void 0, false, {
                    fileName: "app/routes/app.admin.operations.jsx",
                    lineNumber: 378,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.seqName, children: s.product.elementName }, void 0, false, {
                    fileName: "app/routes/app.admin.operations.jsx",
                    lineNumber: 379,
                    columnNumber: 31
                  }, this),
                  s.discount && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
                    fontSize: 9,
                    color: s.discount.exceedsThreshold ? "var(--luc-danger)" : "var(--luc-text-muted)",
                    fontWeight: s.discount.exceedsThreshold ? 700 : 400
                  }, children: [
                    (s.discount.discountPct * 100).toFixed(0),
                    "%"
                  ] }, void 0, true, {
                    fileName: "app/routes/app.admin.operations.jsx",
                    lineNumber: 380,
                    columnNumber: 46
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/app.admin.operations.jsx",
                  lineNumber: 377,
                  columnNumber: 40
                }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.seqFail, children: "\u2717" }, void 0, false, {
                  fileName: "app/routes/app.admin.operations.jsx",
                  lineNumber: 387,
                  columnNumber: 35
                }, this)
              ] }, i, true, {
                fileName: "app/routes/app.admin.operations.jsx",
                lineNumber: 372,
                columnNumber: 49
              }, this)) }, void 0, false, {
                fileName: "app/routes/app.admin.operations.jsx",
                lineNumber: 371,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.operations.jsx",
              lineNumber: 369,
              columnNumber: 57
            }, this),
            a.assignmentResult.alternates?.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.alternates, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.altLabel, children: "Alternates:" }, void 0, false, {
                fileName: "app/routes/app.admin.operations.jsx",
                lineNumber: 394,
                columnNumber: 21
              }, this),
              a.assignmentResult.alternates.map((alt) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.altItem, children: [
                alt.elementSymbol,
                " (",
                alt.inventoryQty,
                ")"
              ] }, alt.id, true, {
                fileName: "app/routes/app.admin.operations.jsx",
                lineNumber: 395,
                columnNumber: 63
              }, this))
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.operations.jsx",
              lineNumber: 393,
              columnNumber: 63
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.adminActions, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.autoApprovedBadge, children: "\u2713 Auto-Approved" }, void 0, false, {
                fileName: "app/routes/app.admin.operations.jsx",
                lineNumber: 402,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: styles.substituteBtn, children: "\u270F\uFE0F Override" }, void 0, false, {
                fileName: "app/routes/app.admin.operations.jsx",
                lineNumber: 403,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: styles.substituteBtn, children: "\u2194 Substitute" }, void 0, false, {
                fileName: "app/routes/app.admin.operations.jsx",
                lineNumber: 404,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: styles.skipBtn2, children: "\u23ED Skip" }, void 0, false, {
                fileName: "app/routes/app.admin.operations.jsx",
                lineNumber: 405,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/app/admin/customer/${a.customer.id}`, style: styles.profileBtn, children: "View Profile \u2192" }, void 0, false, {
                fileName: "app/routes/app.admin.operations.jsx",
                lineNumber: 406,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.operations.jsx",
              lineNumber: 401,
              columnNumber: 17
            }, this)
          ] }, a.customer.id, true, {
            fileName: "app/routes/app.admin.operations.jsx",
            lineNumber: 309,
            columnNumber: 43
          }, this)),
          filteredAssignments.length === 0 && searchQuery && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.emptySearch, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
              fontSize: 32
            }, children: "\u{1F50D}" }, void 0, false, {
              fileName: "app/routes/app.admin.operations.jsx",
              lineNumber: 412,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              'No assignments match "',
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: searchQuery }, void 0, false, {
                fileName: "app/routes/app.admin.operations.jsx",
                lineNumber: 415,
                columnNumber: 42
              }, this),
              '"'
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.operations.jsx",
              lineNumber: 415,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.operations.jsx",
            lineNumber: 411,
            columnNumber: 65
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.operations.jsx",
          lineNumber: 308,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.operations.jsx",
        lineNumber: 303,
        columnNumber: 9
      }, this),
      lowStock.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.section, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.sectionTitle, children: "Low Stock Alert" }, void 0, false, {
          fileName: "app/routes/app.admin.operations.jsx",
          lineNumber: 422,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.lowStockGrid, children: lowStock.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.lowStockCard, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.lowStockSymbol, children: p.elementSymbol }, void 0, false, {
            fileName: "app/routes/app.admin.operations.jsx",
            lineNumber: 425,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.lowStockTitle, children: p.title }, void 0, false, {
            fileName: "app/routes/app.admin.operations.jsx",
            lineNumber: 426,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
            ...styles.lowStockQty,
            color: p.inventoryQty === 1 ? "var(--luc-danger)" : "var(--luc-warning)"
          }, children: [
            p.inventoryQty,
            " left"
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.operations.jsx",
            lineNumber: 427,
            columnNumber: 19
          }, this)
        ] }, p.id, true, {
          fileName: "app/routes/app.admin.operations.jsx",
          lineNumber: 424,
          columnNumber: 34
        }, this)) }, void 0, false, {
          fileName: "app/routes/app.admin.operations.jsx",
          lineNumber: 423,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.operations.jsx",
        lineNumber: 421,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.section, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.sectionTitle, children: "Customer Profiles" }, void 0, false, {
          fileName: "app/routes/app.admin.operations.jsx",
          lineNumber: 439,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.customerList, children: customers.map((c) => {
          const stats = db.getCustomerStats(c.id);
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/app/admin/customer/${c.id}`, style: styles.customerCard, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.custHeader, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.custName, children: [
                c.firstName,
                " ",
                c.lastName
              ] }, void 0, true, {
                fileName: "app/routes/app.admin.operations.jsx",
                lineNumber: 445,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.custDisplay, children: c.displayName }, void 0, false, {
                fileName: "app/routes/app.admin.operations.jsx",
                lineNumber: 446,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.custCollection, children: c.collectionType || "lucite" }, void 0, false, {
                fileName: "app/routes/app.admin.operations.jsx",
                lineNumber: 447,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.operations.jsx",
              lineNumber: 444,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.custStats, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                "Collected: ",
                stats.totalCollected,
                "/",
                stats.totalProducts
              ] }, void 0, true, {
                fileName: "app/routes/app.admin.operations.jsx",
                lineNumber: 450,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                "Completion: ",
                stats.completionPct,
                "%"
              ] }, void 0, true, {
                fileName: "app/routes/app.admin.operations.jsx",
                lineNumber: 451,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.operations.jsx",
              lineNumber: 449,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.custProgressTrack, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
              ...styles.custProgressFill,
              width: `${stats.completionPct}%`
            } }, void 0, false, {
              fileName: "app/routes/app.admin.operations.jsx",
              lineNumber: 454,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/app.admin.operations.jsx",
              lineNumber: 453,
              columnNumber: 19
            }, this)
          ] }, c.id, true, {
            fileName: "app/routes/app.admin.operations.jsx",
            lineNumber: 443,
            columnNumber: 20
          }, this);
        }) }, void 0, false, {
          fileName: "app/routes/app.admin.operations.jsx",
          lineNumber: 440,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.operations.jsx",
        lineNumber: 438,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.admin.operations.jsx",
      lineNumber: 200,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.admin.operations.jsx",
    lineNumber: 198,
    columnNumber: 10
  }, this);
}
_s(AdminOperations, "11ObToAMeni4QdxJ+yAS5cq4y54=", false, function() {
  return [useLoaderData];
});
_c = AdminOperations;
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
  title: {
    fontSize: 24,
    fontWeight: 700,
    color: "var(--luc-text)",
    margin: 0
  },
  subtitle: {
    fontSize: 14,
    color: "var(--luc-text-muted)",
    margin: "4px 0 24px"
  },
  statsGrid: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    marginBottom: 24
  },
  breakdownSection: {
    marginBottom: 32
  },
  breakdownTitle: {
    fontSize: 13,
    fontWeight: 600,
    color: "var(--luc-text-muted)",
    textTransform: "uppercase",
    marginBottom: 8
  },
  breakdownGrid: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap"
  },
  breakdownItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px 18px",
    background: "#ffffff",
    border: "1px solid var(--luc-border)",
    borderRadius: 8,
    minWidth: 80
  },
  breakdownCount: {
    fontSize: 20,
    fontWeight: 700,
    color: "var(--luc-accent)"
  },
  breakdownLabel: {
    fontSize: 11,
    color: "var(--luc-text-muted)",
    textTransform: "capitalize"
  },
  // Search + Export Toolbar
  toolbar: {
    display: "flex",
    gap: 12,
    alignItems: "center",
    marginBottom: 8,
    padding: "12px 16px",
    background: "#ffffff",
    border: "1px solid var(--luc-border)",
    borderRadius: 10,
    flexWrap: "wrap"
  },
  searchWrap: {
    display: "flex",
    alignItems: "center",
    flex: 1,
    minWidth: 260,
    background: "#f8fafc",
    border: "1px solid var(--luc-border)",
    borderRadius: 8,
    padding: "0 12px"
  },
  searchIcon: {
    fontSize: 14,
    marginRight: 8,
    opacity: 0.5
  },
  searchInput: {
    flex: 1,
    border: "none",
    background: "transparent",
    padding: "10px 0",
    fontSize: 13,
    color: "var(--luc-text)",
    outline: "none"
  },
  clearBtn: {
    border: "none",
    background: "transparent",
    cursor: "pointer",
    fontSize: 14,
    color: "var(--luc-text-muted)",
    padding: "4px 8px"
  },
  exportBtns: {
    display: "flex",
    gap: 6
  },
  exportBtn: {
    padding: "8px 14px",
    borderRadius: 6,
    border: "1px solid var(--luc-border)",
    background: "#ffffff",
    color: "var(--luc-text)",
    fontSize: 12,
    fontWeight: 500,
    cursor: "pointer",
    whiteSpace: "nowrap",
    transition: "background 0.15s"
  },
  filterNote: {
    fontSize: 12,
    color: "var(--luc-text-muted)",
    margin: "4px 0 16px",
    fontStyle: "italic"
  },
  emptySearch: {
    textAlign: "center",
    padding: "40px 20px",
    color: "var(--luc-text-muted)",
    fontSize: 14
  },
  section: {
    marginBottom: 36
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: "var(--luc-text)",
    marginBottom: 16,
    paddingBottom: 8,
    borderBottom: "1px solid var(--luc-border)",
    display: "flex",
    alignItems: "center",
    gap: 8
  },
  alertDot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: "var(--luc-danger)",
    display: "inline-block"
  },
  // Discount alerts
  discountList: {
    display: "flex",
    flexDirection: "column",
    gap: 8
  },
  discountCard: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "10px 16px",
    background: "#fef2f2",
    border: "1px solid #fecaca",
    borderRadius: 8
  },
  discountSymbol: {
    fontSize: 18,
    fontWeight: 800,
    color: "var(--luc-danger)"
  },
  discountCustomer: {
    fontSize: 13,
    color: "var(--luc-text)",
    fontWeight: 500
  },
  discountPct: {
    fontSize: 13,
    fontWeight: 700,
    marginLeft: "auto"
  },
  discountPrices: {
    fontSize: 11,
    color: "var(--luc-text-muted)"
  },
  // Exception Cards
  exceptionList: {
    display: "flex",
    flexDirection: "column",
    gap: 12
  },
  exceptionCard: {
    background: "#ffffff",
    border: "1px solid var(--luc-danger)",
    borderLeft: "4px solid var(--luc-danger)",
    borderRadius: 10,
    padding: 16
  },
  excHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8
  },
  excCustomer: {
    fontSize: 15,
    fontWeight: 700,
    color: "var(--luc-text)"
  },
  excReason: {
    fontSize: 12,
    fontWeight: 600,
    textTransform: "uppercase"
  },
  excDetails: {
    fontSize: 13,
    color: "var(--luc-text-muted)",
    margin: "0 0 12px",
    lineHeight: 1.5
  },
  excActions: {
    display: "flex",
    gap: 8
  },
  excBtn: {
    padding: "5px 12px",
    borderRadius: 6,
    border: "1px solid var(--luc-border)",
    background: "transparent",
    color: "var(--luc-text-muted)",
    fontSize: 12,
    cursor: "pointer"
  },
  // Assignment Cards
  assignmentList: {
    display: "flex",
    flexDirection: "column",
    gap: 16
  },
  assignmentCard: {
    background: "#ffffff",
    border: "1px solid var(--luc-border)",
    borderRadius: 12,
    padding: 20,
    boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
  },
  assignHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 12
  },
  customerLink: {
    fontSize: 16,
    fontWeight: 700,
    color: "var(--luc-accent)",
    textDecoration: "none"
  },
  displayName: {
    fontSize: 12,
    color: "var(--luc-text-muted)",
    marginLeft: 8
  },
  collectionBadge: {
    fontSize: 10,
    fontWeight: 600,
    color: "var(--luc-accent)",
    background: "#EBF3FC",
    padding: "2px 8px",
    borderRadius: 4,
    marginLeft: 6,
    textTransform: "capitalize"
  },
  assignDate: {
    fontSize: 13,
    color: "var(--luc-text-muted)"
  },
  assignStats: {
    display: "flex",
    gap: 16,
    fontSize: 13,
    color: "var(--luc-text-muted)",
    marginBottom: 12
  },
  riskBadge: {
    color: "var(--luc-warning)",
    fontWeight: 600
  },
  assignPreview: {
    marginBottom: 12
  },
  previewSuccess: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    flexWrap: "wrap",
    padding: 12,
    background: "#f8fafc",
    borderRadius: 8
  },
  previewLabel: {
    fontSize: 11,
    color: "var(--luc-text-muted)",
    fontWeight: 600,
    textTransform: "uppercase"
  },
  previewSymbol: {
    fontSize: 20,
    fontWeight: 800,
    color: "var(--luc-accent)"
  },
  previewTitle: {
    fontSize: 14,
    fontWeight: 500,
    color: "var(--luc-text)"
  },
  previewPrice: {
    fontSize: 14,
    fontWeight: 700,
    color: "var(--luc-gold)"
  },
  previewStock: {
    fontSize: 12,
    color: "var(--luc-text-muted)"
  },
  discountIndicator: {
    fontSize: 11,
    fontWeight: 600,
    padding: "2px 8px",
    borderRadius: 4
  },
  flagRow: {
    display: "flex",
    gap: 6,
    width: "100%",
    marginTop: 4
  },
  flag: {
    fontSize: 11,
    background: "#f9fafb",
    padding: "2px 8px",
    borderRadius: 4
  },
  previewFail: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: 12,
    background: "#fef2f2",
    borderRadius: 8,
    fontSize: 13,
    color: "var(--luc-danger)"
  },
  failIcon: {
    fontSize: 18
  },
  // Sequence Preview
  sequenceSection: {
    marginBottom: 12
  },
  sequenceLabel: {
    fontSize: 11,
    color: "var(--luc-text-muted)",
    fontWeight: 600,
    display: "block",
    marginBottom: 6
  },
  sequenceRow: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap"
  },
  sequenceItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 2,
    padding: "8px 12px",
    background: "#f8fafc",
    border: "1px solid",
    borderRadius: 8,
    minWidth: 64
  },
  seqMonth: {
    fontSize: 9,
    color: "var(--luc-text-muted)",
    fontWeight: 600,
    textTransform: "uppercase"
  },
  seqSymbol: {
    fontSize: 18,
    fontWeight: 800,
    color: "var(--luc-accent)"
  },
  seqName: {
    fontSize: 9,
    color: "var(--luc-text-muted)",
    textAlign: "center",
    maxWidth: 60,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  },
  seqFail: {
    fontSize: 18,
    color: "var(--luc-danger)"
  },
  alternates: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginBottom: 12,
    flexWrap: "wrap"
  },
  altLabel: {
    fontSize: 11,
    color: "var(--luc-text-muted)",
    fontWeight: 600
  },
  altItem: {
    fontSize: 12,
    padding: "2px 8px",
    background: "#f0f2f5",
    borderRadius: 4,
    color: "var(--luc-text-muted)"
  },
  adminActions: {
    display: "flex",
    gap: 8,
    paddingTop: 12,
    borderTop: "1px solid var(--luc-border)"
  },
  autoApprovedBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    padding: "5px 12px",
    borderRadius: 6,
    border: "1px solid #86efac",
    background: "#f0fdf4",
    color: "#15803d",
    fontSize: 12,
    fontWeight: 600
  },
  autoNote: {
    display: "inline-block",
    marginLeft: 12,
    fontSize: 12,
    fontWeight: 400,
    color: "var(--luc-text-muted)",
    fontStyle: "italic"
  },
  substituteBtn: {
    padding: "6px 14px",
    borderRadius: 6,
    border: "1px solid var(--luc-border)",
    background: "transparent",
    color: "var(--luc-text)",
    fontSize: 12,
    cursor: "pointer"
  },
  skipBtn2: {
    padding: "6px 14px",
    borderRadius: 6,
    border: "1px solid var(--luc-border)",
    background: "transparent",
    color: "var(--luc-warning)",
    fontSize: 12,
    cursor: "pointer"
  },
  profileBtn: {
    marginLeft: "auto",
    fontSize: 12,
    color: "var(--luc-accent)",
    textDecoration: "none"
  },
  // Low Stock
  lowStockGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8
  },
  lowStockCard: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "10px 14px",
    background: "#ffffff",
    border: "1px solid var(--luc-border)",
    borderRadius: 8
  },
  lowStockSymbol: {
    fontSize: 18,
    fontWeight: 800,
    color: "var(--luc-accent)"
  },
  lowStockTitle: {
    fontSize: 12,
    color: "var(--luc-text)"
  },
  lowStockQty: {
    fontSize: 12,
    fontWeight: 700,
    marginLeft: "auto"
  },
  // Customer List
  customerList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: 12
  },
  customerCard: {
    display: "block",
    background: "#ffffff",
    border: "1px solid var(--luc-border)",
    borderRadius: 10,
    padding: 16,
    textDecoration: "none",
    transition: "border-color 0.15s",
    boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
  },
  custHeader: {
    marginBottom: 8
  },
  custName: {
    fontSize: 15,
    fontWeight: 700,
    color: "var(--luc-text)"
  },
  custDisplay: {
    fontSize: 12,
    color: "var(--luc-text-muted)",
    marginLeft: 6
  },
  custCollection: {
    fontSize: 10,
    fontWeight: 600,
    color: "var(--luc-accent)",
    background: "#EBF3FC",
    padding: "1px 6px",
    borderRadius: 4,
    marginLeft: 6
  },
  custStats: {
    display: "flex",
    gap: 12,
    fontSize: 12,
    color: "var(--luc-text-muted)",
    marginBottom: 8
  },
  custProgressTrack: {
    height: 4,
    background: "#e5e7eb",
    borderRadius: 2
  },
  custProgressFill: {
    height: "100%",
    background: "var(--luc-accent)",
    borderRadius: 2,
    transition: "width 0.5s ease"
  }
};
var _c;
$RefreshReg$(_c, "AdminOperations");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AdminOperations as default
};
//# sourceMappingURL=/build/routes/app.admin.operations-FRSXHLKC.js.map
