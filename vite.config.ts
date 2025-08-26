import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    rollupOptions: {
      external: ['lucide-react']
    }
  }
})
=======
      'framer-motion',
      'lucide-react',
      'clsx',
      'class-variance-authority',
      'tailwind-merge',
    ],
    exclude: ['@radix-ui/react-accordion', '@radix-ui/react-dialog'],
  },

  server: {
    port: 3000,
    host: true,
    open: true,
    cors: true,
  },

  preview: {
    port: 4173,
    host: true,
    open: true,
  },
  // PostCSS configuration removed due to ES module compatibility issues
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
    __PROD__: JSON.stringify(process.env.NODE_ENV === 'production'),
  },
})
