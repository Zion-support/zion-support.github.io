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
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@heroicons/react', 'framer-motion'],
          utils: ['clsx', 'tailwind-merge']
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true,
    host: true
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'clsx', 'tailwind-merge']
  },
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development')
  }
})
