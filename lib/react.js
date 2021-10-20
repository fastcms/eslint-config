/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  parserOptions: {
    babelOptions: {
      presets: [
        [
          '@babel/preset-env',
          {
            bugfixes: true,
            targets: {
              esmodules: true,
            },
          },
        ],
        [
          '@babel/preset-react',
          {
            runtime: 'automatic',
          },
        ],
      ],
      plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        ['@babel/plugin-proposal-private-methods', { loose: true }],
        ['@babel/plugin-syntax-top-level-await', {}],
      ],
    },
    ecmaFeatures: {
      jsx: true,
    },
  },

  extends: ['airbnb/hooks'],

  plugins: ['@emotion'],

  rules: {
    'react/button-has-type': 'off',
    'react/default-props-match-prop-types': 'off',
    'react/display-name': 'warn',
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
    'jsx-a11y/alt-text': [
      'error',
      {
        elements: ['img'],
        img: ['Image'],
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/href-no-hash': 'off',

    '@emotion/jsx-import': 'error',
  },

  settings: {
    react: {
      version: 'detect',
    },
  },
};
