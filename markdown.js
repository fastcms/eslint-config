module.exports = {
  extends: ['./lib/common.js', './lib/mdx.js'].map(require.resolve),

  plugins: ['markdown'],

  overrides: [
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
