module.exports = {
  extends: ['./lib/common.js'].map(require.resolve),

  overrides: [
    {
      files: ['**/{test,tests,__tests__}/**/*.js', '**/*.{spec,test}.js'],
      extends: ['./base.js', './lib/test-dom.js'].map(require.resolve),
    },
    {
      files: ['**/{test,tests,__tests__}/**/*.cjs', '**/*.{spec,test}.cjs'],
      extends: ['./base.js', './lib/cjs.js', './lib/test-dom.js'].map(require.resolve),
    },
    {
      files: ['**/{test,tests,__tests__}/**/*.mjs', '**/*.{spec,test}.mjs'],
      extends: ['./base.js', './lib/mjs.js', './lib/test-dom.js'].map(require.resolve),
    },
    {
      files: ['**/{test,tests,__tests__}/**/*.jsx', '**/*.{spec,test}.jsx'],
      extends: ['./react.js', './lib/test-react.js'].map(require.resolve),
    },
    {
      files: ['**/{test,tests,__tests__}/**/*.ts', '**/*.{spec,test}.ts'],
      extends: ['./typescript.js', './lib/test-dom.js'].map(require.resolve),
    },
    {
      files: ['**/{test,tests,__tests__}/**/*.tsx', '**/*.{spec,test}.tsx'],
      extends: ['./typescript-react.js', './lib/test-react.js'].map(require.resolve),
    },
  ],
};
