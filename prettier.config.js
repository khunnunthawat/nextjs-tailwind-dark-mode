// prettier.config.js
const prettierPluginTailwindCss = require('prettier-plugin-tailwindcss')

module.exports = {
  organizeImportsSkipDestructiveCodeActions: true,
  semi: false,
  tabWidth: 2,
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'all',
  jsxSingleQuote: false,
  bracketSpacing: true,
  plugins: [prettierPluginTailwindCss],
  tailwindConfig: './tailwind.config.js',
}
