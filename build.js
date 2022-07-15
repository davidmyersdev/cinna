import { pnpPlugin } from '@yarnpkg/esbuild-plugin-pnp'
import { build } from 'esbuild'
import { readFileSync } from 'fs'
import { repl } from './plugin.js'

// Importing json files does not work with pnp loader right now.
// https://github.com/yarnpkg/berry/issues/4245
// import { dependencies } from './package.json' assert { type: 'json' }
const { dependencies } = readFileSync('./package.json')

await build({
  bundle: true,
  entryPoints: ['./src/index.ts'],
  external: dependencies,
  format: 'esm',
  platform: 'node',
  plugins: [
    pnpPlugin(),
    repl(),
  ],
  tsconfig: './tsconfig.json',
  outfile: './dist/kin.js',
})
