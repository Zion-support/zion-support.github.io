import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './app'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react'
            }
            if (id.includes('react-router')) {
              return 'router'
            }
            if (id.includes('framer-motion')) {
              return 'framer-motion'
            }
            if (id.includes('lucide-react')) {
              return 'lucide'
            }
            if (id.includes('react-helmet')) {
              return 'helmet'
            }
            if (id.includes('recharts')) {
              return 'recharts'
            }
            if (id.includes('clsx') || id.includes('tailwind-merge')) {
              return 'utils'
            }
            if (id.includes('web-vitals')) {
              return 'vitals'
            }
            return 'vendor'
          }
          
          // Page chunks
          if (id.includes('/app/ai-') && id.includes('/page.tsx')) {
            return 'ai-pages'
          }
          if (id.includes('/app/') && (id.includes('cloud-') || id.includes('cybersecurity-') || id.includes('web-development') || id.includes('mobile-development')) && id.includes('/page.tsx')) {
            return 'it-pages'
          }
          if (id.includes('/app/zion-') && id.includes('/page.tsx')) {
            return 'zion-pages'
          }
          if (id.includes('/app/') && id.includes('/page.tsx')) {
            return 'pages'
          }
          return 'vendor'
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})