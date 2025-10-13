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
            return 'react';
          }
          // Router library
          if (id.includes('node_modules/react-router-dom')) {
            return 'router';
          }
          // UI libraries
          if (
            id.includes('node_modules/framer-motion') ||
            id.includes('node_modules/lucide-react')
          ) {
            return 'ui';
          }
          // Utilities and web vitals
          if (id.includes('node_modules/web-vitals')) {
            return 'vitals';
          }
          // Split other node_modules into separate chunks
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
  },
  server: {
    port: 3000,
    host: true,
    open: true,
    // Enable HMR
    hmr: {
      overlay: true,
    },
  },
  preview: {
    port: 4173,
    open: true,
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom', 
      'react-router-dom', 
      'framer-motion', 
      'lucide-react',
      'react-helmet-async',
      'web-vitals'
    ],
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
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
    __VERSION__: JSON.stringify(process.env.npm_package_version),
  },
  // Resolve configuration
  resolve: {
    alias: {
      '@': '/src',
      '@app': '/app',
      '@components': '/app/components',
    },
  },
});