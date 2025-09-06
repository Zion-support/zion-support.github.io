<<<<<<< HEAD

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
=======
<<<<<<< HEAD
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
=======
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
>>>>>>> origin/main

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    host: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['framer-motion', 'lucide-react'],
          router: ['react-router-dom']
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react']
  }
<<<<<<< HEAD

})

=======
});
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
