module.exports = {
  printWidth: 100,
  singleQuote: true,
  htmlWhitespaceSensitivity: "ignore",
  endOfLine: "auto",
  plugins: ["./node_modules/prettier-plugin-moka-format"],
  configuredRules: ["importSort", "importAlias"],
  parserPlugins: ["decorators-legacy", "jsx", "typescript"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
