import chartXkcd from 'chart.xkcd';
import type { XYConfig } from 'chart.xkcd';
import { useRef, useEffect } from 'react';

export interface XYProps {
  config: XYConfig;
}

export function XY({ config }: XYProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    while (svgRef.current.firstChild) {
      svgRef.current.removeChild(svgRef.current.firstChild);
    }

    new chartXkcd.XY(svgRef.current, config);
  }, [config]);

  return <svg ref={svgRef} />;
}

export default XY;
