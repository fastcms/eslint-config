const projectTSConfig = require('./lib/project');

const extensions = ['.js', '.cjs', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts', '.wasm', '.json'];

module.exports = {
  parser: '@typescript-eslint/parser',

  extends: [
    'eslint-config-airbnb',
    'eslint-config-airbnb/hooks',

    './lib/common.js',
    './lib/react.js',
    './lib/typescript.js',
    './lib/tsdoc.js',
    './lib/prettier.js',
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
