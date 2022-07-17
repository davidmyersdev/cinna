import { cac } from 'cac'
import { version } from '../package.json' assert { type: 'json' }

// https://github.com/cacjs/cac/blob/ce0f46c482c01dff85ac49ef0e4af48819137407/src/CAC.ts#L19-L24
interface ParsedArgv {
  args: ReadonlyArray<string>
  options: {
    [k: string]: any
  }
}

const isDefault = (parsed: ParsedArgv): boolean => {
  const hasArgs = parsed.args.length > 0
  const hasOptions = Object.keys(parsed.options).length > 1
  const hasPositional = parsed.options['--'].length > 0

  return !(hasArgs || hasOptions || hasPositional)
}

export const cli = (): void => {
  const definition = cac('kin')

  definition.version(version)
  definition.help()

  if (isDefault(definition.parse())) {
    definition.outputHelp()
  }
}
