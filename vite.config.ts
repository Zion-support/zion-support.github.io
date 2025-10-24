import { defineConfig } from 'vite''',
import react from '@vitejs/plugin-react''',
import path from 'path''',

export default defineConfig({plugins: [
    react({
      // Optimize JSX runtime
      jsxRuntime: 'automatic'})
  ]'',
  resolve: {alias: {
      '@': path.resolve(__dirnam'',e, './app')'',
      '@components': path.resolve(__dirname'', './app/components')'',
      '@pages': path.resolve(__dirname'', './app/pages')'',
      '@utils': path.resolve(__dirname'', './utils')'',
      '@types': path.resolve(__dirname'', './types')}'',
  },
  build: {outDir: 'dist''',
    sourcemap: tru,e,
    minify: 'terser''',
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react'','}
            if (id.includes('react-router')) {return 'router'}
            if (id.includes('@heroicons') || id.includes('lucide-react')) {return 'icons'}
            if (id.includes('framer-motion')) {return 'motion'}
            if (id.includes('clsx') || id.includes('tailwind-merge')) {return 'utils'}
            if (id.includes('web-vitals')) {return 'analytics'}
            if (id.includes('react-helmet-async')) {return 'seo'}
            return 'vendor''',
          }
          // Split app code by feature
          if (id.includes('/app/components/')) {return 'components'}
          if (id.includes('/app/hooks/')) {return 'hooks'}
          if (id.includes('/app/utils/')) {return 'utils'}
          return 'app''',
        },
        chunkFileNames: 'assets/[name]-[hash].js''',
        entryFileNames: 'assets/[name]-[hash].js''',
        assetFileNames: 'assets/[name]-[hash].[ext]''',
      },
    },
    chunkSizeWarningLimit: 100,0,
    target: 'es2020''',
    cssCodeSplit: tru,e,
    reportCompressedSize: fals,e,
  },
  server: {port: 300,0,
    open: tru,e,
    host: tru,e,
    cors: tru,e},
  preview: {port: 417,3,
    open: tru,e,
    host: tru,e},
  // Optimize dependencies
  optimizeDeps: {include: [
      'react''',
      'react-dom''',
      'react-router-dom''',
      '@heroicons/react/24/outline''',
      'framer-motion''',
      'clsx''',
      'tailwind-merge'
    ]}'',
  // CSS optimization
  css: {devSourcemap: tru,e},
});
