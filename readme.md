# eslint-config

![NPM Package Version](https://img.shields.io/npm/v/@fastcms/eslint-config) ![Peer ESLint Version](https://img.shields.io/npm/dependency-version/@fastcms/eslint-config/peer/eslint) ![Node.js Version](https://img.shields.io/node/v/@fastcms/eslint-config) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) ![NPM Weekly Downloads](https://img.shields.io/npm/dw/@fastcms/eslint-config) ![GitHub CI Workflow](https://github.com/fastcms/eslint-config/actions/workflows/main.yml/badge.svg)

> Shared @eslint configs for web development projects of @fastcms.

This shared ESLint config is extended from both [airbnb](https://github.com/airbnb/javascript) and [prettier](https://prettier.io/) styles, it also can be used for monorepo project.

## Installation

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

### Base

```json
{
  "root": true,
  "extends": "@fastcms/eslint-config/base"
}
```

This config is used for web utils project, the codebase can be written in both JavaScript and TypeScript.

### React (default)

```json
{
  "root": true,
  "extends": "@fastcms",
  "settings": {
    "polyfills": ["fetch", "Promise", "URL"]
  }
}
```

This config is used for react component or app project, the codebase can be written in both JavaScript and TypeScript.

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

## Project TypeScript Config

If your project includes TypeScript code, you should provide `tsconfig.json` for ESLint, the searching priority of `tsconfig.json` are below.

1. tsconfig.json (_root_)
2. packages/\*/tsconfig.json (_workspace_)

## License

The codebase and documentation in this repository are released under the [MIT License](./license)
