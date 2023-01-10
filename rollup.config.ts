import { defineConfig } from 'rollup'
import pkg from './package.json'
import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'

export default defineConfig({
  input: 'src/index.ts',
  plugins: [typescript(), terser()],
  output: [
    {
      format: 'cjs',
      file: pkg.main,
      esModule: false,
      sourcemap: true,
    },
    {
      format: 'es',
      file: pkg.module,
      sourcemap: true,
    },
    {
      format: 'iife',
      file: pkg.jsdelivr,
      name: 'Test',
      extend: true,
      globals: {},
    },
  ],
})
