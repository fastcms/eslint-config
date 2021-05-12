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
      extends: [require.resolve('./base.js')],
    },

    {
      files: ['**/*.cjs'],
      excludedFiles: ['**/*.{spec,test}.cjs', '**/{test,tests,__tests__}/**/*.cjs'],
      extends: ['./base.js', './lib/cjs.js'].map(require.resolve),
    },

    {
      files: ['**/*.mjs'],
      excludedFiles: ['**/*.{spec,test}.mjs', '**/{test,tests,__tests__}/**/*.mjs'],
      extends: ['./base.js', './lib/mjs.js'].map(require.resolve),
    },

    {
      files: ['**/*.jsx'],
      excludedFiles: [
        '**/*.{md,mdx}/*.jsx',
        '**/*.{spec,test}.jsx',
        '**/{test,tests,__tests__}/**/*.jsx',
      ],
      extends: [require.resolve('./react.js')],
    },

    {
      files: ['**/*.ts'],
      excludedFiles: [
        '**/*.d.ts',
        '**/*.{md,mdx}/*.ts',
        '**/*.{spec,test}.ts',
        '**/{test,tests,__tests__}/**/*.ts',
      ],
      extends: [require.resolve('./typescript.js')],
    },

    {
      files: ['**/*.tsx'],
      excludedFiles: [
        '**/*.{md,mdx}/*.tsx',
        '**/*.{spec,test}.tsx',
        '**/{test,tests,__tests__}/**/*.tsx',
      ],
      extends: [require.resolve('./typescript-react.js')],
    },

    {
      files: ['**/*.d.ts'],
      excludedFiles: ['**/*.{css,scss,sass,less}.d.ts'],
      extends: ['./typescript.js', './lib/dts.js'].map(require.resolve),
    },

    {
      files: ['**/*.{css,scss,sass,less}.d.ts'],
      extends: ['./typescript.js', './lib/dts.js'].map(require.resolve),
      rules: {
        'prettier/prettier': 'off',
      },
    },

    {
      files: ['**/*.{spec,test}.js', '**/{test,tests,__tests__}/**/*.js'],
      extends: ['./base.js', './lib/test-dom.js'].map(require.resolve),
    },

    {
      files: ['**/*.{spec,test}.cjs', '**/{test,tests,__tests__}/**/*.cjs'],
      extends: ['./base.js', './lib/cjs.js', './lib/test-dom.js'].map(require.resolve),
    },

    {
      files: ['**/*.{spec,test}.mjs', '**/{test,tests,__tests__}/**/*.mjs'],
      extends: ['./base.js', './lib/mjs.js', './lib/test-dom.js'].map(require.resolve),
    },

    {
      files: ['**/*.{spec,test}.jsx', '**/{test,tests,__tests__}/**/*.jsx'],
      extends: ['./react.js', './lib/test-react.js'].map(require.resolve),
    },

    {
      files: ['**/*.{spec,test}.ts', '**/{test,tests,__tests__}/**/*.ts'],
      extends: ['./typescript.js', './lib/test-dom.js'].map(require.resolve),
    },

    {
      files: ['**/*.{spec,test}.tsx', '**/{test,tests,__tests__}/**/*.tsx'],
      extends: ['./typescript-react.js', './lib/test-react.js'].map(require.resolve),
    },

    {
      files: ['**/*.{md,mdx}'],
      processor: 'markdown/markdown',
    },

    {
      files: ['**/*.{md,mdx}/*.js'],
      extends: [require.resolve('./lib/markdown-base')],
    },

    {
      files: ['**/*.{md,mdx}/*.jsx'],
      extends: [require.resolve('./lib/markdown-react')],
    },

    {
      files: ['**/*.{md,mdx}/*.ts'],
      extends: [require.resolve('./lib/markdown-typescript')],
    },

    {
      files: ['**/*.{md,mdx}/*.tsx'],
      extends: [require.resolve('./lib/markdown-typescript-react')],
    },
  ],
};
