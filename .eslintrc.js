module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "node": true
    },
    "extends": ["plugin:vue/essential"],
    "plugins": ["vue"],
    "parserOptions": {
        "parser": "babel-eslint",
        "ecmaVersion": 6
    },
    "rules": {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "quotes": ["error", "single"],
        "comma-dangle": ["error", "always"],
        "indent": ["error", 2],
        "semi": ["error", "always"],
        "eqeqeq": ["error", "always"],
        "no-unused-vars": "error",
        "curly": "error",
        "eol-last": 0,
        "no-var": 2,
        "no-extra-semi": "error"
    }
};