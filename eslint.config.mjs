import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfiguration = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    rules: {
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unused-vars': ['warn'],
      // Uncomment below if you want to disable anonymous default exports completely:
      // 'import/no-anonymous-default-export': 'off',
      'import/prefer-default-export': 'off',
    },
  },
];

export default eslintConfiguration;
