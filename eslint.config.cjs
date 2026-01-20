const js = require('@eslint/js')
const { FlatCompat } = require('@eslint/eslintrc')
const tsParser = require('@typescript-eslint/parser')
const tsPlugin = require('@typescript-eslint/eslint-plugin')
const astroPlugin = require('eslint-plugin-astro')
const astroParser = require('astro-eslint-parser')
const importPlugin = require('eslint-plugin-import')
const prettierPlugin = require('eslint-plugin-prettier')

const compat = new FlatCompat({ baseDirectory: __dirname })

module.exports = [
  {
    ignores: [
      '.astro/**',
      'dist/**',
      'node_modules/**',
      '**/*.d.ts',
      'lint-staged.config.js',
      'lint-staged.config.cjs'
    ]
  },
  js.configs.recommended,
  ...compat.extends(
    'plugin:@typescript-eslint/recommended',
    'plugin:astro/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ),
  {
    files: ['**/*.{ts,tsx,js,jsx,astro}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parser: tsParser
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      prettier: prettierPlugin,
      import: importPlugin,
      astro: astroPlugin
    },
    rules: {
      'prettier/prettier': ['warn']
    }
  },
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser
      }
    },
    rules: {
      'prettier/prettier': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'astro/no-unused-css-selector': 'off'
    }
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json']
      }
    }
  },
  {
    files: ['**/*.{js,jsx}'],
    rules: {
      'import/no-default-export': 'error'
    }
  },
  {
    files: ['lint-staged.config.js'],
    rules: {
      'import/no-default-export': 'off'
    }
  },
  {
    files: ['**/*.cjs', 'lint-staged.config.js', 'scripts/**/*.cjs', 'scripts/**/*.js'],
    languageOptions: {
      globals: {
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
        __dirname: 'readonly',
        process: 'readonly',
        console: 'readonly'
      }
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off'
    }
  }
]
