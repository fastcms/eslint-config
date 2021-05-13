module.exports = {
  extends: ['plugin:node/recommended-module'],

  env: {
    browser: false,
    commonjs: false,
    node: true,
    serviceworker: false,
    worker: false,
  },

  rules: {
    'sort-imports': 'off',
    'import/order': 'off',
    'unicorn/prefer-module': 'error',
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
  },
};
