import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig(({ mode }) => ({
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
<<<<<<< HEAD
    target: "esnext",
=======
    outDir: "dist",
    sourcemap: false,
>>>>>>> cursor/fix-errors-and-merge-to-main-1a0a
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
<<<<<<< HEAD
=======
  server: {
    port: 3000,
    open: true,
    host: true,
    // Enable HMR
    hmr: {
      overlay: true,
    },
  },
  preview: {
    port: 4173,
    open: true,
    host: true,
  },
  // Optimize dependencies
>>>>>>> cursor/fix-errors-and-merge-to-main-1a0a
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "framer-motion",
      "lucide-react",
    ],
  },
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  },
<<<<<<< HEAD
  css: {
    devSourcemap: mode !== "production",
  },
  envPrefix: "VITE_",
  logLevel: mode === "production" ? "warn" : "info",
}));
=======
});
>>>>>>> cursor/fix-errors-and-merge-to-main-1a0a
