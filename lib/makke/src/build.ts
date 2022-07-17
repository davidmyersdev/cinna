import { deepmerge } from 'deepmerge-ts'
import { build as esbuild } from 'esbuild'
import { repl } from './plugin'
import type { BuildOptions } from 'esbuild'

const defaultConfig = (): BuildOptions => {
  return {
    bundle: true,
    format: 'esm',
    platform: 'node',
    plugins: [
      repl(),
    ],
    // Todo: Make watch optional to allow makke to be used as the actual build tool.
    watch: true,
  }
}

export const build = async (config: BuildOptions = {}) => {
  return esbuild(deepmerge(defaultConfig(), config))
}
