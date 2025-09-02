<<<<<<< HEAD
import { defineConfig } from,
  vitest/config';
import path from
  'node: path';
=======
import { defineConfig } from 'vitest/config'
import path from 'node:path'
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-48f3

export default defineConfig({
  resolve: {
    alias: {
  '@: path.resolve(__dirname,
  './src'),
  '@/pages': path.resolve(__dirname,
,
  ./src/pages'),
    },
  },
  test: {
    environment:
  'jsdom,
    setupFiles:
  './tests/setup.ts',
    globals: true,
    coverage: {
<<<<<<< HEAD
      provider:,
  v8',
      reporter: [
  'text,
,
  json',
  'html'],
      exclude: [
  'node_modules/,
  'tests/',
  '**/*.d.ts',
  '**/*.config.*',
  '**/coverage/**',
=======
      provider: 'v8',
      reporter: ['textjsonhtml'],
      exclude: [
        'node_modules/tests/**/*.d.ts',
        '**/*.config.*',
        '**/coverage/**',
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-48f3
      ],
    },
  },
});