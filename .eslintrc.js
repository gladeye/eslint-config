module.exports = {
	extends: ["eslint:recommended", "prettier"],
	plugins: ["prettier"],
	rules: {
		"prettier/prettier": [],
		eqeqeq: ["error", "always"],
		"linebreak-style": [2, "unix"]
	}
};
