import chartXkcd from 'chart.xkcd';
import type { ChartConfig } from 'chart.xkcd';
import { useRef, useEffect } from 'react';

export interface LineProps {
  config: ChartConfig;
}

export function Line({ config }: LineProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear previous chart
    while (svgRef.current.firstChild) {
      svgRef.current.removeChild(svgRef.current.firstChild);
    }

    new chartXkcd.Line(svgRef.current, config);
  }, [config]);

  return <svg ref={svgRef} />;
}

export default Line;
