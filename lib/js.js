const extensions = ['.js', '.cjs', '.mjs', '.wasm', '.json'];

module.exports = {
  parser: '@babel/eslint-parser',

  extends: [
    'eslint-config-airbnb-base',

    './common.js',
    './babel.js',
    './jsdoc.js',
    './prettier.js',
  ].map(require.resolve),

  parserOptions: {
    allowImportExportEverywhere: false,
    requireConfigFile: false,
    babelOptions: {
      presets: [
        [
          '@babel/preset-env',
          {
            bugfixes: true,
            targets: {
              esmodules: true,
            },
          },
        ],
      ],
      plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }],
      ],
    },
  },

  settings: {
    'import/extensions': extensions,
    'import/resolver': {
      'node': {
        extensions,
      },
      'babel-module': {
        allowExistingDirectories: true,
      },
    },
    'import/parsers': {
      '@babel/eslint-parser': ['.js', '.cjs', '.mjs'],
    },
  },
};
