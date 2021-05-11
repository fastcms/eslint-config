module.exports = {
  extends: ['./lib/common.js', './lib/mdx.js'].map(require.resolve),

  plugins: ['markdown'],

  overrides: [
    {
      files: ['**/*.js'],
      extends: [require.resolve('./base.js')],
    },
    {
      files: ['**/*.cjs'],
      extends: ['./base.js', './lib/cjs.js'].map(require.resolve),
    },
    {
      files: ['**/*.mjs'],
      extends: ['./base.js', './lib/mjs.js'].map(require.resolve),
    },
    {
      files: ['**/*.jsx'],
      extends: [require.resolve('./react.js')],
    },
    {
      files: ['**/*.ts'],
      extends: [require.resolve('./typescript.js')],
    },
    {
      files: ['**/*.tsx'],
      extends: [require.resolve('./typescript-react.js')],
    },
    {
      files: ['**/*.d.ts'],
      extends: ['./typescript.js', './lib/dts.js'].map(require.resolve),
    },
    {
      files: ['**/*.css.d.ts', '**/*.scss.d.ts', '**/*.sass.d.ts', '**/*.less.d.ts'],
      extends: ['./typescript.js', './lib/dts.js'].map(require.resolve),
      rules: {
        'prettier/prettier': 'off',
      },
    },
    {
      files: ['**/{test,tests,__tests__}/**/*.js', '**/*.{spec,test}.js'],
      extends: ['./base.js', './lib/test-dom.js'].map(require.resolve),
    },
    {
      files: ['**/{test,tests,__tests__}/**/*.cjs', '**/*.{spec,test}.cjs'],
      extends: ['./base.js', './lib/cjs.js', './lib/test-dom.js'].map(require.resolve),
    },
    {
      files: ['**/{test,tests,__tests__}/**/*.mjs', '**/*.{spec,test}.mjs'],
      extends: ['./base.js', './lib/mjs.js', './lib/test-dom.js'].map(require.resolve),
    },
    {
      files: ['**/{test,tests,__tests__}/**/*.jsx', '**/*.{spec,test}.jsx'],
      extends: ['./react.js', './lib/test-react.js'].map(require.resolve),
    },
    {
      files: ['**/{test,tests,__tests__}/**/*.ts', '**/*.{spec,test}.ts'],
      extends: ['./typescript.js', './lib/test-dom.js'].map(require.resolve),
    },
    {
      files: ['**/{test,tests,__tests__}/**/*.tsx', '**/*.{spec,test}.tsx'],
      extends: ['./typescript-react.js', './lib/test-react.js'].map(require.resolve),
    },
    {
      files: ['**/*.md'],
      processor: 'markdown/markdown',
      rules: {
        'prettier/prettier': [
          'error',
          {
            parser: 'markdown',
          },
        ],
      },
    },
    {
      files: ['*.mdx'],
      extends: ['plugin:mdx/overrides'],
    },
    {
      files: '**/*.mdx/*.js',
      extends: [
        'plugin:mdx/code-blocks',
        require.resolve('./base.js'),
        require.resolve('./lib/markdown.js'),
      ],
    },
    {
      files: '**/*.mdx/*.jsx',
      extends: [
        'plugin:mdx/code-blocks',
        require.resolve('./react.js'),
        require.resolve('./lib/markdown.js'),
      ],
    },
    {
      files: '**/*.mdx/*.ts',
      extends: [
        'plugin:mdx/code-blocks',
        require.resolve('./typescript.js'),
        require.resolve('./lib/markdown.js'),
      ],
    },
    {
      files: '**/*.mdx/*.tsx',
      extends: [
        'plugin:mdx/code-blocks',
        require.resolve('./typescript-react.js'),
        require.resolve('./lib/markdown.js'),
      ],
    },
    {
      files: ['**/*.md/*.js'],
      extends: ['./base.js', './lib/markdown.js'].map(require.resolve),
    },
    {
      files: ['**/*.md/*.jsx'],
      extends: ['./react.js', './lib/markdown.js'].map(require.resolve),
    },
    {
      files: ['**/*.md/*.ts'],
      extends: ['./typescript.js', './lib/markdown.js'].map(require.resolve),
    },
    {
      files: ['**/*.md/*.tsx'],
      extends: ['./typescript-react.js', './lib/markdown.js'].map(require.resolve),
    },
  ],
};
