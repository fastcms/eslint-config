const tsconfigJson = require('./tsconfig.eslint.json');

module.exports = {
  ignorePatterns: tsconfigJson.exclude,
};
