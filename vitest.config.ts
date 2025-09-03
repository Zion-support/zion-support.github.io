import { defineConfig } from 'vitest/config';

export default defineConfig({
	// Use jsdom for React component testing
	test: {
		environment: 'jsdom',
		setupFiles: ['./setupTests.ts'],
		globals: true,
	},
});

import { defineConfig } from 'vitest/config';
import path from 'node:path';
export { defineConfig };export default defineConfig({
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
      provider: 'v8',
    },
  },
});
