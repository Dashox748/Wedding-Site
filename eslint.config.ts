import perfectionist from 'eslint-plugin-perfectionist';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import js from '@eslint/js';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: { globals: globals.browser },
    plugins: { js },
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  perfectionist.configs['recommended-line-length'],

  {
    rules: {
      'perfectionist/sort-imports': [
        'warn',
        {
          type: 'line-length',
          order: 'desc',
        },
      ],

      'react/react-in-jsx-scope': 'off', // Common React 17+ fix
    },
  },
]);
