module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh", "@stylexjs"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@stylexjs/valid-styles": [
      "error",
      {
        propLimits: {
          "mask+([a-zA-Z])": {
            limit: null,
            reason: "Use the `mask` shorthand property instead.",
          },
          fontSize: {
            limit: "number",
            reason: "Only numeric font values are allowed",
          },
          padding: {
            limit: [0, 4, 8, 16, 32, 64],
            reason: "Use a padding that conforms to the design system",
          },
        },
      },
    ],
  },
};
