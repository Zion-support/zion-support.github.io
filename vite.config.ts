import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

export default defineConfig({
  plugins: [
    react({
      // Optimize JSX runtime
      jsxRuntime: "automatic",
      // Enable babel optimization
      babel: {
        plugins: process.env.NODE_ENV === 'production' 
          ? [['transform-remove-console', { exclude: ['error', 'warn'] }]]
          : [],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./app"),
      "@components": path.resolve(__dirname, "./app/components"),
      "@pages": path.resolve(__dirname, "./app/pages"),
      "@utils": path.resolve(__dirname, "./utils"),
      "@types": path.resolve(__dirname, "./types"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "terser",
    target: "es2020",
    cssCodeSplit: true,
    // Enable tree shaking
    rollupOptions: {
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false,
      },
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            // Core React libraries
            if (id.includes("react") || id.includes("react-dom")) {
              return "react-core";
            }
            // Router
            if (id.includes("react-router")) {
              return "router";
            }
            // Icons - split by library
            if (id.includes("@heroicons")) {
              return "heroicons";
            }
            if (id.includes("lucide-react")) {
              return "lucide-icons";
            }
            // Animation
            if (id.includes("framer-motion")) {
              return "motion";
            }
            // Utilities
            if (id.includes("clsx") || id.includes("tailwind-merge")) {
              return "utils";
            }
            // Analytics
            if (id.includes("web-vitals")) {
              return "analytics";
            }
            // SEO
            if (id.includes("react-helmet-async")) {
              return "seo";
            }
            // Lazy loading
            if (id.includes("react-lazy-load-image-component")) {
              return "lazy-loading";
            }
            return "vendor";
          }
          
          // App code splitting - more aggressive
          if (id.includes("/app/components/")) {
            // Split large components separately
            if (id.includes("Header") || id.includes("Footer") || id.includes("Navigation")) {
              return "layout-components";
            }
            if (id.includes("Service") || id.includes("Feature")) {
              return "content-components";
            }
            return "components";
          }
          
          if (id.includes("/app/hooks/")) {
            return "hooks";
          }
          
          if (id.includes("/app/utils/")) {
            return "utils";
          }
          
          // Services data - make it lazy loadable
          if (id.includes("servicesData") || id.includes("services-data")) {
            return "services-data";
          }
          
          // Pages - group by size and importance
          if (id.includes("/app/pages/")) {
            // Critical pages (home, about, contact)
            if (id.includes("Home") || id.includes("About") || id.includes("Contact")) {
              return "critical-pages";
            }
            // Service pages
            if (id.includes("Service") || id.includes("service")) {
              return "service-pages";
            }
            // Blog/content pages
            if (id.includes("Blog") || id.includes("blog") || id.includes("Post")) {
              return "content-pages";
            }
            return "pages";
          }
          
          return undefined;
        },
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
        // Optimize chunk size
      },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 500,
    reportCompressedSize: true,
    // Enable compression
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
        passes: 2,
      },
      mangle: {
        safari10: true,
      },
    },
  },
  server: {
    port: 3000,
    open: true,
    host: true,
    cors: true,
  },
  preview: {
    port: 4173,
    open: true,
    host: true,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "@heroicons/react/24/outline",
      "framer-motion",
      "clsx",
      "tailwind-merge",
    ],
    // Exclude large dependencies from pre-bundling
    exclude: [
      "react-lazy-load-image-component",
    ],
  },
  // CSS optimization
  css: {
    devSourcemap: true,
    // Enable CSS minification
    postcss: {
      plugins: [
        autoprefixer,
        cssnano({
          preset: 'default',
        }),
      ],
    },
  },
  // Define environment variables
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
    __PROD__: JSON.stringify(process.env.NODE_ENV === 'production'),
  },
});
