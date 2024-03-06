/** @type {import("prettier").Config} */

module.exports = {
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss"
  ],

  // screen width
  experimentalTernaries: false,
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  singleAttributePerLine: false,
  proseWrap: "preserve",

  // punctuation
  semi: false,
  singleQuote: false,
  quoteProps: "as-needed",
  jsxSingleQuote: false,
  trailingComma: "none",
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "always",

  // range
  rangeStart: 0,
  rangeEnd: Infinity,

  // parser: "flow",
  // filepath: "",

  // pragma
  requirePragma: false,
  insertPragma: false,

  // misc
  htmlWhitespaceSensitivity: "css",
  embeddedLanguageFormatting: "auto",
  vueIndentScriptAndStyle: false,
  endOfLine: "crlf",

  // import sorter
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: false,
  importOrderCaseInsensitive: false,
  importOrderParserPlugins: ["typescript", "jsx"],
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "^@/lib/(.*)$",
    "^@/pages/(.*)$",
    "^@/components/(.*)$",
    "^[./]"
  ]
}
