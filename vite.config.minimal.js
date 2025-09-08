<<<<<<< HEAD
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
=======
<<<<<<< HEAD
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
=======
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
>>>>>>> origin/main

export default defineConfig({
  plugins: [react()],
  build: {
<<<<<<< HEAD
    outDir: "dist",
  },
});
=======
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
    outDir: 'dist',
    sourcemap: false,
  },
  css: {
    postcss: './postcss.config.js',
  },
<<<<<<< HEAD
})
=======
})
>>>>>>> origin/main
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
