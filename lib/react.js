module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          snakeCase: true,
          pascalCase: true,
        },
      },
    ],

    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', 'tsx'],
      },
    ],
    'react/jsx-one-expression-per-line': [
      'error',
      {
        allow: 'single-child',
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-uses-react': 'off',
    'react/no-danger': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/state-in-constructor': ['error', 'never'],

    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
  },
};
