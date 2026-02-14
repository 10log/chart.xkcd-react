import * as react_jsx_runtime from 'react/jsx-runtime';
import { ChartConfig, PieConfig, XYConfig } from 'chart.xkcd';

interface BarProps {
    config: ChartConfig;
}
declare function Bar({ config }: BarProps): react_jsx_runtime.JSX.Element;

interface StackedBarProps {
    config: ChartConfig;
}
declare function StackedBar({ config }: StackedBarProps): react_jsx_runtime.JSX.Element;

interface PieProps {
    config: PieConfig;
}
declare function Pie({ config }: PieProps): react_jsx_runtime.JSX.Element;

interface LineProps {
    config: ChartConfig;
}
declare function Line({ config }: LineProps): react_jsx_runtime.JSX.Element;

interface XYProps {
    config: XYConfig;
}
declare function XY({ config }: XYProps): react_jsx_runtime.JSX.Element;

interface RadarProps {
    config: ChartConfig;
}
declare function Radar({ config }: RadarProps): react_jsx_runtime.JSX.Element;

export { Bar, type BarProps, Line, type LineProps, Pie, type PieProps, Radar, type RadarProps, StackedBar, type StackedBarProps, XY, type XYProps };
