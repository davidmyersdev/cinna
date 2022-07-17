import type { BuildOptions } from 'esbuild'

export interface MakkeConfig {
  esbuild: BuildOptions
}

export function cli(): void
export function defineConfig(config: MakkeConfig): MakkeConfig
