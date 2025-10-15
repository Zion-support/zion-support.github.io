import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
<<<<<<< HEAD

const resolve = path.resolve;
=======
>>>>>>> main

export default defineConfig({
  plugins: [
    react({
<<<<<<< HEAD
      // Enable JSX runtime
      jsxRuntime: "automatic",
    }),
=======
      // Enable React Fast Refresh
<<<<<<< HEAD
      fastRefresh: true
=======
      fastRefresh: true,
      // Optimize JSX runtime
      jsxRuntime: 'automatic',
>>>>>>> main
    })
>>>>>>> main
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './app'),
<<<<<<< HEAD
      '@/components': path.resolve(__dirname, './app/components'),
      '@/utils': path.resolve(__dirname, './app/utils'),
      '@/hooks': path.resolve(__dirname, './hooks'),
=======
      '@components': path.resolve(__dirname, './app/components'),
      '@pages': path.resolve(__dirname, './app/pages'),
      '@utils': path.resolve(__dirname, './utils'),
      '@types': path.resolve(__dirname, './types'),
>>>>>>> main
    },
  },
  build: {
    outDir: 'dist',
<<<<<<< HEAD
    sourcemap: false,
    minify: 'esbuild',
    target: 'es2020',
=======
    sourcemap: true,
    minify: 'esbuild',
    target: 'es2020',
    cssCodeSplit: true,
>>>>>>> main
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          icons: ['@heroicons/react'],
          motion: ['framer-motion'],
          ui: ['clsx', 'tailwind-merge'],
        },
<<<<<<< HEAD
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
    // Optimize bundle size
    treeshake: true,
  },
  server: {
    port: 3000,
    open: false,
    host: true,
  },
  preview: {
    port: 4173,
=======
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
<<<<<<< HEAD
    // Tree shaking is enabled by default in Vite
=======
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
>>>>>>> main
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
>>>>>>> main
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