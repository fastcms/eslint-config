/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: [require.resolve('./base.js')],

  plugins: ['markdown'],

  overrides: [
    {
      files: ['**/*.jsx'],
      excludedFiles: ['**/*.{md,mdx}/*.jsx'],
      extends: [
        'airbnb',
        require.resolve('./lib/common.js'),
        require.resolve('./lib/babel.js'),
        require.resolve('./lib/react.js'),
        'prettier',
      ],
    },

    {
      files: ['**/*.tsx'],
      excludedFiles: ['**/*.{md,mdx}/*.tsx'],
      parserOptions: {
        project: './tsconfig.json',
      },
      extends: [
        'airbnb',
        require.resolve('./lib/common.js'),
        require.resolve('./lib/typescript.js'),
        require.resolve('./lib/react.js'),
        'prettier',
      ],
      settings: {
        'import/resolver': {
          typescript: {
            project: './tsconfig.json',
          },
        },
        'jsdoc': {
          mode: 'typescript',
        },
      },
    },

    {
      files: ['**/*.{md,mdx}/*.jsx'],
      extends: [
        'airbnb',
        require.resolve('./lib/common.js'),
        require.resolve('./lib/babel.js'),
        require.resolve('./lib/react.js'),
        require.resolve('./lib/markdown.js'),
        'prettier',
      ],
      rules: {
        'react/jsx-no-undef': 'off',
      },
    },

    {
      files: ['**/*.{md,mdx}/*.tsx'],
      extends: [
        'airbnb',
        require.resolve('./lib/common.js'),
        require.resolve('./lib/soft-typescript.js'),
        require.resolve('./lib/react.js'),
        require.resolve('./lib/markdown.js'),
        'prettier',
      ],
      rules: {
        'react/jsx-no-undef': 'off',
      },
    },

    {
      files: ['**/__tests__/**/*.[jt]sx', '**/?(*.)+(spec|test).[jt]sx'],
      extends: ['plugin:testing-library/react'],
      plugins: ['testing-library'],
    },
  ],
};
