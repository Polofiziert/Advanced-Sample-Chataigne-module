export default [
  {
    files: ["*.js"],
    languageOptions: {
      ecmaVersion: 5,
      sourceType: "script",
      globals: {
        local: "readonly",
        script: "readonly"
      }
    },
    rules: {
      curly: "error",
      eqeqeq: "error",
      "no-undef": "error",
      "no-unreachable": "error",
      "no-unused-vars": "off",
      quotes: ["error", "double"],
      semi: ["error", "always"]
    }
  }
];
