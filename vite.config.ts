import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const resolve = path.resolve;

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic",
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
});