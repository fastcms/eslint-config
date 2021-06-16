const { rules: baseStyleRules } = require('eslint-config-airbnb-base/rules/style');
const { rules: baseBestPracticesRules } = require('eslint-config-airbnb-base/rules/best-practices');
const { rules: commonUserRules } = require('./common.js');

const extensions = ['.js', '.mjs', '.jsx'];

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
        [
          '@babel/preset-react',
          {
            runtime: 'automatic',
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

  extends: [
    require.resolve('./common.js'),

    'plugin:jsdoc/recommended',
    'plugin:prettier/recommended',
  ],

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
    'import/extensions': extensions,
    'import/parsers': {
      '@babel/eslint-parser': extensions,
    },
    'import/resolver': {
      'babel-module': {
        allowExistingDirectories: true,
      },
      'node': {
        extensions,
      },
    },
    'jsdoc': {
      mode: 'jsdoc',
    },
  },

  overrides: [
    {
      files: ['**/*.mjs'],
      globals: {
        $: true,
      },
      rules: {
        'import/no-commonjs': 'error',
        'unicorn/prefer-module': 'off',
      },
    },
    {
      files: ['**/*.{md,mdx}/*.{js,jsx}'],
      rules: {
        'no-console': 'off',
        'no-unused-vars': 'off',
        'unicorn/filename-case': 'off',
        'react/jsx-no-undef': 'off',
        'jsdoc/require-jsdoc': 'off',
        '@babel/no-unused-expressions': 'off',
      },
    },
  ],
};
