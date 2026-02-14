import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/lib/index.tsx'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  external: ['react', 'react-dom', 'chart.xkcd'],
});
