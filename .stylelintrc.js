module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-css-modules',
    'stylelint-config-prettier',
  ],

  defaultSeverity: 'warning',

  rules: {
    'at-rule-empty-line-before': [ 'always', {
      'except': [ 'blockless-after-same-name-blockless', 'first-nested' ],
      'ignoreAtRules': [ 'else', 'include' ]
    }],
    'at-rule-no-unknown': null,
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'indentation': 2,
    'no-missing-end-of-source-newline': true,
    'rule-empty-line-before': [ 'always', {
      'except': [ 'after-single-line-comment', 'first-nested' ]
    }],

    'scss/dollar-variable-first-in-block': [ true, {
      'ignore': [ 'comments', 'imports' ]
    }],
    'scss/at-rule-no-unknown': true,
    'scss/selector-no-redundant-nesting-selector': true,
  },

  overrides: [
    {
      files: [ '*.sass', '**/*.sass' ],
      customSyntax: 'sugarss'
    },
  ]
}
