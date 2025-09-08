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
    outDir: 'dist',
    sourcemap: false,
  },
  css: {
    postcss: './postcss.config.js',
  },
})
>>>>>>> origin/main
