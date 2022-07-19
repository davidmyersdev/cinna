import { cac } from 'cac'
import { build as buildProd, buildDev } from './build'
import { config } from './config'
import { version } from '../package.json' assert { type: 'json' }

const build = async (..._args: any[]) => {
  const buildOptions = (await config()).esbuild || {}

  return buildProd(buildOptions)
}

const dev = async (..._args: any[]) => {
  const buildOptions = (await config()).esbuild || {}

  return buildDev(buildOptions)
}

export const cli = (): void => {
  const definition = cac('makke')

  definition.version(version)
  definition.help()

  definition.command('[options]').action(definition.outputHelp)
  definition.command('build').action(build)
  definition.command('dev').action(dev)

  definition.parse()
}
