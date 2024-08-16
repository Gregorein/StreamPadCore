import js from "@eslint/js"
import globals from "globals"
import react from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import tseslint from "typescript-eslint"

import enforceComponentSchema from "./.eslint/rules/enforce-control-schema.js"

export default tseslint.config({
  extends: [js.configs.recommended, ...tseslint.configs.recommended],
  files: ["**/*.{ts,tsx}"],
  ignores: [
    "dist",
    "releases",
    "storybook-static",
  ],
  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    globals: globals.browser,
  },
  linterOptions: {
    reportUnusedDisableDirectives: true,
  },
  plugins: {
    "react": react,
    "react-hooks": reactHooks,
    "react-refresh": reactRefresh,
    "streamPad": {
      rules: {
        "enforce-control-schema": enforceComponentSchema,
      },
    },    
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    ...tseslint.configs.recommended.rules,
    ...react.configs.recommended.rules,
    ...reactHooks.configs.recommended.rules,
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    
    // "@typescript-eslint/explicit-function-return-type": "warn",
    // "@typescript-eslint/no-unused-vars": "warn",
    "no-unused-vars": "off",

    // "@typescript-eslint/explicit-module-boundary-types": "off",
    // "@typescript-eslint/no-explicit-any": "warn",

    "streamPad/enforce-control-schema": "error",
  },
})
