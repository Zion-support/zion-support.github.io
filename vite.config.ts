<<<<<<< HEAD
<<<<<<< HEAD
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
<<<<<<< HEAD
import { visualizer } from "rollup-plugin-visualizer";
=======
=======
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0caa
>>>>>>> 087b9b5bb73300eddd182f26a6fee488e6ebab96

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react({
      // Enable JSX runtime
<<<<<<< HEAD
      jsxRuntime: "automatic",
      // Enable fast refresh
      fastRefresh: true,
      // Enable babel plugins for better optimization
      babel: {
        plugins: [
          // Add babel plugins for better tree shaking
          ["@babel/plugin-proposal-decorators", { legacy: true }],
        ],
      },
    }),
<<<<<<< HEAD
    // Add bundle analyzer in analyze mode
    mode === "analyze" && visualizer({
      filename: "dist/stats.html",
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ].filter(Boolean),
=======
  ],
=======
      jsxRuntime: 'automatic',
    }),
    // Bundle analyzer
    process.env.ANALYZE && visualizer({
      filename: 'dist/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    })
  ].filter(Boolean),
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0caa
>>>>>>> 087b9b5bb73300eddd182f26a6fee488e6ebab96
  resolve: {
    alias: {
      "@": resolve(__dirname, "./app"),
      "@/components": resolve(__dirname, "./app/components"),
      "@/utils": resolve(__dirname, "./app/utils"),
      "@/hooks": resolve(__dirname, "./hooks"),
    },
  },
  build: {
<<<<<<< HEAD
    target: "esnext",
    minify: "terser",
    sourcemap: mode !== "production",
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
<<<<<<< HEAD
        // Better chunk splitting strategy
        manualChunks: (id) => {
          // Vendor chunks
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
            if (id.includes("recharts")) {
              return "charts-vendor";
            }
            // Large libraries get their own chunk
            if (id.includes("lodash") || id.includes("moment")) {
              return "utils-vendor";
            }
            // Everything else goes to vendor
            return "vendor";
          }
          // Page-specific chunks
          if (id.includes("/pages/") || id.includes("/app/pages/")) {
            return "pages";
          }
          // Component chunks
          if (id.includes("/components/")) {
            return "components";
          }
        },
        // Optimize asset file names
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split(".");
          const ext = info[info.length - 1];
          if (/\.(css)$/.test(assetInfo.name)) {
            return `assets/css/[name]-[hash].${ext}`;
          }
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
            return `assets/images/[name]-[hash].${ext}`;
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)) {
            return `assets/fonts/[name]-[hash].${ext}`;
          }
          return `assets/[name]-[hash].${ext}`;
        },
        // Optimize chunk file names
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
      // Enable rollup tree shaking
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false,
=======
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
>>>>>>> 087b9b5bb73300eddd182f26a6fee488e6ebab96
      },
    },
<<<<<<< HEAD
<<<<<<< HEAD
=======
    // Performance optimizations
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    chunkSizeWarningLimit: 500,
    assetsInlineLimit: 2048,
=======
    chunkSizeWarningLimit: 100, // Reduced warning threshold for better performance
    assetsInlineLimit: 2048, // Optimized for better caching and faster initial load
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-031e
=======
    chunkSizeWarningLimit: 150, // Optimized threshold for better chunking
    assetsInlineLimit: 2048, // Optimized for better caching and faster initial load
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0544
=======
    chunkSizeWarningLimit: 150, // Optimized warning threshold for better performance
    assetsInlineLimit: 2048, // Optimized for better caching and faster initial load
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-09ab
=======
    chunkSizeWarningLimit: 100, // Reduced warning threshold for better performance
    assetsInlineLimit: 2048, // Optimized for better caching and faster initial load
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0c2e
    // Enable compression
=======
    chunkSizeWarningLimit: 150,
    assetsInlineLimit: 2048,
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0680
    reportCompressedSize: true,
    // Additional optimizations for production
