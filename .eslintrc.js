module.exports = {
  env: {
    browser: false,
    commonjs: true,
    es2020: true,
    node: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 11
  },
  rules: {
  },
  ignorePatterns: [
    '**/__mocks__/**',
    'node_modules/**',
    'dist/**'
  ]
}
