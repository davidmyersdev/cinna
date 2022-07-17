import { pnpPlugin } from '@yarnpkg/esbuild-plugin-pnp'
import { build } from 'esbuild'
import { existsSync, unlinkSync, writeFileSync } from 'fs'
import { resolve } from 'path'
import type { MakkeConfig } from './types'

const CONFIG_FILE_NAME = 'makke.config.ts'

// https://github.com/evanw/esbuild/issues/1921
const bannerLines = [
  'import { createRequire as makkeCreateRequire } from "module"',
  '',
  'if (typeof require === "undefined") {',
  '  var require = makkeCreateRequire(import.meta.url)',
  '}',
]

// Todo: Watch config file for changes and rebuild when necessary.
const bundleConfig = async (file: string) => {
  const result = await build({
    absWorkingDir: process.cwd(),
    banner: {
      js: bannerLines.join('\n'),
    },
    bundle: true,
    entryPoints: [file],
    external: ['makke'],
    format: 'esm',
    metafile: true,
    outfile: 'out.js',
    platform: 'node',
    plugins: [
      // Todo: This might not be necessary in the final build.
      pnpPlugin(),
    ],
    sourcemap: 'inline',
    write: false,
  })

  return result.outputFiles[0].text
}

const readConfig = async (file: string): Promise<MakkeConfig> => {
  const rawConfig = await bundleConfig(file)
  const tmpFile = `${file}.mjs`

  writeFileSync(tmpFile, rawConfig)

  try {
    return (await import(tmpFile)).default as MakkeConfig
  } finally {
    // unlinkSync(tmpFile)
  }
}

const resolveConfig = (): string => {
  return resolve(process.cwd(), CONFIG_FILE_NAME)
}

export const config = async (): Promise<MakkeConfig> => {
  const file = resolveConfig()

  if (!existsSync(file)) {
    throw new Error(`${CONFIG_FILE_NAME} does not exist.`)
  }

  return readConfig(file)
}

export const defineConfig = (config: MakkeConfig): MakkeConfig => {
  return config
}
