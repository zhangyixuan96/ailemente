module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "standard-with-typescript",
    "plugin:vue/vue3-essential",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser", // 新增
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["tsconfig.json"], // 新增
    extraFileExtensions: [".vue"],
  },
  plugins: ["vue"],
  rules: { "@typescript-eslint/no-var-requires": 0 },
};