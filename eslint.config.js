import js from "@eslint/js"
import globals from "globals"
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
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  plugins: {
    "react-hooks": reactHooks,
    "react-refresh": reactRefresh,
    "streamPad": {
      rules: {
        "enforce-control-schema": enforceComponentSchema,
      },
    },    
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],

    "streamPad/enforce-control-schema": "error",
  },
})
