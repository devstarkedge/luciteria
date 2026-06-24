import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  createHotContext
} from "/build/_shared/chunk-ORVFF776.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/app._index.jsx
var import_node = __toESM(require_node());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app._index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app._index.jsx"
  );
  import.meta.hot.lastModified = "1779859750545.5356";
}
function AppIndex() {
  return null;
}
_c = AppIndex;
var _c;
$RefreshReg$(_c, "AppIndex");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AppIndex as default
};
//# sourceMappingURL=/build/routes/app._index-TFFRXJ7T.js.map
