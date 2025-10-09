import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: 'dist/stats.html',
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  root: '.',
  build: {
    outDir: 'dist',
    target: 'es2015',
    minify: 'terser',
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    reportCompressedSize: true,
    // Optimize build performance
    emptyOutDir: true,
    copyPublicDir: true,
    // Enhanced performance optimizations
    rollupOptions: {
      maxParallelFileOps: 2,
      treeshake: {
        moduleSideEffects: false,
      },
      external: id => {
        // Externalize Next.js modules to prevent build errors
        if (id.includes('next/') || id.includes('next')) {
          return true;
        }
        return false;
      },
      output: {
        manualChunks: id => {
          // Core React libraries
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor';
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
            return 'page';
          }
          // Split other node_modules into separate chunks
          if (id.includes('node_modules')) {
            return 'libs';
          }
        },
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
    // Enhanced performance optimizations
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 3,
        unsafe: true,
        unsafe_comps: true,
        unsafe_math: true,
        unsafe_proto: true,
      },
      mangle: {
        safari10: true,
        toplevel: true,
      },
      format: {
        comments: false,
        ecma: 2015,
      },
    },
  },
  server: {
    port: 3000,
    host: true,
  },
  preview: {
    port: 4173,
    host: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'lucide-react'],
  },
  css: {
    devSourcemap: false,
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
});
