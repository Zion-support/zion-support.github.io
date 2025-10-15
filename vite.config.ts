import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      // Optimize JSX runtime
      jsxRuntime: 'automatic',
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './app'),
      '@components': path.resolve(__dirname, './app/components'),
      '@pages': path.resolve(__dirname, './app/pages'),
      '@utils': path.resolve(__dirname, './utils'),
      '@types': path.resolve(__dirname, './types'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    target: 'es2020',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: (id: string): string | undefined => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react';
            }
            if (id.includes('react-router')) {
              return 'router';
            }
            if (id.includes('@heroicons') || id.includes('lucide-react')) {
              return 'icons';
            }
            if (id.includes('framer-motion')) {
              return 'motion';
            }
            if (id.includes('clsx') || id.includes('tailwind-merge')) {
              return 'utils';
            }
            return 'vendor';
          }
          return undefined;
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 500,
    reportCompressedSize: false,
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
      'react',
      'react-dom',
      'react-router-dom',
      '@heroicons/react/24/outline',
      'framer-motion',
      'clsx',
      'tailwind-merge'
    ],
  },
  // CSS optimization
  css: {
    devSourcemap: true,
  },
});
