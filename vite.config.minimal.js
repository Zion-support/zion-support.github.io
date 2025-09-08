=======import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  build: {
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
    outDir: 'dist',
    sourcemap: false,
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
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
          // Vendor chunks
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
          'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-select'],
          'icons-vendor': ['lucide-react', '@radix-ui/react-icons'],
          'utils-vendor': ['clsx', 'class-variance-authority', 'tailwind-merge'],
          'query-vendor': ['@tanstack/react-query'],
          'motion-vendor': ['framer-motion']
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    chunkSizeWarningLimit: 1000,>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
  },
  css: {
    postcss: './postcss.config.js',
  },
})>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
=======
})=======
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'lucide-react',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-select',
      'framer-motion',
      '@tanstack/react-query'
    ]
  }
})
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
