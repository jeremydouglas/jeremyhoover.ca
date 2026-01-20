module.exports = {
  '*.{js,ts,jsx,tsx,astro,md}': ['prettier --write --ignore-unknown', 'eslint --fix'],
  'src/**/*.{css,scss}': ['stylelint --fix'],
}
