import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

  plugins: [
    react({
      jsxRuntime: "automatic",
      fastRefresh: true,
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./app"),
    },
  },
  build: {
    minify: "terser",
    sourcemap: mode !== "production",
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("react-dom")) {
              return "react-vendor";
            }
            if (id.includes("react-router")) {
              return "router-vendor";
            }
            if (id.includes("framer-motion") || id.includes("lucide-react")) {
              return "ui-vendor";
            }
            return "vendor";
          }
          if (id.includes("/app/") && id.includes("/page.tsx")) {
            return "pages";
          }
          if (id.includes("/components/")) {
            return "components";
          }
        },
        assetFileNames: "assets/[name]-[hash].[ext]",
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
  },
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
      "framer-motion",
      "lucide-react",
    ],
  },
