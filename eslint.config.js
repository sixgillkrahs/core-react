import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import json from '@eslint/json';
import css from '@eslint/css';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: { js },
    extends: ['js/recommended', 'prettier'],
  },

  tseslint.configs.recommended,

  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      'react/react-in-jsx-scope': 'off',
    },
  },

  {
    files: ['**/*.json'],
    languageOptions: {
      parser: json.parser,
    },
    plugins: { json },
    rules: {
      ...json.configs.recommended.rules,
      'no-unused-vars': 'off',
      'no-undef': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  },

  {
    files: ['**/*.css'],
    languageOptions: {
      parser: css.parser,
    },
    plugins: { css },
    rules: {
      ...css.configs.recommended.rules,
    },
  },

  {
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
    },
  },
]);
