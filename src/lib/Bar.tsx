import chartXkcd from 'chart.xkcd';
import type { ChartConfig } from 'chart.xkcd';
import { useRef, useEffect } from 'react';

export interface BarProps {
  config: ChartConfig;
}

export function Bar({ config }: BarProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    while (svgRef.current.firstChild) {
      svgRef.current.removeChild(svgRef.current.firstChild);
    }

    new chartXkcd.Bar(svgRef.current, config);
  }, [config]);

  return <svg ref={svgRef} />;
}

export default Bar;