>>>>>>> origin/cursor/analyze-and-resolve-javascript-errors-6208
    terserOptions: {
      compress: {
<<<<<<< HEAD
        drop_console: mode === "production",
        drop_debugger: mode === "production",
        // Remove unused code
        unused: true,
        // Remove dead code
        dead_code: true,
        // Optimize conditionals
        conditionals: true,
        // Optimize comparisons
        comparisons: true,
        // Optimize booleans
        booleans: true,
        // Optimize loops
        loops: true,
        // Optimize if statements
        if_return: true,
        // Optimize sequences
        sequences: true,
        // Optimize properties
        properties: true,
        // Optimize evaluate
        evaluate: true,
        // Optimize typeof
        typeofs: true,
        // Optimize side effects
        side_effects: false,
      },
      mangle: {
        // Mangle property names
        properties: {
          regex: /^_/,
        },
      },
      format: {
        // Remove comments in production
        comments: mode !== "production",
      },
    },
    // Enable CSS minification
    cssMinify: "esbuild",
    // Optimize assets
    assetsInlineLimit: 4096, // 4kb
=======
        drop_console: true,
        drop_debugger: true,
<<<<<<< HEAD
      },
=======
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        passes: 3,
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
        safari10: true,
        toplevel: true,
        properties: {
          regex: /^_/
        }
      },
      format: {
        comments: false,
        ascii_only: true
      }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0680
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
    
=======
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    target: 'es2020',
    cssCodeSplit: true,
    // Enable compression
    reportCompressedSize: true,
    // Optimize chunk size
    chunkSizeWarningLimit: 500,
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0caa
    
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          // Large page components (lazy load)
          if (id.includes('/app/') && id.includes('/page.tsx')) {
            return 'pages'
=======
          // AI service pages - group by category
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
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08bc
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0c2e
          }
