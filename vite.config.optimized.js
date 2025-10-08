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
        // Remove unused code
        dead_code: true,
        // Optimize conditionals
        conditionals: true,
        // Optimize comparisons
        comparisons: true,
        // Optimize boolean contexts
        booleans: true,
        // Optimize loops
        loops: true,
        // Optimize unused variables
        unused: true,
        // Optimize if statements
        if_return: true,
        // Optimize join variables
        join_vars: true,
        // Optimize sequences
        sequences: true,
      },
      mangle: {
        safari10: true,
        toplevel: true,
        // Mangle properties
        properties: {
          regex: /^_/
        }
      },
      format: {
        comments: false,
        ecma: 2015,
        // Preserve semicolons for better compression
        semicolons: true,
      },
    },
    // Reduce memory usage during build
    rollupOptions: {
      maxParallelFileOps: 2,
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
            return 'vendor';
          }
          // Router library
          if (id.includes('node_modules/react-router-dom')) {
            return 'router';
          }
          // UI libraries
          if (
            id.includes('node_modules/framer-motion') ||
            id.includes('node_modules/lucide-react') ||
            id.includes('node_modules/@heroicons/react')
          ) {
            return 'ui';
          }
          // Chart libraries
          if (id.includes('node_modules/recharts')) {
            return 'charts';
          }
          // Utilities and web vitals
          if (id.includes('node_modules/web-vitals') || id.includes('node_modules/clsx')) {
            return 'utils';
          }
          // Split other node_modules into separate chunks
          if (id.includes('node_modules')) {
            return 'libs';
          }
        },
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        // Optimize chunk loading
        experimentalMinChunkSize: 1000,
      },
    },
  },
  server: {
    port: 3000,
    host: true,
    // Enable HMR
    hmr: {
      overlay: true,
    },
  },
  preview: {
    port: 4173,
    host: true,
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom', 
      'framer-motion', 
      'lucide-react',
      '@heroicons/react',
      'recharts',
      'web-vitals',
      'clsx',
      'tailwind-merge'
    ],
    // Force pre-bundling of these dependencies
    force: true,
  },
  css: {
    devSourcemap: false,
  },
  esbuild: {
    drop: ['console', 'debugger'],
    // Optimize JSX
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
  },
  // Performance optimizations
  define: {
    // Remove process.env checks in production
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
  },
  // Resolve optimizations
  resolve: {
    alias: {
      // Add path aliases for better imports
      '@': '/workspace/app',
      '@components': '/workspace/app/components',
      '@utils': '/workspace/app/utils',
      '@hooks': '/workspace/app/hooks',
      '@types': '/workspace/app/types',
    },
  },
});