<<<<<<< HEAD
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable JSX runtime
      jsxRuntime: "automatic",
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./app"),
      "@/components": resolve(__dirname, "./app/components"),
      "@/utils": resolve(__dirname, "./app/utils"),
      "@/hooks": resolve(__dirname, "./hooks"),
    },
  },
  build: {
    target: "esnext",
    minify: "terser",
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
<<<<<<< HEAD
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          ui: ["framer-motion", "lucide-react"],
=======
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['framer-motion', 'lucide-react'],
          helmet: ['react-helmet-async'],
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0440
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      },
    },
<<<<<<< HEAD
<<<<<<< HEAD
=======
    // Performance optimizations
<<<<<<< HEAD
    chunkSizeWarningLimit: 500,
    assetsInlineLimit: 2048,
=======
    chunkSizeWarningLimit: 100, // Reduced warning threshold for better performance
    assetsInlineLimit: 2048, // Optimized for better caching and faster initial load
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-031e
    // Enable compression
    reportCompressedSize: true,
    // Additional optimizations for production
>>>>>>> origin/cursor/analyze-and-resolve-javascript-errors-6208
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
<<<<<<< HEAD
=======
    // Fix React scheduler issues
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true,
    },
    // Define global variables to fix React scheduler
    define: {
      global: 'globalThis',
    },
    
    
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Scheduler should be in its own chunk
          if (id.includes('scheduler')) {
            return 'scheduler'
          }
          // Core React libraries
          if (id.includes('react') || id.includes('react-dom')) {
            return 'react-vendor'
          }
          // Router
          if (id.includes('react-router')) {
            return 'router'
          }
          // UI libraries
          if (id.includes('framer-motion')) {
            return 'animations'
          }
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
          // Large page components (lazy load)
          if (id.includes('/app/') && id.includes('/page.tsx')) {
            return 'pages'
          }
          // Service pages
          if (id.includes('/ai-') || id.includes('/zion-')) {
            return 'services'
          }
          // Default chunk for other modules
          return 'vendor'
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // Enable tree shaking
    treeshake: true,
>>>>>>> origin/cursor/analyze-and-fix-application-errors-5651
=======
    chunkSizeWarningLimit: 1000,
    target: 'esnext',
    cssCodeSplit: true,
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0440
  },
  server: {
    port: 3000,
    open: true,
    cors: true,
  },
  preview: {
    port: 4173,
    open: true,
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "framer-motion",
      "lucide-react",
      "scheduler",
    ],
    exclude: ["@vite/client", "@vite/env"],
  },
  // Add polyfills for better compatibility
  esbuild: {
    target: 'es2020',
    define: {
      global: 'globalThis',
    },
  },
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
});
=======
            if (id.includes('framer-motion')) {
              return 'vendor-framer';
            }
            if (id.includes('lucide-react') || id.includes('@heroicons')) {
              return 'vendor-icons';
            if (id.includes('react-helmet-async')) {
              return 'vendor-helmet';
            }
            if (id.includes('clsx') || id.includes('tailwind-merge')) {
              return 'vendor-utils';
            }
            return 'vendor-other';
          }
          // App chunks - group by functionality
          if (id.includes('/app/')) {
            if (id.includes('/app/ai-')) {
              return 'app-ai';
            }
            if (id.includes('/app/cloud-') || id.includes('/app/cybersecurity')) {
              return 'app-it';
            }
            if (id.includes('/app/blog')) {
              return 'app-blog';
            }
            return 'app-pages';
          }
          // Components
          if (id.includes('/src/components/')) {
            return 'components';
          }
          // Utils
          if (id.includes('/src/utils/')) {
            return 'utils';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
