module.exports = {
  parserOptions: {
    ecmaVersion: 2015,
  },

  env: {
    es6: true,
    browser: false,
    serviceworker: false,
    worker: false,
  },

  globals: {
    __WECHAT__: true,
    __ALIPAY__: true,

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
};
