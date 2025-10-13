import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      '@app': path.resolve(__dirname, './app'),
      '@components': path.resolve(__dirname, './app/components'),
      '@utils': path.resolve(__dirname, './utils'),
    },
  },
  build: {
    outDir: 'dist',
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: true,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@heroicons/react', 'lucide-react'],
          helmet: ['react-helmet-async'],
          motion: ['framer-motion'],
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: true,
  },
  server: {
    port: 3000,
    open: true,
    host: true,
  },
  preview: {
    port: 4173,
    open: true,
    host: true,
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom',
      'react-helmet-async',
      '@heroicons/react/24/outline',
      'framer-motion'
    ],
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  },
});