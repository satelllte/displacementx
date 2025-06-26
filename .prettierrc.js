// @ts-check
/** @type {import("prettier").Config} */
export default {
  /*----------------------
  |  Plugins
  -----------------------*/
  plugins: [
    'prettier-plugin-astro',
    'prettier-plugin-tailwindcss', // MUST come last. Details: https://github.com/tailwindlabs/prettier-plugin-tailwindcss?tab=readme-ov-file#compatibility-with-other-prettier-plugins
  ],
  tailwindFunctions: ['clsx'],
  tailwindStylesheet: './src/styles/global.css',
  overrides: [{files: '*.astro', options: {parser: 'astro'}}],

  /*----------------------
  |  Rules
  -----------------------*/
  // tabWidth: <inherited from .editorconfig>
  // useTabs: <inherited from .editorconfig>
  // endOfLine: <inherited from .editorconfig>
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  bracketSpacing: false,
};
