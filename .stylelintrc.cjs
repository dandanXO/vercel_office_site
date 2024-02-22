module.exports = {
  extends: ['stylelint-config-recommended-vue/scss'],
  plugins: ['stylelint-order', 'stylelint-scss'],
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts', '**/*.json'],
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html'
    }
  ],
  rules: {
    'no-empty-source': null,
    'no-invalid-double-slash-comments': null,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'screen']
      }
    ]
  }
}
