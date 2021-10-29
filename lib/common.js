const restrictedGlobals = require('confusing-browser-globals');

const extensions = ['.json', '.js', '.cjs', '.mjs', '.ts', '.jsx', '.tsx', '.d.ts'];

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
  'Fastify',
  'Immutable.List',
  'Immutable.Map',
  'Immutable.Set',
  'Page',
  'Vue',
];

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
    },
  },

  extends: [
    'plugin:unicorn/recommended',
    'plugin:import/recommended',
    'plugin:jsdoc/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:compat/recommended',
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

    $: true,
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

  plugins: ['simple-import-sort'],

  rules: {
    'arrow-body-style': 'off',
    'consistent-return': 'off',
    'func-names': 'off',
    'global-require': 'off',
    'no-bitwise': 'off',
    'no-continue': 'off',
    'no-restricted-globals': ['error', ...restrictedGlobals],
    'no-restricted-syntax': 'off',
    'no-unsafe-finally': 'off',
    'sort-imports': 'off',

    'accessor-pairs': [
      'error',
      {
        setWithoutGet: true,
        getWithoutSet: false,
      },
    ],
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
    'new-cap': [
      'error',
      {
        capIsNew: true,
        capIsNewExceptions,
        capIsNewExceptionPattern: '^[A-Z]\\S*Service$',
        newIsCap: true,
        newIsCapExceptions: [],
        properties: false,
      },
    ],
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error', 'dir', 'table', 'time', 'timeEnd'],
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
        allowAfterThis: true,
        allowAfterSuper: true,
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
    'prefer-arrow-callback': 'off',

    'import/extensions': [
      'warn',
      {
        json: 'always',
        js: 'ignorePackages',
        jsx: 'ignorePackages',
        ts: 'ignorePackages',
        tsx: 'ignorePackages',
      },
    ],
    'import/no-commonjs': 'off',
    'import/no-default-export': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/order': 'off',
    'import/prefer-default-export': 'off',

    'jsdoc/check-tag-names': [
      'warn',
      {
        definedTags: ['jest-environment'],
      },
    ],
    'jsdoc/no-undefined-types': 'off',
    'jsdoc/valid-types': 'off',

    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',

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
  },

  settings: {
    'import/extensions': extensions,
    'import/core-modules': ['electron'],
    'import/internal-regex': /^@fastcms/,
    'import/resolver': {
      node: {
        extensions,
      },
    },
    'jsdoc': {
      mode: 'jsdoc',
    },
    'polyfills': [],
  },
};
