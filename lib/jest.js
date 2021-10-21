/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  env: {
    'jest/globals': true,
  },

  plugins: ['jest', 'testing-library'],

  extends: ['plugin:jest/recommended', 'plugin:testing-library/react'],

  settings: {
    jest: {
      version: require('jest/package.json').version,
    },
  },
};
