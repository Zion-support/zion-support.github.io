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
  root: ".",
  publicDir: "public",
  resolve: {
    alias: {
      "@": resolve(__dirname, "./app"),
    },
  },
  build: {
    target: "esnext",
    minify: "terser",
    sourcemap: mode !== "production",
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
<<<<<<< HEAD
=======
    assetsInlineLimit: 4096,
    // Enable compression
    reportCompressedSize: true,
    // Additional optimizations
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ed4
    rollupOptions: {
      output: {
        manualChunks: (id) => {
<<<<<<< HEAD
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
=======
          // Core React libraries - split further
          if (id.includes('react/') && !id.includes('react-dom')) {
            return 'react-core'
          }
          if (id.includes('react-dom')) {
            return 'react-dom'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f9e
          }
          if (id.includes("/app/") && id.includes("/page.tsx")) {
            return "pages";
          }
          if (id.includes("/components/")) {
            return "components";
          }
<<<<<<< HEAD
=======
          if (id.includes('lucide-react')) {
            return 'icons'
          }
          // SEO and meta
          if (id.includes('react-helmet')) {
            return 'seo'
          }
          // Charts and data visualization
          if (id.includes('recharts')) {
            return 'charts'
          }
          // Utility libraries
          if (id.includes('clsx') || id.includes('tailwind-merge')) {
            return 'utils'
          }
          // Performance monitoring
          if (id.includes('web-vitals')) {
            return 'performance'
          }
          // Error handling
          if (id.includes('react-error-boundary')) {
            return 'error-handling'
          }
          // Split large vendor libraries
          if (id.includes('node_modules')) {
            if (id.includes('@types/') || id.includes('typescript')) {
              return 'types'
            }
            if (id.includes('eslint') || id.includes('prettier')) {
              return 'dev-tools'
            }
            if (id.includes('jest') || id.includes('testing')) {
              return 'testing'
            }
            return 'vendor'
          }
          // AI service pages - split into smaller chunks
          if (id.includes('/ai-') && id.includes('/page.tsx')) {
            const serviceName = id.split('/ai-')[1]?.split('/')[0];
            return `ai-${serviceName || 'services'}`
          }
          // Zion service pages
          if (id.includes('/zion-') && id.includes('/page.tsx')) {
            const serviceName = id.split('/zion-')[1]?.split('/')[0];
            return `zion-${serviceName || 'services'}`
          }
          // 5G service pages
          if (id.includes('/5g-') && id.includes('/page.tsx')) {
            const serviceName = id.split('/5g-')[1]?.split('/')[0];
            return `5g-${serviceName || 'services'}`
          }
          // Other service pages
          if (id.includes('/app/') && id.includes('/page.tsx') && 
              !id.includes('/ai-') && !id.includes('/zion-') && !id.includes('/5g-')) {
            return 'pages'
          }
          // Default chunk for other modules
          return 'vendor'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f9e
        },
        assetFileNames: "assets/[name]-[hash].[ext]",
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
  },
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
  css: {
    devSourcemap: mode !== "production",
  },
  envPrefix: "VITE_",
  logLevel: mode === "production" ? "warn" : "info",
}));
