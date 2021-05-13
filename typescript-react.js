module.exports = {
  extends: [require.resolve('./react.js')],

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
      files: ['**/*.tsx'],
      excludedFiles: [
        '**/*.{md,mdx}/*.tsx',
        '**/*.{spec,test}.tsx',
        '**/{test,tests,__tests__}/**/*.tsx',
      ],
      extends: ['./lib/tsx.js', './lib/browser.js'].map(require.resolve),
    },

    {
      files: ['**/*.{spec,test}.tsx', '**/{test,tests,__tests__}/**/*.tsx'],
      extends: ['./lib/tsx.js', './lib/browser.js', './lib/test-react.js'].map(require.resolve),
    },

    {
      files: ['**/*.d.ts'],
      excludedFiles: ['**/*.{css,scss,sass,less,wxss}.d.ts'],
      extends: ['./lib/ts.js', './lib/dts.js', './lib/browser.js'].map(require.resolve),
    },

    {
      files: ['**/*.{css,scss,sass,less,wxss}.d.ts'],
      extends: ['./lib/ts.js', './lib/dts.js', './lib/browser.js'].map(require.resolve),
      rules: {
        'prettier/prettier': 'off',
      },
    },
  ],
};
