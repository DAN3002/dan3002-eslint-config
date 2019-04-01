module.exports = {
	extends: [
	  './rules/best-practices',
	  './rules/errors',
	  './rules/node',
	  './rules/style',
	  './rules/variables',
	  './rules/es6',
	  './rules/imports',
	].map(require.resolve),
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2017,
		ecmaFeatures: {
			generators: false,
			objectLiteralDuplicateProperties: false
		}
	},
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true,
		jquery: true
	},
	// rules: {
	// 	// 'no-multi-spaces': 2,
	// 	// 'no-eval': 2,
	// 	// 'no-extend-native': 2,
	// 	// 'no-multi-str': 2,
	// 	// 'no-use-before-define': 2,
	// 	// 'no-const-assign': 2,
	// 	// 'no-cond-assign': 2,
	// 	// 'no-constant-condition': 2,
	// 	// 'no-control-regex': 2,
	// 	// 'no-debugger': 2,
	// 	// 'no-delete-var': 2,
	// 	// 'no-dupe-keys': 2,
	// 	// 'no-dupe-args': 2,
	// 	// 'no-dupe-class-members': 2,
	// 	// 'no-duplicate-case': 2,
	// 	// 'no-empty': 2,
	// 	// 'no-empty-character-class': 2,
	// 	// 'no-ex-assign': 2,
	// 	// 'no-extra-boolean-cast': 2,
	// 	// 'no-extra-semi': 2,
	// 	// 'no-fallthrough': 2,
	// 	// 'no-func-assign': 2,
	// 	// 'no-inner-declarations': [2, 'functions'],
	// 	// 'no-invalid-regexp': 2,
	// 	// 'no-irregular-whitespace': 2,
	// 	// 'no-mixed-operators': [2, {
	// 	// 	'groups': [
	// 	// 	  ['%', '**'],
	// 	// 	  ['%', '+'],
	// 	// 	  ['%', '-'],
	// 	// 	  ['%', '*'],
	// 	// 	  ['%', '/'],
	// 	// 	  ['**', '+'],
	// 	// 	  ['**', '-'],
	// 	// 	  ['**', '*'],
	// 	// 	  ['**', '/'],
	// 	// 	  ['&', '|', '^', '~', '<<', '>>', '>>>'],
	// 	// 	  ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
	// 	// 	  ['&&', '||'],
	// 	// 	  ['in', 'instanceof']
	// 	// 	],
	// 	// 	'allowSamePrecedence': false
	// 	// }],
	// 	// 'no-mixed-spaces-and-tabs': 2,
	// 	// 'no-sparse-arrays': 2,
	// 	// 'no-negated-in-lhs': 2,
	// 	// 'no-obj-calls': 2,
	// 	// 'no-octal': 2,
	// 	// 'no-redeclare': 2,
	// 	// 'no-regex-spaces': 2,
	// 	// 'no-undef': 2,
	// 	// 'no-unreachable': 2,
	// 	// 'no-unused-vars': [2, {
	// 	// 	'vars': 'all',
	// 	// 	'args': 'after-used'
	// 	// }],
	// 	// 'no-void': 2,
	// 	// 'no-var': 2,
	// 	// 'no-multiple-empty-lines': [2, { 'max': 2 }],
	// 	// 'no-nested-ternary': 2,
	// 	// 'prefer-rest-params': 2,
	// 	// 'array-callback-return': 2,
	// 	// 'prefer-destructuring': [2, {
	// 	// 	'VariableDeclarator': {
	// 	// 		'array': false,
	// 	// 		'object': true
	// 	// 	},
	// 	// 	'AssignmentExpression': {
	// 	// 	  'array': false,
	// 	// 	  'object': false
	// 	// 	}
	// 	// }, {
	// 	// 	'enforceForRenamedProperties': false
	// 	// }],
	// 	// 'no-duplicate-imports': 2,
	// 	// 'arrow-parens': [2, 'always'],
	// 	// 'quote-props': [2, 'as-needed'],
	// 	// 'no-array-constructor': 2,
	// 	// 'arrow-spacing': 2,
	// 	// 'arrow-body-style': [2, 'as-needed'],
	// 	// 'no-confusing-arrow': [2, { 'allowParens': true }],
	// 	// 'dot-notation': 2,
	// 	// 'no-unneeded-ternary': 2,
	// 	// 'spaced-comment': 2,
	// 	// 'space-infix-ops': 2,
	// 	// 'array-bracket-spacing': [2, 'never'],
	// 	// 'object-curly-spacing': [2, 'always'],
	// 	// 'one-var': [2, 'never'],
	// 	// 'no-lonely-if': 2,
	// 	// 'no-trailing-spaces': 2,
	// 	// 'complexity': [1, 31],
	// 	// 'space-in-parens': [2, 'never'],
	// 	// 'space-before-function-paren': [2, 'never'],
	// 	// 'space-before-blocks': [2, 'always'],
	// 	// 'indent': [2, 'tab', {'SwitchCase': 1}],
	// 	// 'eol-last': [2, 'always'],
	// 	// 'comma-dangle': [2, 'always-multiline'],
	// 	// 'keyword-spacing': 2,
	// 	// 'block-spacing': 2,
	// 	// 'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
	// 	// 'computed-property-spacing': 2,
	// 	// 'comma-spacing': 2,
	// 	// 'comma-style': 2,
	// 	// 'guard-for-in': 2,
	// 	// 'wrap-iife': 2,
	// 	// 'block-scoped-var': 2,
	// 	// 'curly': [2, 'all'],
	// 	// 'eqeqeq': [2, 'allow-null'],
	// 	// 'new-cap':  [2, {
	// 	// 	'capIsNewExceptions': ['Match.Optional', 'Match.Maybe', 'Match.OneOf', 'Match.Where', 'Match.ObjectIncluding', 'Push.Configure', 'SHA256']
	// 	// }],
	// 	// 'use-isnan': 2,
	// 	// 'valid-typeof': 2,
	// 	// 'linebreak-style': [2, 'unix'],
	// 	// 'prefer-template': 2,
	// 	// 'template-curly-spacing': [2, 'always'],
	// 	// 'quotes': [2, 'single'],
	// 	// 'semi': [2, 'always'],
	// 	// 'prefer-const': 2,
	// 	// 'object-shorthand': 2
	// }
}
