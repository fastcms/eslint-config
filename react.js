module.exports = {
  plugins: ['markdown'],

  overrides: [
    {
      files: ['**/*.{md,mdx}'],
      processor: 'markdown/markdown',
    },

    {
      files: ['**/*.{js,jsx}'],
      extends: [require.resolve('./lib/javascript.js')],
    },
  ],
};
