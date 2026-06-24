import {
  Toast
} from "/build/_shared/chunk-G3NSOU4G.js";
import {
  CreditBalance
} from "/build/_shared/chunk-ATUZTG6B.js";
import {
  TierBadge
} from "/build/_shared/chunk-LFX7UVIL.js";
import {
  require_session
} from "/build/_shared/chunk-IYCODHKJ.js";
import {
  require_auth
} from "/build/_shared/chunk-U26VATEP.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
  Link,
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
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:../lib/db.server
var require_db = __commonJS({
  "empty-module:../lib/db.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/profile.jsx
var import_node = __toESM(require_node());
var import_react2 = __toESM(require_react());
var import_auth = __toESM(require_auth());
var import_session = __toESM(require_session());
var import_db = __toESM(require_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/profile.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/profile.jsx"
  );
  import.meta.hot.lastModified = "1779902617754.3318";
}
var FORMAT_LABELS = {
  "10mm": "10mm Cubes",
  "25.4mm": "25.4mm Cubes (1 inch)",
  "50mm": "50mm Cubes",
  "lucite": "Lucite Cubes",
  "ampoules": "Ampoules"
};
function Profile() {
  _s();
  const {
    user,
    subscription
  } = useLoaderData();
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [showPasswordForm, setShowPasswordForm] = (0, import_react2.useState)(false);
  const shareUrl = typeof window !== "undefined" ? `${window.location.origin}/wishlist/${user.wishlistToken}` : `/wishlist/${user.wishlistToken}`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.page, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.container, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.header, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/app/cabinet", style: styles.backLink, children: "\u2190 Back to Cabinet" }, void 0, false, {
        fileName: "app/routes/profile.jsx",
        lineNumber: 203,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { style: styles.title, children: "\u2699\uFE0F Settings" }, void 0, false, {
        fileName: "app/routes/profile.jsx",
        lineNumber: 204,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.subtitle, children: "Manage your profile, subscription, and wishlist sharing." }, void 0, false, {
        fileName: "app/routes/profile.jsx",
        lineNumber: 205,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/profile.jsx",
      lineNumber: 202,
      columnNumber: 9
    }, this),
    actionData?.success && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toast, { message: actionData.success, type: "success" }, void 0, false, {
      fileName: "app/routes/profile.jsx",
      lineNumber: 209,
      columnNumber: 33
    }, this),
    actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toast, { message: actionData.error, type: "error" }, void 0, false, {
      fileName: "app/routes/profile.jsx",
      lineNumber: 210,
      columnNumber: 31
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.card, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.cardTitle, children: "\u{1F3C6} Membership Status" }, void 0, false, {
        fileName: "app/routes/profile.jsx",
        lineNumber: 214,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.membershipRow, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.memberLabel, children: "Tier" }, void 0, false, {
            fileName: "app/routes/profile.jsx",
            lineNumber: 217,
            columnNumber: 15
          }, this),
          user.tierName ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TierBadge, { tierName: user.tierName, size: "md" }, void 0, false, {
            fileName: "app/routes/profile.jsx",
            lineNumber: 218,
            columnNumber: 32
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
            fontSize: 14,
            color: "#9CA3AF"
          }, children: "No membership" }, void 0, false, {
            fileName: "app/routes/profile.jsx",
            lineNumber: 218,
            columnNumber: 83
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/profile.jsx",
          lineNumber: 216,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.memberLabel, children: "Status" }, void 0, false, {
            fileName: "app/routes/profile.jsx",
            lineNumber: 224,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
            display: "inline-block",
            padding: "3px 10px",
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 600,
            backgroundColor: user.subscriptionStatus === "ACTIVE" ? "#D1FAE5" : user.subscriptionStatus === "PAUSED" ? "#FEF3C7" : user.subscriptionStatus === "CANCELLED" ? "#FEE2E2" : "#F3F4F6",
            color: user.subscriptionStatus === "ACTIVE" ? "#065F46" : user.subscriptionStatus === "PAUSED" ? "#92400E" : user.subscriptionStatus === "CANCELLED" ? "#991B1B" : "#6B7280"
          }, children: [
            "\u25CF",
            " ",
            user.subscriptionStatus
          ] }, void 0, true, {
            fileName: "app/routes/profile.jsx",
            lineNumber: 225,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/profile.jsx",
          lineNumber: 223,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CreditBalance, { amount: user.storeCreditBalance, size: "sm" }, void 0, false, {
          fileName: "app/routes/profile.jsx",
          lineNumber: 238,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/profile.jsx",
          lineNumber: 237,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/profile.jsx",
        lineNumber: 215,
        columnNumber: 11
      }, this),
      subscription && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        marginTop: 12,
        paddingTop: 12,
        borderTop: "1px solid #F3F4F6",
        display: "flex",
        gap: 24,
        fontSize: 13,
        color: "#6B7280"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
          "Next Billing: ",
          new Date(subscription.nextBillingDate).toLocaleDateString()
        ] }, void 0, true, {
          fileName: "app/routes/profile.jsx",
          lineNumber: 250,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
          "Cycle: ",
          subscription.billingCycle
        ] }, void 0, true, {
          fileName: "app/routes/profile.jsx",
          lineNumber: 251,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/profile.jsx",
        lineNumber: 241,
        columnNumber: 28
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/app/cabinet/membership", style: {
        ...styles.saveBtn,
        display: "inline-block",
        marginTop: 12,
        textDecoration: "none",
        textAlign: "center"
      }, children: "Manage Subscription \u2192" }, void 0, false, {
        fileName: "app/routes/profile.jsx",
        lineNumber: 253,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/profile.jsx",
      lineNumber: 213,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.card, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.cardTitle, children: "\u{1F464} Profile" }, void 0, false, {
        fileName: "app/routes/profile.jsx",
        lineNumber: 266,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: "update-profile" }, void 0, false, {
          fileName: "app/routes/profile.jsx",
          lineNumber: 268,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.formGrid, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.field, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { style: styles.label, children: "First Name" }, void 0, false, {
              fileName: "app/routes/profile.jsx",
              lineNumber: 271,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "firstName", defaultValue: user.firstName, required: true, style: styles.input }, void 0, false, {
              fileName: "app/routes/profile.jsx",
              lineNumber: 272,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/profile.jsx",
            lineNumber: 270,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.field, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { style: styles.label, children: "Last Name" }, void 0, false, {
              fileName: "app/routes/profile.jsx",
              lineNumber: 275,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "lastName", defaultValue: user.lastName, required: true, style: styles.input }, void 0, false, {
              fileName: "app/routes/profile.jsx",
              lineNumber: 276,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/profile.jsx",
            lineNumber: 274,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/profile.jsx",
          lineNumber: 269,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
          ...styles.field,
          marginBottom: 14
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { style: styles.label, children: "Email" }, void 0, false, {
            fileName: "app/routes/profile.jsx",
            lineNumber: 283,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "email", type: "email", defaultValue: user.email, required: true, style: styles.input }, void 0, false, {
            fileName: "app/routes/profile.jsx",
            lineNumber: 284,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/profile.jsx",
          lineNumber: 279,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isSubmitting, style: styles.saveBtn, children: isSubmitting && actionData?.intent === "update-profile" ? "Saving..." : "Save Profile" }, void 0, false, {
          fileName: "app/routes/profile.jsx",
          lineNumber: 286,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/profile.jsx",
        lineNumber: 267,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.divider }, void 0, false, {
        fileName: "app/routes/profile.jsx",
        lineNumber: 292,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setShowPasswordForm(!showPasswordForm), style: styles.textBtn, children: showPasswordForm ? "Cancel" : "Change Password" }, void 0, false, {
        fileName: "app/routes/profile.jsx",
        lineNumber: 293,
        columnNumber: 11
      }, this),
      showPasswordForm && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", style: {
        marginTop: 12
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: "update-password" }, void 0, false, {
          fileName: "app/routes/profile.jsx",
          lineNumber: 299,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.formGrid, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.field, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { style: styles.label, children: "Current Password" }, void 0, false, {
              fileName: "app/routes/profile.jsx",
              lineNumber: 302,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "currentPassword", type: "password", required: true, style: styles.input }, void 0, false, {
              fileName: "app/routes/profile.jsx",
              lineNumber: 303,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/profile.jsx",
            lineNumber: 301,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.field, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { style: styles.label, children: "New Password" }, void 0, false, {
              fileName: "app/routes/profile.jsx",
              lineNumber: 306,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "newPassword", type: "password", required: true, minLength: 6, style: styles.input }, void 0, false, {
              fileName: "app/routes/profile.jsx",
              lineNumber: 307,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/profile.jsx",
            lineNumber: 305,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/profile.jsx",
          lineNumber: 300,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isSubmitting, style: styles.saveBtn, children: "Update Password" }, void 0, false, {
          fileName: "app/routes/profile.jsx",
          lineNumber: 310,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/profile.jsx",
        lineNumber: 296,
        columnNumber: 32
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/profile.jsx",
      lineNumber: 265,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.card, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.cardTitle, children: user.isSubscriber ? "\u{1F4EC} Subscription" : "\u{1F5C4}\uFE0F Collection Type" }, void 0, false, {
        fileName: "app/routes/profile.jsx",
        lineNumber: 319,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: "update-subscription" }, void 0, false, {
          fileName: "app/routes/profile.jsx",
          lineNumber: 323,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.field, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { style: styles.label, children: "I am a..." }, void 0, false, {
            fileName: "app/routes/profile.jsx",
            lineNumber: 325,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "userType", defaultValue: user.userType, style: styles.select, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "subscriber", children: "Cube of the Month Subscriber" }, void 0, false, {
              fileName: "app/routes/profile.jsx",
              lineNumber: 327,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "collector", children: "Independent Collector" }, void 0, false, {
              fileName: "app/routes/profile.jsx",
              lineNumber: 328,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/profile.jsx",
            lineNumber: 326,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/profile.jsx",
          lineNumber: 324,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.field, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { style: styles.label, children: "Subscription Format" }, void 0, false, {
            fileName: "app/routes/profile.jsx",
            lineNumber: 332,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "subscriptionFormat", defaultValue: user.subscriptionFormat || "", style: styles.select, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Select format..." }, void 0, false, {
              fileName: "app/routes/profile.jsx",
              lineNumber: 334,
              columnNumber: 17
            }, this),
            Object.entries(FORMAT_LABELS).map(([id, label]) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: id, children: label }, id, false, {
              fileName: "app/routes/profile.jsx",
              lineNumber: 335,
              columnNumber: 69
            }, this))
          ] }, void 0, true, {
            fileName: "app/routes/profile.jsx",
            lineNumber: 333,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.hint, children: "This determines which products are included in your subscription and filtered views." }, void 0, false, {
            fileName: "app/routes/profile.jsx",
            lineNumber: 337,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/profile.jsx",
          lineNumber: 331,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isSubmitting, style: styles.saveBtn, children: "Save Subscription Settings" }, void 0, false, {
          fileName: "app/routes/profile.jsx",
          lineNumber: 341,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/profile.jsx",
        lineNumber: 322,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/profile.jsx",
      lineNumber: 318,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.card, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.cardTitle, children: "\u{1F381} Wishlist Sharing" }, void 0, false, {
        fileName: "app/routes/profile.jsx",
        lineNumber: 349,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.cardDesc, children: "Your wishlist has a unique shareable link. Anyone with the link can see what elements you want." }, void 0, false, {
        fileName: "app/routes/profile.jsx",
        lineNumber: 350,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.urlRow, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { readOnly: true, value: shareUrl, style: styles.urlInput, onClick: (e) => e.target.select() }, void 0, false, {
          fileName: "app/routes/profile.jsx",
          lineNumber: 354,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => navigator.clipboard?.writeText(shareUrl), style: styles.copyBtn, children: "\u{1F4CB} Copy" }, void 0, false, {
          fileName: "app/routes/profile.jsx",
          lineNumber: 355,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/profile.jsx",
        lineNumber: 353,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", style: {
        marginTop: 12
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: "regenerate-token" }, void 0, false, {
          fileName: "app/routes/profile.jsx",
          lineNumber: 362,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", style: styles.dangerBtn, children: "\u{1F504} Regenerate Link" }, void 0, false, {
          fileName: "app/routes/profile.jsx",
          lineNumber: 363,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.hint, children: "This invalidates the old link. Anyone with the previous link will no longer be able to view your wishlist." }, void 0, false, {
          fileName: "app/routes/profile.jsx",
          lineNumber: 366,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/profile.jsx",
        lineNumber: 359,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/profile.jsx",
      lineNumber: 348,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.card, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { style: styles.cardTitle, children: "\u{1F4CA} Account Summary" }, void 0, false, {
        fileName: "app/routes/profile.jsx",
        lineNumber: 374,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.statsGrid, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.statItem, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.statValue, children: user.ownedCount }, void 0, false, {
            fileName: "app/routes/profile.jsx",
            lineNumber: 377,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.statLabel, children: "Elements Owned" }, void 0, false, {
            fileName: "app/routes/profile.jsx",
            lineNumber: 378,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/profile.jsx",
          lineNumber: 376,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.statItem, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.statValue, children: user.wishlistCount }, void 0, false, {
            fileName: "app/routes/profile.jsx",
            lineNumber: 381,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.statLabel, children: "Wishlisted" }, void 0, false, {
            fileName: "app/routes/profile.jsx",
            lineNumber: 382,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/profile.jsx",
          lineNumber: 380,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.statItem, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.statValue, children: 118 - user.ownedCount }, void 0, false, {
            fileName: "app/routes/profile.jsx",
            lineNumber: 385,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.statLabel, children: "Missing" }, void 0, false, {
            fileName: "app/routes/profile.jsx",
            lineNumber: 386,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/profile.jsx",
          lineNumber: 384,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/profile.jsx",
        lineNumber: 375,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/profile.jsx",
      lineNumber: 373,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.logoutSection, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", action: "/logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", style: styles.logoutBtn, children: "Log Out" }, void 0, false, {
      fileName: "app/routes/profile.jsx",
      lineNumber: 394,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/profile.jsx",
      lineNumber: 393,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/profile.jsx",
      lineNumber: 392,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/profile.jsx",
    lineNumber: 200,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/profile.jsx",
    lineNumber: 199,
    columnNumber: 10
  }, this);
}
_s(Profile, "nrB+qtCsXTKj6KoWvs9+ugcUiQ0=", false, function() {
  return [useLoaderData, useActionData, useNavigation];
});
_c = Profile;
var styles = {
  page: {
    minHeight: "100vh",
    background: "var(--luc-bg, #f5f7fa)",
    padding: "32px 20px"
  },
  container: {
    maxWidth: 640,
    margin: "0 auto"
  },
  header: {
    marginBottom: 28
  },
  backLink: {
    fontSize: 13,
    color: "var(--luc-accent, #4A90E2)",
    textDecoration: "none",
    display: "inline-block",
    marginBottom: 12
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    color: "var(--luc-text, #1a1a2e)",
    margin: "0 0 6px"
  },
  subtitle: {
    fontSize: 14,
    color: "var(--luc-text-muted, #6b7280)",
    margin: 0
  },
  card: {
    background: "#fff",
    border: "1px solid var(--luc-border, #e2e5ea)",
    borderRadius: 14,
    padding: "24px 28px",
    marginBottom: 20,
    boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: "var(--luc-text, #1a1a2e)",
    margin: "0 0 16px"
  },
  cardDesc: {
    fontSize: 13,
    color: "var(--luc-text-muted, #6b7280)",
    lineHeight: 1.4,
    marginBottom: 14
  },
  formGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 14,
    marginBottom: 14
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
    marginBottom: 12
  },
  label: {
    fontSize: 13,
    fontWeight: 600,
    color: "var(--luc-text, #1a1a2e)"
  },
  input: {
    padding: "9px 12px",
    borderRadius: 8,
    border: "1px solid var(--luc-border, #e2e5ea)",
    fontSize: 14,
    outline: "none",
    color: "var(--luc-text, #1a1a2e)"
  },
  select: {
    padding: "9px 12px",
    borderRadius: 8,
    border: "1px solid var(--luc-border, #e2e5ea)",
    fontSize: 14,
    outline: "none",
    background: "#fff",
    color: "var(--luc-text, #1a1a2e)"
  },
  hint: {
    fontSize: 12,
    color: "var(--luc-text-muted, #6b7280)",
    marginTop: 4,
    display: "block"
  },
  saveBtn: {
    padding: "10px 22px",
    borderRadius: 8,
    border: "none",
    background: "var(--luc-accent, #4A90E2)",
    color: "#fff",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer"
  },
  divider: {
    height: 1,
    background: "var(--luc-border, #e2e5ea)",
    margin: "16px 0"
  },
  textBtn: {
    background: "none",
    border: "none",
    color: "var(--luc-accent, #4A90E2)",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    padding: 0
  },
  urlRow: {
    display: "flex",
    gap: 8
  },
  urlInput: {
    flex: 1,
    padding: "8px 12px",
    borderRadius: 8,
    border: "1px solid var(--luc-border, #e2e5ea)",
    fontSize: 12,
    fontFamily: "monospace",
    color: "var(--luc-text-muted, #6b7280)",
    background: "var(--luc-bg, #f5f7fa)",
    outline: "none"
  },
  copyBtn: {
    padding: "8px 14px",
    borderRadius: 8,
    border: "none",
    background: "var(--luc-accent, #4A90E2)",
    color: "#fff",
    fontSize: 12,
    fontWeight: 600,
    cursor: "pointer",
    whiteSpace: "nowrap"
  },
  dangerBtn: {
    padding: "8px 16px",
    borderRadius: 8,
    border: "1px solid var(--luc-danger, #dc2626)",
    background: "#fff",
    color: "var(--luc-danger, #dc2626)",
    fontSize: 12,
    fontWeight: 600,
    cursor: "pointer"
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 14
  },
  statItem: {
    textAlign: "center",
    padding: "12px 8px",
    background: "var(--luc-bg, #f5f7fa)",
    borderRadius: 10
  },
  statValue: {
    display: "block",
    fontSize: 24,
    fontWeight: 700,
    color: "var(--luc-accent, #4A90E2)"
  },
  statLabel: {
    display: "block",
    fontSize: 12,
    color: "var(--luc-text-muted, #6b7280)",
    marginTop: 2
  },
  logoutSection: {
    textAlign: "center",
    padding: "20px 0"
  },
  logoutBtn: {
    padding: "10px 28px",
    borderRadius: 8,
    border: "1px solid var(--luc-border, #e2e5ea)",
    background: "#fff",
    color: "var(--luc-text-muted, #6b7280)",
    fontSize: 14,
    fontWeight: 500,
    cursor: "pointer"
  },
  membershipRow: {
    display: "flex",
    gap: 24,
    alignItems: "flex-start",
    flexWrap: "wrap"
  },
  memberLabel: {
    fontSize: 11,
    color: "#6B7280",
    textTransform: "uppercase",
    marginBottom: 4,
    fontWeight: 600
  }
};
var _c;
$RefreshReg$(_c, "Profile");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Profile as default
};
//# sourceMappingURL=/build/routes/profile-HMB3WHVL.js.map
