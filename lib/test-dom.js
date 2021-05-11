module.exports = {
  extends: [
    'plugin:jest/recommended',
    'plugin:jest-dom/recommended',
    'plugin:jest-formatting/recommended',
    'plugin:testing-library/dom',
  ],

  env: {
    'jest': true,
    'jest/globals': true,
  },
};
