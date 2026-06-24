import {
  require_milestones
} from "/build/_shared/chunk-3B53PNDY.js";
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
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  createHotContext
} from "/build/_shared/chunk-ORVFF776.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/app.progress.jsx
var import_node = __toESM(require_node());
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
    window.$RefreshRuntime$.register(type, '"app/routes/app.progress.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.progress.jsx"
  );
  import.meta.hot.lastModified = "1779909009890.1094";
}
function ProgressPage() {
  _s();
  const {
    stats,
    groupProgress,
    formatProgress,
    goals,
    milestones,
    totalMilestones,
    possibleMilestones,
    authUser
  } = useLoaderData();
  const fetcher = useFetcher();
  const sortedGroups = [...groupProgress].sort((a, b) => {
    if (a.percentage === 100 && b.percentage < 100)
      return -1;
    if (b.percentage === 100 && a.percentage < 100)
      return 1;
    return b.percentage - a.percentage;
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.layout, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AppNav, { currentPath: "/app/progress", userType: authUser.userType, isSubscriber: authUser.isSubscriber }, void 0, false, {
      fileName: "app/routes/app.progress.jsx",
      lineNumber: 122,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { style: styles.main, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.header, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { style: styles.title, children: "\u{1F4CA} Collection Progress" }, void 0, false, {
          fileName: "app/routes/app.progress.jsx",
          lineNumber: 125,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/app/cabinet", style: styles.backLink, children: "\u2190 Back to Collection" }, void 0, false, {
          fileName: "app/routes/app.progress.jsx",
          lineNumber: 126,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.progress.jsx",
        lineNumber: 124,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.overallCard, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.overallLeft, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.bigNumber, children: [
            stats.percentage,
            "%"
          ] }, void 0, true, {
            fileName: "app/routes/app.progress.jsx",
            lineNumber: 132,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.bigLabel, children: [
            stats.owned,
            " of 118 elements"
          ] }, void 0, true, {
            fileName: "app/routes/app.progress.jsx",
            lineNumber: 133,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.progress.jsx",
          lineNumber: 131,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.overallRight, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.miniStat, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
              color: "#388E3C"
            }, children: "\u2713" }, void 0, false, {
              fileName: "app/routes/app.progress.jsx",
              lineNumber: 136,
              columnNumber: 42
            }, this),
            " ",
            stats.owned,
            " Owned"
          ] }, void 0, true, {
            fileName: "app/routes/app.progress.jsx",
            lineNumber: 136,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.miniStat, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
              color: "#F9A825"
            }, children: "\u2661" }, void 0, false, {
              fileName: "app/routes/app.progress.jsx",
              lineNumber: 139,
              columnNumber: 42
            }, this),
            " ",
            stats.wanted,
            " Wanted"
          ] }, void 0, true, {
            fileName: "app/routes/app.progress.jsx",
            lineNumber: 139,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.miniStat, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
              color: "#1976D2"
            }, children: "\u{1F441}" }, void 0, false, {
              fileName: "app/routes/app.progress.jsx",
              lineNumber: 142,
              columnNumber: 42
            }, this),
            " ",
            stats.watchlist,
            " Watchlist"
          ] }, void 0, true, {
            fileName: "app/routes/app.progress.jsx",
            lineNumber: 142,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.miniStat, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
              color: "#9e9e9e"
            }, children: "\u25CB" }, void 0, false, {
              fileName: "app/routes/app.progress.jsx",
              lineNumber: 145,
              columnNumber: 42
            }, this),
            " ",
            stats.missing,
            " Missing"
          ] }, void 0, true, {
            fileName: "app/routes/app.progress.jsx",
            lineNumber: 145,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.progress.jsx",
          lineNumber: 135,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.progressBarLarge, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          ...styles.progressFill,
          width: `${stats.percentage}%`
        } }, void 0, false, {
          fileName: "app/routes/app.progress.jsx",
          lineNumber: 150,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/app.progress.jsx",
          lineNumber: 149,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.progress.jsx",
        lineNumber: 130,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.twoCol, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.card, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: styles.cardTitle, children: "Periodic Table Groups" }, void 0, false, {
            fileName: "app/routes/app.progress.jsx",
            lineNumber: 161,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.groupList, children: sortedGroups.map((group, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.groupRow, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.groupHeader, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
                ...styles.groupDot,
                background: group.groupInfo?.color || "#ccc"
              } }, void 0, false, {
                fileName: "app/routes/app.progress.jsx",
                lineNumber: 165,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.groupName, children: group.groupInfo?.label || `Group ${group.groupKey}` }, void 0, false, {
                fileName: "app/routes/app.progress.jsx",
                lineNumber: 169,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.groupCount, children: [
                group.owned,
                "/",
                group.total
              ] }, void 0, true, {
                fileName: "app/routes/app.progress.jsx",
                lineNumber: 172,
                columnNumber: 21
              }, this),
              group.percentage === 100 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.completeBadge, children: "\u2713" }, void 0, false, {
                fileName: "app/routes/app.progress.jsx",
                lineNumber: 173,
                columnNumber: 50
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/app.progress.jsx",
              lineNumber: 164,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.progressBarSmall, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
              ...styles.progressFillSmall,
              width: `${group.percentage}%`,
              background: group.percentage === 100 ? "#388E3C" : group.percentage >= 50 ? "#F9A825" : "#1976D2"
            } }, void 0, false, {
              fileName: "app/routes/app.progress.jsx",
              lineNumber: 176,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/app.progress.jsx",
              lineNumber: 175,
              columnNumber: 19
            }, this),
            group.missing.length > 0 && group.missing.length <= 5 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.missingHint, children: [
              "Missing: ",
              group.missing.join(", ")
            ] }, void 0, true, {
              fileName: "app/routes/app.progress.jsx",
              lineNumber: 182,
              columnNumber: 77
            }, this)
          ] }, i, true, {
            fileName: "app/routes/app.progress.jsx",
            lineNumber: 163,
            columnNumber: 47
          }, this)) }, void 0, false, {
            fileName: "app/routes/app.progress.jsx",
            lineNumber: 162,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.progress.jsx",
          lineNumber: 160,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            ...styles.card,
            marginBottom: 20
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: styles.cardTitle, children: "Progress by Format" }, void 0, false, {
              fileName: "app/routes/app.progress.jsx",
              lineNumber: 196,
              columnNumber: 15
            }, this),
            formatProgress.map((fmt, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.formatRow, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.formatHeader, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.formatIcon, children: fmt.icon }, void 0, false, {
                  fileName: "app/routes/app.progress.jsx",
                  lineNumber: 199,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.formatName, children: fmt.formatName }, void 0, false, {
                  fileName: "app/routes/app.progress.jsx",
                  lineNumber: 200,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.formatCount, children: [
                  fmt.owned,
                  "/",
                  fmt.total
                ] }, void 0, true, {
                  fileName: "app/routes/app.progress.jsx",
                  lineNumber: 201,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/app.progress.jsx",
                lineNumber: 198,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.progressBarSmall, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
                ...styles.progressFillSmall,
                width: `${fmt.percentage}%`,
                background: "#7B1FA2"
              } }, void 0, false, {
                fileName: "app/routes/app.progress.jsx",
                lineNumber: 204,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/app.progress.jsx",
                lineNumber: 203,
                columnNumber: 19
              }, this)
            ] }, i, true, {
              fileName: "app/routes/app.progress.jsx",
              lineNumber: 197,
              columnNumber: 47
            }, this))
          ] }, void 0, true, {
            fileName: "app/routes/app.progress.jsx",
            lineNumber: 192,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
            ...styles.card,
            marginBottom: 20
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: styles.cardTitle, children: "\u{1F3AF} Active Goals" }, void 0, false, {
              fileName: "app/routes/app.progress.jsx",
              lineNumber: 218,
              columnNumber: 15
            }, this),
            goals.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.emptyText, children: "No active goals. Set a goal to track your progress!" }, void 0, false, {
              fileName: "app/routes/app.progress.jsx",
              lineNumber: 219,
              columnNumber: 37
            }, this) : goals.map((goal, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.goalRow, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.goalTitle, children: goal.title }, void 0, false, {
                fileName: "app/routes/app.progress.jsx",
                lineNumber: 220,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.goalType, children: goal.goalType.replace("_", " ") }, void 0, false, {
                fileName: "app/routes/app.progress.jsx",
                lineNumber: 221,
                columnNumber: 21
              }, this)
            ] }, i, true, {
              fileName: "app/routes/app.progress.jsx",
              lineNumber: 219,
              columnNumber: 146
            }, this))
          ] }, void 0, true, {
            fileName: "app/routes/app.progress.jsx",
            lineNumber: 214,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.card, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: styles.cardTitle, children: [
              "\u{1F3C6} Milestones (",
              totalMilestones,
              "/",
              possibleMilestones,
              ")"
            ] }, void 0, true, {
              fileName: "app/routes/app.progress.jsx",
              lineNumber: 227,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.milestoneGrid, children: milestones.map((m, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
              ...styles.milestoneItem,
              opacity: m.isEarned ? 1 : 0.4,
              background: m.isEarned ? "#f0fdf4" : "#fafafa"
            }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.milestoneIcon, children: m.isEarned ? m.icon : "\u{1F512}" }, void 0, false, {
                fileName: "app/routes/app.progress.jsx",
                lineNumber: 236,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.milestoneName, children: m.title }, void 0, false, {
                fileName: "app/routes/app.progress.jsx",
                lineNumber: 237,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.milestoneDesc, children: m.description }, void 0, false, {
                fileName: "app/routes/app.progress.jsx",
                lineNumber: 238,
                columnNumber: 21
              }, this),
              m.isEarned && m.earnedAt && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.milestoneDate, children: new Date(m.earnedAt).toLocaleDateString() }, void 0, false, {
                fileName: "app/routes/app.progress.jsx",
                lineNumber: 239,
                columnNumber: 50
              }, this)
            ] }, i, true, {
              fileName: "app/routes/app.progress.jsx",
              lineNumber: 231,
              columnNumber: 43
            }, this)) }, void 0, false, {
              fileName: "app/routes/app.progress.jsx",
              lineNumber: 230,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.progress.jsx",
            lineNumber: 226,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.progress.jsx",
          lineNumber: 190,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.progress.jsx",
        lineNumber: 158,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.progress.jsx",
      lineNumber: 123,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.progress.jsx",
    lineNumber: 121,
    columnNumber: 10
  }, this);
}
_s(ProgressPage, "5JtsP+VDQvN40KA8fBBnaGBXZxY=", false, function() {
  return [useLoaderData, useFetcher];
});
_c = ProgressPage;
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
    alignItems: "center",
    marginBottom: 24
  },
  title: {
    fontSize: 26,
    fontWeight: 800,
    color: "#1a1a2e",
    margin: 0
  },
  backLink: {
    fontSize: 13,
    color: "#1976D2",
    textDecoration: "none"
  },
  overallCard: {
    background: "#fff",
    borderRadius: 16,
    padding: 28,
    border: "1px solid #e9ecef",
    marginBottom: 24,
    display: "flex",
    flexWrap: "wrap",
    gap: 24,
    alignItems: "center"
  },
  overallLeft: {
    textAlign: "center"
  },
  bigNumber: {
    fontSize: 56,
    fontWeight: 900,
    color: "#388E3C",
    lineHeight: 1
  },
  bigLabel: {
    fontSize: 14,
    color: "#666",
    marginTop: 4
  },
  overallRight: {
    display: "flex",
    gap: 20,
    flexWrap: "wrap"
  },
  miniStat: {
    fontSize: 14,
    fontWeight: 600,
    color: "#333"
  },
  progressBarLarge: {
    width: "100%",
    height: 12,
    background: "#f0f0f0",
    borderRadius: 6,
    overflow: "hidden"
  },
  progressFill: {
    height: "100%",
    background: "#388E3C",
    borderRadius: 6,
    transition: "width 0.3s"
  },
  twoCol: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 24
  },
  card: {
    background: "#fff",
    borderRadius: 12,
    padding: 20,
    border: "1px solid #e9ecef"
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: "#333",
    margin: "0 0 16px"
  },
  groupList: {
    display: "flex",
    flexDirection: "column",
    gap: 12
  },
  groupRow: {
    marginBottom: 2
  },
  groupHeader: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginBottom: 4
  },
  groupDot: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    flexShrink: 0
  },
  groupName: {
    fontSize: 12,
    fontWeight: 600,
    color: "#333",
    flex: 1
  },
  groupCount: {
    fontSize: 11,
    color: "#888"
  },
  completeBadge: {
    fontSize: 10,
    color: "#388E3C",
    background: "#e8f5e9",
    borderRadius: "50%",
    width: 18,
    height: 18,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700
  },
  progressBarSmall: {
    height: 6,
    background: "#f0f0f0",
    borderRadius: 3,
    overflow: "hidden"
  },
  progressFillSmall: {
    height: "100%",
    borderRadius: 3,
    transition: "width 0.3s"
  },
  missingHint: {
    fontSize: 10,
    color: "#999",
    marginTop: 2,
    fontStyle: "italic"
  },
  formatRow: {
    marginBottom: 14
  },
  formatHeader: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginBottom: 4
  },
  formatIcon: {
    fontSize: 16
  },
  formatName: {
    fontSize: 13,
    fontWeight: 600,
    color: "#333",
    flex: 1
  },
  formatCount: {
    fontSize: 11,
    color: "#888"
  },
  emptyText: {
    fontSize: 13,
    color: "#999",
    fontStyle: "italic"
  },
  goalRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 0",
    borderBottom: "1px solid #f0f0f0"
  },
  goalTitle: {
    fontSize: 13,
    fontWeight: 600,
    color: "#333"
  },
  goalType: {
    fontSize: 11,
    color: "#888",
    textTransform: "capitalize"
  },
  milestoneGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 10
  },
  milestoneItem: {
    borderRadius: 10,
    padding: 12,
    border: "1px solid #e9ecef",
    textAlign: "center"
  },
  milestoneIcon: {
    fontSize: 24,
    display: "block",
    marginBottom: 4
  },
  milestoneName: {
    fontSize: 12,
    fontWeight: 700,
    color: "#333",
    display: "block"
  },
  milestoneDesc: {
    fontSize: 10,
    color: "#888",
    display: "block",
    marginTop: 2
  },
  milestoneDate: {
    fontSize: 9,
    color: "#aaa",
    display: "block",
    marginTop: 4
  }
};
var _c;
$RefreshReg$(_c, "ProgressPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ProgressPage as default
};
//# sourceMappingURL=/build/routes/app.progress-XQXUDVBS.js.map
