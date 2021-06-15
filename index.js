module.exports = {
  plugins: ['markdown'],

  overrides: [
    {
      files: ['**/*.{md,mdx}'],
      processor: 'markdown/markdown',
    },

    {
      files: ['**/*.{js,mjs,jsx}'],
      extends: [require.resolve('./lib/javascript.js'), 'plugin:prettier/recommended'],
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
