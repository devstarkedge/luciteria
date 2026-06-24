import {
  TierBadge
} from "/build/_shared/chunk-LFX7UVIL.js";
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
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  createHotContext
} from "/build/_shared/chunk-ORVFF776.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/app.admin.orders-pending.jsx
var import_node = __toESM(require_node());
var import_db_server = __toESM(require_db_server());

// app/components/ApprovalQueue.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ApprovalQueue.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/ApprovalQueue.jsx"
  );
  import.meta.hot.lastModified = "1779902248763.7637";
}
function ApprovalQueue({
  orders = [],
  onApprove,
  onReject
}) {
  if (orders.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.empty, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
        fontSize: "32px"
      }, children: "\u2705" }, void 0, false, {
        fileName: "app/components/ApprovalQueue.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
        margin: "8px 0 0",
        color: "#6B7280"
      }, children: "No pending orders \u2014 all clear!" }, void 0, false, {
        fileName: "app/components/ApprovalQueue.jsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ApprovalQueue.jsx",
      lineNumber: 33,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.container, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.header, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { style: styles.heading, children: [
        "Pending Orders (",
        orders.length,
        ")"
      ] }, void 0, true, {
        fileName: "app/components/ApprovalQueue.jsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      onApprove && orders.length > 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: styles.batchBtn, onClick: () => onApprove("all"), children: "\u2705 Approve All" }, void 0, false, {
        fileName: "app/components/ApprovalQueue.jsx",
        lineNumber: 46,
        columnNumber: 44
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ApprovalQueue.jsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.list, children: orders.map((order) => {
      const skus = typeof order.skuList === "string" ? JSON.parse(order.skuList) : order.skuList || [];
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.item, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.orderHeader, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.orderId, children: [
              "#",
              order.id.slice(0, 8)
            ] }, void 0, true, {
              fileName: "app/components/ApprovalQueue.jsx",
              lineNumber: 56,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.userName, children: order.userName || "User" }, void 0, false, {
              fileName: "app/components/ApprovalQueue.jsx",
              lineNumber: 57,
              columnNumber: 19
            }, this),
            order.tierName && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TierBadge, { tierName: order.tierName, size: "sm" }, void 0, false, {
              fileName: "app/components/ApprovalQueue.jsx",
              lineNumber: 58,
              columnNumber: 38
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/ApprovalQueue.jsx",
            lineNumber: 55,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.date, children: new Date(order.createdAt).toLocaleDateString() }, void 0, false, {
            fileName: "app/components/ApprovalQueue.jsx",
            lineNumber: 60,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/ApprovalQueue.jsx",
          lineNumber: 54,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.packInfo, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: order.packName }, void 0, false, {
            fileName: "app/components/ApprovalQueue.jsx",
            lineNumber: 64,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.skuCount, children: [
            skus.length,
            " SKUs"
          ] }, void 0, true, {
            fileName: "app/components/ApprovalQueue.jsx",
            lineNumber: 65,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/ApprovalQueue.jsx",
          lineNumber: 63,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.skuRow, children: [
          skus.slice(0, 5).map((sku, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.skuChip, children: sku }, i, false, {
            fileName: "app/components/ApprovalQueue.jsx",
            lineNumber: 69,
            columnNumber: 51
          }, this)),
          skus.length > 5 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.moreChip, children: [
            "+",
            skus.length - 5
          ] }, void 0, true, {
            fileName: "app/components/ApprovalQueue.jsx",
            lineNumber: 70,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/ApprovalQueue.jsx",
          lineNumber: 68,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.payment, children: [
          order.creditAmount > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
            "\u{1F4B0} $",
            order.creditAmount.toFixed(2),
            " credits"
          ] }, void 0, true, {
            fileName: "app/components/ApprovalQueue.jsx",
            lineNumber: 74,
            columnNumber: 44
          }, this),
          order.cashAmount > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
            "\u{1F4B5} $",
            order.cashAmount.toFixed(2)
          ] }, void 0, true, {
            fileName: "app/components/ApprovalQueue.jsx",
            lineNumber: 75,
            columnNumber: 42
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.method, children: order.paymentMethod }, void 0, false, {
            fileName: "app/components/ApprovalQueue.jsx",
            lineNumber: 76,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/ApprovalQueue.jsx",
          lineNumber: 73,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.actions, children: [
          onApprove && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: styles.approveBtn, onClick: () => onApprove(order.id), children: "\u2705 Approve" }, void 0, false, {
            fileName: "app/components/ApprovalQueue.jsx",
            lineNumber: 80,
            columnNumber: 31
          }, this),
          onReject && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: styles.rejectBtn, onClick: () => onReject(order.id), children: "\u274C Reject" }, void 0, false, {
            fileName: "app/components/ApprovalQueue.jsx",
            lineNumber: 83,
            columnNumber: 30
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/ApprovalQueue.jsx",
          lineNumber: 79,
          columnNumber: 15
        }, this)
      ] }, order.id, true, {
        fileName: "app/components/ApprovalQueue.jsx",
        lineNumber: 53,
        columnNumber: 16
      }, this);
    }) }, void 0, false, {
      fileName: "app/components/ApprovalQueue.jsx",
      lineNumber: 50,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ApprovalQueue.jsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
}
_c = ApprovalQueue;
var styles = {
  container: {},
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px"
  },
  heading: {
    margin: 0,
    fontSize: "16px",
    fontWeight: 700
  },
  batchBtn: {
    padding: "6px 14px",
    backgroundColor: "#059669",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: 600,
    cursor: "pointer"
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },
  item: {
    padding: "16px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    border: "1px solid #E5E7EB"
  },
  orderHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px"
  },
  orderId: {
    fontFamily: "monospace",
    fontSize: "12px",
    color: "#6366F1",
    marginRight: "8px"
  },
  userName: {
    fontWeight: 600,
    fontSize: "14px",
    marginRight: "8px"
  },
  date: {
    fontSize: "12px",
    color: "#6B7280"
  },
  packInfo: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "8px"
  },
  skuCount: {
    fontSize: "12px",
    color: "#6B7280"
  },
  skuRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "4px",
    marginBottom: "8px"
  },
  skuChip: {
    fontSize: "10px",
    padding: "2px 6px",
    backgroundColor: "#EEF2FF",
    color: "#4338CA",
    borderRadius: "3px",
    fontFamily: "monospace"
  },
  moreChip: {
    fontSize: "10px",
    padding: "2px 6px",
    backgroundColor: "#F3F4F6",
    color: "#6B7280",
    borderRadius: "3px"
  },
  payment: {
    display: "flex",
    gap: "12px",
    fontSize: "13px",
    color: "#374151",
    marginBottom: "12px"
  },
  method: {
    fontSize: "11px",
    padding: "1px 6px",
    backgroundColor: "#F3F4F6",
    borderRadius: "3px",
    color: "#6B7280"
  },
  actions: {
    display: "flex",
    gap: "8px"
  },
  approveBtn: {
    padding: "6px 14px",
    backgroundColor: "#059669",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: 600,
    cursor: "pointer"
  },
  rejectBtn: {
    padding: "6px 14px",
    backgroundColor: "#fff",
    color: "#DC2626",
    border: "1px solid #FCA5A5",
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: 600,
    cursor: "pointer"
  },
  empty: {
    textAlign: "center",
    padding: "32px",
    backgroundColor: "#F0FDF4",
    borderRadius: "12px",
    border: "1px solid #BBF7D0"
  }
};
var _c;
$RefreshReg$(_c, "ApprovalQueue");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/app.admin.orders-pending.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.admin.orders-pending.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.admin.orders-pending.jsx"
  );
  import.meta.hot.lastModified = "1779902420988.5833";
}
function AdminOrdersPending() {
  _s();
  const {
    pendingOrders,
    recentOrders,
    stats
  } = useLoaderData();
  const actionData = useActionData();
  const navigation = useNavigation();
  const handleApprove = (orderId) => {
    const formData = new FormData();
    formData.set("intent", "approve");
    formData.set("orderId", orderId);
    const form = document.createElement("form");
    form.method = "post";
    form.style.display = "none";
    const i1 = document.createElement("input");
    i1.name = "intent";
    i1.value = "approve";
    const i2 = document.createElement("input");
    i2.name = "orderId";
    i2.value = orderId;
    form.append(i1, i2);
    document.body.appendChild(form);
    form.submit();
  };
  const handleReject = (orderId) => {
    const form = document.createElement("form");
    form.method = "post";
    form.style.display = "none";
    const i1 = document.createElement("input");
    i1.name = "intent";
    i1.value = "reject";
    const i2 = document.createElement("input");
    i2.name = "orderId";
    i2.value = orderId;
    form.append(i1, i2);
    document.body.appendChild(form);
    form.submit();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: styles2.layout, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AppNav, { mode: "admin" }, void 0, false, {
      fileName: "app/routes/app.admin.orders-pending.jsx",
      lineNumber: 227,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { style: styles2.main, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { style: styles2.title, children: "Order Approval Queue" }, void 0, false, {
        fileName: "app/routes/app.admin.orders-pending.jsx",
        lineNumber: 229,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { style: styles2.subtitle, children: "\u26A0\uFE0F Orders are NEVER auto-shipped \u2014 admin approval required for every fulfillment" }, void 0, false, {
        fileName: "app/routes/app.admin.orders-pending.jsx",
        lineNumber: 230,
        columnNumber: 9
      }, this),
      actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: styles2.error, children: actionData.error }, void 0, false, {
        fileName: "app/routes/app.admin.orders-pending.jsx",
        lineNumber: 232,
        columnNumber: 31
      }, this),
      actionData?.success && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: styles2.successMsg, children: actionData.success }, void 0, false, {
        fileName: "app/routes/app.admin.orders-pending.jsx",
        lineNumber: 233,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: styles2.statsRow, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: styles2.statCard, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { style: styles2.statIcon, children: "\u{1F4CB}" }, void 0, false, {
            fileName: "app/routes/app.admin.orders-pending.jsx",
            lineNumber: 237,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { style: styles2.statValue, children: stats.pending }, void 0, false, {
            fileName: "app/routes/app.admin.orders-pending.jsx",
            lineNumber: 238,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { style: styles2.statLabel, children: "Pending" }, void 0, false, {
            fileName: "app/routes/app.admin.orders-pending.jsx",
            lineNumber: 239,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.orders-pending.jsx",
          lineNumber: 236,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: styles2.statCard, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { style: styles2.statIcon, children: "\u{1F4B0}" }, void 0, false, {
            fileName: "app/routes/app.admin.orders-pending.jsx",
            lineNumber: 242,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { style: styles2.statValue, children: [
            "$",
            stats.totalCredit.toFixed(2)
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.orders-pending.jsx",
            lineNumber: 243,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { style: styles2.statLabel, children: "Credit Used" }, void 0, false, {
            fileName: "app/routes/app.admin.orders-pending.jsx",
            lineNumber: 244,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.orders-pending.jsx",
          lineNumber: 241,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: styles2.statCard, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { style: styles2.statIcon, children: "\u{1F4B5}" }, void 0, false, {
            fileName: "app/routes/app.admin.orders-pending.jsx",
            lineNumber: 247,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { style: styles2.statValue, children: [
            "$",
            stats.totalCash.toFixed(2)
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.orders-pending.jsx",
            lineNumber: 248,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { style: styles2.statLabel, children: "Cash Revenue" }, void 0, false, {
            fileName: "app/routes/app.admin.orders-pending.jsx",
            lineNumber: 249,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.admin.orders-pending.jsx",
          lineNumber: 246,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.orders-pending.jsx",
        lineNumber: 235,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ApprovalQueue, { orders: pendingOrders, onApprove: handleApprove, onReject: handleReject }, void 0, false, {
        fileName: "app/routes/app.admin.orders-pending.jsx",
        lineNumber: 253,
        columnNumber: 9
      }, this),
      recentOrders.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: {
        marginTop: "32px"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { style: {
          fontSize: "18px",
          fontWeight: 700,
          marginBottom: "16px"
        }, children: "Recent Orders" }, void 0, false, {
          fileName: "app/routes/app.admin.orders-pending.jsx",
          lineNumber: 258,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: styles2.recentList, children: recentOrders.map((order) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: styles2.recentItem, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { style: styles2.recentId, children: [
            "#",
            order.id.slice(0, 8)
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.orders-pending.jsx",
            lineNumber: 265,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: order.userName }, void 0, false, {
            fileName: "app/routes/app.admin.orders-pending.jsx",
            lineNumber: 266,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { style: styles2.recentPack, children: order.packName }, void 0, false, {
            fileName: "app/routes/app.admin.orders-pending.jsx",
            lineNumber: 267,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { style: {
            ...styles2.statusPill,
            backgroundColor: order.status === "ADMIN_APPROVED" ? "#D1FAE5" : order.status === "FULFILLED" ? "#DBEAFE" : order.status === "REJECTED" ? "#FEE2E2" : "#F3F4F6",
            color: order.status === "ADMIN_APPROVED" ? "#065F46" : order.status === "FULFILLED" ? "#1E40AF" : order.status === "REJECTED" ? "#991B1B" : "#6B7280"
          }, children: order.status }, void 0, false, {
            fileName: "app/routes/app.admin.orders-pending.jsx",
            lineNumber: 268,
            columnNumber: 19
          }, this),
          order.status === "ADMIN_APPROVED" && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { method: "post", style: {
            display: "inline"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "intent", value: "fulfill" }, void 0, false, {
              fileName: "app/routes/app.admin.orders-pending.jsx",
              lineNumber: 278,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "orderId", value: order.id }, void 0, false, {
              fileName: "app/routes/app.admin.orders-pending.jsx",
              lineNumber: 279,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "submit", style: styles2.fulfillBtn, children: "\u{1F4E6} Mark Fulfilled" }, void 0, false, {
              fileName: "app/routes/app.admin.orders-pending.jsx",
              lineNumber: 280,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/app.admin.orders-pending.jsx",
            lineNumber: 275,
            columnNumber: 57
          }, this)
        ] }, order.id, true, {
          fileName: "app/routes/app.admin.orders-pending.jsx",
          lineNumber: 264,
          columnNumber: 42
        }, this)) }, void 0, false, {
          fileName: "app/routes/app.admin.orders-pending.jsx",
          lineNumber: 263,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.admin.orders-pending.jsx",
        lineNumber: 255,
        columnNumber: 37
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.admin.orders-pending.jsx",
      lineNumber: 228,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.admin.orders-pending.jsx",
    lineNumber: 226,
    columnNumber: 10
  }, this);
}
_s(AdminOrdersPending, "NK6ka7/HEautSsalsuMmN1l1jAs=", false, function() {
  return [useLoaderData, useActionData, useNavigation];
});
_c2 = AdminOrdersPending;
var styles2 = {
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
  title: {
    margin: 0,
    fontSize: "24px",
    fontWeight: 700
  },
  subtitle: {
    margin: "4px 0 24px",
    fontSize: "14px",
    color: "#DC2626",
    fontWeight: 500
  },
  error: {
    padding: "12px",
    backgroundColor: "#FEF2F2",
    color: "#DC2626",
    borderRadius: "8px",
    marginBottom: "16px"
  },
  successMsg: {
    padding: "12px",
    backgroundColor: "#F0FDF4",
    color: "#065F46",
    borderRadius: "8px",
    marginBottom: "16px"
  },
  statsRow: {
    display: "flex",
    gap: "16px",
    marginBottom: "24px"
  },
  statCard: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px",
    padding: "16px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    border: "1px solid #E5E7EB"
  },
  statIcon: {
    fontSize: "24px"
  },
  statValue: {
    fontSize: "24px",
    fontWeight: 700,
    color: "#111827"
  },
  statLabel: {
    fontSize: "12px",
    color: "#6B7280"
  },
  recentList: {
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  },
  recentItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "10px 16px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    border: "1px solid #E5E7EB",
    fontSize: "13px"
  },
  recentId: {
    fontFamily: "monospace",
    color: "#6366F1",
    fontSize: "12px"
  },
  recentPack: {
    flex: 1,
    fontWeight: 600
  },
  statusPill: {
    fontSize: "11px",
    padding: "2px 8px",
    borderRadius: "4px",
    fontWeight: 600
  },
  fulfillBtn: {
    padding: "4px 10px",
    backgroundColor: "#DBEAFE",
    color: "#1E40AF",
    border: "none",
    borderRadius: "4px",
    fontSize: "11px",
    fontWeight: 600,
    cursor: "pointer"
  }
};
var _c2;
$RefreshReg$(_c2, "AdminOrdersPending");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AdminOrdersPending as default
};
//# sourceMappingURL=/build/routes/app.admin.orders-pending-EDPUEYGR.js.map
