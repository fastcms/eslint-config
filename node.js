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
      extends: ['./lib/js.js', './lib/node.js'].map(require.resolve),
    },

    {
      files: ['**/*.{spec,test}.js', '**/{test,tests,__tests__}/**/*.js'],
      extends: ['./lib/js.js', './lib/node.js', './lib/testing.js'].map(require.resolve),
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
      files: ['**/*.ts'],
      excludedFiles: [
        '**/*.d.ts',
        '**/*.{md,mdx}/*.ts',
        '**/*.{spec,test}.ts',
        '**/{test,tests,__tests__}/**/*.ts',
      ],
      extends: ['./lib/ts.js', './lib/node.js'].map(require.resolve),
    },

    {
      files: ['**/*.{spec,test}.ts', '**/{test,tests,__tests__}/**/*.ts'],
      extends: ['./lib/ts.js', './lib/node.js', './lib/testing.js'].map(require.resolve),
    },

    {
      files: ['**/*.d.ts'],
      extends: ['./lib/ts.js', './lib/dts.js', './lib/node.js'].map(require.resolve),
    },

    {
      files: ['**/*.{md,mdx}'],
      processor: 'markdown/markdown',
    },

    {
      files: ['**/*.{md,mdx}/*.js'],
      extends: ['./lib/md.js', './lib/node.js'].map(require.resolve),
    },

    {
      files: ['**/*.{md,mdx}/*.jsx'],
      extends: ['./lib/mdx.js', './lib/node.js'].map(require.resolve),
    },

    {
      files: ['**/*.{md,mdx}/*.ts'],
      extends: ['./lib/md-ts.js', './lib/node.js'].map(require.resolve),
    },

    {
      files: ['**/*.{md,mdx}/*.tsx'],
      extends: ['./lib/mdx-ts', './lib/node.js'].map(require.resolve),
    },
  ],
};
