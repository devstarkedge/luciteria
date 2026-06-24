import {
  require_milestones
} from "/build/_shared/chunk-3B53PNDY.js";
import {
  PeriodicTable
} from "/build/_shared/chunk-UYCKJRA2.js";
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
  require_collection
} from "/build/_shared/chunk-FTNGL5K7.js";
import {
  AppNav
} from "/build/_shared/chunk-2HXTESER.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Link,
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
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/app.cabinet._index.jsx
var import_node = __toESM(require_node());
var import_react2 = __toESM(require_react());
var import_elements = __toESM(require_elements());
var import_session = __toESM(require_session());
var import_auth = __toESM(require_auth());
var import_collection = __toESM(require_collection());
var import_milestones = __toESM(require_milestones());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.cabinet._index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.cabinet._index.jsx"
  );
  import.meta.hot.lastModified = "1779908967631.603";
}
function CabinetDashboard() {
  _s();
  const {
    elements,
    collectionStates,
    collectionType,
    stats,
    closestGroups,
    recommendation,
    milestones,
    totalMilestones,
    possibleMilestones,
    activityFeed,
    authUser
  } = useLoaderData();
  const fetcher = useFetcher();
  const [localStates, setLocalStates] = (0, import_react2.useState)(collectionStates);
  const handleStateChange = (0, import_react2.useCallback)((symbol, newState) => {
    setLocalStates((prev) => ({
      ...prev,
      [symbol]: newState
    }));
    fetcher.submit({
      intent: "update-state",
      symbol,
      state: newState
    }, {
      method: "POST"
    });
  }, [fetcher]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.layout, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppNav, { currentPath: "/app/cabinet", userType: authUser.userType, isSubscriber: authUser.isSubscriber }, void 0, false, {
      fileName: "app/routes/app.cabinet._index.jsx",
      lineNumber: 184,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { style: styles.main, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.header, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { style: styles.title, children: [
            authUser.firstName,
            "'s Collection"
          ] }, void 0, true, {
            fileName: "app/routes/app.cabinet._index.jsx",
            lineNumber: 189,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.subtitle, children: [
            stats.owned,
            " of 118 elements collected (",
            stats.percentage,
            "%)"
          ] }, void 0, true, {
            fileName: "app/routes/app.cabinet._index.jsx",
            lineNumber: 192,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.cabinet._index.jsx",
          lineNumber: 188,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.headerActions, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/app/progress", style: styles.headerLink, children: "\u{1F4CA} View Progress" }, void 0, false, {
            fileName: "app/routes/app.cabinet._index.jsx",
            lineNumber: 197,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/app/shop", style: styles.headerLink, children: "\u{1F6D2} Shop Missing" }, void 0, false, {
            fileName: "app/routes/app.cabinet._index.jsx",
            lineNumber: 198,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.cabinet._index.jsx",
          lineNumber: 196,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.cabinet._index.jsx",
        lineNumber: 187,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.statsRow, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, { label: "Owned", value: stats.owned, color: "#388E3C", icon: "\u2713" }, void 0, false, {
          fileName: "app/routes/app.cabinet._index.jsx",
          lineNumber: 204,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, { label: "Wanted", value: stats.wanted, color: "#F9A825", icon: "\u2661" }, void 0, false, {
          fileName: "app/routes/app.cabinet._index.jsx",
          lineNumber: 205,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, { label: "Watchlist", value: stats.watchlist, color: "#1976D2", icon: "\u{1F441}" }, void 0, false, {
          fileName: "app/routes/app.cabinet._index.jsx",
          lineNumber: 206,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, { label: "Missing", value: stats.missing, color: "#9e9e9e", icon: "\u25CB" }, void 0, false, {
          fileName: "app/routes/app.cabinet._index.jsx",
          lineNumber: 207,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, { label: "Milestones", value: `${totalMilestones}/${possibleMilestones}`, color: "#7B1FA2", icon: "\u{1F3C6}" }, void 0, false, {
          fileName: "app/routes/app.cabinet._index.jsx",
          lineNumber: 208,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.cabinet._index.jsx",
        lineNumber: 203,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.tableCard, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PeriodicTable, { elements, collectionStates: localStates, collectionType, onStateChange: handleStateChange, showFilters: true }, void 0, false, {
        fileName: "app/routes/app.cabinet._index.jsx",
        lineNumber: 213,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/app.cabinet._index.jsx",
        lineNumber: 212,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.bottomGrid, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.card, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.cardTitle, children: "\u{1F3AF} Closest to Completion" }, void 0, false, {
            fileName: "app/routes/app.cabinet._index.jsx",
            lineNumber: 220,
            columnNumber: 13
          }, this),
          closestGroups.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.emptyText, children: "Start collecting to see your closest groups!" }, void 0, false, {
            fileName: "app/routes/app.cabinet._index.jsx",
            lineNumber: 221,
            columnNumber: 43
          }, this) : closestGroups.map((group, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.groupRow, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.groupInfo, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.groupName, children: group.groupInfo?.label || group.groupKey }, void 0, false, {
                fileName: "app/routes/app.cabinet._index.jsx",
                lineNumber: 223,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.groupCount, children: [
                group.owned,
                "/",
                group.total
              ] }, void 0, true, {
                fileName: "app/routes/app.cabinet._index.jsx",
                lineNumber: 224,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.cabinet._index.jsx",
              lineNumber: 222,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.progressBarOuter, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
              ...styles.progressBarInner,
              width: `${group.percentage}%`,
              background: group.percentage >= 80 ? "#388E3C" : group.percentage >= 50 ? "#F9A825" : "#1976D2"
            } }, void 0, false, {
              fileName: "app/routes/app.cabinet._index.jsx",
              lineNumber: 227,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/app.cabinet._index.jsx",
              lineNumber: 226,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.groupPercent, children: [
              group.percentage,
              "%"
            ] }, void 0, true, {
              fileName: "app/routes/app.cabinet._index.jsx",
              lineNumber: 233,
              columnNumber: 19
            }, this)
          ] }, i, true, {
            fileName: "app/routes/app.cabinet._index.jsx",
            lineNumber: 221,
            columnNumber: 154
          }, this)),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/app/progress", style: styles.cardLink, children: "View all group progress \u2192" }, void 0, false, {
            fileName: "app/routes/app.cabinet._index.jsx",
            lineNumber: 235,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.cabinet._index.jsx",
          lineNumber: 219,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.card, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.cardTitle, children: "\u{1F4A1} Next Best Element" }, void 0, false, {
            fileName: "app/routes/app.cabinet._index.jsx",
            lineNumber: 240,
            columnNumber: 13
          }, this),
          recommendation ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.recommendationCard, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.recElement, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.recSymbol, children: recommendation.element.sym }, void 0, false, {
                fileName: "app/routes/app.cabinet._index.jsx",
                lineNumber: 243,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.recName, children: recommendation.element.name }, void 0, false, {
                fileName: "app/routes/app.cabinet._index.jsx",
                lineNumber: 244,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.recZ, children: [
                "#",
                recommendation.element.z
              ] }, void 0, true, {
                fileName: "app/routes/app.cabinet._index.jsx",
                lineNumber: 245,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.cabinet._index.jsx",
              lineNumber: 242,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.recReason, children: recommendation.reason }, void 0, false, {
              fileName: "app/routes/app.cabinet._index.jsx",
              lineNumber: 247,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/app/shop?highlight=${recommendation.element.sym}`, style: styles.recLink, children: "View in Shop \u2192" }, void 0, false, {
              fileName: "app/routes/app.cabinet._index.jsx",
              lineNumber: 248,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.cabinet._index.jsx",
            lineNumber: 241,
            columnNumber: 31
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.emptyText, children: "Collect your first element to get recommendations!" }, void 0, false, {
            fileName: "app/routes/app.cabinet._index.jsx",
            lineNumber: 251,
            columnNumber: 24
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: {
            ...styles.cardTitle,
            marginTop: 20
          }, children: "\u{1F3C6} Recent Milestones" }, void 0, false, {
            fileName: "app/routes/app.cabinet._index.jsx",
            lineNumber: 254,
            columnNumber: 13
          }, this),
          milestones.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.emptyText, children: "Earn milestones by growing your collection!" }, void 0, false, {
            fileName: "app/routes/app.cabinet._index.jsx",
            lineNumber: 258,
            columnNumber: 40
          }, this) : milestones.map((m, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.milestoneRow, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.milestoneIcon, children: m.icon }, void 0, false, {
              fileName: "app/routes/app.cabinet._index.jsx",
              lineNumber: 259,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.milestoneName, children: m.title }, void 0, false, {
                fileName: "app/routes/app.cabinet._index.jsx",
                lineNumber: 261,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.milestoneDesc, children: m.description }, void 0, false, {
                fileName: "app/routes/app.cabinet._index.jsx",
                lineNumber: 262,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.cabinet._index.jsx",
              lineNumber: 260,
              columnNumber: 19
            }, this)
          ] }, i, true, {
            fileName: "app/routes/app.cabinet._index.jsx",
            lineNumber: 258,
            columnNumber: 143
          }, this))
        ] }, void 0, true, {
          fileName: "app/routes/app.cabinet._index.jsx",
          lineNumber: 239,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.card, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.cardTitle, children: "\u{1F4CB} Recent Activity" }, void 0, false, {
            fileName: "app/routes/app.cabinet._index.jsx",
            lineNumber: 269,
            columnNumber: 13
          }, this),
          activityFeed.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.emptyText, children: "Your activity will appear here as you build your collection." }, void 0, false, {
            fileName: "app/routes/app.cabinet._index.jsx",
            lineNumber: 270,
            columnNumber: 42
          }, this) : activityFeed.map((a, i) => {
            let details = {};
            try {
              details = JSON.parse(a.details || "{}");
            } catch (e) {
            }
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.activityRow, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.activityIcon, children: a.action === "state_changed" ? "\u{1F504}" : a.action === "milestone_earned" ? "\u{1F3C6}" : "\u{1F4DD}" }, void 0, false, {
                fileName: "app/routes/app.cabinet._index.jsx",
                lineNumber: 276,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.activityContent, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.activityText, children: [
                  a.action === "state_changed" && a.elementSymbol && `${a.elementSymbol}: ${details.from || "?"} \u2192 ${details.to || "?"}`,
                  a.action === "milestone_earned" && `Earned: ${details.title || "Milestone"}`,
                  a.action === "goal_set" && `Set goal: ${details.title || "Goal"}`
                ] }, void 0, true, {
                  fileName: "app/routes/app.cabinet._index.jsx",
                  lineNumber: 280,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.activityTime, children: new Date(a.createdAt).toLocaleDateString() }, void 0, false, {
                  fileName: "app/routes/app.cabinet._index.jsx",
                  lineNumber: 285,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/app.cabinet._index.jsx",
                lineNumber: 279,
                columnNumber: 21
              }, this)
            ] }, i, true, {
              fileName: "app/routes/app.cabinet._index.jsx",
              lineNumber: 275,
              columnNumber: 20
            }, this);
          })
        ] }, void 0, true, {
          fileName: "app/routes/app.cabinet._index.jsx",
          lineNumber: 268,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.cabinet._index.jsx",
        lineNumber: 217,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.cabinet._index.jsx",
      lineNumber: 185,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.cabinet._index.jsx",
    lineNumber: 183,
    columnNumber: 10
  }, this);
}
_s(CabinetDashboard, "NgpIJkXVy7pvNvZDWluYi3xZV9c=", false, function() {
  return [useLoaderData, useFetcher];
});
_c = CabinetDashboard;
function StatCard({
  label,
  value,
  color,
  icon
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.statCard, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      ...styles.statIcon,
      color
    }, children: icon }, void 0, false, {
      fileName: "app/routes/app.cabinet._index.jsx",
      lineNumber: 307,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      ...styles.statValue,
      color
    }, children: value }, void 0, false, {
      fileName: "app/routes/app.cabinet._index.jsx",
      lineNumber: 311,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.statLabel, children: label }, void 0, false, {
      fileName: "app/routes/app.cabinet._index.jsx",
      lineNumber: 315,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.cabinet._index.jsx",
    lineNumber: 306,
    columnNumber: 10
  }, this);
}
_c2 = StatCard;
var styles = {
  layout: {
    display: "flex",
    minHeight: "100vh",
    background: "#f8f9fa"
  },
  main: {
    flex: 1,
    marginLeft: 240,
    padding: "24px 32px",
    maxWidth: 1200
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 24
  },
  title: {
    fontSize: 28,
    fontWeight: 800,
    color: "#1a1a2e",
    margin: 0
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    margin: "4px 0 0"
  },
  headerActions: {
    display: "flex",
    gap: 12
  },
  headerLink: {
    padding: "8px 16px",
    borderRadius: 8,
    background: "#fff",
    border: "1px solid #e0e0e0",
    color: "#333",
    textDecoration: "none",
    fontSize: 13,
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    gap: 6
  },
  statsRow: {
    display: "flex",
    gap: 16,
    marginBottom: 24
  },
  statCard: {
    flex: 1,
    background: "#fff",
    borderRadius: 12,
    padding: "16px 20px",
    border: "1px solid #e9ecef",
    textAlign: "center"
  },
  statIcon: {
    fontSize: 20,
    marginBottom: 4
  },
  statValue: {
    fontSize: 24,
    fontWeight: 800,
    lineHeight: 1.1
  },
  statLabel: {
    fontSize: 11,
    color: "#888",
    fontWeight: 600,
    textTransform: "uppercase",
    marginTop: 4
  },
  tableCard: {
    background: "#fff",
    borderRadius: 12,
    padding: 24,
    border: "1px solid #e9ecef",
    marginBottom: 24
  },
  bottomGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: 20
  },
  card: {
    background: "#fff",
    borderRadius: 12,
    padding: 20,
    border: "1px solid #e9ecef"
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: 700,
    color: "#333",
    margin: "0 0 12px"
  },
  cardLink: {
    fontSize: 12,
    color: "#1976D2",
    textDecoration: "none",
    marginTop: 12,
    display: "block"
  },
  emptyText: {
    fontSize: 13,
    color: "#999",
    fontStyle: "italic"
  },
  groupRow: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginBottom: 10
  },
  groupInfo: {
    minWidth: 140,
    display: "flex",
    justifyContent: "space-between"
  },
  groupName: {
    fontSize: 12,
    fontWeight: 600,
    color: "#333"
  },
  groupCount: {
    fontSize: 11,
    color: "#888"
  },
  progressBarOuter: {
    flex: 1,
    height: 8,
    background: "#f0f0f0",
    borderRadius: 4,
    overflow: "hidden"
  },
  progressBarInner: {
    height: "100%",
    borderRadius: 4,
    transition: "width 0.3s"
  },
  groupPercent: {
    fontSize: 11,
    fontWeight: 700,
    color: "#555",
    minWidth: 35,
    textAlign: "right"
  },
  recommendationCard: {
    background: "#f8f9fa",
    borderRadius: 10,
    padding: 16
  },
  recElement: {
    display: "flex",
    alignItems: "baseline",
    gap: 8,
    marginBottom: 8
  },
  recSymbol: {
    fontSize: 32,
    fontWeight: 800,
    color: "#1976D2"
  },
  recName: {
    fontSize: 16,
    fontWeight: 600,
    color: "#333"
  },
  recZ: {
    fontSize: 12,
    color: "#888"
  },
  recReason: {
    fontSize: 12,
    color: "#666",
    margin: "0 0 8px"
  },
  recLink: {
    fontSize: 12,
    color: "#1976D2",
    textDecoration: "none",
    fontWeight: 600
  },
  milestoneRow: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginBottom: 8
  },
  milestoneIcon: {
    fontSize: 20
  },
  milestoneName: {
    fontSize: 13,
    fontWeight: 600,
    color: "#333",
    display: "block"
  },
  milestoneDesc: {
    fontSize: 11,
    color: "#888"
  },
  activityRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: 8,
    marginBottom: 10
  },
  activityIcon: {
    fontSize: 16
  },
  activityContent: {
    flex: 1
  },
  activityText: {
    fontSize: 12,
    color: "#333",
    display: "block"
  },
  activityTime: {
    fontSize: 10,
    color: "#aaa"
  }
};
var _c;
var _c2;
$RefreshReg$(_c, "CabinetDashboard");
$RefreshReg$(_c2, "StatCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  CabinetDashboard as default
};
//# sourceMappingURL=/build/routes/app.cabinet._index-U2KXAYHN.js.map
