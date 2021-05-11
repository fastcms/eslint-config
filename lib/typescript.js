const { rules: commonUserRules } = require('./common');

module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],

  plugins: ['@typescript-eslint'],

  rules: {
    'camelcase': 'off',
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',

    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unused-expressions': commonUserRules['no-unused-expressions'],
    '@typescript-eslint/no-unused-vars': commonUserRules['no-unused-vars'],
    '@typescript-eslint/no-use-before-define': commonUserRules['no-use-before-define'],

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

    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allowSingleOrDouble',
        trailingUnderscore: 'allowSingleOrDouble',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],
  },
};
