import {
  createHotContext
} from "/build/_shared/chunk-ORVFF776.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-PNG5AS42.js";

// app/lib/export-utils.client.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/lib/export-utils.client.js"
  );
  import.meta.hot.lastModified = "1779603031566.048";
}
function exportCSV(data, columns, filename) {
  const header = columns.map((c) => c.label).join(",");
  const rows = data.map(
    (row) => columns.map((c) => {
      let val = typeof c.accessor === "function" ? c.accessor(row) : row[c.key];
      if (val == null)
        val = "";
      val = String(val).replace(/"/g, '""');
      return `"${val}"`;
    }).join(",")
  );
  const csv = [header, ...rows].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  downloadBlob(blob, `${filename}.csv`);
}
function exportJSON(data, filename) {
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  downloadBlob(blob, `${filename}.json`);
}
function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
function todayStr() {
  return (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
}
export {
  exportCSV,
  exportJSON,
  todayStr
};
//# sourceMappingURL=/build/_shared/export-utils.client-AMBZKMQI.js.map
