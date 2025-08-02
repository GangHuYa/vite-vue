module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    souceType: 'module'
  },
  rules: {
    'prettier/prettier': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'vue/multi-word-component-names': 0,
    'vue/no-useless-template-attributes': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-empty-function': 0,
    'vue/first-attribute-linebreak': 0,
    'vue/attribute-hyphenation': 0,
    'vue/attributes-order': 0,
    'vue/order-in-components': 0,
    'vue/v-slot-style': 0,
    'vue/no-template-shadow': 0,
    'vue/v-on-event-hyphenation': 0,
    'vue/this-in-template': 0,
    'vue/v-on-style': 0,
    'vue/require-explicit-emits': 0,
    'vue/require-default-prop': 0,
    'vue/component-definition-name-casing': 0,
    '@typescript-eslint/no-unused-vars': 0
  },
  globals: {
    defineProps: 'readonly'
  }
}
