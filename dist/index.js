"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/lib/index.tsx
var index_exports = {};
__export(index_exports, {
  Bar: () => Bar,
  Line: () => Line,
  Pie: () => Pie,
  Radar: () => Radar,
  StackedBar: () => StackedBar,
  XY: () => XY
});
module.exports = __toCommonJS(index_exports);

// src/lib/Bar.tsx
var import_chart = __toESM(require("chart.xkcd"));
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
function Bar({ config }) {
  const svgRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    if (!svgRef.current) return;
    while (svgRef.current.firstChild) {
      svgRef.current.removeChild(svgRef.current.firstChild);
    }
    new import_chart.default.Bar(svgRef.current, config);
  }, [config]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { ref: svgRef });
}

// src/lib/StackedBar.tsx
var import_chart2 = __toESM(require("chart.xkcd"));
var import_react2 = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
function StackedBar({ config }) {
  const svgRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    if (!svgRef.current) return;
    while (svgRef.current.firstChild) {
      svgRef.current.removeChild(svgRef.current.firstChild);
    }
    new import_chart2.default.StackedBar(svgRef.current, config);
  }, [config]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", { ref: svgRef });
}

// src/lib/Pie.tsx
var import_chart3 = __toESM(require("chart.xkcd"));
var import_react3 = require("react");
var import_jsx_runtime3 = require("react/jsx-runtime");
function Pie({ config }) {
  const svgRef = (0, import_react3.useRef)(null);
  (0, import_react3.useEffect)(() => {
    if (!svgRef.current) return;
    while (svgRef.current.firstChild) {
      svgRef.current.removeChild(svgRef.current.firstChild);
    }
    new import_chart3.default.Pie(svgRef.current, config);
  }, [config]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { ref: svgRef });
}

// src/lib/Line.tsx
var import_chart4 = __toESM(require("chart.xkcd"));
var import_react4 = require("react");
var import_jsx_runtime4 = require("react/jsx-runtime");
function Line({ config }) {
  const svgRef = (0, import_react4.useRef)(null);
  (0, import_react4.useEffect)(() => {
    if (!svgRef.current) return;
    while (svgRef.current.firstChild) {
      svgRef.current.removeChild(svgRef.current.firstChild);
    }
    new import_chart4.default.Line(svgRef.current, config);
  }, [config]);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("svg", { ref: svgRef });
}

// src/lib/XY.tsx
var import_chart5 = __toESM(require("chart.xkcd"));
var import_react5 = require("react");
var import_jsx_runtime5 = require("react/jsx-runtime");
function XY({ config }) {
  const svgRef = (0, import_react5.useRef)(null);
  (0, import_react5.useEffect)(() => {
    if (!svgRef.current) return;
    while (svgRef.current.firstChild) {
      svgRef.current.removeChild(svgRef.current.firstChild);
    }
    new import_chart5.default.XY(svgRef.current, config);
  }, [config]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("svg", { ref: svgRef });
}

// src/lib/Radar.tsx
var import_chart6 = __toESM(require("chart.xkcd"));
var import_react6 = require("react");
var import_jsx_runtime6 = require("react/jsx-runtime");
function Radar({ config }) {
  const svgRef = (0, import_react6.useRef)(null);
  (0, import_react6.useEffect)(() => {
    if (!svgRef.current) return;
    while (svgRef.current.firstChild) {
      svgRef.current.removeChild(svgRef.current.firstChild);
    }
    new import_chart6.default.Radar(svgRef.current, config);
  }, [config]);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("svg", { ref: svgRef });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Bar,
  Line,
  Pie,
  Radar,
  StackedBar,
  XY
});
