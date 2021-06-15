const underscoreDangleGlobals = {
  __ALIPAY__: true,
  __BUILD_TIME__: true,
  __CDN_DOMAIN__: true,
  __COS_DOMAIN__: true,
  __DEV__: true,
  __OSS_DOMAIN__: true,
  __VERSION__: true,
  __WB_MANIFEST: true,
  __WECHAT__: true,
};

const capIsNewExceptions = [
  'App',
  'Behavior',
  'Component',
  'Immutable.List',
  'Immutable.Map',
  'Immutable.Set',
  'Page',
  'Vue',
];

module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
    },
  },

  extends: [
    'airbnb',

    'plugin:compat/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
  ],

  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
    node: true,
    serviceworker: true,
    worker: true,
  },

  globals: {
    ...underscoreDangleGlobals,

    wx: true,
    App: true,
    Behavior: true,
    Component: true,
    Function: true,
    Page: true,
    Promise: true,
    getApp: true,
    getCurrentPages: true,
    definePlugin: true,
    requirePlugin: true,
    workbox: true,
  },

  plugins: ['simple-import-sort', 'sort-class-members'],

  rules: {
    'array-callback-return': [
      'error',
      {
        allowImplicit: true,
        checkForEach: true,
      },
    ],
    'camelcase': [
      'error',
      {
        properties: 'always',
        ignoreDestructuring: false,
        allow: ['^UNSAFE_'],
      },
    ],
    'accessor-pairs': [
      'error',
      {
        setWithoutGet: true,
        getWithoutSet: false,
      },
    ],
    'no-bitwise': 'off',
    'no-continue': 'off',
    'no-restricted-syntax': 'off',
    'new-cap': [
      'error',
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: true,
        capIsNewExceptions,
      },
    ],
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true,
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: Object.keys(underscoreDangleGlobals),
      },
    ],
    'no-unsafe-finally': 'off',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: false,
        enforceForJSX: true,
      },
    ],
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_',
        ignoreRestSiblings: true,
        vars: 'all',
        varsIgnorePattern: '^[A-Z_]',
      },
    ],
    'sort-imports': 'off',

    // Rules for promise
    'promise/always-return': 'off',

    // Rules for import plugin
    'import/extensions': 'off',
    'import/no-commonjs': 'off',
    'import/no-default-export': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/order': 'off',
    'import/prefer-default-export': 'off',

    // Rules for unicorn plugin
    'unicorn/consistent-destructuring': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/prefer-node-protocol': 'off',
    'unicorn/prefer-query-selector': 'off',
    'unicorn/prevent-abbreviations': 'off',

    // Rules for simple import sort plugin
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',

    // Rules for sort class members plugin
    'sort-class-members/sort-class-members': [
      'warn',
      {
        order: [
          '[static-properties]',
          '[static-methods]',
          '[properties]',
          '[conventional-private-properties]',
          'constructor',
          '[accessor-pairs]',
          '[event-listeners]',
          '[event-handlers]',
          '[methods]',
          '[conventional-private-methods]',
          '[everything-else]',
        ],
        groups: {
          'event-listeners': [{ name: '/on.+/', type: 'method' }],
          'event-handlers': [{ name: '/handle.+/', type: 'method' }],
        },
        accessorPairPositioning: 'getThenSet',
        stopAfterFirstProblem: true,
      },
    ],
  },

  settings: {
    'import/core-modules': ['electron'],
    'import/internal-regex': /^@fastcms/,
    'polyfills': [],
  },

  overrides: [
    {
      files: ['**/*.{jsx,tsx}'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      extends: ['airbnb/hooks'],
      rules: {
        // Rules for unicorn
        'unicorn/filename-case': [
          'error',
          {
            cases: {
              kebabCase: true,
              pascalCase: true,
            },
          },
        ],

        // Rules for react
        'react/button-has-type': 'off',
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

        // Rules for a11y
        'jsx-a11y/anchor-is-valid': [
          'error',
          {
            components: ['Link'],
            specialLink: ['hrefLeft', 'hrefRight'],
            aspects: ['invalidHref', 'preferButton'],
          },
        ],
        'jsx-a11y/click-events-have-key-events': 'off',
      },
    },
  ],
};
