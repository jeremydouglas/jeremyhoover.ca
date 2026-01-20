module.exports = {
  root: true,
  env: { browser: true, node: true, es2021: true },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:astro/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  overrides: [
    { files: ['*.js', '*.jsx'], rules: { 'import/no-default-export': 'error' } },
    { files: ['*.astro'], parser: 'astro-eslint-parser' },
    { files: ['*.ts', '*.tsx'], parserOptions: { project: ['./tsconfig.json'] } }
  ],
  rules: { 'prettier/prettier': ['warn'] }
}
