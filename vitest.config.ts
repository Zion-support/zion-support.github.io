<<<<<<< HEAD
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
=======
import { defineConfig  } from "vitest/config";
import react from "@vitejs/plugin-react";
export default defineConfig({;
  plugins: [react()],;
  test: {;
    environment: "jsdom",;,
},;,
})
>>>>>>> main
