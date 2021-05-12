# @fastcms/eslint-config

![npm (scoped)](https://img.shields.io/npm/v/@fastcms/eslint-config) ![David](https://img.shields.io/david/fastcms/eslint-config) ![GitHub](https://img.shields.io/github/license/fastcms/eslint-config) ![GitHub CI Workflow](https://github.com/fastcms/eslint-config/actions/workflows/main.yml/badge.svg) ![GitHub CodeQL Workflow](https://github.com/fastcms/eslint-config/actions/workflows/codeql-analysis.yml/badge.svg)

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

## TODO

- [ ] bug: mdx with external react components parse error
- [ ] feat: fenced codeblock in markdown should support `ts` and `tsx`
- [ ] feat: add more typescript rules (refer to [eslint-config-airbnb-typescript](iamturns/eslint-config-airbnb-typescript))
- [ ] test: add more tests for ESLint rules
- [ ] ci: integrate repo with [GitHub Actions](https://docs.github.com/cn/actions/guides/building-and-testing-nodejs)

## License

The codebase and documentation in this repository are released under the [MIT License](./license)
