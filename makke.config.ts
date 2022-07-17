import { pnpPlugin } from '@yarnpkg/esbuild-plugin-pnp'
import { defineConfig } from 'makke'

export default defineConfig({
  esbuild: {
    entryPoints: ['./src/index.ts'],
    outfile: './dist/kin.js',
    plugins: [
      pnpPlugin(),
    ],
    tsconfig: './tsconfig.json',
  }
})
