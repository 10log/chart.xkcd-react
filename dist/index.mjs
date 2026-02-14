// src/lib/Bar.tsx
import chartXkcd from "chart.xkcd";
import { useRef, useEffect } from "react";
import { jsx } from "react/jsx-runtime";
function Bar({ config }) {
  const svgRef = useRef(null);
  useEffect(() => {
    if (!svgRef.current) return;
    while (svgRef.current.firstChild) {
      svgRef.current.removeChild(svgRef.current.firstChild);
    }
    new chartXkcd.Bar(svgRef.current, config);
  }, [config]);
  return /* @__PURE__ */ jsx("svg", { ref: svgRef });
}

// src/lib/StackedBar.tsx
import chartXkcd2 from "chart.xkcd";
import { useRef as useRef2, useEffect as useEffect2 } from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
function StackedBar({ config }) {
  const svgRef = useRef2(null);
  useEffect2(() => {
    if (!svgRef.current) return;
    while (svgRef.current.firstChild) {
      svgRef.current.removeChild(svgRef.current.firstChild);
    }
    new chartXkcd2.StackedBar(svgRef.current, config);
  }, [config]);
  return /* @__PURE__ */ jsx2("svg", { ref: svgRef });
}

// src/lib/Pie.tsx
import chartXkcd3 from "chart.xkcd";
import { useRef as useRef3, useEffect as useEffect3 } from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
function Pie({ config }) {
  const svgRef = useRef3(null);
  useEffect3(() => {
    if (!svgRef.current) return;
    while (svgRef.current.firstChild) {
      svgRef.current.removeChild(svgRef.current.firstChild);
    }
    new chartXkcd3.Pie(svgRef.current, config);
  }, [config]);
  return /* @__PURE__ */ jsx3("svg", { ref: svgRef });
}

// src/lib/Line.tsx
import chartXkcd4 from "chart.xkcd";
import { useRef as useRef4, useEffect as useEffect4 } from "react";
import { jsx as jsx4 } from "react/jsx-runtime";
function Line({ config }) {
  const svgRef = useRef4(null);
  useEffect4(() => {
    if (!svgRef.current) return;
    while (svgRef.current.firstChild) {
      svgRef.current.removeChild(svgRef.current.firstChild);
    }
    new chartXkcd4.Line(svgRef.current, config);
  }, [config]);
  return /* @__PURE__ */ jsx4("svg", { ref: svgRef });
}

// src/lib/XY.tsx
import chartXkcd5 from "chart.xkcd";
import { useRef as useRef5, useEffect as useEffect5 } from "react";
import { jsx as jsx5 } from "react/jsx-runtime";
function XY({ config }) {
  const svgRef = useRef5(null);
  useEffect5(() => {
    if (!svgRef.current) return;
    while (svgRef.current.firstChild) {
      svgRef.current.removeChild(svgRef.current.firstChild);
    }
    new chartXkcd5.XY(svgRef.current, config);
  }, [config]);
  return /* @__PURE__ */ jsx5("svg", { ref: svgRef });
}

// src/lib/Radar.tsx
import chartXkcd6 from "chart.xkcd";
import { useRef as useRef6, useEffect as useEffect6 } from "react";
import { jsx as jsx6 } from "react/jsx-runtime";
function Radar({ config }) {
  const svgRef = useRef6(null);
  useEffect6(() => {
    if (!svgRef.current) return;
    while (svgRef.current.firstChild) {
      svgRef.current.removeChild(svgRef.current.firstChild);
    }
    new chartXkcd6.Radar(svgRef.current, config);
  }, [config]);
  return /* @__PURE__ */ jsx6("svg", { ref: svgRef });
}
export {
  Bar,
  Line,
  Pie,
  Radar,
  StackedBar,
  XY
};
