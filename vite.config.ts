<<<<<<< HEAD
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
export default defineConfig({
  plugins: [
    react({
      // Enable React Fast Refresh
      fastRefresh: true,
      // Optimize JSX runtime
      jsxRuntime: "automatic",
    })
=======
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic",
    }),
>>>>>>> origin/main
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
<<<<<<< HEAD
    sourcemap: process.env.NODE_ENV === 'development',
=======
    sourcemap: process.env.NODE_ENV === "development",
>>>>>>> origin/main
    cssCodeSplit: true,
<<<<<<< HEAD
    modulePreload: {
      polyfill: false,
    },
    // Performance optimizations
    chunkSizeWarningLimit: 150, // Balanced threshold for better performance
    assetsInlineLimit: 2048, // Optimized for better caching and faster initial load
    // Enable compression
    reportCompressedSize: true,
    // Optimize for production
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
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
          regex: /^_/
        }
      },
      format: {
        comments: false,
        ascii_only: true
      }
    },
    // Enhanced build optimizations
=======
>>>>>>> origin/main
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("react-dom")) {
              return "vendor-react";
            }
<<<<<<< HEAD
            if (id.includes('react-router')) { return 'vendor-router'; }
            if (id.includes('@heroicons') || id.includes('lucide-react')) { return 'vendor-icons'; }
            if (id.includes('framer-motion')) { return 'vendor-motion'; }
            if (id.includes('react-helmet')) { return 'vendor-helmet'; }
            return 'vendor-other';
=======
            if (id.includes("react-router")) {
              return "vendor-router";
            }
            if (id.includes("@heroicons") || id.includes("lucide-react")) {
              return "vendor-icons";
            }
            if (id.includes("framer-motion")) {
              return "vendor-motion";
            }
            if (id.includes("react-helmet")) {
              return "vendor-helmet";
            }
            return "vendor-other";
>>>>>>> origin/main
          }
          // Page chunks for better code splitting
<<<<<<< HEAD
          if (id.includes('/app/pages/')) { return 'pages'; }
          if (id.includes('/app/components/')) { return 'components'; }
=======
          if (id.includes("/app/pages/")) {
            return "pages";
          }
<<<<<<< HEAD
          // IT service pages - group together
          if (id.includes('/app/') && id.includes('/page.tsx') && 
              !id.includes('/ai-') && !id.includes('/zion-') && !id.includes('/5g-') &&
              (id.includes('devops') || id.includes('cloud') || id.includes('network') || 
               id.includes('software') || id.includes('web') || id.includes('it-'))) {
            return 'it-services'
          }
          // Micro SAAS pages - group together
          if (id.includes('/app/') && id.includes('/page.tsx') && 
              (id.includes('micro-saas') || id.includes('project-management') || 
               id.includes('customer-relationship') || id.includes('inventory') ||
               id.includes('financial') || id.includes('employee') || id.includes('social') ||
               id.includes('email') || id.includes('website') || id.includes('task') ||
               id.includes('smart-') || id.includes('ai-powered'))) {
            return 'micro-saas'
          }
          // Main pages - keep core pages together
          if (id.includes('/app/') && id.includes('/page.tsx') && 
              (id.includes('about') || id.includes('contact') || id.includes('services') || 
               id.includes('blog') || id.includes('privacy') || id.includes('terms'))) {
            return 'main-pages'
          }
          // Default chunk for other modules
          return 'vendor'
=======
          if (id.includes("/app/components/")) {
            return "components";
          }
          return undefined;
>>>>>>> origin/main
>>>>>>> origin/main
        },
        assetFileNames: (assetInfo) => {
          if (
            assetInfo.name &&
            /\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)
          ) {
            return `assets/images/[name]-[hash][extname]`;
          }
<<<<<<< HEAD
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)) { return `assets/fonts/[name]-[hash][extname]`; }
=======
          if (
            assetInfo.name &&
            /\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)
          ) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
>>>>>>> origin/main
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
    open: false, // Disable auto-open for CI/CD
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
      "react",
      "react-dom",
      "react-router-dom",
      "react-helmet-async",
      "@heroicons/react/24/outline",
      "lucide-react",
      "framer-motion",
    ],
    exclude: ["@vite/client", "@vite/env"],
  },
  esbuild: {
<<<<<<< HEAD
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
<<<<<<< HEAD
    target: "esnext",
=======
    target: 'esnext',
    logLevel: 'silent',
    logOverride: {
      'this-is-undefined-in-esm': 'silent',
    },
=======
    drop: process.env.NODE_ENV === "production" ? ["console", "debugger"] : [],
    target: "esnext",
>>>>>>> origin/main
>>>>>>> origin/main
  },
  // Performance optimizations
  define: {
    __VUE_OPTIONS_API__: false,
    __VUE_PROD_DEVTOOLS__: false,
  },
  // CSS optimizations
  css: {
    devSourcemap: true,
  },
});