# makke

A module bundler and dev environment for building Node CLI tools

## Getting Started

With your preferred package manager, add `makke` as a dev dependency.

```sh
# npm
npm i makke -D

# pnpm
pnpm i makke -D

# yarn
yarn add makke -D
```

### Add your config file

Create a file called `makke.config.ts` in your project root.

```ts
import { defineConfig } from 'makke'
import { dependencies } from './package.json' assert { type: 'json' }

export default defineConfig({
  esbuild: {
    entryPoints: ['./src/index.ts'],
    external: Object.keys(dependencies),
    outfile: './dist/bundle.js',
    tsconfig: './tsconfig.json',
  },
})
```

### Add scripts to your `package.json` file

Add the following scripts to your `package.json` file.

```json
{
  "scripts": {
    "dev": "makke dev",
    "build": "makke build" // coming soon
  }
}
```

## Using the dev environment

Running `makke dev` starts a [REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop) for you to run your custom commands. When your source files change, `makke` instantly rebuilds your project with the speed of `esbuild`.
