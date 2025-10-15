import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: process.env.NODE_ENV === 'development',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor'
            }
            if (id.includes('react-router')) {
              return 'router-vendor'
            }
            if (id.includes('@heroicons') || id.includes('framer-motion')) {
              return 'ui-vendor'
            }
            if (id.includes('clsx') || id.includes('tailwind-merge')) {
              return 'utils-vendor'
            }
            return 'vendor'
          }
          // Page chunks
          if (id.includes('/app/') && id.includes('/page.tsx')) {
            return 'pages'
          }
          // Component chunks
          if (id.includes('/app/components/')) {
            return 'components'
          }
        }
      }
    },
    target: 'esnext',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 500,
    assetsInlineLimit: 4096
  },
  server: {
    port: 3000,
    open: true,
    host: true,
    hmr: {
      overlay: false
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
    ]
  },
  esbuild: {
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : []
  },
  define: {
    __DEV__: process.env.NODE_ENV === 'development'
  }
})
