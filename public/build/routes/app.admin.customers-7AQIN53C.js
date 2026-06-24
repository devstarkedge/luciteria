import {
  ProgressBar
} from "/build/_shared/chunk-AGL6APWJ.js";
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
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/app.admin.customers.jsx
var import_node = __toESM(require_node());
var import_react2 = __toESM(require_react());
var db = __toESM(require_mock_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.admin.customers.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.admin.customers.jsx"
  );
  import.meta.hot.lastModified = "1779603250595.4028";
}
function AdminCustomers() {
  _s();
  const {
    customers
  } = useLoaderData();
  const [searchQuery, setSearchQuery] = (0, import_react2.useState)("");
  const filtered = customers.filter((c) => {
    if (!searchQuery)
      return true;
    const q = searchQuery.toLowerCase();
    const name = `${c.firstName} ${c.lastName}`.toLowerCase();
    const email = (c.email || "").toLowerCase();
    const ct = (c.collectionType || "").toLowerCase();
    const plan = (c.subscription?.planName || "").toLowerCase();
    const id = (c.id || "").toLowerCase();
    const status = (c.subscription?.status || "").toLowerCase();
    return name.includes(q) || email.includes(q) || ct.includes(q) || plan.includes(q) || id.includes(q) || status.includes(q);
  });
  const handleExportCSV = async () => {
    const {
      exportCSV,
      todayStr
    } = await import("/build/_shared/export-utils.client-AMBZKMQI.js");
    const columns = [{
      label: "ID",
      accessor: (r) => r.id
    }, {
      label: "Name",
      accessor: (r) => `${r.firstName} ${r.lastName}`
    }, {
      label: "Email",
      accessor: (r) => r.email
    }, {
      label: "Collection Type",
      accessor: (r) => r.collectionType || "lucite"
    }, {
      label: "Plan",
      accessor: (r) => r.subscription?.planName || ""
    }, {
      label: "Status",
      accessor: (r) => r.subscription?.status || ""
    }, {
      label: "Price/mo",
      accessor: (r) => r.subscription?.priceUsd?.toFixed(2) || ""
    }, {
      label: "Collected",
      accessor: (r) => r.stats?.totalCollected || 0
    }, {
      label: "Completion %",
      accessor: (r) => r.stats?.completionPct || 0
    }, {
      label: "Shipments",
      accessor: (r) => r.stats?.totalShipments || 0
    }, {
      label: "Wishlist",
      accessor: (r) => r.stats?.wishlistCount || 0
    }, {
      label: "Dupe Handling",
      accessor: (r) => r.preferences?.duplicateHandling || ""
    }];
    exportCSV(filtered, columns, `customers-${todayStr()}`);
  };
  const handleExportJSON = async () => {
    const {
      exportJSON,
      todayStr
    } = await import("/build/_shared/export-utils.client-AMBZKMQI.js");
    const data = filtered.map((c) => ({
      id: c.id,
      name: `${c.firstName} ${c.lastName}`,
      email: c.email,
      collectionType: c.collectionType,
      plan: c.subscription?.planName,
      status: c.subscription?.status,
      pricePerMonth: c.subscription?.priceUsd,
      collected: c.stats?.totalCollected,
      completionPct: c.stats?.completionPct,
      shipments: c.stats?.totalShipments,
      wishlist: c.stats?.wishlistCount
    }));
    exportJSON(data, `customers-${todayStr()}`);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.layout, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppNav, { mode: "admin", customerName: "Admin" }, void 0, false, {
      fileName: "app/routes/app.admin.customers.jsx",
      lineNumber: 125,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { style: styles.main, className: "luc-main", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: styles.title, children: "Customer Profiles" }, void 0, false, {
        fileName: "app/routes/app.admin.customers.jsx",
        lineNumber: 127,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.subtitle, children: "Full view of all collector profiles and their collection status." }, void 0, false, {
        fileName: "app/routes/app.admin.customers.jsx",
        lineNumber: 128,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.toolbar, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.searchWrap, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.searchIcon, children: "\u{1F50D}" }, void 0, false, {
            fileName: "app/routes/app.admin.customers.jsx",
            lineNumber: 133,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", placeholder: "Search by name, email, ID, collection type, plan, status...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), style: styles.searchInput }, void 0, false, {
            fileName: "app/routes/app.admin.customers.jsx",
            lineNumber: 134,
            columnNumber: 13
          }, this),
          searchQuery && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setSearchQuery(""), style: styles.clearBtn, children: "\u2715" }, void 0, false, {
            fileName: "app/routes/app.admin.customers.jsx",
            lineNumber: 135,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.customers.jsx",
          lineNumber: 132,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.exportBtns, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: handleExportCSV, style: styles.exportBtn, children: "\u{1F4E5} CSV" }, void 0, false, {
            fileName: "app/routes/app.admin.customers.jsx",
            lineNumber: 138,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: handleExportJSON, style: styles.exportBtn, children: "\u{1F4E5} JSON" }, void 0, false, {
            fileName: "app/routes/app.admin.customers.jsx",
            lineNumber: 139,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.customers.jsx",
          lineNumber: 137,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.customers.jsx",
        lineNumber: 131,
        columnNumber: 9
      }, this),
      searchQuery && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.filterNote, children: [
        "Showing ",
        filtered.length,
        " of ",
        customers.length,
        " customers"
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.customers.jsx",
        lineNumber: 142,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.grid, children: [
        filtered.map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/app/admin/customer/${c.id}`, style: styles.card, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.cardHeader, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.name, children: [
                c.firstName,
                " ",
                c.lastName
              ] }, void 0, true, {
                fileName: "app/routes/app.admin.customers.jsx",
                lineNumber: 150,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.display, children: [
                c.displayName,
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.ctBadge, children: c.collectionType || "lucite" }, void 0, false, {
                  fileName: "app/routes/app.admin.customers.jsx",
                  lineNumber: 153,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/app.admin.customers.jsx",
                lineNumber: 151,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.customers.jsx",
              lineNumber: 149,
              columnNumber: 17
            }, this),
            c.subscription && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
              ...styles.subPill,
              background: c.subscription.status === "active" ? "#05966915" : "#d9770615",
              color: c.subscription.status === "active" ? "#059669" : "#d97706"
            }, children: c.subscription.planName }, void 0, false, {
              fileName: "app/routes/app.admin.customers.jsx",
              lineNumber: 156,
              columnNumber: 36
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.customers.jsx",
            lineNumber: 148,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.statsRow, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.stat, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.statVal, children: c.stats.totalCollected }, void 0, false, {
                fileName: "app/routes/app.admin.customers.jsx",
                lineNumber: 167,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.statLbl, children: "Collected" }, void 0, false, {
                fileName: "app/routes/app.admin.customers.jsx",
                lineNumber: 168,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.customers.jsx",
              lineNumber: 166,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.stat, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.statVal, children: c.stats.missingCount }, void 0, false, {
                fileName: "app/routes/app.admin.customers.jsx",
                lineNumber: 171,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.statLbl, children: "Missing" }, void 0, false, {
                fileName: "app/routes/app.admin.customers.jsx",
                lineNumber: 172,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.customers.jsx",
              lineNumber: 170,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.stat, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.statVal, children: c.stats.wishlistCount }, void 0, false, {
                fileName: "app/routes/app.admin.customers.jsx",
                lineNumber: 175,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.statLbl, children: "Wishlist" }, void 0, false, {
                fileName: "app/routes/app.admin.customers.jsx",
                lineNumber: 176,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.customers.jsx",
              lineNumber: 174,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.stat, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.statVal, children: c.stats.totalShipments }, void 0, false, {
                fileName: "app/routes/app.admin.customers.jsx",
                lineNumber: 179,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.statLbl, children: "Shipped" }, void 0, false, {
                fileName: "app/routes/app.admin.customers.jsx",
                lineNumber: 180,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.customers.jsx",
              lineNumber: 178,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.customers.jsx",
            lineNumber: 165,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProgressBar, { value: c.stats.totalCollected, max: 118, label: "Completion", accent: c.stats.totalCollected >= 118 ? "var(--luc-gold)" : "var(--luc-accent)" }, void 0, false, {
            fileName: "app/routes/app.admin.customers.jsx",
            lineNumber: 184,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.cardMeta, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: c.email }, void 0, false, {
              fileName: "app/routes/app.admin.customers.jsx",
              lineNumber: 187,
              columnNumber: 17
            }, this),
            c.preferences && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
              "Dupes: ",
              c.preferences.duplicateHandling
            ] }, void 0, true, {
              fileName: "app/routes/app.admin.customers.jsx",
              lineNumber: 188,
              columnNumber: 35
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.customers.jsx",
            lineNumber: 186,
            columnNumber: 15
          }, this)
        ] }, c.id, true, {
          fileName: "app/routes/app.admin.customers.jsx",
          lineNumber: 147,
          columnNumber: 30
        }, this)),
        filtered.length === 0 && searchQuery && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.emptySearch, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
            fontSize: 32
          }, children: "\u{1F50D}" }, void 0, false, {
            fileName: "app/routes/app.admin.customers.jsx",
            lineNumber: 192,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
            'No customers match "',
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: searchQuery }, void 0, false, {
              fileName: "app/routes/app.admin.customers.jsx",
              lineNumber: 195,
              columnNumber: 38
            }, this),
            '"'
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.customers.jsx",
            lineNumber: 195,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.customers.jsx",
          lineNumber: 191,
          columnNumber: 52
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.customers.jsx",
        lineNumber: 146,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.admin.customers.jsx",
      lineNumber: 126,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.admin.customers.jsx",
    lineNumber: 124,
    columnNumber: 10
  }, this);
}
_s(AdminCustomers, "NLy5OGAMu5+IOdy+FOoJ/472GYk=", false, function() {
  return [useLoaderData];
});
_c = AdminCustomers;
var styles = {
  layout: {
    display: "flex",
    minHeight: "100vh"
  },
  main: {
    marginLeft: 240,
    flex: 1,
    padding: "24px 40px 60px",
    maxWidth: 1e3
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
  // Toolbar
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
    whiteSpace: "nowrap"
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
    fontSize: 14,
    gridColumn: "1 / -1"
  },
  // Grid
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gap: 16
  },
  card: {
    display: "block",
    background: "#ffffff",
    border: "1px solid var(--luc-border)",
    borderRadius: 12,
    padding: 20,
    textDecoration: "none",
    transition: "border-color 0.15s ease",
    boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 16
  },
  name: {
    fontSize: 16,
    fontWeight: 700,
    color: "var(--luc-text)"
  },
  display: {
    fontSize: 12,
    color: "var(--luc-text-muted)"
  },
  ctBadge: {
    fontSize: 10,
    fontWeight: 600,
    color: "var(--luc-accent)",
    background: "#EBF3FC",
    padding: "1px 6px",
    borderRadius: 4,
    marginLeft: 6
  },
  subPill: {
    padding: "3px 8px",
    borderRadius: 6,
    fontSize: 11,
    fontWeight: 600
  },
  statsRow: {
    display: "flex",
    gap: 16,
    marginBottom: 16
  },
  stat: {
    textAlign: "center"
  },
  statVal: {
    fontSize: 20,
    fontWeight: 700,
    color: "var(--luc-text)"
  },
  statLbl: {
    fontSize: 10,
    color: "var(--luc-text-muted)",
    textTransform: "uppercase"
  },
  cardMeta: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 12,
    fontSize: 11,
    color: "var(--luc-text-muted)"
  }
};
var _c;
$RefreshReg$(_c, "AdminCustomers");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AdminCustomers as default
};
//# sourceMappingURL=/build/routes/app.admin.customers-7AQIN53C.js.map
