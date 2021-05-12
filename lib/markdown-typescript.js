module.exports = {
  parser: '@typescript-eslint/parser',

  extends: [
    'eslint-config-airbnb-base',

    './common.js',
    './typescript.js',
    './markdown.js',
    './prettier.js',
  ].map(require.resolve),

  parserOptions: {
    lib: ['ESNext'],
    warnOnUnsupportedTypeScriptVersion: true,
  },
};
