import { defineConfig } from 'vitest/config';
import path from 'node:path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/pages': path.resolve(__dirname, './src/pages')
    }
  },
  test: {
    environment: 'jsdom',
    // If a setup file exists, Vitest will load it; otherwise skip
    setupFiles: [],
    globals: true,
    coverage: {
      provider: 'v8'
    }
  }
});
