/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  bracketSameLine: true,
  tabWidth: 4,
};

export default config;
