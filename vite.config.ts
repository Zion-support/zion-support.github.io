import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 2,
      },
      mangle: {
        safari10: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@heroicons/react', 'framer-motion', 'lucide-react'],
          utils: ['clsx', 'tailwind-merge'],
          analytics: ['web-vitals']
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    chunkSizeWarningLimit: 500,
    target: 'esnext',
    cssCodeSplit: true,
  },
  server: {
    port: 3000,
    open: true,
    hmr: {
      overlay: false
    }
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom',
      '@heroicons/react',
      'framer-motion',
      'lucide-react',
      'web-vitals'
    ],
    exclude: ['@vite/client', '@vite/env']
  },
  esbuild: {
    drop: ['console', 'debugger'],
    target: 'esnext'
  },
  css: {
    devSourcemap: true,
  },
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
  }
})
