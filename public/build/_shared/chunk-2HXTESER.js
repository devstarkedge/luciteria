import {
  Form,
  Link,
  useLocation
} from "/build/_shared/chunk-PYMWJPZY.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-ORVFF776.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/AppNav.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/AppNav.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/AppNav.jsx"
  );
  import.meta.hot.lastModified = "1779909128592.4011";
}
var CUSTOMER_NAV = [{
  label: "Collection",
  path: "/app/cabinet",
  icon: "\u{1F9CA}"
}, {
  label: "Progress",
  path: "/app/progress",
  icon: "\u{1F4CA}"
}, {
  label: "Shop",
  path: "/app/shop",
  icon: "\u{1F6D2}"
}, {
  label: "Membership",
  path: "/app/cabinet/subscription",
  icon: "\u{1F4EC}",
  subscriberOnly: true
}, {
  label: "Profile",
  path: "/profile",
  icon: "\u{1F464}"
}];
var ADMIN_NAV = [{
  label: "Operations",
  path: "/app/admin/operations",
  icon: "\u{1F4CA}"
}, {
  label: "Customers",
  path: "/app/admin/customers",
  icon: "\u{1F465}"
}, {
  label: "Analytics",
  path: "/app/admin/analytics",
  icon: "\u{1F4C8}"
}, {
  label: "Pricing",
  path: "/app/admin/pricing",
  icon: "\u{1F4B2}"
}];
var COLLECTION_TYPE_LABELS = {
  "10mm": "10mm Cubes",
  "25.4mm": "25.4mm Cubes",
  "50mm": "50mm Cubes",
  "lucite": "Lucite Cubes",
  "ampoules": "Ampoules"
};
function AppNav({
  mode = "customer",
  customerName = "Collector",
  collectionType = null,
  userType = null,
  isSubscriber: isSubProp = false,
  currentPath = null
}) {
  _s();
  const location = useLocation();
  const isSubscriber = isSubProp || userType === "subscriber";
  const navItems = mode === "admin" ? ADMIN_NAV : CUSTOMER_NAV.filter((item) => !item.subscriberOnly || isSubscriber);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { style: styles.nav, className: "luc-sidebar", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.brand, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/app", style: styles.brandLink, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.logo, children: "\u269B\uFE0F" }, void 0, false, {
        fileName: "app/components/AppNav.jsx",
        lineNumber: 91,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "brand-text", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.brandName, children: "Luciteria" }, void 0, false, {
          fileName: "app/components/AppNav.jsx",
          lineNumber: 93,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.brandSub, children: "Collector Cabinet" }, void 0, false, {
          fileName: "app/components/AppNav.jsx",
          lineNumber: 94,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/AppNav.jsx",
        lineNumber: 92,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/AppNav.jsx",
      lineNumber: 90,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/AppNav.jsx",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    userType && mode === "customer" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.userTypeBadge, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
        fontSize: 12
      }, children: isSubscriber ? "\u{1F4EC}" : "\u{1F5C4}\uFE0F" }, void 0, false, {
        fileName: "app/components/AppNav.jsx",
        lineNumber: 101,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "link-label", style: {
        fontSize: 11,
        fontWeight: 600
      }, children: isSubscriber ? "Subscriber" : "Collector" }, void 0, false, {
        fileName: "app/components/AppNav.jsx",
        lineNumber: 104,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/AppNav.jsx",
      lineNumber: 100,
      columnNumber: 43
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.links, children: navItems.map((item) => {
      const activePath = currentPath || location.pathname;
      const isActive = activePath === item.path || item.path !== "/app/cabinet" && item.path !== "/profile" && activePath.startsWith(item.path);
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.path, style: {
        ...styles.link,
        ...isActive ? styles.linkActive : {}
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.icon, children: item.icon }, void 0, false, {
          fileName: "app/components/AppNav.jsx",
          lineNumber: 120,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "link-label", children: item.label }, void 0, false, {
          fileName: "app/components/AppNav.jsx",
          lineNumber: 121,
          columnNumber: 15
        }, this)
      ] }, item.path, true, {
        fileName: "app/components/AppNav.jsx",
        lineNumber: 116,
        columnNumber: 16
      }, this);
    }) }, void 0, false, {
      fileName: "app/components/AppNav.jsx",
      lineNumber: 112,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.footer, children: [
      mode === "customer" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/app/admin/operations", style: styles.switchLink, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "footer-text", children: "Switch to Admin \u2192" }, void 0, false, {
        fileName: "app/components/AppNav.jsx",
        lineNumber: 128,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/AppNav.jsx",
        lineNumber: 127,
        columnNumber: 32
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/app/cabinet", style: styles.switchLink, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "footer-text", children: "\u2190 Back to Cabinet" }, void 0, false, {
        fileName: "app/components/AppNav.jsx",
        lineNumber: 130,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/AppNav.jsx",
        lineNumber: 129,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.userBadge, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.userAvatar, children: "\u{1F464}" }, void 0, false, {
          fileName: "app/components/AppNav.jsx",
          lineNumber: 133,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "footer-text", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.userName, children: customerName }, void 0, false, {
            fileName: "app/components/AppNav.jsx",
            lineNumber: 135,
            columnNumber: 13
          }, this),
          collectionType && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.collectionBadge, children: COLLECTION_TYPE_LABELS[collectionType] || collectionType }, void 0, false, {
            fileName: "app/components/AppNav.jsx",
            lineNumber: 136,
            columnNumber: 32
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/AppNav.jsx",
          lineNumber: 134,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/AppNav.jsx",
        lineNumber: 132,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", action: "/logout", style: {
        marginTop: 8
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", style: styles.logoutBtn, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "footer-text", children: "Log Out" }, void 0, false, {
        fileName: "app/components/AppNav.jsx",
        lineNumber: 146,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/AppNav.jsx",
        lineNumber: 145,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/AppNav.jsx",
        lineNumber: 142,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/AppNav.jsx",
      lineNumber: 126,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/AppNav.jsx",
    lineNumber: 88,
    columnNumber: 10
  }, this);
}
_s(AppNav, "pkHmaVRPskBaU4tMJuJJpV42k1I=", false, function() {
  return [useLocation];
});
_c = AppNav;
var styles = {
  nav: {
    width: 240,
    minHeight: "100vh",
    background: "#ffffff",
    borderRight: "1px solid var(--luc-border)",
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    left: 0,
    top: 0,
    zIndex: 100,
    boxShadow: "2px 0 8px rgba(0,0,0,0.04)"
  },
  brand: {
    padding: "20px 16px",
    borderBottom: "1px solid var(--luc-border)"
  },
  brandLink: {
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: 8
  },
  logo: {
    fontSize: 24
  },
  brandName: {
    fontSize: 18,
    fontWeight: 700,
    color: "var(--luc-text)",
    display: "block"
  },
  brandSub: {
    fontSize: 10,
    color: "var(--luc-text-muted)",
    display: "block",
    marginTop: 1
  },
  links: {
    flex: 1,
    padding: "12px 8px",
    display: "flex",
    flexDirection: "column",
    gap: 2
  },
  link: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "10px 12px",
    borderRadius: 8,
    textDecoration: "none",
    color: "var(--luc-text-muted)",
    fontSize: 14,
    fontWeight: 500,
    transition: "all 0.15s ease"
  },
  linkActive: {
    background: "#EBF3FC",
    color: "var(--luc-accent)",
    fontWeight: 600
  },
  icon: {
    fontSize: 16,
    width: 20,
    textAlign: "center"
  },
  footer: {
    padding: "16px",
    borderTop: "1px solid var(--luc-border)"
  },
  switchLink: {
    display: "block",
    fontSize: 12,
    color: "var(--luc-accent)",
    textDecoration: "none",
    marginBottom: 12,
    opacity: 0.8
  },
  userBadge: {
    display: "flex",
    alignItems: "center",
    gap: 8
  },
  userAvatar: {
    fontSize: 20
  },
  userName: {
    fontSize: 13,
    color: "var(--luc-text)",
    fontWeight: 500,
    display: "block"
  },
  collectionBadge: {
    fontSize: 10,
    color: "var(--luc-accent)",
    background: "#EBF3FC",
    padding: "1px 6px",
    borderRadius: 4,
    fontWeight: 600,
    display: "inline-block",
    marginTop: 2
  },
  userTypeBadge: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    padding: "6px 16px",
    margin: "0 8px",
    borderRadius: 6,
    background: "#EBF3FC",
    color: "var(--luc-accent)"
  },
  logoutBtn: {
    background: "none",
    border: "none",
    fontSize: 12,
    color: "var(--luc-text-muted)",
    cursor: "pointer",
    padding: 0,
    opacity: 0.7,
    fontFamily: "inherit"
  }
};
var _c;
$RefreshReg$(_c, "AppNav");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  AppNav
};
//# sourceMappingURL=/build/_shared/chunk-2HXTESER.js.map
