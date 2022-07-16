import { pnpPlugin } from '@yarnpkg/esbuild-plugin-pnp'
import { cac } from 'cac'
import { build } from './build'
import { version } from '../package.json' assert { type: 'json' }

const dev = (..._args: any[]) => {
  build({
    // Todo: Add support for config file and command line options.
    entryPoints: ['./example.ts'],
    outfile: './dist/example.js',
    plugins: [
      pnpPlugin(),
    ],
    tsconfig: './tsconfig.json',
  })
}

const cli = cac('makke')

cli.version(version)
cli.help()

cli.command('[options]').action(() => cli.outputHelp())
cli.command('dev').action(dev)

cli.parse()
