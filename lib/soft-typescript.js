const { rules: baseBestPracticesRules } = require('eslint-config-airbnb-base/rules/best-practices');

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  parser: '@typescript-eslint/parser',

  parserOptions: {
    lib: ['ESNext'],
    warnOnUnsupportedTypeScriptVersion: true,
  },

  extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/typescript'],

  plugins: ['@typescript-eslint'],

  rules: {
    'dot-notation': 'off',
    'no-use-before-define': 'off',
    'no-implied-eval': baseBestPracticesRules['no-implied-eval'],
    'no-return-await': baseBestPracticesRules['no-return-await'],
    'no-throw-literal': baseBestPracticesRules['no-throw-literal'],

    '@typescript-eslint/await-thenable': 'off',
    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-implied-eval': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/prefer-regexp-exec': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/return-await': 'off',
    '@typescript-eslint/unbound-method': 'off',
  },

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
  },
};
