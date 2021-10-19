/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  plugins: ['markdown'],

  overrides: [
    {
      files: ['**/*.js'],
      excludedFiles: ['**/*.{md,mdx}/*.js'],
      extends: [
        'airbnb-base',
        require.resolve('./lib/common.js'),
        require.resolve('./lib/babel.js'),
        'prettier',
      ],
    },

    {
      files: ['**/*.cjs'],
      extends: [
        'airbnb-base',
        require.resolve('./lib/common.js'),
        require.resolve('./lib/babel.js'),
        'prettier',
      ],
      rules: {},
    },

    {
      files: ['**/*.mjs'],
      extends: [
        'airbnb-base',
        require.resolve('./lib/common.js'),
        require.resolve('./lib/babel.js'),
        'prettier',
      ],
      rules: {
        'import/no-commonjs': 'error',
        'unicorn/prefer-module': 'error',
      },
    },

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
      files: ['**/*.ts'],
      excludedFiles: ['**/*.{md,mdx}/*.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
      extends: [
        'airbnb-base',
        require.resolve('./lib/common.js'),
        require.resolve('./lib/typescript.js'),
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
      files: ['**/*.d.ts'],
      rules: {
        'max-classes-per-file': 'off',
        '@typescript-eslint/no-misused-new': 'off',
      },
    },

    {
      files: ['**/*.{css,scss,less,wxss}.d.ts'],
      rules: {
        'prettier/prettier': 'off',
      },
    },

    {
      files: ['**/*.{md,mdx}'],
      processor: 'markdown/markdown',
    },

    {
      files: ['**/*.{md,mdx}/*.js'],
      extends: [
        'airbnb-base',
        require.resolve('./lib/common.js'),
        require.resolve('./lib/babel.js'),
        require.resolve('./lib/markdown.js'),
        'prettier',
      ],
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
      files: ['**/*.{md,mdx}/*.ts'],
      extends: [
        'airbnb-base',
        require.resolve('./lib/common.js'),
        require.resolve('./lib/soft-typescript.js'),
        require.resolve('./lib/markdown.js'),
        'prettier',
      ],
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
  ],
};
