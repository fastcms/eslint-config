module.exports = {
  extends: ['plugin:node/recommended-script'],

  env: {
    browser: false,
    commonjs: true,
    node: true,
    serviceworker: false,
    worker: false,
  },

  rules: {
    'import/no-commonjs': 'off',
    'unicorn/prefer-module': 'off',
    'simple-import-sort/imports': 'off',
    'simple-import-sort/exports': 'off',
    'import/order': [
      'warn',
      {
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'never',
        'groups': ['builtin', 'external', 'parent', 'sibling', 'index', 'unknown'],
        'pathGroups': [
          {
            pattern: '@fastcms/**',
            group: 'external',
            position: 'after',
          },
        ],
      },
    ],
  },
};
