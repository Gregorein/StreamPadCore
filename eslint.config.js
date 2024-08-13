import typescriptEslintParser from "@typescript-eslint/parser"
import typescriptEslint from "@typescript-eslint/eslint-plugin"
import react from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"

import enforceComponentStructure from "./.eslint/enforce-component-structure.js"

export default [
  {
    ignores: ["*.mdx"],
  },
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {
      "no-unused-vars": "off",
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: typescriptEslintParser,
    },
    plugins: {
      "@typescript-eslint": typescriptEslint,
      react,
    },
    rules: {
      "@typescript-eslint/explicit-function-return-type": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "no-unused-vars": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
  {
    files: ["**/*.{jsx,tsx}"],
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "streamPad-core": {
        rules: {
          "enforce-component-structure": enforceComponentStructure,
        },
      },
    },
    rules: {
      "react/prop-types": "off",

      "streamPad-core/enforce-component-structure": "error",
    },
  },
]
