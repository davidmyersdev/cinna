import { cac } from 'cac'
import { build } from './build'
import { config } from './config'
import { version } from '../package.json' assert { type: 'json' }

const dev = async (..._args: any[]) => {
  const buildOptions = (await config()).esbuild || {}

  return build(buildOptions)
}

export const cli = (): void => {
  const definition = cac('makke')

  definition.version(version)
  definition.help()

  definition.command('[options]').action(definition.outputHelp)
  definition.command('dev').action(dev)

  definition.parse()
}
