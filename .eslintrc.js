module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {},
  settings: {
    react: {
      version: require('./package.json').dependencies.react
    }
  }
}
