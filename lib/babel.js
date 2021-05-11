const { rules: commonUserRules } = require('./common');

module.exports = {
  plugins: ['@babel'],

  rules: {
    'new-cap': 'off',
    '@babel/new-cap': commonUserRules['new-cap'],

    'no-invalid-this': 'off',
    '@babel/no-invalid-this': 'off',

    'no-unused-expressions': 'off',
    '@babel/no-unused-expressions': commonUserRules['no-unused-expressions'],

    'object-curly-spacing': 'off',
    '@babel/object-curly-spacing': ['error', 'always'],

    'semi': 'off',
    '@babel/semi': ['error', 'always'],
  },
};
