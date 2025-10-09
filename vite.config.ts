import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ['@babel/plugin-proposal-decorators', { legacy: true }],
        ],
      },
    }),
  ],
  root: 'src',
  publicDir: '../public',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@utils': resolve(__dirname, './src/utils'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@types': resolve(__dirname, './src/types'),
    },
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks - more granular splitting
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-motion';
            }
            if (id.includes('lucide-react') || id.includes('@heroicons')) {
              return 'vendor-icons';
            }
            if (id.includes('recharts')) {
              return 'vendor-charts';
            }
            if (id.includes('react-router-dom')) {
              return 'vendor-router';
            }
            if (id.includes('clsx') || id.includes('tailwind-merge')) {
              return 'vendor-utils';
            }
            return 'vendor';
          }
          // Page chunks - group similar pages
          if (id.includes('/app/ai-')) {
            return 'pages-ai';
          }
          if (id.includes('/app/it-') || id.includes('/app/cloud-')) {
            return 'pages-it';
          }
          if (id.includes('/app/blog/')) {
            return 'pages-blog';
          }
          if (id.includes('/app/')) {
            return 'pages-other';
          }
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash].[ext]`;
          }
          if (/woff2?|eot|ttf|otf/i.test(ext)) {
            return `assets/fonts/[name]-[hash].[ext]`;
          }
          return `assets/[name]-[hash].[ext]`;
        },
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.warn', 'console.debug'],
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
        hoist_funs: true,
        hoist_vars: true,
        collapse_vars: true,
        reduce_funcs: true,
        inline: 2,
        keep_fargs: false,
        keep_infinity: true,
        typeofs: false,
      },
      mangle: {
        safari10: true,
        toplevel: true,
        properties: {
          regex: /^_/
        },
        keep_fnames: false,
        keep_classnames: false,
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
    chunkSizeWarningLimit: 500,
    reportCompressedSize: false,
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    treeshake: {
      moduleSideEffects: false,
      propertyReadSideEffects: false,
      tryCatchDeoptimization: false,
    },
  },
  server: {
    port: 3000,
    host: true,
    hmr: {
      overlay: false,
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
      'framer-motion',
      'lucide-react',
      'clsx',
      'tailwind-merge',
    ],
    exclude: ['@vite/client', '@vite/env'],
  },
  css: {
    postcss: './postcss.config.js',
    devSourcemap: false,
  },
  esbuild: {
    target: 'es2020',
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
  },
});