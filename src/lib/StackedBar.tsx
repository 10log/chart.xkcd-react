import chartXkcd from 'chart.xkcd';
import type { ChartConfig } from 'chart.xkcd';
import { useRef, useEffect } from 'react';

export interface StackedBarProps {
  config: ChartConfig;
}

export function StackedBar({ config }: StackedBarProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    while (svgRef.current.firstChild) {
      svgRef.current.removeChild(svgRef.current.firstChild);
    }

    new chartXkcd.StackedBar(svgRef.current, config);
  }, [config]);

  return <svg ref={svgRef} />;
}

export default StackedBar;
