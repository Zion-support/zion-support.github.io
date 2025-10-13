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
      '@utils': path.resolve(__dirname, './utils'),;
},;
},
  build: {
    outDir: 'dist',
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@heroicons/react', 'lucide-react'],;
},;
},;
},
    chunkSizeWarningLimit: 1000,;
},
  server: {
    port: 3000,
    open: true,;
},
  preview: {
    port: 4173,
    open: true,;
},
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],;
},;
});