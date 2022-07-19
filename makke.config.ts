import { pnpPlugin } from '@yarnpkg/esbuild-plugin-pnp'
import { defineConfig } from 'makke'

export default defineConfig({
  aliases: [
    'kin',
  ],
  esbuild: {
    entryPoints: ['./src/bin.ts'],
    outfile: './dist/kin.js',
    plugins: [
      pnpPlugin(),
    ],
    tsconfig: './tsconfig.json',
  }
})
