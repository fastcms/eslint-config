const { rules: baseStyleRules } = require('eslint-config-airbnb-base/rules/style');
const { rules: baseBestPracticesRules } = require('eslint-config-airbnb-base/rules/best-practices');
const { rules: commonUserRules } = require('./common.js');

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  parser: '@babel/eslint-parser',

  parserOptions: {
    requireConfigFile: false,
    allowImportExportEverywhere: false,
    babelOptions: {
      presets: [
        [
          '@babel/preset-env',
          {
            bugfixes: true,
            targets: {
              esmodules: true,
            },
          },
        ],
      ],
      plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        ['@babel/plugin-proposal-private-methods', { loose: true }],
        ['@babel/plugin-syntax-top-level-await', {}],
      ],
    },
  },

  plugins: ['@babel'],

  rules: {
    'new-cap': 'off',
    '@babel/new-cap': commonUserRules['new-cap'],

    'no-invalid-this': 'off',
    '@babel/no-invalid-this': baseBestPracticesRules['no-invalid-this'],

    'no-unused-expressions': 'off',
    '@babel/no-unused-expressions': commonUserRules['no-unused-expressions'],

    'object-curly-spacing': 'off',
    '@babel/object-curly-spacing': baseStyleRules['object-curly-spacing'],

    'semi': 'off',
    '@babel/semi': baseStyleRules.semi,
  },

  settings: {
    'import/parsers': {
      '@babel/eslint-parser': ['.js', '.cjs', '.mjs', '.jsx'],
    },
    'import/resolver': {
      'babel-module': {},
    },
  },
};
