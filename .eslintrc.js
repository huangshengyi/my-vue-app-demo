module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true
  },

  // extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  extends: ["plugin:vue/essential", "eslint:recommended"],
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 6,
    // ecmaVersion: 2017,
    sourceType: "module"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "indent": ["error", 2],
    "semi": ["error", "never"], // never always
    "space-before-function-paren": ["error", "never"],
    // allow paren-less arrow functions
    "arrow-parens": 0,
    // allow async-await
    "generator-star-spacing": 0,
    "no-unused-vars":  0,
    "no-undef": 0,
    "no-prototype-builtins": 0,
    "comma-dangle": ["error", "never"], // always-multiline never
    "quotes": ["warn", "single", { "allowTemplateLiterals": true }],
    "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }] // 标签闭合， false

    // 关闭冲突规则
    // "prettier/prettier": [
    //   "error",
    //   {
    //     // 使用单引号而不是双引号
    //     singleQuote: true,
    //     // 多行时尽可能打印尾随逗号
    //     trailingComma: 'none',
    //     // 在对象文字中打印括号之间的空格
    //     bracketSpacing: true,
    //     // 将>多行JSX元素放在最后一行的末尾，而不是单独放在下一行(不适用与自闭元素)
    //     jsxBracketSameLine: true,
    //     parser: 'flow', // <----- REMOVE THIS LINE
    //   }
    // ]
  }
};