<<<<<<< HEAD
          // Service pages
          if (id.includes('/ai-') || id.includes('/zion-')) {
            return 'services'
=======
          // Zion service pages - group by category
          if (id.includes('/zion-') && id.includes('/page.tsx')) {
            const serviceName = id.split('/zion-')[1]?.split('/')[0];
            if (serviceName?.includes('analytics') || serviceName?.includes('data')) {
              return 'zion-analytics'
            }
            if (serviceName?.includes('ai-')) {
              return 'zion-ai'
            }
            if (serviceName?.includes('security') || serviceName?.includes('shield')) {
              return 'zion-security'
            }
            return 'zion-other'
          }
<<<<<<< HEAD
<<<<<<< HEAD
          // 5G service pages - group together
=======
          // Group AI service pages by category for better caching
          if (id.includes('/ai-') && id.includes('/page.tsx')) {
            if (id.includes('analytics') || id.includes('data')) {
              return 'ai-analytics'
=======
          // AI service pages - group by category
          if (id.includes('/ai-') && id.includes('/page.tsx')) {
            const serviceName = id.split('/ai-')[1]?.split('/')[0];
            if (serviceName && ['analytics', 'automation', 'business-intelligence', 'content-generation'].includes(serviceName)) {
              return 'ai-core'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0792
            }
            if (id.includes('content') || id.includes('generation')) {
              return 'ai-content'
            }
            if (id.includes('cybersecurity') || id.includes('security')) {
              return 'ai-security'
            }
            if (id.includes('crm') || id.includes('customer')) {
              return 'ai-crm'
            }
            return 'ai-services'
          }
          // Group Zion service pages by type
          if (id.includes('/zion-') && id.includes('/page.tsx')) {
            if (id.includes('analytics') || id.includes('data')) {
              return 'zion-analytics'
            }
            if (id.includes('video') || id.includes('content')) {
              return 'zion-content'
            }
            if (id.includes('security') || id.includes('shield')) {
              return 'zion-security'
            }
            return 'zion-services'
          }
<<<<<<< HEAD
          // Group 5G service pages
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0680
=======
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-09ab
          // 5G service pages - group together
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0792
          if (id.includes('/5g-') && id.includes('/page.tsx')) {
            return '5g-services'
          }
<<<<<<< HEAD
          // Micro SAAS pages
          if (id.includes('/micro-') && id.includes('/page.tsx')) {
=======
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-09ab
=======
          // 5G service pages
          if (id.includes('/5g-') && id.includes('/page.tsx')) {
            const serviceName = id.split('/5g-')[1]?.split('/')[0];
            return `5g-${serviceName || 'services'}`
          }
          // Micro SAAS pages
          if (id.includes('/micro-') && id.includes('/page.tsx')) {
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0c2e
            return 'micro-saas'
          }
          // Main pages - keep core pages together
          if (id.includes('/app/') && id.includes('/page.tsx') && 
              !id.includes('/ai-') && !id.includes('/zion-') && !id.includes('/5g-') && !id.includes('/micro-')) {
<<<<<<< HEAD
=======
              (id.includes('about') || id.includes('contact') || id.includes('services') || 
               id.includes('blog') || id.includes('privacy') || id.includes('terms'))) {
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-09ab
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0c2e
            return 'main-pages'
          }
<<<<<<< HEAD
          // Large vendor libraries
          if (id.includes('node_modules')) {
            // Group large libraries separately
            if (id.includes('axios') || id.includes('lodash')) {
              return 'http-utils'
=======
          // Components - group by type for better caching
          if (id.includes('/components/')) {
            if (id.includes('Performance') || id.includes('Analytics')) {
              return 'components-performance'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0680
            }
            if (id.includes('date-fns') || id.includes('moment')) {
              return 'date-utils'
            }
<<<<<<< HEAD
            return 'vendor'
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0544
=======
            if (id.includes('Loading') || id.includes('Error')) {
              return 'components-ui'
            }
            if (id.includes('Futuristic') || id.includes('Responsive')) {
              return 'components-ui-advanced'
            }
            return 'components-common'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0680
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0c2e
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
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-and-fix-application-errors-5651
=======
    chunkSizeWarningLimit: 1000,
    target: 'esnext',
    cssCodeSplit: true,
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0440
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0caa
>>>>>>> 087b9b5bb73300eddd182f26a6fee488e6ebab96
  },
  server: {
    port: 3000,
    open: true,
    cors: true,
    // Enable HMR
    hmr: {
      overlay: true,
    },
  },
  preview: {
    port: 4173,
    open: true,
    // Enable CORS for preview
    cors: true,
  },
  optimizeDeps: {
<<<<<<< HEAD
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "framer-motion",
      "lucide-react",
<<<<<<< HEAD
      "recharts",
      "clsx",
      "tailwind-merge",
    ],
    // Exclude large dependencies from pre-bundling
    exclude: ["@prisma/client"],
=======
      "scheduler",
    ],
    exclude: ["@vite/client", "@vite/env"],
=======
    include: ['react', 'react-dom', 'framer-motion'],
    exclude: ['react-router-dom'],
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08e3
>>>>>>> 087b9b5bb73300eddd182f26a6fee488e6ebab96
  },
  // Add polyfills for better compatibility
  esbuild: {
    target: 'es2020',
    define: {
      global: 'globalThis',
    },
  },
<<<<<<< HEAD
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  },
<<<<<<< HEAD
  // CSS optimization
  css: {
    devSourcemap: mode !== "production",
    // Enable CSS modules if needed
    modules: {
      localsConvention: "camelCase",
    },
  },
  // Environment variables
  envPrefix: "VITE_",
  // Log level
  logLevel: mode === "production" ? "warn" : "info",
}));
=======
<<<<<<< HEAD
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
=======
});
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0544
=======
});
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0680
>>>>>>> 087b9b5bb73300eddd182f26a6fee488e6ebab96
