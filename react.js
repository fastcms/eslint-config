module.exports = {
  extends: [require.resolve('./base.js')],

  overrides: [
    {
      files: ['**/*.jsx'],
      excludedFiles: [
        '**/*.{md,mdx}/*.jsx',
        '**/*.{spec,test}.jsx',
        '**/{test,tests,__tests__}/**/*.jsx',
      ],
      extends: ['./lib/jsx.js', './lib/browser.js'].map(require.resolve),
    },

    {
      files: ['**/*.{spec,test}.jsx', '**/{test,tests,__tests__}/**/*.jsx'],
      extends: ['./lib/jsx.js', './lib/browser.js', './lib/testing.js'].map(require.resolve),
    },
  ],
};
