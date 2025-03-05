import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  {
    rules: {
      'indent': ['error', 2],
      'semi': ['error', 'never'],
      'quotes': ['error', 'single'],
      'quote-props': ['error', 'consistent-as-needed'],
      'comma-dangle': ['error', 'always-multiline'],
      'block-spacing': ['error', 'always'],
      'arrow-parens': ['error', 'always'],
      'max-len': [
        'error',
        { code: 150, tabWidth: 2, comments: 150 },
      ],
    },
  },
  {
    ignores: [
      '*.md',
      '.next',
      '.npm/**/*',
      '.vscode/*.json',
      'src/components/ui/*',
      'commitlint.config.mjs',
      'postcss.config.mjs',
      'tailwind.config.ts',
      'tsconfig.json',
    ],
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
]

export default eslintConfig
