const path = require('path');

const pkg = require(path.resolve(`${process.cwd()}`, 'package.json'));

const isESModule = !!pkg && pkg.type === 'module';

const extensions = ['.js', '.cjs', '.mjs', '.ts', '.d.ts', '.wasm', '.json'];

module.exports = {
  extends: ['plugin:node/recommended'],

  env: {
    browser: false,
    commonjs: !isESModule,
    node: true,
    serviceworker: false,
    worker: false,
  },

  rules: {
    'sort-imports': 'off',
    'import/no-commonjs': 'off',
    'import/order': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    'unicorn/prefer-module': 'off',
  },

  settings: {
    node: {
      tryExtensions: extensions,
    },
  },
};
