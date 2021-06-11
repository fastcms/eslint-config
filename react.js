module.exports = {
  plugins: ['markdown'],

  overrides: [
    {
      files: ['**/*.{md,mdx}'],
      processor: 'markdown/markdown',
    },

    {
      files: ['**/*.{js,mjs,jsx}'],
      extends: [require.resolve('./lib/javascript.js')],
    },
  ],
};
