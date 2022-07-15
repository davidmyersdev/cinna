import chalk from 'chalk'
import { execaNode } from 'execa'
import { existsSync } from 'fs'
import { join } from 'path'
import readline from 'readline'
import { parseArgsStringToArgv } from 'string-argv'
import type { Plugin } from 'esbuild'

interface ReplOptions {
  baseDir: string
}

const completions = [
  'exit',
  'kin.js',
  'quit',
]

const completer = (line: string) => {
  const hits = completions.filter(completion => completion.startsWith(line))

  return [hits.length ? hits : completions, line]
}

const defaultOptions = {
  baseDir: process.cwd(),
}

const isExit = (command: string) => {
  return command === 'exit' || command === 'quit'
}

const say = {
  info: (...messages) => {
    console.log(...messages.map(message => chalk.blueBright(message)))
  },
  warn: (...messages) => {
    console.warn(...messages.map(message => chalk.yellow(message)))
  },
  error: (...messages) => {
    console.error(...messages.map(message => chalk.red(message)))
  },
}

const executor = (command: string, args: string[] = [], options: ReplOptions) => {
  if (isExit(command)) {
    say.info('Exiting CLI REPL session...')

    process.exit()
  }

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
}

const reader = readline.createInterface(process.stdin, process.stdout, completer)

const prompt = (options: ReplOptions) => {
  reader.question('> ', (answer: string) => {
    const [command, ...args] = parseArgsStringToArgv(answer)

    executor(command, args, options)
  })
}

export const repl = (userOptions: Partial<ReplOptions> = {}): Plugin => {
  const options = {
    ...defaultOptions,
    ...userOptions,
  }

  return {
    name: 'esbuild:repl',
    async setup({ onEnd }) {
      onEnd(async () => {
        say.info('Your CLI REPL is ready. Enter a command below.')

        process.stdin.setEncoding('utf8')
        process.stdin.resume()

        prompt(options)
      })
    },
  }
}
