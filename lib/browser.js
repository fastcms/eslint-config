module.exports = {
  extends: ['plugin:compat/recommended'],

  env: {
    browser: true,
    serviceworker: true,
    worker: true,
  },

  globals: {
    workbox: true,
  },

  settings: {
    polyfills: [],
  },
};
