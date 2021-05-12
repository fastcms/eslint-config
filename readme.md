# @fastcms/eslint-config

![NPM Package Version](https://img.shields.io/npm/v/@fastcms/eslint-config) ![Dependencies](https://img.shields.io/david/fastcms/eslint-config) ![Dev Dependencies](https://img.shields.io/david/dev/fastcms/eslint-config) ![MIT License](https://img.shields.io/github/license/fastcms/eslint-config) ![GitHub CI Workflow](https://github.com/fastcms/eslint-config/actions/workflows/main.yml/badge.svg) ![GitHub CodeQL Workflow](https://github.com/fastcms/eslint-config/actions/workflows/codeql-analysis.yml/badge.svg)

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
  "extends": ["@fastcms"],
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

### JavaScript only project

```json
{
  "extends": ["@fastcms/eslint-config/base"]
}
```

### JavaScript only project (with jsx)

```json
{
  "extends": ["@fastcms/eslint-config/react"]
}
```

### TypeScript only project

```json
{
  "extends": ["@fastcms/eslint-config/typescript"]
}
```

### TypeScript only project (with tsx)

```json
{
  "extends": ["@fastcms/eslint-config/typescript-react"]
}
```

## Scripts

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
