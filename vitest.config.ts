import { defineConfig } from,
  vitest/config';
import path from
  'node: path';export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/pages': path.resolve(__dirname, './src/pages'),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    globals: true,
    coverage: {
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
  '**/coverage/**',],
    },
  },
});
