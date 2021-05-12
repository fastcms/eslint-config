const { rules: baseBestPracticesRules } = require('eslint-config-airbnb-base/rules/best-practices');

const extensions = ['.js', '.jsx', '.ts', '.tsx', '.d.ts'];

module.exports = {
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'off',

    'unicorn/filename-case': [
      'error',
      {
        cases: {
          kebabCase: true,
          snakeCase: true,
        },
      },
    ],

    'dot-notation': baseBestPracticesRules['dot-notation'],
    'no-implied-eval': baseBestPracticesRules['no-implied-eval'],
    'no-return-await': baseBestPracticesRules['no-return-await'],
    'no-throw-literal': baseBestPracticesRules['no-throw-literal'],

    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/no-implied-eval': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    '@typescript-eslint/return-await': 'off',
    '@typescript-eslint/await-thenable': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/prefer-regexp-exec': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/unbound-method': 'off',
  },

  settings: {
    'import/extensions': extensions,
    'import/resolver': {
      'node': {
        extensions,
      },
      'babel-module': {
        allowExistingDirectories: true,
      },
    },
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import/parsers': {
      '@babel/eslint-parser': ['.js', '.jsx'],
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
  },
};
