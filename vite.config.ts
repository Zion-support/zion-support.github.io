import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable JSX runtime
      jsxRuntime: 'automatic'
    })
  ],
  build: {
    outDir: 'dist',
    sourcemap: process.env.NODE_ENV === 'development',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@heroicons/react', 'framer-motion', 'lucide-react'],
          utils: ['clsx', 'tailwind-merge'],
          analytics: ['web-vitals'],
          helmet: ['react-helmet-async']
        },
        // Optimize chunk naming
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    target: 'esnext',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
    // Enable CSS minification
    cssMinify: true,
    // Optimize for production
    reportCompressedSize: true,
    // Enable tree shaking (default in Vite)
  },
  server: {
    port: 3000,
    open: true,
    host: true,
    // Enable HMR
    hmr: {
      overlay: true
    }
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom', 
      'clsx', 
      'tailwind-merge',
      'react-helmet-async',
      'web-vitals'
    ],
    // Exclude from pre-bundling
    exclude: ['@vite/client', '@vite/env']
  },
  esbuild: {
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : []
  },
  // Enable CSS preprocessing
  css: {
    devSourcemap: true
  },
  // Define global constants
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    __BUILD_TIME__: JSON.stringify(new Date().toISOString())
  }
})
