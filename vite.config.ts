import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { resolve } from 'path';

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
  resolve: {
    alias: {
      '@': resolve(__dirname, './app'),
      '@/components': resolve(__dirname, './app/components'),
      '@/pages': resolve(__dirname, './app'),
      '@/utils': resolve(__dirname, './utils'),
      '@/types': resolve(__dirname, './types'),
      '@/hooks': resolve(__dirname, './hooks'),
      '@/config': resolve(__dirname, './config'),
      '@/data': resolve(__dirname, './data'),
      '@/content': resolve(__dirname, './content')
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    target: 'es2015',
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    reportCompressedSize: true,
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
            id.includes('node_modules/lucide-react') ||
            id.includes('node_modules/@heroicons')
          ) {
            return 'ui';
          }
          // Charts and analytics
          if (id.includes('node_modules/recharts') || id.includes('node_modules/web-vitals')) {
            return 'analytics';
          }
          // Utilities
          if (id.includes('node_modules/clsx') || id.includes('node_modules/tailwind-merge')) {
            return 'utils';
          }
          // Split other node_modules into separate chunks
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          
          // App chunks - split by functionality
          if (id.includes('/app/ai-')) {
            return 'ai-services';
          }
          if (id.includes('/app/it-') || id.includes('/app/cloud-') || id.includes('/app/cybersecurity')) {
            return 'it-services';
          }
          if (id.includes('/app/components/')) {
            return 'components';
          }
          if (id.includes('/app/')) {
            return 'pages';
          }
        },
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name?.split('.').pop();
          if (/\.(css)$/i.test(assetInfo.name || '')) {
            return `assets/css/[name]-[hash].${ext}`;
          }
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name || '')) {
            return `assets/images/[name]-[hash].${ext}`;
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name || '')) {
            return `assets/fonts/[name]-[hash].${ext}`;
          }
          return `assets/[name]-[hash].${ext}`;
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.warn'],
        passes: 3,
        unsafe: true,
        unsafe_comps: true,
        unsafe_math: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        unsafe_undefined: true,
        conditionals: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
        loops: true,
        reduce_vars: true,
        sequences: true,
        side_effects: true,
        switches: true,
        top_ret: true,
        toplevel: true,
        unused: true,
      },
      mangle: {
        safari10: true,
        toplevel: true,
        properties: {
          regex: /^_/,
        }
      },
      format: {
        comments: false,
        ascii_only: true,
        beautify: false,
        ecma: 2020,
        indent_level: 0,
        indent_start: 0,
        inline_script: false,
        keep_numbers: false,
        max_line_len: false,
        preamble: null,
        preserve_annotations: false,
        quote_keys: false,
        quote_style: 0,
        safari10: true,
        semicolons: true,
        shebang: false,
        shorthand: false,
        source_map: null,
        webkit: true,
        width: 80,
        wrap_iife: false,
        wrap_func_args: true,
      }
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
    host: true,
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
      'web-vitals',
      'recharts',
      'clsx',
      'tailwind-merge'
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
});