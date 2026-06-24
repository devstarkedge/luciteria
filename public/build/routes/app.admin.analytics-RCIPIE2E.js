import {
  StatCard
} from "/build/_shared/chunk-EV367IRU.js";
import {
  require_mock_db
} from "/build/_shared/chunk-4XSVQ6EC.js";
import {
  require_collection
} from "/build/_shared/chunk-FTNGL5K7.js";
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

// app/routes/app.admin.analytics.jsx
var import_node = __toESM(require_node());
var import_react2 = __toESM(require_react());
var db = __toESM(require_mock_db());
var import_collection = __toESM(require_collection());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.admin.analytics.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.admin.analytics.jsx"
  );
  import.meta.hot.lastModified = "1779909198003.7026";
}
function AdminAnalytics() {
  _s();
  const {
    dashStats,
    customerAnalytics,
    productAnalytics,
    revenueByType,
    avgCompletion,
    avgPrice,
    churnRate,
    churnCount,
    monthlyTrend,
    collectionMetrics
  } = useLoaderData();
  const [activeTab, setActiveTab] = (0, import_react2.useState)("overview");
  const handleExportAll = async () => {
    const {
      exportJSON,
      todayStr
    } = await import("/build/_shared/export-utils.client-AMBZKMQI.js");
    const data = {
      exportDate: (/* @__PURE__ */ new Date()).toISOString(),
      kpis: {
        totalCustomers: dashStats.totalCustomers,
        activeSubscriptions: dashStats.activeSubscriptions,
        mrr: dashStats.mrr,
        avgCompletion,
        avgPrice,
        churnRate,
        grandfatheredCount: dashStats.grandfatheredCount
      },
      revenueByType,
      monthlyTrend,
      customers: customerAnalytics,
      products: productAnalytics
    };
    exportJSON(data, `analytics-full-export-${todayStr()}`);
  };
  const handleExportCSV = async () => {
    const {
      exportCSV,
      todayStr
    } = await import("/build/_shared/export-utils.client-AMBZKMQI.js");
    const columns = [{
      label: "Customer",
      accessor: (r) => r.name
    }, {
      label: "Email",
      accessor: (r) => r.email
    }, {
      label: "Collection Type",
      accessor: (r) => r.collectionType
    }, {
      label: "Plan",
      accessor: (r) => r.planName
    }, {
      label: "Status",
      accessor: (r) => r.status
    }, {
      label: "Price/mo",
      accessor: (r) => r.priceUsd.toFixed(2)
    }, {
      label: "Collected",
      accessor: (r) => r.collected
    }, {
      label: "Completion %",
      accessor: (r) => r.completionPct
    }, {
      label: "Shipments",
      accessor: (r) => r.shipments
    }, {
      label: "Grandfathered",
      accessor: (r) => r.grandfathered ? "Yes" : "No"
    }];
    exportCSV(customerAnalytics, columns, `analytics-customers-${todayStr()}`);
  };
  const maxMrr = Math.max(...monthlyTrend.map((m) => m.mrr));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.layout, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppNav, { mode: "admin", customerName: "Admin" }, void 0, false, {
      fileName: "app/routes/app.admin.analytics.jsx",
      lineNumber: 228,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { style: styles.main, className: "luc-main", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.headerRow, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: styles.title, children: "\u{1F4C8} Analytics Dashboard" }, void 0, false, {
            fileName: "app/routes/app.admin.analytics.jsx",
            lineNumber: 232,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.subtitle, children: "Business intelligence and subscription metrics." }, void 0, false, {
            fileName: "app/routes/app.admin.analytics.jsx",
            lineNumber: 233,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.analytics.jsx",
          lineNumber: 231,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.exportBtns, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: handleExportCSV, style: styles.exportBtn, children: "\u{1F4E5} CSV" }, void 0, false, {
            fileName: "app/routes/app.admin.analytics.jsx",
            lineNumber: 236,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: handleExportAll, style: styles.exportBtn, children: "\u{1F4E5} Full JSON" }, void 0, false, {
            fileName: "app/routes/app.admin.analytics.jsx",
            lineNumber: 237,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.analytics.jsx",
          lineNumber: 235,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.analytics.jsx",
        lineNumber: 230,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.kpiGrid, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, { icon: "\u{1F4B0}", label: "MRR", value: `$${(dashStats.mrr || 0).toFixed(0)}`, accent: "var(--luc-gold)" }, void 0, false, {
          fileName: "app/routes/app.admin.analytics.jsx",
          lineNumber: 243,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, { icon: "\u{1F4EC}", label: "Active Subs", value: dashStats.activeSubscriptions || 0, accent: "var(--luc-success)" }, void 0, false, {
          fileName: "app/routes/app.admin.analytics.jsx",
          lineNumber: 244,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, { icon: "\u{1F465}", label: "Total Customers", value: dashStats.totalCustomers || 0, accent: "var(--luc-accent)" }, void 0, false, {
          fileName: "app/routes/app.admin.analytics.jsx",
          lineNumber: 245,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, { icon: "\u{1F4CA}", label: "Avg Completion", value: `${avgCompletion}%`, accent: "var(--luc-accent)" }, void 0, false, {
          fileName: "app/routes/app.admin.analytics.jsx",
          lineNumber: 246,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, { icon: "\u{1F4B5}", label: "Avg Price/mo", value: `$${avgPrice}`, accent: "var(--luc-gold)" }, void 0, false, {
          fileName: "app/routes/app.admin.analytics.jsx",
          lineNumber: 247,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, { icon: "\u{1F4C9}", label: "Churn Rate", value: `${churnRate}%`, accent: parseFloat(churnRate) > 10 ? "var(--luc-danger)" : "var(--luc-success)" }, void 0, false, {
          fileName: "app/routes/app.admin.analytics.jsx",
          lineNumber: 248,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, { icon: "\u{1F512}", label: "Grandfathered", value: dashStats.grandfatheredCount || 0, accent: "var(--luc-warning)" }, void 0, false, {
          fileName: "app/routes/app.admin.analytics.jsx",
          lineNumber: 249,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, { icon: "\u{1F4E6}", label: "Total Shipped", value: dashStats.totalShipments || 0, accent: "var(--luc-text-muted)" }, void 0, false, {
          fileName: "app/routes/app.admin.analytics.jsx",
          lineNumber: 250,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.analytics.jsx",
        lineNumber: 242,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.tabs, children: ["overview", "customers", "products", "revenue", "collection"].map((tab) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setActiveTab(tab), style: activeTab === tab ? {
        ...styles.tab,
        ...styles.tabActive
      } : styles.tab, children: tab.charAt(0).toUpperCase() + tab.slice(1) }, tab, false, {
        fileName: "app/routes/app.admin.analytics.jsx",
        lineNumber: 255,
        columnNumber: 86
      }, this)) }, void 0, false, {
        fileName: "app/routes/app.admin.analytics.jsx",
        lineNumber: 254,
        columnNumber: 9
      }, this),
      activeTab === "overview" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.section, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.sectionTitle, children: "MRR Trend (Last 5 Months)" }, void 0, false, {
            fileName: "app/routes/app.admin.analytics.jsx",
            lineNumber: 267,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.chartWrap, children: monthlyTrend.map((m) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.chartCol, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.chartBarWrap, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
              ...styles.chartBar,
              height: `${m.mrr / maxMrr * 120}px`
            }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.chartBarVal, children: [
              "$",
              m.mrr
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 275,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 271,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 270,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.chartLabel, children: m.month }, void 0, false, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 278,
              columnNumber: 21
            }, this)
          ] }, m.month, true, {
            fileName: "app/routes/app.admin.analytics.jsx",
            lineNumber: 269,
            columnNumber: 40
          }, this)) }, void 0, false, {
            fileName: "app/routes/app.admin.analytics.jsx",
            lineNumber: 268,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.analytics.jsx",
          lineNumber: 266,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.section, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.sectionTitle, children: "Revenue by Collection Type" }, void 0, false, {
            fileName: "app/routes/app.admin.analytics.jsx",
            lineNumber: 285,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.revenueGrid, children: revenueByType.map((r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.revenueCard, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.revType, children: r.label }, void 0, false, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 288,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.revAmount, children: [
              "$",
              r.revenue.toFixed(0),
              "/mo"
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 289,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.revSubs, children: [
              r.subscribers,
              " subscribers"
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 290,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.revBarTrack, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
              ...styles.revBarFill,
              width: `${r.pctOfTotal}%`
            } }, void 0, false, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 292,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 291,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.revPct, children: [
              r.pctOfTotal,
              "% of MRR"
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 297,
              columnNumber: 21
            }, this)
          ] }, r.type, true, {
            fileName: "app/routes/app.admin.analytics.jsx",
            lineNumber: 287,
            columnNumber: 41
          }, this)) }, void 0, false, {
            fileName: "app/routes/app.admin.analytics.jsx",
            lineNumber: 286,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.analytics.jsx",
          lineNumber: 284,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.analytics.jsx",
        lineNumber: 264,
        columnNumber: 38
      }, this),
      activeTab === "customers" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.section, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.sectionTitle, children: "Customer Completion Rates" }, void 0, false, {
          fileName: "app/routes/app.admin.analytics.jsx",
          lineNumber: 305,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.tableWrap, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { style: styles.table, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: styles.th, children: "Customer" }, void 0, false, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 310,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: styles.th, children: "Collection" }, void 0, false, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 311,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: styles.th, children: "Plan" }, void 0, false, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 312,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: styles.th, children: "$/mo" }, void 0, false, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 313,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: styles.th, children: "Collected" }, void 0, false, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 314,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: styles.th, children: "Completion" }, void 0, false, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 315,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: styles.th, children: "Shipments" }, void 0, false, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 316,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: styles.th, children: "Status" }, void 0, false, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 317,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.analytics.jsx",
            lineNumber: 309,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/app.admin.analytics.jsx",
            lineNumber: 308,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: customerAnalytics.map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: styles.td, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
                fontWeight: 600
              }, children: c.name }, void 0, false, {
                fileName: "app/routes/app.admin.analytics.jsx",
                lineNumber: 323,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
                fontSize: 11,
                color: "var(--luc-text-muted)"
              }, children: c.email }, void 0, false, {
                fileName: "app/routes/app.admin.analytics.jsx",
                lineNumber: 326,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 322,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: styles.td, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.ctBadge, children: c.collectionType }, void 0, false, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 331,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 331,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: styles.td, children: c.planName }, void 0, false, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 332,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: styles.td, children: [
              "$",
              c.priceUsd.toFixed(2)
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 333,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: styles.td, children: [
              c.collected,
              "/",
              c.totalProducts
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 334,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: styles.td, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
              display: "flex",
              alignItems: "center",
              gap: 8
            }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.miniBarTrack, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
                ...styles.miniBarFill,
                width: `${c.completionPct}%`
              } }, void 0, false, {
                fileName: "app/routes/app.admin.analytics.jsx",
                lineNumber: 342,
                columnNumber: 29
              }, this) }, void 0, false, {
                fileName: "app/routes/app.admin.analytics.jsx",
                lineNumber: 341,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
                fontSize: 12,
                fontWeight: 600
              }, children: [
                c.completionPct,
                "%"
              ] }, void 0, true, {
                fileName: "app/routes/app.admin.analytics.jsx",
                lineNumber: 347,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 336,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 335,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: styles.td, children: c.shipments }, void 0, false, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 353,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: styles.td, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
              ...styles.statusPill,
              background: c.status === "active" ? "#f0fdf4" : "#fef2f2",
              color: c.status === "active" ? "#059669" : "#dc2626"
            }, children: c.status }, void 0, false, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 355,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 354,
              columnNumber: 23
            }, this)
          ] }, c.id, true, {
            fileName: "app/routes/app.admin.analytics.jsx",
            lineNumber: 321,
            columnNumber: 47
          }, this)) }, void 0, false, {
            fileName: "app/routes/app.admin.analytics.jsx",
            lineNumber: 320,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.analytics.jsx",
          lineNumber: 307,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/app.admin.analytics.jsx",
          lineNumber: 306,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.analytics.jsx",
        lineNumber: 304,
        columnNumber: 39
      }, this),
      activeTab === "products" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.section, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.sectionTitle, children: [
          "Product Inventory & Pricing (",
          productAnalytics.length,
          " products)"
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.analytics.jsx",
          lineNumber: 371,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.tableWrap, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { style: styles.table, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: styles.th, children: "Element" }, void 0, false, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 376,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: styles.th, children: "Product" }, void 0, false, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 377,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: styles.th, children: "Retail" }, void 0, false, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 378,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: styles.th, children: "Sub Cost" }, void 0, false, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 379,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: styles.th, children: "Margin" }, void 0, false, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 380,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: styles.th, children: "Stock" }, void 0, false, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 381,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: styles.th, children: "Collections" }, void 0, false, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 382,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.analytics.jsx",
            lineNumber: 375,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/app.admin.analytics.jsx",
            lineNumber: 374,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: productAnalytics.map((p) => {
            const margin = p.retailPrice > 0 ? ((p.retailPrice - p.subscriptionCost) / p.retailPrice * 100).toFixed(0) : 0;
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: styles.td, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
                  fontSize: 16,
                  fontWeight: 800,
                  color: "var(--luc-accent)"
                }, children: p.elementSymbol }, void 0, false, {
                  fileName: "app/routes/app.admin.analytics.jsx",
                  lineNumber: 390,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
                  fontSize: 11,
                  color: "var(--luc-text-muted)",
                  marginLeft: 6
                }, children: p.elementName }, void 0, false, {
                  fileName: "app/routes/app.admin.analytics.jsx",
                  lineNumber: 395,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/app.admin.analytics.jsx",
                lineNumber: 389,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: styles.td, children: p.title }, void 0, false, {
                fileName: "app/routes/app.admin.analytics.jsx",
                lineNumber: 401,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: styles.td, children: [
                "$",
                p.retailPrice?.toFixed(2)
              ] }, void 0, true, {
                fileName: "app/routes/app.admin.analytics.jsx",
                lineNumber: 402,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: styles.td, children: [
                "$",
                p.subscriptionCost?.toFixed(2)
              ] }, void 0, true, {
                fileName: "app/routes/app.admin.analytics.jsx",
                lineNumber: 403,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: {
                ...styles.td,
                color: margin > 0 ? "var(--luc-success)" : "var(--luc-danger)",
                fontWeight: 600
              }, children: [
                margin,
                "%"
              ] }, void 0, true, {
                fileName: "app/routes/app.admin.analytics.jsx",
                lineNumber: 404,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: {
                ...styles.td,
                color: p.inventoryQty <= 3 ? "var(--luc-danger)" : "var(--luc-text)",
                fontWeight: p.inventoryQty <= 3 ? 700 : 400
              }, children: p.inventoryQty }, void 0, false, {
                fileName: "app/routes/app.admin.analytics.jsx",
                lineNumber: 411,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: styles.td, children: (p.collectionTypes || []).map((ct) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
                ...styles.ctBadge,
                marginRight: 4
              }, children: ct }, ct, false, {
                fileName: "app/routes/app.admin.analytics.jsx",
                lineNumber: 419,
                columnNumber: 64
              }, this)) }, void 0, false, {
                fileName: "app/routes/app.admin.analytics.jsx",
                lineNumber: 418,
                columnNumber: 25
              }, this)
            ] }, p.id, true, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 388,
              columnNumber: 24
            }, this);
          }) }, void 0, false, {
            fileName: "app/routes/app.admin.analytics.jsx",
            lineNumber: 385,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.analytics.jsx",
          lineNumber: 373,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/app.admin.analytics.jsx",
          lineNumber: 372,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.analytics.jsx",
        lineNumber: 370,
        columnNumber: 38
      }, this),
      activeTab === "revenue" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.section, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.sectionTitle, children: "Monthly Metrics Trend" }, void 0, false, {
            fileName: "app/routes/app.admin.analytics.jsx",
            lineNumber: 434,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.tableWrap, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { style: styles.table, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: styles.th, children: "Month" }, void 0, false, {
                fileName: "app/routes/app.admin.analytics.jsx",
                lineNumber: 439,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: styles.th, children: "MRR" }, void 0, false, {
                fileName: "app/routes/app.admin.analytics.jsx",
                lineNumber: 440,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: styles.th, children: "Active Subs" }, void 0, false, {
                fileName: "app/routes/app.admin.analytics.jsx",
                lineNumber: 441,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: styles.th, children: "Shipments" }, void 0, false, {
                fileName: "app/routes/app.admin.analytics.jsx",
                lineNumber: 442,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: styles.th, children: "ARPU" }, void 0, false, {
                fileName: "app/routes/app.admin.analytics.jsx",
                lineNumber: 443,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 438,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 437,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: monthlyTrend.map((m) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: styles.td, children: [
                m.month,
                " 2026"
              ] }, void 0, true, {
                fileName: "app/routes/app.admin.analytics.jsx",
                lineNumber: 448,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: {
                ...styles.td,
                fontWeight: 700,
                color: "var(--luc-gold)"
              }, children: [
                "$",
                m.mrr
              ] }, void 0, true, {
                fileName: "app/routes/app.admin.analytics.jsx",
                lineNumber: 449,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: styles.td, children: m.subs }, void 0, false, {
                fileName: "app/routes/app.admin.analytics.jsx",
                lineNumber: 454,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: styles.td, children: m.shipments }, void 0, false, {
                fileName: "app/routes/app.admin.analytics.jsx",
                lineNumber: 455,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: styles.td, children: [
                "$",
                m.subs > 0 ? (m.mrr / m.subs).toFixed(2) : "\u2014"
              ] }, void 0, true, {
                fileName: "app/routes/app.admin.analytics.jsx",
                lineNumber: 456,
                columnNumber: 25
              }, this)
            ] }, m.month, true, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 447,
              columnNumber: 44
            }, this)) }, void 0, false, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 446,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.analytics.jsx",
            lineNumber: 436,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/app.admin.analytics.jsx",
            lineNumber: 435,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.analytics.jsx",
          lineNumber: 433,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.section, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.sectionTitle, children: "Revenue Concentration" }, void 0, false, {
            fileName: "app/routes/app.admin.analytics.jsx",
            lineNumber: 464,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.concGrid, children: revenueByType.sort((a, b) => b.revenue - a.revenue).map((r, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.concCard, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.concRank, children: [
              "#",
              i + 1
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 467,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.concType, children: r.label }, void 0, false, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 468,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.concRevenue, children: [
              "$",
              r.revenue.toFixed(0),
              "/mo"
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 469,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.concPct, children: [
              r.pctOfTotal,
              "% of total"
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 470,
              columnNumber: 21
            }, this)
          ] }, r.type, true, {
            fileName: "app/routes/app.admin.analytics.jsx",
            lineNumber: 466,
            columnNumber: 84
          }, this)) }, void 0, false, {
            fileName: "app/routes/app.admin.analytics.jsx",
            lineNumber: 465,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.analytics.jsx",
          lineNumber: 463,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.analytics.jsx",
        lineNumber: 432,
        columnNumber: 37
      }, this),
      activeTab === "collection" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.section, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.sectionTitle, children: "Collection System Metrics" }, void 0, false, {
            fileName: "app/routes/app.admin.analytics.jsx",
            lineNumber: 479,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.kpiGrid, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, { label: "Total Users", value: collectionMetrics.totalUsers }, void 0, false, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 481,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, { label: "Active Collectors", value: collectionMetrics.activeCollectors }, void 0, false, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 482,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, { label: "Owned Items", value: collectionMetrics.stateDistribution.OWNED || 0 }, void 0, false, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 483,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, { label: "Wanted Items", value: collectionMetrics.stateDistribution.WANTED || 0 }, void 0, false, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 484,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, { label: "Watchlist Items", value: collectionMetrics.stateDistribution.WATCHLIST || 0 }, void 0, false, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 485,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.analytics.jsx",
            lineNumber: 480,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.analytics.jsx",
          lineNumber: 478,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.section, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.sectionTitle, children: "Most Wanted Elements" }, void 0, false, {
            fileName: "app/routes/app.admin.analytics.jsx",
            lineNumber: 490,
            columnNumber: 15
          }, this),
          collectionMetrics.mostWantedElements.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
            color: "#888",
            fontStyle: "italic"
          }, children: "No wanted elements yet." }, void 0, false, {
            fileName: "app/routes/app.admin.analytics.jsx",
            lineNumber: 491,
            columnNumber: 68
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { style: styles.table, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: styles.th, children: "#" }, void 0, false, {
                fileName: "app/routes/app.admin.analytics.jsx",
                lineNumber: 497,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: styles.th, children: "Element" }, void 0, false, {
                fileName: "app/routes/app.admin.analytics.jsx",
                lineNumber: 498,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: styles.th, children: "Wanted By" }, void 0, false, {
                fileName: "app/routes/app.admin.analytics.jsx",
                lineNumber: 499,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 496,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 495,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: collectionMetrics.mostWantedElements.map((el, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: styles.td, children: i + 1 }, void 0, false, {
                fileName: "app/routes/app.admin.analytics.jsx",
                lineNumber: 504,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: styles.td, children: el.elementSymbol }, void 0, false, {
                fileName: "app/routes/app.admin.analytics.jsx",
                lineNumber: 505,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: styles.td, children: [
                el.wantedByCount,
                " users"
              ] }, void 0, true, {
                fileName: "app/routes/app.admin.analytics.jsx",
                lineNumber: 506,
                columnNumber: 25
              }, this)
            ] }, el.elementSymbol, true, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 503,
              columnNumber: 74
            }, this)) }, void 0, false, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 502,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.analytics.jsx",
            lineNumber: 494,
            columnNumber: 44
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.analytics.jsx",
          lineNumber: 489,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.section, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.sectionTitle, children: "Top Collectors" }, void 0, false, {
            fileName: "app/routes/app.admin.analytics.jsx",
            lineNumber: 513,
            columnNumber: 15
          }, this),
          collectionMetrics.topCollectors.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
            color: "#888",
            fontStyle: "italic"
          }, children: "No collection data yet." }, void 0, false, {
            fileName: "app/routes/app.admin.analytics.jsx",
            lineNumber: 514,
            columnNumber: 63
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { style: styles.table, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: styles.th, children: "#" }, void 0, false, {
                fileName: "app/routes/app.admin.analytics.jsx",
                lineNumber: 520,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: styles.th, children: "User ID" }, void 0, false, {
                fileName: "app/routes/app.admin.analytics.jsx",
                lineNumber: 521,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { style: styles.th, children: "Elements Owned" }, void 0, false, {
                fileName: "app/routes/app.admin.analytics.jsx",
                lineNumber: 522,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 519,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 518,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: collectionMetrics.topCollectors.map((tc, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: styles.td, children: i + 1 }, void 0, false, {
                fileName: "app/routes/app.admin.analytics.jsx",
                lineNumber: 527,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: {
                ...styles.td,
                fontSize: 11,
                fontFamily: "monospace"
              }, children: [
                tc.userId.slice(0, 8),
                "..."
              ] }, void 0, true, {
                fileName: "app/routes/app.admin.analytics.jsx",
                lineNumber: 528,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { style: styles.td, children: tc.ownedCount }, void 0, false, {
                fileName: "app/routes/app.admin.analytics.jsx",
                lineNumber: 533,
                columnNumber: 25
              }, this)
            ] }, tc.userId, true, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 526,
              columnNumber: 69
            }, this)) }, void 0, false, {
              fileName: "app/routes/app.admin.analytics.jsx",
              lineNumber: 525,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.analytics.jsx",
            lineNumber: 517,
            columnNumber: 44
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.analytics.jsx",
          lineNumber: 512,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.analytics.jsx",
        lineNumber: 477,
        columnNumber: 40
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.admin.analytics.jsx",
      lineNumber: 229,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.admin.analytics.jsx",
    lineNumber: 227,
    columnNumber: 10
  }, this);
}
_s(AdminAnalytics, "0aiJzgXGk/lLVS5z78DhC+FKAYU=", false, function() {
  return [useLoaderData];
});
_c = AdminAnalytics;
var styles = {
  layout: {
    display: "flex",
    minHeight: "100vh"
  },
  main: {
    marginLeft: 240,
    flex: 1,
    padding: "24px 40px 60px",
    maxWidth: 1200
  },
  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 24
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
    margin: "4px 0 0"
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
    whiteSpace: "nowrap"
  },
  kpiGrid: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    marginBottom: 24
  },
  // Tabs
  tabs: {
    display: "flex",
    gap: 4,
    marginBottom: 24,
    borderBottom: "2px solid var(--luc-border)",
    paddingBottom: 0
  },
  tab: {
    padding: "10px 20px",
    border: "none",
    background: "transparent",
    fontSize: 13,
    fontWeight: 500,
    color: "var(--luc-text-muted)",
    cursor: "pointer",
    borderBottom: "2px solid transparent",
    marginBottom: -2,
    transition: "all 0.15s"
  },
  tabActive: {
    color: "var(--luc-accent)",
    borderBottomColor: "var(--luc-accent)",
    fontWeight: 700
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
    borderBottom: "1px solid var(--luc-border)"
  },
  // Chart
  chartWrap: {
    display: "flex",
    gap: 16,
    alignItems: "flex-end",
    padding: "20px 16px",
    background: "#ffffff",
    border: "1px solid var(--luc-border)",
    borderRadius: 10
  },
  chartCol: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1
  },
  chartBarWrap: {
    display: "flex",
    alignItems: "flex-end",
    height: 130
  },
  chartBar: {
    width: 48,
    background: "linear-gradient(180deg, var(--luc-accent) 0%, #7BB3F0 100%)",
    borderRadius: "6px 6px 0 0",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingTop: 4,
    minHeight: 20
  },
  chartBarVal: {
    fontSize: 10,
    fontWeight: 700,
    color: "#ffffff"
  },
  chartLabel: {
    fontSize: 12,
    color: "var(--luc-text-muted)",
    fontWeight: 500,
    marginTop: 6
  },
  // Revenue grid
  revenueGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: 12
  },
  revenueCard: {
    background: "#ffffff",
    border: "1px solid var(--luc-border)",
    borderRadius: 10,
    padding: 16
  },
  revType: {
    fontSize: 13,
    fontWeight: 700,
    color: "var(--luc-accent)",
    textTransform: "capitalize",
    marginBottom: 4
  },
  revAmount: {
    fontSize: 22,
    fontWeight: 800,
    color: "var(--luc-text)"
  },
  revSubs: {
    fontSize: 11,
    color: "var(--luc-text-muted)",
    marginBottom: 8
  },
  revBarTrack: {
    height: 6,
    background: "#e5e7eb",
    borderRadius: 3,
    marginBottom: 4
  },
  revBarFill: {
    height: "100%",
    background: "var(--luc-accent)",
    borderRadius: 3,
    transition: "width 0.5s"
  },
  revPct: {
    fontSize: 11,
    color: "var(--luc-text-muted)"
  },
  // Table
  tableWrap: {
    overflowX: "auto"
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    background: "#ffffff",
    border: "1px solid var(--luc-border)",
    borderRadius: 8
  },
  th: {
    padding: "10px 14px",
    textAlign: "left",
    fontSize: 11,
    fontWeight: 600,
    color: "var(--luc-text-muted)",
    textTransform: "uppercase",
    borderBottom: "2px solid var(--luc-border)",
    background: "#f8fafc"
  },
  td: {
    padding: "10px 14px",
    fontSize: 13,
    color: "var(--luc-text)",
    borderBottom: "1px solid var(--luc-border)"
  },
  ctBadge: {
    fontSize: 10,
    fontWeight: 600,
    color: "var(--luc-accent)",
    background: "#EBF3FC",
    padding: "1px 6px",
    borderRadius: 4,
    textTransform: "capitalize"
  },
  miniBarTrack: {
    width: 60,
    height: 4,
    background: "#e5e7eb",
    borderRadius: 2
  },
  miniBarFill: {
    height: "100%",
    background: "var(--luc-accent)",
    borderRadius: 2
  },
  statusPill: {
    padding: "2px 8px",
    borderRadius: 4,
    fontSize: 11,
    fontWeight: 600
  },
  // Concentration
  concGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    gap: 12
  },
  concCard: {
    background: "#ffffff",
    border: "1px solid var(--luc-border)",
    borderRadius: 10,
    padding: 16,
    textAlign: "center"
  },
  concRank: {
    fontSize: 11,
    fontWeight: 700,
    color: "var(--luc-gold)",
    marginBottom: 4
  },
  concType: {
    fontSize: 14,
    fontWeight: 700,
    color: "var(--luc-text)",
    textTransform: "capitalize"
  },
  concRevenue: {
    fontSize: 20,
    fontWeight: 800,
    color: "var(--luc-accent)",
    margin: "4px 0"
  },
  concPct: {
    fontSize: 11,
    color: "var(--luc-text-muted)"
  }
};
var _c;
$RefreshReg$(_c, "AdminAnalytics");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AdminAnalytics as default
};
//# sourceMappingURL=/build/routes/app.admin.analytics-RCIPIE2E.js.map
