module.exports = {
	root: true,
	ignorePatterns: ['apps/tictactoe-api/**/*'],
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:prettier/recommended',
	],
	plugins: ['react-hooks', 'testing-library'],
	env: {
		browser: true,
		node: true,
		jest: true,
		es6: true,
	},
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			parser: '@typescript-eslint/parser',
			extends: ['plugin:@typescript-eslint/recommended'],
			rules: {
				'@typescript-eslint/ban-ts-comment': 'warn',
				'@typescript-eslint/explicit-module-boundary-types': 'off',
				'@typescript-eslint/no-unused-vars': 'warn',
				'@typescript-eslint/no-non-null-assertion': 'off',
				'@typescript-eslint/no-explicit-any': 'warn',
			},
		},
		{
			files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
			extends: ['plugin:testing-library/react'],
			rules: {
				'testing-library/await-async-query': 'error',
				'testing-library/no-await-sync-query': 'error',
				'testing-library/no-debugging-utils': 'warn',
				'testing-library/no-dom-import': 'off',
			},
		},
	],
	rules: {
		'react/jsx-no-bind': 'off',
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',

		// Accessibility — educational warnings, not blockers
		'jsx-a11y/label-has-associated-control': 'warn',
		'jsx-a11y/anchor-is-valid': 'warn',
		'jsx-a11y/click-events-have-key-events': 'warn',
		'jsx-a11y/no-static-element-interactions': 'warn',
		'jsx-a11y/no-noninteractive-element-to-interactive-role': 'warn',
		'jsx-a11y/alt-text': 'warn',
		'jsx-a11y/anchor-has-content': 'warn',

		// Common beginner patterns
		'no-unused-vars': 'warn',
		'no-console': 'off',
		'prefer-const': 'warn',
	},
};
