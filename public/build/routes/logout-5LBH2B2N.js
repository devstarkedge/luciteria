import {
  require_session
} from "/build/_shared/chunk-IYCODHKJ.js";
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

// app/routes/logout.jsx
var import_node = __toESM(require_node());
var import_session = __toESM(require_session());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/logout.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/logout.jsx"
  );
  import.meta.hot.lastModified = "1779859634560.4226";
}
function Logout() {
  return null;
}
_c = Logout;
var _c;
$RefreshReg$(_c, "Logout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Logout as default
};
//# sourceMappingURL=/build/routes/logout-5LBH2B2N.js.map
