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
      open: false,
      gzipSize: true,
      brotliSize: true,
      template: 'treemap', // Use treemap for better visualization
    }),
  ],
  root: '.',
  build: {
    outDir: 'dist',
    target: 'es2020', // Updated to ES2020 for better performance
    minify: 'terser',
    sourcemap: false,
    chunkSizeWarningLimit: 500, // Reduced warning limit
    cssCodeSplit: true,
    assetsInlineLimit: 2048, // Reduced inline limit
    reportCompressedSize: true,
    // Optimize build performance
    emptyOutDir: true,
    copyPublicDir: true,
    // Enhanced performance optimizations
    terserOptions: {
      compress: {
        drop_console: process.env.NODE_ENV === 'production',
        drop_debugger: process.env.NODE_ENV === 'production',
        pure_funcs: process.env.NODE_ENV === 'production' ? ['console.log', 'console.info', 'console.debug'] : [],
        passes: 2, // Reduced passes for faster build
        unsafe: false, // Disabled for better compatibility
        unsafe_comps: false,
        unsafe_math: false,
        unsafe_proto: false,
        // Additional optimizations
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
        reduce_vars: true,
        sequences: true,
        unused: true,
      },
      mangle: {
        safari10: true,
        toplevel: true,
        // Preserve class names for better debugging
        keep_classnames: process.env.NODE_ENV === 'development',
        keep_fnames: process.env.NODE_ENV === 'development',
      },
      format: {
        comments: false,
        ecma: 2020,
        // Better formatting
        beautify: false,
        ascii_only: true,
      },
    },
    // Reduce memory usage during build
    rollupOptions: {
      maxParallelFileOps: 3, // Increased for better performance
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false,
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
            return 'react';
          }
          // Router library
          if (id.includes('node_modules/react-router-dom')) {
            return 'router';
          }
          // UI libraries
          if (id.includes('node_modules/framer-motion')) {
            return 'framer-motion';
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'lucide-react';
          }
          // Web vitals and analytics
          if (id.includes('node_modules/web-vitals')) {
            return 'web-vitals';
          }
          // Other UI libraries
          if (id.includes('node_modules/@heroicons/react')) {
            return 'heroicons';
          }
          // Utilities
          if (id.includes('node_modules/clsx') || id.includes('node_modules/tailwind-merge')) {
            return 'utils';
          }
          // Split other node_modules into separate chunks
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/\.(css)$/.test(assetInfo.name)) {
            return 'assets/css/[name]-[hash][extname]';
          }
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
            return 'assets/images/[name]-[hash][extname]';
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)) {
            return 'assets/fonts/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        // Optimize chunk loading
        experimentalMinChunkSize: 10000,
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
