module.exports = {
  extends: [require.resolve('./base.js')],

  overrides: [
    {
      files: ['**/*.ts'],
      excludedFiles: [
        '**/*.d.ts',
        '**/*.{md,mdx}/*.ts',
        '**/*.{spec,test}.ts',
        '**/{test,tests,__tests__}/**/*.ts',
      ],
      extends: ['./lib/ts.js', './lib/browser.js'].map(require.resolve),
    },

    {
      files: ['**/*.{spec,test}.ts', '**/{test,tests,__tests__}/**/*.ts'],
      extends: ['./lib/ts.js', './lib/browser.js', './lib/test-dom.js'].map(require.resolve),
    },

    {
      files: ['**/*.d.ts'],
      extends: ['./lib/ts.js', './lib/dts.js', './lib/browser.js'].map(require.resolve),
    },
  ],
};
