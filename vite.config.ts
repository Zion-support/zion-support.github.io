import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
export default defineConfig({
  plugins: [react()],
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
      '@/content': resolve(__dirname, './content')
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    target: 'es2020',
    cssTarget: 'chrome80',
    reportCompressedSize: true,
    chunkSizeWarningLimit: 300,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks - more granular splitting
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react'}
            if (id.includes('react-router')) {
              return 'vendor-router'}
            if (id.includes('framer-motion')) {
              return 'vendor-framer'}
            if (id.includes('lucide-react') || id.includes('@heroicons')) {
              return 'vendor-icons'}
            if (id.includes('recharts')) {
              return 'vendor-charts'}
            if (id.includes('web-vitals')) {
              return 'vendor-analytics'}
            if (id.includes('clsx') || id.includes('tailwind-merge')) {
              return 'vendor-utils'}
            return 'vendor-misc'}
          // App chunks - better organization
          if (id.includes('/app/ai-')) {
            return 'ai-services'}
          if (id.includes('/app/it-')) {
            return 'it-services'}
          if (id.includes('/app/components/')) {
            return 'components'}
          if (id.includes('/app/blog/')) {
            return 'blog'}
          if (id.includes('/app/case-studies/')) {
            return 'case-studies'}
          return 'app'},
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name?.split('.').pop()
          if (/\.(css)$/i.test(assetInfo.name || '')) {
            return `assets/css/[name]-[hash].${ext}`}
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name || '')) {
            return `assets/images/[name]-[hash].${ext}`}
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name || '')) {
            return `assets/fonts/[name]-[hash].${ext}`}
          return `assets/[name]-[hash].${ext}`}
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 2,
      },
      mangle: {
        safari10: true,
        properties: {
          regex: /^_/
        }
      },
      format: {
        comments: false,
        ascii_only: true
      }
    },
    chunkSizeWarningLimit: 500,
    reportCompressedSize: true,
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
  },
  server: {
    port: 3000,
    host: true
  },
  preview: {
    port: 4173,
    host: true
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'framer-motion', 
      'lucide-react', 
      'react-router-dom',
      'clsx',
      'tailwind-merge',
      'web-vitals'
    ],
    exclude: ['@vite/client', '@vite/env']
  },
  css: {
    devSourcemap: true
  }
});