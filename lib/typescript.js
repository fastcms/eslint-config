const { rules: baseStyleRules } = require('eslint-config-airbnb-base/rules/style');
const { rules: baseBestPracticesRules } = require('eslint-config-airbnb-base/rules/best-practices');
const { rules: baseES6Rules } = require('eslint-config-airbnb-base/rules/es6');
const { rules: baseErrorsRules } = require('eslint-config-airbnb-base/rules/errors');
const { rules: baseVariablesRules } = require('eslint-config-airbnb-base/rules/variables');
const { rules: commonUserRules } = require('./common.js');

const extensions = ['.js', '.jsx', '.ts', '.tsx', '.d.ts'];

module.exports = {
  parser: '@typescript-eslint/parser',

  parserOptions: {
    lib: ['ESNext'],
    warnOnUnsupportedTypeScriptVersion: true,
  },

  extends: [require.resolve('./common.js'), 'plugin:@typescript-eslint/recommended'],

  plugins: ['@typescript-eslint', 'tsdoc'],

  rules: {
    'brace-style': 'off',
    'camelcase': 'off',
    'comma-dangle': 'off',
    'comma-spacing': 'off',
    'constructor-super': 'off',
    'dot-notation': 'off',
    'func-call-spacing': 'off',
    'indent': 'off',
    'getter-return': 'off',
    'keyword-spacing': 'off',
    'lines-between-class-members': 'off',
    'no-array-constructor': 'off',
    'no-const-assign': 'off',
    'no-dupe-args': 'off',
    'no-dupe-class-members': 'off',
    'no-dupe-keys': 'off',
    'no-empty-function': 'off',
    'no-extra-parens': 'off',
    'no-extra-semi': 'off',
    'no-func-assign': 'off',
    'no-implied-eval': 'off',
    'no-loop-func': 'off',
    'no-magic-numbers': 'off',
    'no-new-func': 'off',
    'no-new-symbol': 'off',
    'no-obj-calls': 'off',
    'no-redeclare': 'off',
    'no-return-await': 'off',
    'no-shadow': 'off',
    'no-this-before-super': 'off',
    'no-throw-literal': 'off',
    'no-undef': 'off',
    'no-unreachable': 'off',
    'no-unsafe-negation': 'off',
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    'object-curly-spacing': 'off',
    'quotes': 'off',
    'require-await': 'off',
    'semi': 'off',
    'space-before-function-paren': 'off',
    'space-infix-ops': 'off',
    'valid-typeof': 'off',

    // Rules for import plugins
    'import/named': 'off',
    'import/no-unresolved': 'off',

    // Rules for tsdoc plugin
    'tsdoc/syntax': 'warn',

    // Rules for typescript
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Function: {
            message: 'Use type of function instead',
            fixWith: '(value: any) => void',
          },
          Object: {
            message: 'Use record instead',
            fixWith: 'Record<string, any>',
          },
        },
      },
    ],
    '@typescript-eslint/brace-style': baseStyleRules['brace-style'],
    '@typescript-eslint/comma-dangle': [
      'error',
      {
        ...baseStyleRules['comma-dangle'][1],
        enums: 'always-multiline',
        generics: 'always-multiline',
        tuples: 'always-multiline',
      },
    ],
    '@typescript-eslint/comma-spacing': baseStyleRules['comma-spacing'],
    '@typescript-eslint/dot-notation': [
      'error',
      {
        ...baseBestPracticesRules['dot-notation'][1],
        allowPrivateClassPropertyAccess: true,
        allowProtectedClassPropertyAccess: true,
      },
    ],
    '@typescript-eslint/func-call-spacing': baseStyleRules['func-call-spacing'],
    '@typescript-eslint/indent': baseStyleRules.indent,
    '@typescript-eslint/lines-between-class-members': baseStyleRules['lines-between-class-members'],
    '@typescript-eslint/keyword-spacing': baseStyleRules['keyword-spacing'],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allowSingleOrDouble',
        trailingUnderscore: 'allowSingleOrDouble',
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],
    '@typescript-eslint/no-array-constructor': baseStyleRules['no-array-constructor'],
    '@typescript-eslint/no-dupe-class-members': baseES6Rules['no-dupe-class-members'],
    '@typescript-eslint/no-empty-function': baseBestPracticesRules['no-empty-function'],
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extra-parens': baseErrorsRules['no-extra-parens'],
    '@typescript-eslint/no-extra-semi': baseErrorsRules['no-extra-semi'],
    '@typescript-eslint/no-implied-eval': baseBestPracticesRules['no-implied-eval'],
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-loop-func': baseBestPracticesRules['no-loop-func'],
    '@typescript-eslint/no-magic-numbers': baseBestPracticesRules['no-magic-numbers'],
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-redeclare': baseBestPracticesRules['no-redeclare'],
    '@typescript-eslint/no-shadow': baseVariablesRules['no-shadow'],
    '@typescript-eslint/no-throw-literal': baseBestPracticesRules['no-throw-literal'],
    '@typescript-eslint/no-unused-expressions': commonUserRules['no-unused-expressions'],
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': baseVariablesRules['no-use-before-define'],
    '@typescript-eslint/no-useless-constructor': baseES6Rules['no-useless-constructor'],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/object-curly-spacing': baseStyleRules['object-curly-spacing'],
    '@typescript-eslint/quotes': baseStyleRules.quotes,
    '@typescript-eslint/require-await': baseBestPracticesRules['require-await'],
    '@typescript-eslint/return-await': baseBestPracticesRules['no-return-await'],
    '@typescript-eslint/semi': baseStyleRules.semi,
    '@typescript-eslint/space-before-function-paren': baseStyleRules['space-before-function-paren'],
    '@typescript-eslint/space-infix-ops': baseStyleRules['space-infix-ops'],
  },

  settings: {
    'import/extensions': extensions,
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      node: {
        extensions,
      },
    },
  },

  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      excludedFiles: ['**/*.{md,mdx}/*.{ts,tsx}'],
      parserOptions: {
        project: './tsconfig.json',
      },
      settings: {
        'import/resolver': {
          typescript: {
            project: './tsconfig.json',
          },
        },
      },
    },

    {
      files: ['**/*.d.ts'],
      rules: {
        'max-classes-per-file': 'off',
        '@typescript-eslint/no-misused-new': 'off',
      },
    },

    {
      files: ['**/*.{md,mdx}/*.{ts,tsx}'],
      rules: {
        'dot-notation': baseBestPracticesRules['dot-notation'],
        'no-console': 'off',
        'no-implied-eval': baseBestPracticesRules['no-implied-eval'],
        'no-return-await': baseBestPracticesRules['no-return-await'],
        'no-throw-literal': baseBestPracticesRules['no-throw-literal'],
        'no-unused-vars': 'off',
        'unicorn/filename-case': 'off',
        'tsdoc/syntax': 'off',
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
    },
  ],
};
