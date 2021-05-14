module.exports = {
  extends: [require.resolve('./lib/common.js')],

  plugins: ['markdown'],

  overrides: [
    {
      files: ['**/*.js'],
      excludedFiles: [
        '**/*.{md,mdx}/*.js',
        '**/*.{spec,test}.js',
        '**/{test,tests,__tests__}/**/*.js',
      ],
      extends: ['./lib/js.js', './lib/browser.js'].map(require.resolve),
    },

    {
      files: ['**/*.{spec,test}.js', '**/{test,tests,__tests__}/**/*.js'],
      extends: ['./lib/js.js', './lib/browser.js', './lib/testing.js'].map(require.resolve),
    },

    {
      files: ['**/*.cjs'],
      excludedFiles: ['**/*.{spec,test}.cjs', '**/{test,tests,__tests__}/**/*.cjs'],
      extends: ['./lib/js.js', './lib/cjs.js'].map(require.resolve),
    },

    {
      files: ['**/*.{spec,test}.cjs', '**/{test,tests,__tests__}/**/*.cjs'],
      extends: ['./lib/js.js', './lib/cjs.js', './lib/testing.js'].map(require.resolve),
    },

    {
      files: ['**/*.mjs'],
      excludedFiles: ['**/*.{spec,test}.mjs', '**/{test,tests,__tests__}/**/*.mjs'],
      extends: ['./lib/js.js', './lib/mjs.js'].map(require.resolve),
    },

    {
      files: ['**/*.{spec,test}.mjs', '**/{test,tests,__tests__}/**/*.mjs'],
      extends: ['./lib/js.js', './lib/mjs.js', './lib/testing.js'].map(require.resolve),
    },

    {
      files: ['**/*.{md,mdx}'],
      processor: 'markdown/markdown',
    },

    {
      files: ['**/*.{md,mdx}/*.js'],
      extends: ['./lib/md.js', './lib/browser.js'].map(require.resolve),
    },

    {
      files: ['**/*.{md,mdx}/*.jsx'],
      extends: ['./lib/mdx.js', './lib/browser.js'].map(require.resolve),
    },

    {
      files: ['**/*.{md,mdx}/*.ts'],
      extends: ['./lib/md-ts.js', './lib/browser.js'].map(require.resolve),
    },

    {
      files: ['**/*.{md,mdx}/*.tsx'],
      extends: ['./lib/mdx-ts', './lib/browser.js'].map(require.resolve),
    },
  ],
};
