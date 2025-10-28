import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Optimize JSX runtime
      jsxRuntime: 'automatic'
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './app'),
      '@components': resolve(__dirname, './app/components'),
      '@pages': resolve(__dirname, './app/pages'),
      '@utils': resolve(__dirname, './utils'),
      '@types': resolve(__dirname, './types'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,