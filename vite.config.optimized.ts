// Optimized Vite configuration for better performance and development experience
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

// Ensure __dirname is available in ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Environment detection
const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';
const isCI = process.env.CI === 'true' || process.env.NETLIFY === 'true';

export default defineConfig({
  base: '/',

  plugins: [
    react({
      jsxRuntime: 'automatic',
      // Enable fast refresh for better development experience
      fastRefresh: isDev,
      // Include emotion for better CSS-in-JS support
      include: ['**/*.tsx', '**/*.ts', '**/*.jsx', '**/*.js'],
    }),
  ],

  // Optimized resolve configuration
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // Next.js compatibility stubs
      'next/router': path.resolve(__dirname, './src/stubs/next-router.ts'),
      'next/link': path.resolve(__dirname, './src/stubs/next-link.ts'),
      'next/image': path.resolve(__dirname, './src/stubs/next-image.ts'),
      'next/head': path.resolve(__dirname, './src/stubs/next-head.ts'),
      'next-cloudinary': path.resolve(
        __dirname,
        './src/stubs/next-cloudinary.ts'
      ),
      '@supabase/ssr': path.resolve(__dirname, './src/stubs/supabase-ssr.ts'),
      // External library stubs
      '@datadog/browser-logs': path.resolve(
        __dirname,
        './src/utils/datadog-logs-shim.ts'
      ),
      logrocket: path.resolve(__dirname, './src/utils/logrocket-shim.ts'),
    },
    // Optimize dependency resolution
    dedupe: ['react', 'react-dom'],
  },

  // Enhanced build configuration
  build: {
    outDir: 'dist',
    sourcemap: isDev ? 'inline' : false,
    minify: isProd ? 'esbuild' : false,
    cssMinify: isProd ? 'esbuild' : false,

    // Optimize chunk splitting
    rollupOptions: {
      input: {
        main: './index.html',
      },
      output: {
        // Optimize chunk naming for better caching
        chunkFileNames: isProd ? 'assets/[name]-[hash].js' : 'assets/[name].js',
        entryFileNames: isProd ? 'assets/[name]-[hash].js' : 'assets/[name].js',
        assetFileNames: isProd
          ? 'assets/[name]-[hash].[ext]'
          : 'assets/[name].[ext]',

        // Manual chunk splitting for better performance
        manualChunks: isProd
          ? {
              // Vendor chunks
              'react-vendor': ['react', 'react-dom'],
              'ui-vendor': ['@radix-ui/react-slot', 'clsx', 'tailwind-merge'],
              'utils-vendor': ['axios', 'date-fns', 'fuse.js'],
              'animation-vendor': ['framer-motion'],
              'query-vendor': ['@tanstack/react-query'],
            }
          : undefined,
      },

      // Suppress warnings for better build experience
      onwarn(warning, warn) {
        // Suppress known warnings
        if (warning.code === 'UNRESOLVED_IMPORT') return;
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return;
        if (warning.message.includes('Circular dependency')) return;
        warn(warning);
      },
    },

    // Optimize module preloading
    modulePreload: {
      polyfill: true,
      resolveDependencies: (filename, deps) => {
        // Only preload critical dependencies
        return deps.filter(dep => {
          return (
            dep.includes('index-') ||
            dep.includes('react-core-') ||
            dep.includes('main-')
          );
        });
      },
    },

    // Asset optimization
    assetsInlineLimit: 2048,
    chunkSizeWarningLimit: 1000,

    // Enable tree shaking
    treeshake: true,
  },

  // Enhanced server configuration
  server: {
    port: 3000,
    host: true,
    open: !isCI,
    cors: true,
    hmr: {
      overlay: true,
    },
    // Optimize file watching
    watch: {
      usePolling: false,
      interval: 100,
    },
  },

  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'axios',
      'date-fns',
      'framer-motion',
      'lucide-react',
      '@tanstack/react-query',
      '@radix-ui/react-slot',
      'clsx',
      'tailwind-merge',
    ],
    exclude: ['@vite/client', '@vite/env'],
    force: isDev,
  },

  // CSS configuration
  css: {
    devSourcemap: isDev,
    // Enable CSS code splitting
    modules: {
      localsConvention: 'camelCase',
    },
  },

  // Environment variables
  define: {
    'process.env.NODE_ENV': JSON.stringify(
      process.env.NODE_ENV || 'development'
    ),
    'import.meta.env.DEV': isDev,
    'import.meta.env.PROD': isProd,
  },

  // Performance optimizations
  esbuild: {
    target: 'esnext',
    logLevel: 'error',
    // Only drop console in production
    drop: isProd ? ['console', 'debugger'] : [],
    pure: isProd ? ['console.log', 'console.info', 'console.debug'] : [],
  },
});
