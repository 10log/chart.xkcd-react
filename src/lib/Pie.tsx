import chartXkcd from 'chart.xkcd';
import type { PieConfig } from 'chart.xkcd';
import { useRef, useEffect } from 'react';

export interface PieProps {
  config: PieConfig;
}

export function Pie({ config }: PieProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    while (svgRef.current.firstChild) {
      svgRef.current.removeChild(svgRef.current.firstChild);
    }

    new chartXkcd.Pie(svgRef.current, config);
  }, [config]);

  return <svg ref={svgRef} />;
}

export default Pie;
