module.exports = {
  extends: [
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'plugin:import/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:compat/recommended',
  ],

  env: {
    browser: true,
    node: true,
    commonjs: true,
    worker: true,
    serviceworker: true,
  },

  reportUnusedDisableDirectives: true,

  globals: {
    workbox: true,

    // Global varaibles for wechat miniprogram
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
  },

  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
    },
  },

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
    'no-restricted-syntax': 'off',
    'new-cap': [
      'error',
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: true,
        capIsNewExceptions: [
          'App',
          'Behavior',
          'Component',
          'Immutable.List',
          'Immutable.Map',
          'Immutable.Set',
          'Page',
          'Vue',
        ],
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
        props: true,
        ignorePropertyModificationsFor: [
          'acc', // for reduce accumulators
          'accumulator', // for reduce accumulators
          'args', // for function args
          'context', // for Koa routing
          'ctx', // for Koa routing
          'draft', // for immer draft
          'e', // for e.returnvalue
          'model', // for vtk.js inheritance
          'params', // for function params
          'publicAPI', // for vtk.js inheritance
          'r', // for table record
          'record', // for table record
          'registration', // for create-react-app service-worker
          'req', // for Express requests
          'request', // for Express requests
          'res', // for Express responses
          'response', // for Express responses
          'staticContext', // for ReactRouter context
          'v', // for map or filter value
          'value', // for map or filter value
          '$scope', // for Angular 1 scopes
        ],
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '__BUILD_TIME__',
          '__CDN_DOMAIN__',
          '__COS_DOMAIN__',
          '__OSS_DOMAIN__',
          '__VERSION__',
          '__WB_MANIFEST',
        ],
      },
    ],
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

    'import/extensions': 'off',
    'import/no-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',

    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',

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

    'unicorn/no-array-callback-reference': 'off',
    'unicorn/no-null': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/prefer-node-protocol': 'off',
    'unicorn/prefer-query-selector': 'off',
    'unicorn/prevent-abbreviations': 'off',
  },

  plugins: ['simple-import-sort', 'sort-class-members'],

  settings: {
    'import/core-modules': ['electron'],
    'import/internal-regex': /^@fastcms/,
    'polyfills': [],
  },
};
