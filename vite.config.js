import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react({
      // Enable React Fast Refresh
      fastRefresh: true,
      // Optimize JSX runtime
      jsxRuntime: 'automatic',
    }),
    visualizer({
      filename: 'dist/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  root: '.',
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    reportCompressedSize: true,
    minify: 'esbuild',
    target: 'es2015',
    // Optimize build performance
    emptyOutDir: true,
    copyPublicDir: true,
    rollupOptions: {
      maxParallelFileOps: 2,
      treeshake: {
        moduleSideEffects: false,
      },
      output: {
        manualChunks: (id) => {
          // React and React DOM
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
<<<<<<< HEAD
            return 'vendor';
=======
            return 'react';
          }
          // Router library
          if (id.includes('node_modules/react-router-dom')) {
            return 'router';
>>>>>>> origin/main
          }
          // UI libraries
          if (id.includes('node_modules/@heroicons') || id.includes('node_modules/lucide-react')) {
            return 'ui';
          }
<<<<<<< HEAD
          // Animation libraries
          if (id.includes('node_modules/framer-motion')) {
            return 'animation';
          }
          // Chart libraries
          if (id.includes('node_modules/recharts')) {
            return 'charts';
=======
          // Utilities and web vitals
          if (id.includes('node_modules/web-vitals')) {
            return 'vitals';
>>>>>>> origin/main
          }
          // Other vendor libraries
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
<<<<<<< HEAD
        assetFileNames: 'assets/[name]-[hash].[ext]',
=======
>>>>>>> origin/main
      },
    },
  },
  server: {
    port: 3000,
    host: true,
    open: true,
<<<<<<< HEAD
=======
    // Enable HMR
    hmr: {
      overlay: true,
    },
>>>>>>> origin/main
  },
  preview: {
    port: 4173,
    host: true,
    open: true,
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      '@heroicons/react',
      'lucide-react',
    ],
<<<<<<< HEAD
  },
=======
    // Exclude problematic dependencies
    exclude: ['@vite/client', '@vite/env'],
  },
  css: {
    devSourcemap: true,
  },
  esbuild: {
    drop: ['console', 'debugger'],
    target: 'es2015',
  },
  // Define global constants
>>>>>>> origin/main
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  },
<<<<<<< HEAD
=======
  // Resolve configuration
  resolve: {
    alias: {
      '@': '/src',
      '@app': '/app',
      '@components': '/app/components',
    },
  },
>>>>>>> origin/main
});