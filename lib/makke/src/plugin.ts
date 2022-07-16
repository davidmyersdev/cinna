import chalk from 'chalk'
import { execaNode } from 'execa'
import { existsSync } from 'fs'
import { join } from 'path'
import readline from 'readline'
import { parseArgsStringToArgv } from 'string-argv'
import type { Plugin } from 'esbuild'
import type { Interface } from 'readline'

interface ReplOptions {
  baseDir: string
  reader: Interface
}

const completions = [
  'exit',
  'quit',
]

const completer = (line: string) => {
  const hits = completions.filter(completion => completion.startsWith(line))

  return [hits.length ? hits : completions, line]
}

const defaultOptions = () => {
  return {
    baseDir: process.cwd(),
    reader: readline.createInterface(process.stdin, process.stdout, completer),
  }
}

const isExit = (command: string) => {
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

const executor = (command: string, args: string[] = [], options: ReplOptions) => {
  if (isExit(command)) {
    say.info('Exiting CLI REPL session...')

    process.exit()
  }

  if (command) {
    const file = join(options.baseDir, command)

    if (existsSync(file)) {
      const childProcess = execaNode(file, args, { stdio: 'inherit' })

      childProcess.on('exit', () => {
        prompt(options)
      })
    } else {
      say.warn('command not found')

      prompt(options)
    }
  } else {
    prompt(options)
  }
}

const prompt = (options: ReplOptions) => {
  options.reader.question('> ', (answer: string) => {
    const [command, ...args] = parseArgsStringToArgv(answer)

    executor(command, args, options)
  })
}

export const repl = (userOptions: Partial<ReplOptions> = {}): Plugin => {
  let buildCount = 0
  const options = {
    ...defaultOptions(),
    ...userOptions,
  }

  return {
    name: 'esbuild:repl',
    async setup({ onEnd, onStart }) {
      onStart(() => {
        process.stdin.pause()

        if (buildCount > 0) {
          say.info('')
          say.warn('Files changed. Rebuilding...')
        }
      })

      onEnd(() => {
        say.info('Your CLI REPL is ready. Enter a command below.')

        process.stdin.setEncoding('utf8')
        process.stdin.resume()

        prompt(options)

        buildCount++
      })
    },
  }
}
