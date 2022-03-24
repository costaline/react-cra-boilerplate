module.exports = {
	extends: [
		'stylelint-config-css-modules',
		'stylelint-config-property-sort-order-smacss',
		'stylelint-config-prettier',
	],

	defaultSeverity: 'warning',

	rules: {
		'at-rule-empty-line-before': [
			'always',
			{
				except: ['blockless-after-same-name-blockless', 'first-nested'],
				ignoreAtRules: ['else', 'include'],
			},
		],
		'at-rule-no-unknown': null,
		'declaration-colon-space-after': 'always-single-line',
		'declaration-colon-space-before': 'never',
		'indentation': 'tab',
		'no-missing-end-of-source-newline': true,
		'rule-empty-line-before': [
			'always',
			{
				except: ['after-single-line-comment', 'first-nested'],
			},
		],
	},

	overrides: [
		{
			files: ['*.scss', '**/*.scss', '*.sass', '**/*.sass'],
			extends: [
				'stylelint-config-standard-scss',
				'stylelint-config-css-modules',
				'stylelint-config-property-sort-order-smacss',
				'stylelint-config-prettier',
			],
			rules: {
				'scss/dollar-variable-first-in-block': [
					true,
					{
						ignore: ['comments', 'imports'],
					},
				],
				'scss/at-rule-no-unknown': true,
				'scss/selector-no-redundant-nesting-selector': true,
			},
		},

		{
			files: ['*.sass', '**/*.sass'],

			customSyntax: 'sugarss',
		},

		{
			files: [
				'*.js',
				'**/*.js',
				'*.jsx',
				'**/*.jsx',
				'*.ts',
				'**/*.ts',
				'*.tsx',
				'**/*.tsx',
			],

			processors: ['stylelint-processor-styled-components'],

			extends: [
				'stylelint-config-standard-scss',
				'stylelint-config-property-sort-order-smacss',
				'stylelint-config-styled-components',
				'stylelint-config-prettier',
			],
		},
	],
}
