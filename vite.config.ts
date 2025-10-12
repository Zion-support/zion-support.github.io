import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable React Fast Refresh
      fastRefresh: true,
      // Enable JSX runtime
      jsxRuntime: 'automatic',
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
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    target: 'es2020',
    cssCodeSplit: true,
    
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core React libraries
          if (id.includes('react') || id.includes('react-dom')) {
            return 'react-vendor'
          }
          // Router
          if (id.includes('react-router')) {
            return 'router'
          }
          // UI libraries
          if (id.includes('framer-motion')) {
            return 'animations'
          }
          if (id.includes('lucide-react')) {
            return 'icons'
          }
          // SEO and meta
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
          // AI service pages
          if (id.includes('/app/ai-') && id.includes('/page.tsx')) {
            return 'ai-pages'
          }
          // IT service pages
          if (id.includes('/app/') && (id.includes('cloud-') || id.includes('cybersecurity-') || id.includes('web-development') || id.includes('mobile-development')) && id.includes('/page.tsx')) {
            return 'it-pages'
          }
          // Micro SAAS pages
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
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // Optimize bundle size
    chunkSizeWarningLimit: 1000,
    // Enable tree shaking
    treeshake: true,
    // Enable compression
    reportCompressedSize: true,
  },
  server: {
    port: 3000,
    open: true,
    host: true,
    // Enable HMR
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
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'react-helmet-async',
      'framer-motion',
      'lucide-react',
    ],
  },
  // CSS optimization
  css: {
    devSourcemap: true,
  },
})