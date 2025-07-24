import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";

export default [
  // ✅ Ignore les fichiers inutiles (ancien .eslintignore)
  {
    ignores: ["node_modules", ".next", "public", "data"],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: reactPlugin,
    },
    settings: {
      react: {
        version: "detect", // ✅ Évite l'avertissement de version
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off", // ✅ Obligatoire avec Next.js 12+
      "react/prop-types": "off",         // ✅ TS gère déjà les types
      "@typescript-eslint/no-explicit-any": "warn", // ✅ Plus de blocage avec any
    },
  },
];