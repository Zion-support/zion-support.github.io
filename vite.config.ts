import { defineConfig } from 'vite';'import react from '@vitejs/plugin-react';'import path from 'path';'
export default defineConfig({
  plugins: [
    react({
      // Enable React Fast Refresh
      fastRefresh: true,
      // Optimize JSX runtime
      jsxRuntime: 'automatic','    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './app'),'      '@components': path.resolve(__dirname, './app/components'),'      '@pages': path.resolve(__dirname, './app/pages'),'      '@utils': path.resolve(__dirname, './utils'),'      '@types': path.resolve(__dirname, './types'),'    },
  },
  build: {
    outDir: 'dist','    sourcemap: true,
    minify: 'esbuild','    target: 'es2020','    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],'          router: ['react-router-dom'],'          icons: ['@heroicons/react'],'          motion: ['framer-motion'],'          ui: ['clsx', 'tailwind-merge'],'        },
        chunkFileNames: 'assets/[name]-[hash].js','        entryFileNames: 'assets/[name]-[hash].js','        assetFileNames: 'assets/[name]-[hash].[ext]','      },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
  },
  server: {
    port: 3000,
    open: true,
    host: true,
    cors: true,
  },
  preview: {
    port: 4173,
    open: true,
    host: true,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react','      'react-dom','      'react-router-dom','      '@heroicons/react/24/outline','      'framer-motion','      'clsx','      'tailwind-merge''    ],
  },
  // CSS optimization
  css: {
    devSourcemap: true,
  },;
});