import { define Config } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default define Config({
  plugins: [
    react({
      // Enable React Fast Refresh
      fast Refresh: true,
      // Enable J SX runtime
      jsx Runtime: 'automatic',
    })
  ],
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
      '@/content': resolve(__dirname, './content'),
    },
  },
  build: {
    out Dir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    target: 'es2020',
    css Code Split: true,
    
    rollup Options: {
      output: {
        manual Chunks: (id) => {
          // Core React libraries
          if (id.includes('react') || id.includes('react-dom')) {
            return 'react-vendor'
          }
          // Router
          if (id.includes('react-router')) {
            return 'router'
          }
          // U I libraries
          if (id.includes('framer-motion')) {
            return 'animations'
          }
          if (id.includes('lucide-react')) {
            return 'icons'
          }
          // S EO and meta
          if (id.includes('react-helmet')) {
            return 'seo'
          }
          // Charts and data visualization
          if (id.includes('recharts')) {
            return 'charts'
          }
          // Utility libraries
          if (id.includes('clsx') || id.includes('tailwind-merge')) {
            return 'utils'
          }
          // Performance monitoring
          if (id.includes('web-vitals')) {
            return 'performance'
          }
          // A I service pages
          if (id.includes('/app/ai-') && id.includes('/page.tsx')) {
            return 'ai-pages'
          }
          // I T service pages
          if (id.includes('/app/') && (id.includes('cloud-') || id.includes('cybersecurity-') || id.includes('web-development') || id.includes('mobile-development')) && id.includes('/page.tsx')) {
            return 'it-pages'
          }
          // Micro S AA S pages
          if (id.includes('/app/zion-') && id.includes('/page.tsx')) {
            return 'saas-pages'
          }
          // Other pages
          if (id.includes('/app/') && id.includes('/page.tsx')) {
            return 'pages'
          }
          // Default chunk for other modules
          return 'vendor'
        },
        chunk File Names: 'assets/[name]-[hash].js',
        entry File Names: 'assets/[name]-[hash].js',
        asset File Names: 'assets/[name]-[hash].[ext]',
      },
    },
    // Optimize bundle size
    chunk Size Warning Limit: 1000,
    // Enable tree shaking
    treeshake: true,
    // Enable compression
    report Compressed Size: true,
  },
  server: {
    port: 3000,
    open: true,
    host: true,
    // Enable H MR
    hmr: {
      overlay: true,
    },
  },
  preview: {
    port: 4173,
    open: true,
    host: true,
  },
  // Optimize dependencies
  optimize Deps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'react-helmet-async',
      'framer-motion',
      'lucide-react',
    ],
  },
  // C SS optimization
  css: {
    dev Sourcemap: true,
  },
})