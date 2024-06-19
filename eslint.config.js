import stylisticTs from '@stylistic/eslint-plugin-ts'
import parcerTs from '@typescript-eslint/parser'



export default [
  {
    languageOptions: {
      parser: parcerTs
    },
    ignores: ['.nitro/**/*', '.output/**/*'],
    plugins: {
      '@stylistic/ts': stylisticTs
    },
    files: ['**/*.ts'],
    rules: {
      ...stylisticTs.configs['all-flat'].rules,
      '@stylistic/ts/indent': ['error', 2],
      '@stylistic/ts/quote-props': ["error", "as-needed"],
      '@stylistic/ts/quotes': ["error", "single"],
      '@stylistic/ts/object-curly-spacing': ["error", "always"],
      '@stylistic/ts/semi': ["error", "never"],
      '@stylistic/ts/comma-dangle': ["error", "always-multiline"],
      'no-console': 'warn',
    },
  },
]