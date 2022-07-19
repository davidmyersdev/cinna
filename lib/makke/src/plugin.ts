import chalk from 'chalk'
import { execaNode } from 'execa'
import { existsSync } from 'fs'
import { join } from 'path'
import readline from 'readline'
import { parseArgsStringToArgv } from 'string-argv'
import { resolveCache, resolveRoot } from './fs'
import type { Plugin } from 'esbuild'
import type { Interface } from 'readline'
import { MakkeConfig } from './types'

interface ReplOptions {
  baseDir: string
  reader: Interface
}

const defaultCompletions = [
  'exit',
  'quit',
]

const completer = (config: MakkeConfig, line: string) => {
  const completions = defaultCompletions.concat(config.aliases)
  const hits = completions.filter(completion => completion.startsWith(line))

  return [hits.length ? hits : completions, line]
}

const defaultOptions = (config: MakkeConfig) => {
  return {
    baseDir: resolveRoot(),
    reader: readline.createInterface(process.stdin, process.stdout, (line: string) => {
      return completer(config, line)
    }),
  }
}

const isAlias = (config: MakkeConfig, command: string): boolean => {
  return config.aliases.includes(command)
}

const isExit = (command: string): boolean => {
  return command === 'exit' || command === 'quit'
}

const say = {
  info: (...messages: string[]) => {
    console.log(...messages.map(message => chalk.blueBright(message)))
  },
  warn: (...messages: string[]) => {
    console.warn(...messages.map(message => chalk.yellow(message)))
  },
  error: (...messages: string[]) => {
    console.error(...messages.map(message => chalk.red(message)))
  },
}

const executor = (config: MakkeConfig, command: string, args: string[] = [], options: ReplOptions) => {
  if (isExit(command)) {
    say.info('Exiting CLI REPL session...')

    process.exit()
  }

  if (command) {
    if (isAlias(config, command)) {
      // If the command is an alias, point to the dev build.
      var file = resolveCache('dev.mjs')
    } else {
      var file = join(options.baseDir, command)
    }

    if (existsSync(file)) {
      const childProcess = execaNode(file, args, { stdio: 'inherit' })

      childProcess.on('exit', () => {
        prompt(config, options)
      })
    } else {
      say.warn('command not found')

      prompt(config, options)
    }
  } else {
    prompt(config, options)
  }
}

const prompt = (config: MakkeConfig, options: ReplOptions) => {
  options.reader.question('> ', (answer: string) => {
    const [command, ...args] = parseArgsStringToArgv(answer)

    executor(config, command, args, options)
  })
}

export const repl = (config: MakkeConfig, replConfig: Partial<ReplOptions> = {}): Plugin => {
  let buildCount = 0
  let startTime = Date.now()
  const options = {
    ...defaultOptions(config),
    ...replConfig,
  }

  return {
    name: 'esbuild:repl',
    async setup({ onEnd, onStart }) {
      onStart(() => {
        process.stdin.pause()

        if (buildCount > 0) {
          say.info('')
          say.warn('Files changed. Rebuilding...')

          startTime = Date.now()
        }
      })

      onEnd(() => {
        say.info(`Ready in ${Date.now() - startTime} ms. Enter a command below.`)

        process.stdin.setEncoding('utf8')
        process.stdin.resume()

        prompt(config, options)

        buildCount++
      })
    },
  }
}
