import { defineConfig } from "vite"
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig(({ mode }) => ({
  plugins: [
    react({
      // Enable React Fast Refresh
      fastRefresh: true,
      // Optimize JSX runtime
      jsxRuntime: 'automatic',
      // Enable babel plugin for better tree shaking
      babel: {
        plugins: [
          // Add any babel plugins here if needed
        ]
      }
    }),
    // Add bundle analyzer for analyze mode
    ...(mode === 'analyze' ? [
      visualizer({
        filename: 'dist/stats.html',
        open: false,
        gzipSize: true,
        brotliSize: true
      })
    ] : [])
  ],
  build: {
    outDir: 'dist',
    // Enable source maps for production debugging
    sourcemap: mode !== 'production',
    // Performance optimizations
    minify: 'terser',
    cssMinify: true,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1000,
    // Optimize chunk splitting
    rollupOptions: {
      input: {
        main: './index.html'
      },
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false
      },
      output: {
        // Manual chunk splitting for better caching
        manualChunks: (id) => {
          // Vendor chunks - more granular splitting
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('react-router')) {
              return 'vendor-router';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-framer';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            if (id.includes('recharts')) {
              return 'vendor-charts';
            }
            if (id.includes('clsx') || id.includes('tailwind-merge')) {
              return 'vendor-utils';
            }
            if (id.includes('axios')) {
              return 'vendor-http';
            }
            // All other node_modules go to vendor
            return 'vendor';
          }
          // App chunks - more granular splitting
          if (id.includes('src/pages/')) {
            return 'pages';
          }
          if (id.includes('src/components/')) {
            // Split large components into separate chunks
            if (id.includes('Advanced') || id.includes('Comprehensive')) {
              return 'components-advanced';
            }
            return 'components';
          }
          if (id.includes('src/utils/')) {
            // Split utils by functionality
            if (id.includes('advanced') || id.includes('comprehensive')) {
              return 'utils-advanced';
            }
            return 'utils';
          }
          if (id.includes('src/hooks/')) {
            return 'hooks';
          }
        },
        // Optimize chunk file names
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      },
      // Enable build parallelization
      maxParallelFileOps: 5,
      external: [],
      plugins: []
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        dead_code: true,
        unused: true,
        side_effects: false,
        // Additional compression options
        passes: 2,
        unsafe: true,
        unsafe_comps: true,
        unsafe_math: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        unsafe_undefined: true
      },
      mangle: {
        safari10: true,
        properties: {
          regex: /^_/
        }
      },
      format: {
        comments: false,
        ascii_only: true
      }
    },
    // Target modern browsers for better optimization
    target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],
    // Optimize dependencies
    commonjsOptions: {
      include: [/node_modules/]
    }
  },
  server: {
    port: 3000,
    // Enable HMR
    hmr: true,
    // Enable CORS for development
    cors: true
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'lucide-react',
      'clsx',
      'tailwind-merge',
      'axios',
      'web-vitals'
    ],
    exclude: ['@testing-library/react', '@testing-library/jest-dom'],
    // Force optimization for better performance
    force: true
  },
  // Resolve aliases for cleaner imports
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@styles': resolve(__dirname, 'src/styles')
    }
  },
  // CSS optimization
  css: {
    devSourcemap: true
  }
}))