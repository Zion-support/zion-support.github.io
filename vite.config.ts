import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
<<<<<<< HEAD
      '@': resolve(__dirname, './src'),
    },
  },
=======
      '@': resolve(__dirname, './src')
    }
  },
  build: {
    rollupOptions: {
      external: [
        'framer-motion',
        'lucide-react',
        'clsx',
        'class-variance-authority',
        'tailwind-merge',
      ],
    },
  },
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896
  server: {
    port: 3000,
    host: true,
    open: true,
  },
<<<<<<< HEAD
});
=======
  preview: {
    port: 4173,
    host: true,
    open: true,
  },
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
    __PROD__: JSON.stringify(process.env.NODE_ENV === 'production'),
  },
})
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896
