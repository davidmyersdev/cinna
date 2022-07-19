import { deepmerge } from 'deepmerge-ts'
import { build as esbuild } from 'esbuild'
import { repl } from './plugin'
import type { BuildOptions } from 'esbuild'

const defaultConfig = (): BuildOptions => {
  return {
    bundle: true,
    format: 'esm',
    platform: 'node',
  }
}

const devConfig = (): BuildOptions => {
  return {
    plugins: [
      repl(),
    ],
    watch: true,
  }
}

export const build = async (config: BuildOptions = {}) => {
  return esbuild(deepmerge(defaultConfig(), config))
}

export const buildDev = async (config: BuildOptions = {}) => {
  return esbuild(deepmerge(defaultConfig(), config, devConfig()))
}
