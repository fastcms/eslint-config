# eslint-config

![NPM Package Version](https://img.shields.io/npm/v/@fastcms/eslint-config) ![Peer ESLint Version](https://img.shields.io/npm/dependency-version/@fastcms/eslint-config/peer/eslint) ![Peer Prettier Version](https://img.shields.io/npm/dependency-version/@fastcms/eslint-config/peer/prettier) ![Peer TypeScript Version](https://img.shields.io/npm/dependency-version/@fastcms/eslint-config/peer/typescript) ![Node.js Version](https://img.shields.io/node/v/@fastcms/eslint-config) ![Dependencies](https://img.shields.io/david/fastcms/eslint-config) ![Dev Dependencies](https://img.shields.io/david/dev/fastcms/eslint-config) ![NPM Weekly Downloads](https://img.shields.io/npm/dw/@fastcms/eslint-config) ![GitHub CI Workflow](https://github.com/fastcms/eslint-config/actions/workflows/main.yml/badge.svg) ![GitHub CodeQL Workflow](https://github.com/fastcms/eslint-config/actions/workflows/codeql-analysis.yml/badge.svg) ![MIT License](https://img.shields.io/github/license/fastcms/eslint-config) ![GitHub Contributors](https://img.shields.io/github/contributors/fastcms/eslint-config)

> Shared @eslint configs for web development projects of @fastcms.

This shared ESLint config is extended from both [airbnb](https://github.com/airbnb/javascript) and [prettier](https://prettier.io/) styles, it also can be used for monorepo project.

## Install

Use npx to install peerdeps automatically or install peerDependencies and optionalDependencies with npm/yarn manually.

```bash
# Install using npm
$ npm info "@fastcms/eslint-config" peerDependencies optionalDependencies
$ npx install-peerdeps --dev @fastcms/eslint-config

# Install using yarn
$ yarn add --dev @fastcms/eslint-config
$ yarn add --dev @babel/core eslint prettier typescript babel-plugin-module-resolver
```

## Usage

After installation, add following contents to your `.eslintrc` or the `eslintConfig` entry of `package.json` file.

### Monorepo (default)

```json
{
  "root": true,
  "extends": "@fastcms",
  "settings": {
    "polyfills": ["fetch", "Promise", "URL"]
  }
}
```

If you want to use different `tsconfig.json` for each working directory, you should add `workingDirectories` in `.vscode/settings.json`.

```json
{
  "eslint.workingDirectories": [
    "./@types/fastcms",
    "./apps/react-app",
    "./libs/utils",
    "./tools/eslint-config"
  ]
}
```

### JavaScript Only Project

```json
{
  "extends": "@fastcms/eslint-config/base"
}
```

This ESLint config is used for javascript only libraries or tools.

### JavaScript React Project

```json
{
  "extends": "@fastcms/eslint-config/react"
}
```

This ESLint config is used for javascript only react components or apps.

### TypeScript Project

```json
{
  "extends": "@fastcms/eslint-config/typescript"
}
```

This ESLint config is used for typescript first libraries or tools.

### TypeScript React Project

```json
{
  "extends": "@fastcms/eslint-config/typescript-react"
}
```

This ESlint config is used for typescript first react components or apps.

### Node.js Project

```json
{
  "extends": "@fastcms/eslint-config/node"
}
```

This ESLint config is used for nodejs libraries, tools or apps.

### MiniProgram Project

```json
{
  "extends": "@fastcms/eslint-config/miniprogram"
}
```

This ESLint config is used for wechat miniprogram projects.

### Electron

```json
{
  "extends": "@fastcms/eslint-config/electron"
}
```

### ESLint Ignore

You can add `.eslintignore` file or add `eslintIgnore` entry in `package.json` to exclude files or directories from lint. If you don't want to add `.eslintignore` file, extending `ignore-patterns.js` and adding `ignorePatterns` entry are also good choices.

```json
{
  "extends": ["@fastcms", "@fastcms/eslint-config/ignore-patterns"]
}
```

Or...

```json
{
  "extends": "@fastcms",
  "ignorePatterns": ["coverage", "node_modules"]
}
```

## ESLint Scripts

Add eslint scripts to `package.json`, then run ESLint with `yarn run eslint` manually, or integrate with GitHub Actions.

```json
{
  "scripts": {
    "eslint": "eslint --cache --ext .js,.cjs,.mjs,.jsx,.ts,.tsx,.md,.mdx .",
    "eslint:fix": "eslint --cache --fix --ext .js,.cjs,.mjs,.jsx,.ts,.tsx,.md,.mdx ."
  }
}
```

## License

The codebase and documentation in this repository are released under the [MIT License](./license)
