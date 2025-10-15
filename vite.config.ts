import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const resolve = path.resolve;

export default defineConfig({
  plugins: [
    react({
      // Enable React Fast Refresh
      include: "**/*.{jsx,tsx}",
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@app": resolve(__dirname, "./app"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "esbuild",
    cssCodeSplit: true,
    modulePreload: {
      polyfill: false,
    },
    // Performance optimizations
<<<<<<< HEAD
    chunkSizeWarningLimit: 200, // Increased threshold to reduce warnings
=======
    chunkSizeWarningLimit: 500,
>>>>>>> cursor/analyze-improve-and-deploy-application-a84d
    assetsInlineLimit: 4096, // Increased for better performance
    // Enable compression
    reportCompressedSize: true,
    // Target modern browsers for smaller bundles
    target: 'es2020',
    // Enable tree shaking
    treeshake: {
      moduleSideEffects: false,
    },
    // Optimize for production
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
<<<<<<< HEAD
        pure_funcs: [
          "console.log",
          "console.info",
          "console.debug",
          "console.warn",
        ],
        passes: 3, // More passes for better optimization
        unsafe: true,
        unsafe_comps: true,
        unsafe_math: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        unsafe_undefined: true,
        conditionals: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
        loops: true,
        sequences: true,
        side_effects: false,
        unused: true,
      },
      mangle: {
        safari10: true, // Better Safari compatibility
        toplevel: true,
        properties: {
          regex: /^_/,
        },
      },
      format: {
        comments: false,
        ascii_only: true,
      },
    },
    // Enhanced build optimizations
=======
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 2,
      },
      mangle: {
        safari10: true,
      },
    },
    // Additional optimizations
    cssMinify: true,
    minifyInternalExports: true,
    emptyOutDir: true,
    // Advanced optimizations
    assetsDir: 'assets',
    copyPublicDir: true,
    
    
>>>>>>> cursor/analyze-improve-and-deploy-application-a84d
    rollupOptions: {
      output: {
        manualChunks: (id: string) => {
          // Split vendor chunks for better caching
          if (id.includes('node_modules')) {
            // React core
            if (id.includes('react/') || id.includes('react-dom/')) {
              return 'react-core';
            }
            // React router
            if (id.includes('react-router')) {
              return 'react-router';
            }
            // UI libraries
            if (id.includes("lucide-react")) {
              return "icons";
            }
            if (id.includes("framer-motion")) {
              return "animations";
            }
            // Large libraries
            if (id.includes('recharts')) {
              return 'charts';
            }
            if (id.includes('gray-matter')) {
              return 'content';
            }
            // Other vendor libraries
            return "vendor";
          }
          // App chunks - split by feature
          if (id.includes('/app/')) {
            // Split by page categories
            if (id.includes('/ai-')) {
              return 'ai-pages';
            }
            if (id.includes('/5g-')) {
              return '5g-pages';
            }
            // Main app pages
            if (id.includes('/page.tsx') && !id.includes('/ai-') && !id.includes('/5g-')) {
              return 'main-pages';
            }
            return 'app';
          }
          return undefined;
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
    include: ['react', 'react-dom', 'react-router-dom', 'lucide-react'],
    exclude: ['@heroicons/react', 'framer-motion', 'recharts'],
  },
  esbuild: {
    // Remove console logs in production
    drop: ['console', 'debugger'],
    // Target modern browsers
    target: 'es2020',
  },
});
