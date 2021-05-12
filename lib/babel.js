const { rules: baseStyleRules } = require('eslint-config-airbnb-base/rules/style');
const { rules: baseBestPracticesRules } = require('eslint-config-airbnb-base/rules/best-practices');
const { rules: commonUserRules } = require('./common');

module.exports = {
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
};
