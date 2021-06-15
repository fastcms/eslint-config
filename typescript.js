module.exports = {
  plugins: ['markdown'],

  overrides: [
    {
      files: ['**/*.{md,mdx}'],
      processor: 'markdown/markdown',
    },

    {
      files: ['**/*.{ts,tsx}'],
      extends: [require.resolve('./lib/typescript.js'), 'plugin:prettier/recommended'],
    },

    {
      files: ['**/*.{css,scss,sass,less,wxss}.d.ts'],
      rules: {
        'prettier/prettier': 'off',
      },
    },
  ],
};
