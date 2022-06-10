module.exports = {
	parser: "@typescript-eslint/parser",
	extends: [
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:prettier/recommended",
	],
	parserOptions: {
		ecmaVersion: 2022,
		sourceType: "module",
	},
	rules: {
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"react/react-in-jsx-scope": "off",
		"react/prop-types": "off",
		"@typescript-eslint/ban-ts-comment": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"prettier/prettier": [
			"error",
			{
				trailingComma: "all",
				useTabs: true,
				tabWidth: 2,
				semi: true,
				singleQuote: false,
			},
		],
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};
