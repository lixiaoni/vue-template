module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ["plugin:vue/essential", "eslint:recommended"],
    parserOptions: {
        parser: "babel-eslint"
    },
    plugins: ["prettier"],
    rules: {
        // "prettier/prettier": [
        //     "error",
        //     {
        //         singleQuote: true,
        //         trailingComma: "none",
        //         bracketSpacing: true,
        //         jsxBracketSameLine: true
        //     }
        // ]
    }
}
