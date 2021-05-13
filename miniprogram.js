module.exports = {
  extends: ['./typescript.js', './lib/miniprogram.js'].map(require.resolve),
};
