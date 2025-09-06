<<<<<<< HEAD
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
=======

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@types': path.resolve(__dirname, './src/types'),
      '@styles': path.resolve(__dirname, './src/styles'),
<<<<<<< HEAD
      '@assets': path.resolve(__dirname, './src/assets')
    }
=======
      '@assets': path.resolve(__dirname, './src/assets'),
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  },
  server: {
    port: 3000,
    open: true,
    host: true,
  },
  css: {
    postcss: false
  },
  esbuild: {
    loader: 'tsx',
    include: /src\/.*\.[jt]sx?$/,
    exclude: [],
  },
  build: {
<<<<<<< HEAD
    outDir: "dist",
    target: 'esnext',
    minify: 'terser',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          ui: ["framer-motion", "lucide-react"],
          router: ["react-router-dom"]
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
});
=======
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['framer-motion'],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react']
  }

})

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
