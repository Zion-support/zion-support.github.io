import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const resolve = path.resolve;

export default defineConfig({
  plugins: [
    react({
      // Enable JSX runtime
      jsxRuntime: "automatic",
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@app': resolve(__dirname, './app'),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
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
            /.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)
          ) {
            return `assets/images/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
  },
  server: {
    port: 3000,
    open: false,
    cors: true,
    hmr: {
      overlay: true,
    },
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
    ],
  },
});
