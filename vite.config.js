<<<<<<< HEAD
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
=======
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
export default defineConfig({
  plugins: [react()],
  server: {
<<<<<<< HEAD
    port: 3000
    open: true
=======
;
}

export default defineConfig({,
  plugins: [react()],
  server: {,
    port: 3000,
    open: true,
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
    port: 3000,
    open: true,
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
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
<<<<<<< HEAD
  }
});
=======
  },
  server: {
    port: 3000,
    open: true,
  },
})
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
