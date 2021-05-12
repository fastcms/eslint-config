module.exports = {
  parser: '@babel/eslint-parser',

  extends: [
    'eslint-config-airbnb',
    'eslint-config-airbnb/hooks',

    './common.js',
    './babel.js',
    './react.js',
    './markdown.js',
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
        [
          '@babel/preset-react',
          {
            runtime: 'automatic',
          },
        ],
      ],
      plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }],
      ],
    },
  },
};
