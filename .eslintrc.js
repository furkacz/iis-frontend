module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
  ],
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off',
      },
    },
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  plugins: [
    'html',
  ],
  rules: {
    'global-require': 'off',
    'no-else-return': 'off',
    'no-confusing-arrow': 'off',
    'quote-props': 'off',
    'object-curly-newline': ['error', { 'ImportDeclaration': 'never', 'ExportDeclaration': 'never' }],
    'max-len': ['error', { 'code': 128 }],
    'no-unused-vars': ['error', { 'argsIgnorePattern': '^_$' }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-param-reassign': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'off',
    'vue/script-indent': ['error', 2, { baseIndent: 0 }],
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never',
    }],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
        extensions: ['.vue', '.js'],
      },
    },
  },
};
