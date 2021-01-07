module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'esnext',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  extends: ['prettier/@typescript-eslint', 'plugin:prettier/recommended'],
  globals: {
    React: 'writable',
  },
  env: {
    node: true,
    browser: true,
  },
}
