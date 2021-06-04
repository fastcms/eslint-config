module.exports = {
  plugins: ['markdown'],

  overrides: [
    {
      files: ['**/*.{md,mdx}'],
      processor: 'markdown/markdown',
    },

    {
      files: ['**/*.{ts,tsx}'],
      extends: [require.resolve('./lib/typescript.js')],
    },
  ],
};
