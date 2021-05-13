const projectTSConfig = require('./project');

const extensions = ['.js', '.cjs', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts', '.wasm', '.json'];

module.exports = {
  parser: '@typescript-eslint/parser',

  extends: [
    'eslint-config-airbnb',
    'eslint-config-airbnb/hooks',

    './common.js',
    './react.js',
    './typescript.js',
    './tsdoc.js',
    './prettier.js',
  ].map(require.resolve),

  parserOptions: {
    lib: ['ESNext'],
    project: projectTSConfig,
    warnOnUnsupportedTypeScriptVersion: true,
  },

  settings: {
    'import/extensions': extensions,
    'import/resolver': {
      node: {
        extensions,
      },
      typescript: {
        project: projectTSConfig,
      },
    },
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
  },
};
