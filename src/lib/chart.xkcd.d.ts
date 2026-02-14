declare module 'chart.xkcd' {
  interface ChartDataset {
    label?: string;
    data: number[];
  }

  interface ChartData {
    labels: string[];
    datasets: ChartDataset[];
  }

  interface ChartConfig {
    title?: string;
    xLabel?: string;
    yLabel?: string;
    data: ChartData;
    options?: Record<string, unknown>;
  }

  interface XYPoint {
    x: number;
    y: number;
  }

  interface XYDataset {
    label?: string;
    data: XYPoint[];
  }

  interface XYConfig {
    title?: string;
    xLabel?: string;
    yLabel?: string;
    data: {
      datasets: XYDataset[];
    };
    options?: Record<string, unknown>;
  }

  interface PieDataset {
    data: number[];
  }

  interface PieConfig {
    title?: string;
    data: {
      labels: string[];
      datasets: PieDataset[];
    };
    options?: Record<string, unknown>;
  }

  class Line {
    constructor(svg: SVGSVGElement, config: ChartConfig);
  }

  class Bar {
    constructor(svg: SVGSVGElement, config: ChartConfig);
  }

  class StackedBar {
    constructor(svg: SVGSVGElement, config: ChartConfig);
  }

  class Pie {
    constructor(svg: SVGSVGElement, config: PieConfig);
  }

  class XY {
    constructor(svg: SVGSVGElement, config: XYConfig);
  }

  class Radar {
    constructor(svg: SVGSVGElement, config: ChartConfig);
  }

  const chartXkcd: {
    Line: typeof Line;
    Bar: typeof Bar;
    StackedBar: typeof StackedBar;
    Pie: typeof Pie;
    XY: typeof XY;
    Radar: typeof Radar;
  };

  export default chartXkcd;

  export type {
    ChartConfig,
    ChartData,
    ChartDataset,
    XYConfig,
    XYPoint,
    XYDataset,
    PieConfig,
    PieDataset,
  };
}
