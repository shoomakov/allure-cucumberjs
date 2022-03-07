module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  // extends: [
  //   "../../../.eslintrc.js",
  // ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    project: "tsconfig.json",
    // sourceType: "module",
    warnOnUnsupportedTypeScriptVersion: false,
  },
  parser: "@typescript-eslint/parser",
};
