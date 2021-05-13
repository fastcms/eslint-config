const projectTSConfig = require('./project');

const extensions = ['.js', '.cjs', '.mjs', '.ts', '.d.ts', '.wasm', '.json'];

module.exports = {
  parser: '@typescript-eslint/parser',

  extends: [
    'eslint-config-airbnb-base',

    './common.js',
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
      '@typescript-eslint/parser': ['.ts', '.d.ts'],
    },
  },
};
