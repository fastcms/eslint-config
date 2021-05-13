module.exports = {
  extends: ['./typescript-react.js', './lib/electron.js'].map(require.resolve),
};
