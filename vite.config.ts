<<<<<<< HEAD
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
=======
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
>>>>>>> cursor/fix-errors-and-merge-to-main-c832

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
<<<<<<< HEAD
      "@/utils": resolve(__dirname, "./app/utils"),
=======
      "@/pages": resolve(__dirname, "./app"),
      "@/utils": resolve(__dirname, "./app/utils"),
      "@/types": resolve(__dirname, "./types"),
>>>>>>> cursor/fix-errors-and-merge-to-main-c832
      "@/hooks": resolve(__dirname, "./hooks"),
    },
  },
  build: {
    target: "esnext",
    minify: "terser",
    cssCodeSplit: true,
    modulePreload: {
      polyfill: false,
    },
    // Performance optimizations
    chunkSizeWarningLimit: 500, // Increased threshold for better chunking
    assetsInlineLimit: 1024, // Optimized for better caching and faster initial load
    // Enable compression
    reportCompressedSize: true,
    sourcemap: true,
    // Better compression settings
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        passes: 2,
        unsafe: false,
        unsafe_comps: false,
        unsafe_math: false,
        unsafe_proto: false,
        unsafe_regexp: false,
        unsafe_undefined: false,
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
        safari10: true,
        toplevel: false,
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
    rollupOptions: {
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false,
      },
      output: {
        manualChunks: (id) => {
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
          // AI service pages
          if (id.includes('/app/ai-') && id.includes('/page.tsx')) {
            return 'ai-pages'
          }
<<<<<<< HEAD
          // IT service pages
          if (id.includes('/app/') && (id.includes('cloud-') || id.includes('cybersecurity-') || id.includes('web-development') || id.includes('mobile-development')) && id.includes('/page.tsx')) {
            return 'it-pages'
          }
          // Micro SAAS pages
          if (id.includes('/app/zion-') && id.includes('/page.tsx')) {
            return 'micro-saas-pages'
          }
          // 5G Solutions pages
          if (id.includes('/app/5g-') && id.includes('/page.tsx')) {
            return '5g-pages'
=======
          // AI service pages - more granular splitting
          if (id.includes('/ai-') && id.includes('/page.tsx')) {
            const serviceName = id.split('/ai-')[1]?.split('/')[0];
            if (serviceName?.includes('analytics') || serviceName?.includes('data')) {
              return 'ai-analytics'
            }
            if (serviceName?.includes('content') || serviceName?.includes('generation')) {
              return 'ai-content'
            }
            if (serviceName?.includes('cyber') || serviceName?.includes('security')) {
              return 'ai-security'
            }
            if (serviceName?.includes('customer') || serviceName?.includes('support')) {
              return 'ai-customer'
            }
            return 'ai-other'
          }
          // 5G service pages - group together
          if (id.includes('/5g-') && id.includes('/page.tsx')) {
            return '5g-services'
          }
          // Main pages - keep core pages together
          if (id.includes('/app/') && id.includes('/page.tsx') && 
              !id.includes('/ai-') && !id.includes('/5g-')) {
            return 'main-pages'
>>>>>>> cursor/fix-errors-and-merge-to-main-69e1
          }
          // Default chunk for other pages
          if (id.includes('/app/') && id.includes('/page.tsx')) {
            return 'pages'
          }
<<<<<<< HEAD
          // Default chunk for other modules
          return 'vendor'
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
<<<<<<< HEAD
<<<<<<< HEAD
    // Enable tree shaking
    treeshake: true,
=======
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          ui: ["framer-motion", "lucide-react"],
        },
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
>>>>>>> cursor/fix-errors-and-merge-to-main-48ac
=======
        }
      }
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-c832
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-4aee
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-69e1
  },
  server: {
    port: 3000,
    open: true,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-4aee
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-69e1
    host: true,
    // Enable HMR
    hmr: {
      overlay: true,
    },
<<<<<<< HEAD
    cors: true,
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-48ac
=======
    cors: true,
>>>>>>> cursor/fix-errors-and-merge-to-main-c832
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-4aee
=======
    cors: true,
>>>>>>> cursor/fix-errors-and-merge-to-main-69e1
  },
  preview: {
    port: 4173,
    open: true,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    host: true,
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-48ac
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-c832
=======
    host: true,
>>>>>>> cursor/fix-errors-and-merge-to-main-4aee
=======
    host: true,
>>>>>>> cursor/fix-errors-and-merge-to-main-69e1
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
  // CSS optimization
  css: {
    devSourcemap: true,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
  },
>>>>>>> cursor/fix-errors-and-merge-to-main-4aee
=======
  },
>>>>>>> cursor/fix-errors-and-merge-to-main-69e1
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
});
=======
  },
});
>>>>>>> cursor/fix-errors-and-merge-to-main-c832
