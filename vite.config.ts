import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
const resolve = path.resolve;
export default defineConfig({;
  plugins: [;
    react({
      // Enable React Fast Refresh;
      fastRefresh: true,
    }),
  ],
  resolve: {
alias: {,
      '@': resolve(__dirname, './src'),
      '@app': resolve(__dirname, './app'),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "esbuild",
    cssCodeSplit: true,
<<<<<<< HEAD
    modulePreload: {
      polyfill: false,
    },
    // Performance optimizations
    chunkSizeWarningLimit: 100, // Reduced threshold for better chunking
    assetsInlineLimit: 4096, // Optimized for better caching and faster initial load
    // Enable compression
    reportCompressedSize: true,
    // Optimize for production;
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        passes: 3, // More passes for better optimization;
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
        sequences: true,
        side_effects: false,
        unused: true,
      },
      mangle: {
        safari10: true, // Better Safari compatibility;
        toplevel: true,
        properties: {
          regex: /^_/
        }
      },
      format: {
        comments: false,
        ascii_only: true;
    },
    // Enhanced build optimizations;
=======
>>>>>>> origin/main
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks;
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        assetFileNames: (assetInfo) => {
          if (;
            assetInfo.name &&
            /\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)
          ) {
            return `assets/images/[name]-[hash][extname]`;``````````
          }```````````
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
  },
  server: {
    port: 3000,`
    open: false,``
    cors: true,```
hmr: {,````
      overlay: true,`````
    },``````
  },```````
  optimizeDeps: {````````
include: ['react', 'react-dom', 'react-router-dom'],`````````
  },``````````
});```````````