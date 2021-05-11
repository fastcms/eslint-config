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
  },
};
