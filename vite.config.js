<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

<<<<<<< HEAD
// https://vitejs.dev/config/
=======

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
<<<<<<< HEAD
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  },
<<<<<<< HEAD
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
=======
  build: {
    outDir: "dist",
    sourcemap: true,
    minify: "terser",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['framer-motion', 'lucide-react'],
          router: ['react-router-dom']
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
<<<<<<< HEAD
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react']
  }
<<<<<<< HEAD

})

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
});
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
