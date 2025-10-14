import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      // Enable React Fast Refresh
      fastRefresh: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
      "@app": path.resolve(__dirname, "./app"),
      "@components": path.resolve(__dirname, "./app/components"),
      "@utils": path.resolve(__dirname, "./utils"),
    },
  },
  build: {
    outDir: "dist",
    target: "esnext",
    minify: "esbuild",
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        assetFileNames: (assetInfo) => {
          if (
            assetInfo.name &&
            /\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)
          ) {
            return `assets/images/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
    chunkSizeWarningLimit: 500,
    reportCompressedSize: true,
  },
  server: {
    port: 3000,
    open: false,
    cors: true,
    hmr: {
      overlay: true,
    },
  },
  preview: {
    port: 4173,
    open: false,
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
    ],
  },
});