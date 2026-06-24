import {
  require_credits_server
} from "/build/_shared/chunk-ARBW5MES.js";
import {
  CreditBalance
} from "/build/_shared/chunk-ATUZTG6B.js";
import {
  TierBadge
} from "/build/_shared/chunk-LFX7UVIL.js";
import {
  require_session_server
} from "/build/_shared/chunk-6O6WWWLW.js";
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
  useActionData,
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

// app/routes/app.cabinet.packs.jsx
var import_node = __toESM(require_node());
var import_db_server = __toESM(require_db_server());
var import_session_server = __toESM(require_session_server());
var import_credits_server = __toESM(require_credits_server());

// app/components/PackCard.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/PackCard.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/PackCard.jsx"
  );
  import.meta.hot.lastModified = "1779902190563.278";
}
function PackCard({
  pack,
  userTier,
  onPurchase,
  onPurchaseWithCredits
}) {
  const skuList = typeof pack.skuList === "string" ? JSON.parse(pack.skuList) : pack.skuList || [];
  const isRestricted = pack.tierName && pack.tierName !== userTier;
  const hasCredit = pack.creditCost && pack.creditCost > 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    ...styles.card,
    opacity: isRestricted ? 0.6 : 1
  }, children: [
    pack.imageUrl ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.imageWrap, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: pack.imageUrl, alt: pack.name, style: styles.image }, void 0, false, {
      fileName: "app/components/PackCard.jsx",
      lineNumber: 41,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/PackCard.jsx",
      lineNumber: 40,
      columnNumber: 24
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.imagePlaceholder, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
        fontSize: "32px"
      }, children: "\u{1F4E6}" }, void 0, false, {
        fileName: "app/components/PackCard.jsx",
        lineNumber: 43,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
        fontSize: "12px",
        color: "#9CA3AF"
      }, children: [
        pack.itemCount,
        " items"
      ] }, void 0, true, {
        fileName: "app/components/PackCard.jsx",
        lineNumber: 46,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/PackCard.jsx",
      lineNumber: 42,
      columnNumber: 18
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.body, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.header, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { style: styles.title, children: pack.name }, void 0, false, {
          fileName: "app/components/PackCard.jsx",
          lineNumber: 54,
          columnNumber: 11
        }, this),
        pack.tierName && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TierBadge, { tierName: pack.tierName, size: "sm" }, void 0, false, {
          fileName: "app/components/PackCard.jsx",
          lineNumber: 55,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/PackCard.jsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: styles.description, children: pack.description }, void 0, false, {
        fileName: "app/components/PackCard.jsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.skuPreview, children: [
        skuList.slice(0, 5).map((sku, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.skuChip, children: sku }, i, false, {
          fileName: "app/components/PackCard.jsx",
          lineNumber: 61,
          columnNumber: 48
        }, this)),
        skuList.length > 5 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.moreChip, children: [
          "+",
          skuList.length - 5,
          " more"
        ] }, void 0, true, {
          fileName: "app/components/PackCard.jsx",
          lineNumber: 62,
          columnNumber: 34
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/PackCard.jsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.pricing, children: [
        pack.price && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.price, children: [
          "$",
          pack.price.toFixed(2)
        ] }, void 0, true, {
          fileName: "app/components/PackCard.jsx",
          lineNumber: 66,
          columnNumber: 26
        }, this),
        hasCredit && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: styles.creditPrice, children: [
          "\u{1F4B0} ",
          pack.creditCost.toFixed(0),
          " credits"
        ] }, void 0, true, {
          fileName: "app/components/PackCard.jsx",
          lineNumber: 67,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/PackCard.jsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      isRestricted ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.restricted, children: [
        "\u{1F512} Requires ",
        pack.tierName,
        " tier or higher"
      ] }, void 0, true, {
        fileName: "app/components/PackCard.jsx",
        lineNumber: 70,
        columnNumber: 25
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: styles.actions, children: [
        pack.price && onPurchase && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: styles.buyBtn, onClick: () => onPurchase(pack.id), children: "Buy Now" }, void 0, false, {
          fileName: "app/components/PackCard.jsx",
          lineNumber: 73,
          columnNumber: 42
        }, this),
        hasCredit && onPurchaseWithCredits && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { style: styles.creditBtn, onClick: () => onPurchaseWithCredits(pack.id), children: "\u{1F4B0} Use Credits" }, void 0, false, {
          fileName: "app/components/PackCard.jsx",
          lineNumber: 76,
          columnNumber: 52
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/PackCard.jsx",
        lineNumber: 72,
        columnNumber: 20
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/PackCard.jsx",
      lineNumber: 52,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/PackCard.jsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
_c = PackCard;
var styles = {
  card: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    border: "1px solid #E5E7EB",
    overflow: "hidden",
    transition: "box-shadow 0.15s"
  },
  imageWrap: {
    height: "140px",
    overflow: "hidden",
    backgroundColor: "#F9FAFB"
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  imagePlaceholder: {
    height: "140px",
    backgroundColor: "#F3F4F6",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "4px"
  },
  body: {
    padding: "16px"
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "8px",
    marginBottom: "8px"
  },
  title: {
    margin: 0,
    fontSize: "16px",
    fontWeight: 700,
    color: "#111827"
  },
  description: {
    fontSize: "13px",
    color: "#6B7280",
    margin: "0 0 12px",
    lineHeight: 1.4
  },
  skuPreview: {
    display: "flex",
    flexWrap: "wrap",
    gap: "4px",
    marginBottom: "12px"
  },
  skuChip: {
    fontSize: "11px",
    padding: "2px 8px",
    backgroundColor: "#EEF2FF",
    color: "#4338CA",
    borderRadius: "4px",
    fontFamily: "monospace"
  },
  moreChip: {
    fontSize: "11px",
    padding: "2px 8px",
    backgroundColor: "#F3F4F6",
    color: "#6B7280",
    borderRadius: "4px"
  },
  pricing: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "12px"
  },
  price: {
    fontSize: "20px",
    fontWeight: 700,
    color: "#111827"
  },
  creditPrice: {
    fontSize: "14px",
    color: "#059669",
    fontWeight: 600
  },
  restricted: {
    padding: "8px 12px",
    backgroundColor: "#FEF3C7",
    borderRadius: "6px",
    fontSize: "12px",
    color: "#92400E",
    textAlign: "center"
  },
  actions: {
    display: "flex",
    gap: "8px"
  },
  buyBtn: {
    flex: 1,
    padding: "8px 16px",
    backgroundColor: "#2563EB",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer"
  },
  creditBtn: {
    flex: 1,
    padding: "8px 16px",
    backgroundColor: "#059669",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer"
  }
};
var _c;
$RefreshReg$(_c, "PackCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/app.cabinet.packs.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.cabinet.packs.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.cabinet.packs.jsx"
  );
  import.meta.hot.lastModified = "1779902531888.0215";
}
function PackStorefront() {
  _s();
  const {
    packs,
    user
  } = useLoaderData();
  const actionData = useActionData();
  const handlePurchase = (packId) => {
    const form = document.createElement("form");
    form.method = "post";
    form.style.display = "none";
    const i1 = document.createElement("input");
    i1.name = "intent";
    i1.value = "buy_direct";
    const i2 = document.createElement("input");
    i2.name = "packId";
    i2.value = packId;
    form.append(i1, i2);
    document.body.appendChild(form);
    form.submit();
  };
  const handlePurchaseWithCredits = (packId) => {
    const form = document.createElement("form");
    form.method = "post";
    form.style.display = "none";
    const i1 = document.createElement("input");
    i1.name = "intent";
    i1.value = "buy_credits";
    const i2 = document.createElement("input");
    i2.name = "packId";
    i2.value = packId;
    form.append(i1, i2);
    document.body.appendChild(form);
    form.submit();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: styles2.layout, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AppNav, { mode: "customer", userType: user.subscriptionStatus !== "NONE" ? "subscriber" : "collector" }, void 0, false, {
      fileName: "app/routes/app.cabinet.packs.jsx",
      lineNumber: 220,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { style: styles2.main, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: styles2.header, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { style: styles2.title, children: "Collector Packs" }, void 0, false, {
            fileName: "app/routes/app.cabinet.packs.jsx",
            lineNumber: 224,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { style: styles2.subtitle, children: "Curated element collections \u2014 hand-picked by Luciteria" }, void 0, false, {
            fileName: "app/routes/app.cabinet.packs.jsx",
            lineNumber: 225,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.cabinet.packs.jsx",
          lineNumber: 223,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CreditBalance, { amount: user.storeCreditBalance, size: "md" }, void 0, false, {
          fileName: "app/routes/app.cabinet.packs.jsx",
          lineNumber: 227,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.cabinet.packs.jsx",
        lineNumber: 222,
        columnNumber: 9
      }, this),
      actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: styles2.error, children: actionData.error }, void 0, false, {
        fileName: "app/routes/app.cabinet.packs.jsx",
        lineNumber: 230,
        columnNumber: 31
      }, this),
      actionData?.success && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: styles2.successMsg, children: actionData.success }, void 0, false, {
        fileName: "app/routes/app.cabinet.packs.jsx",
        lineNumber: 231,
        columnNumber: 33
      }, this),
      packs.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: styles2.emptyState, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { style: {
          fontSize: "48px"
        }, children: "\u{1F4E6}" }, void 0, false, {
          fileName: "app/routes/app.cabinet.packs.jsx",
          lineNumber: 234,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { children: "No packs available yet" }, void 0, false, {
          fileName: "app/routes/app.cabinet.packs.jsx",
          lineNumber: 237,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Check back soon \u2014 new collector packs are on the way!" }, void 0, false, {
          fileName: "app/routes/app.cabinet.packs.jsx",
          lineNumber: 238,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.cabinet.packs.jsx",
        lineNumber: 233,
        columnNumber: 31
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: styles2.packGrid, children: packs.map((pack) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PackCard, { pack, userTier: user.tierName, onPurchase: handlePurchase, onPurchaseWithCredits: handlePurchaseWithCredits }, pack.id, false, {
        fileName: "app/routes/app.cabinet.packs.jsx",
        lineNumber: 240,
        columnNumber: 32
      }, this)) }, void 0, false, {
        fileName: "app/routes/app.cabinet.packs.jsx",
        lineNumber: 239,
        columnNumber: 20
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: styles2.info, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h4", { style: {
          margin: "0 0 8px"
        }, children: "\u{1F4CB} How It Works" }, void 0, false, {
          fileName: "app/routes/app.cabinet.packs.jsx",
          lineNumber: 244,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { style: {
          margin: 0,
          paddingLeft: "20px",
          fontSize: "13px",
          color: "#374151",
          lineHeight: 1.8
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: "Browse themed packs curated by the Luciteria team" }, void 0, false, {
            fileName: "app/routes/app.cabinet.packs.jsx",
            lineNumber: 254,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: "Purchase with store credits or direct payment" }, void 0, false, {
            fileName: "app/routes/app.cabinet.packs.jsx",
            lineNumber: 255,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: "All orders are reviewed by our team before shipping" }, void 0, false, {
            fileName: "app/routes/app.cabinet.packs.jsx",
            lineNumber: 256,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: "Some packs are exclusive to specific membership tiers" }, void 0, false, {
            fileName: "app/routes/app.cabinet.packs.jsx",
            lineNumber: 257,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/app.cabinet.packs.jsx",
          lineNumber: 247,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/app.cabinet.packs.jsx",
        lineNumber: 243,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.cabinet.packs.jsx",
      lineNumber: 221,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.cabinet.packs.jsx",
    lineNumber: 219,
    columnNumber: 10
  }, this);
}
_s(PackStorefront, "vJGd0gEYqjhFjZviT8iuhD5Wf64=", false, function() {
  return [useLoaderData, useActionData];
});
_c2 = PackStorefront;
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
  packGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "20px",
    marginBottom: "32px"
  },
  emptyState: {
    textAlign: "center",
    padding: "48px",
    color: "#6B7280",
    backgroundColor: "#fff",
    borderRadius: "12px",
    border: "1px solid #E5E7EB"
  },
  info: {
    padding: "20px",
    backgroundColor: "#F0F9FF",
    borderRadius: "12px",
    border: "1px solid #BAE6FD"
  }
};
var _c2;
$RefreshReg$(_c2, "PackStorefront");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  PackStorefront as default
};
//# sourceMappingURL=/build/routes/app.cabinet.packs-ZOWDW5R6.js.map
