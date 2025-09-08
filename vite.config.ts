import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig(({ mode }) => ({
  plugins: [
    react({
      fastRefresh: true,
      jsxRuntime: 'automatic',
    }),
    mode === 'analyze' && visualizer({
      filename: 'dist/stats.html',
      open: false,
      gzipSize: true,
      brotliSize: true,
      template: 'treemap',
    })
  ].filter(Boolean),
  build: {
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'UNRESOLVED_IMPORT') return;
        warn(warning);
      },
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-alert-dialog', '@radix-ui/react-avatar'],
          utils: ['axios', 'date-fns', 'lodash.debounce'],
          query: ['@tanstack/react-query'],
          forms: ['react-hook-form', 'formik', 'yup', 'zod'],
          charts: ['recharts'],
          animations: ['framer-motion'],
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    target: 'esnext',
    cssCodeSplit: true,
    reportCompressedSize: true,
    emptyOutDir: true,
    // Add chunk size warnings
    chunkSizeWarningLimit: 1000,
  },
  esbuild: {
    target: 'esnext',
    format: 'esm',
    logLevel: 'error',
    // Tree shaking optimizations
    treeShaking: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 3000,
    host: true,
    open: true,
    cors: true,
    hmr: {
      overlay: true,
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'axios',
      'date-fns',
      'lodash.debounce',
      'framer-motion',
    ],
    exclude: ['@vite/client', '@vite/env'],
  },
  css: {
    devSourcemap: true,
  },
}))