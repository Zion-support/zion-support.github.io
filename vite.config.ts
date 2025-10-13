import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
<<<<<<< HEAD
import { resolve } from 'path';
=======
import path from 'path';
>>>>>>> cursor/fix-errors-and-merge-to-main-100c

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
<<<<<<< HEAD
      '@': resolve(__dirname, './src'),
      '@app': resolve(__dirname, './app'),
      '@components': resolve(__dirname, './app/components'),
      '@utils': resolve(__dirname, './app/utils'),
    },
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: false,
=======
      '@': path.resolve(__dirname, './'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
>>>>>>> cursor/fix-errors-and-merge-to-main-100c
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
<<<<<<< HEAD
          ui: ['@heroicons/react', 'lucide-react'],
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-100c
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  server: {
    port: 3000,
    open: true,
  },
  preview: {
    port: 4173,
    open: true,
  },
<<<<<<< HEAD
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-100c
});