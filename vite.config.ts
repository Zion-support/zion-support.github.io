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
      },
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            if (id.includes('react-router')) {
              return 'router-vendor';
            }
            if (id.includes('framer-motion') || id.includes('@heroicons') || id.includes('lucide-react')) {
              return 'ui-vendor';
            }
            if (id.includes('web-vitals') || id.includes('react-helmet')) {
              return 'analytics-vendor';
            }
            return 'vendor';
          }
          
          // App chunks
          if (id.includes('servicesData')) {
            return 'services-data';
          }
          if (id.includes('components/SEOHead')) {
            return 'seo';
          }
          if (id.includes('components/PerformanceMonitor') || id.includes('components/AccessibilityEnhancer')) {
            return 'monitoring';
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000,
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
      'lucide-react'
    ]
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
  css: {
    devSourcemap: true,
  }
})
