import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
<<<<<<< HEAD
import { resolve } from "path";
=======
import path from "path";
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Optimize JSX runtime
      jsxRuntime: "automatic",
    }),
  ],
  resolve: {
    alias: {
<<<<<<< HEAD
      "@": resolve(__dirname, "./app"),
      "@components": resolve(__dirname, "./app/components"),
      "@pages": resolve(__dirname, "./app/pages"),
      "@utils": resolve(__dirname, "./utils"),
      "@types": resolve(__dirname, "./types"),
=======
      "@": path.resolve(__dirname, "./app"),
      "@components": path.resolve(__dirname, "./app/components"),
      "@pages": path.resolve(__dirname, "./app/pages"),
      "@utils": path.resolve(__dirname, "./utils"),
      "@types": path.resolve(__dirname, "./types"),
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "esbuild",
    target: "es2020",
    cssCodeSplit: true,
    cssTarget: "chrome80",
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500,
    emptyOutDir: true,
    copyPublicDir: true,
    rollupOptions: {
      treeshake: {
        moduleSideEffects: false,
      },
      output: {
        chunkFileNames: "assets/[name]-[hash].js",
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
<<<<<<< HEAD
            // Split React into smaller chunks
            if (id.includes("react-dom")) {
              return "react-dom";
            }
            if (id.includes("react/") && !id.includes("react-dom")) {
              return "react-core";
            }
            if (id.includes("react-router")) {
              return "router";
            }
            if (id.includes("@heroicons") || id.includes("lucide-react")) {
              return "icons";
            }
            if (id.includes("framer-motion")) {
              return "motion";
            }
            if (id.includes("clsx") || id.includes("tailwind-merge")) {
              return "utils";
            }
            if (id.includes("web-vitals")) {
              return "analytics";
            }
            if (id.includes("react-helmet-async")) {
              return "seo";
            }
            if (id.includes("recharts")) {
              return "charts";
            }
            if (id.includes("axios")) {
              return "http";
            }
=======
            if (id.includes("react") || id.includes("react-dom")) {
              return "react";
            }
            if (id.includes("react-router")) {
              return "router";
            }
            if (id.includes("@heroicons") || id.includes("lucide-react")) {
              return "icons";
            }
            if (id.includes("framer-motion")) {
              return "motion";
            }
            if (id.includes("clsx") || id.includes("tailwind-merge")) {
              return "utils";
            }
            if (id.includes("web-vitals")) {
              return "analytics";
            }
            if (id.includes("react-helmet-async")) {
              return "seo";
            }
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
            return "vendor";
          }
          // Split app code by feature
          if (id.includes("/app/components/")) {
            return "components";
          }
          if (id.includes("/app/hooks/")) {
            return "hooks";
          }
          if (id.includes("/app/utils/")) {
            return "utils";
          }
          if (id.includes("/app/data/")) {
            return "data";
          }
          if (id.includes("/app/pages/")) {
            return "pages";
          }
          // SEO and meta
          if (id.includes("react-helmet")) {
            return "seo";
          }
          // Charts and data visualization
          if (id.includes("recharts")) {
            return "charts";
          }
          // Utility libraries
          if (id.includes("clsx") || id.includes("tailwind-merge")) {
            return "utils";
          }
          // Performance monitoring
          if (id.includes("web-vitals")) {
            return "performance";
          }
          // AI service pages
          if (id.includes("/app/ai-") && id.includes("/page.tsx")) {
            return "ai-pages";
          }
          // IT service pages
          if (
            id.includes("/app/") &&
            (id.includes("cloud-") ||
              id.includes("cybersecurity-") ||
              id.includes("web-development") ||
              id.includes("mobile-development")) &&
            id.includes("/page.tsx")
          ) {
            return "it-pages";
          }
          // Micro SAAS pages
          if (id.includes("/app/zion-") && id.includes("/page.tsx")) {
            return "saas-pages";
          }
          // Other pages
          if (id.includes("/app/") && id.includes("/page.tsx")) {
            return "pages";
          }
          // Default chunk for other modules
          return "vendor";
        },
<<<<<<< HEAD
=======
        chunkFileNames: "assets/[name]-[hash].js",
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
      },
    },
    // Optimize chunk size
    // Additional optimizations
    assetsInlineLimit: 4096,
    cssMinify: true,
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
  },
  // CSS optimization
  css: {
    devSourcemap: true,
  },
});
