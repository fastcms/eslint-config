module.exports = {
  parser: '@typescript-eslint/parser',

  extends: [
    'eslint-config-airbnb',
    'eslint-config-airbnb/hooks',

    './common.js',
    './react.js',
    './typescript.js',
    './markdown.js',
    './prettier.js',
  ].map(require.resolve),

  parserOptions: {
    lib: ['ESNext'],
    warnOnUnsupportedTypeScriptVersion: true,
  },
};
