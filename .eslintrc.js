module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true,
  },
  extends: [ 'plugin:@typescript-eslint/recommended',
    'react-app',
    'react-app/jest' ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false,
  },
  rules: {
    'array-bracket-spacing': [ 'error', 'always' ],
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': [
      'error',
      { functions: 'never', arrays: 'always-multiline', objects: 'always-multiline' },
    ],
    indent: [ 'error', 2, { MemberExpression: 1 } ],
    'max-len': [ 'error', { code: 100, comments: 120 } ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'prefer-const': 'off',
    semi: 'off',
    '@typescript-eslint/semi': [ 'error', 'always' ],
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': [ 'error', { named: 'never' } ]  },
};
