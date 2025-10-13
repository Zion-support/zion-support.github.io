import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
<<<<<<< HEAD
import { visualizer } from "rollup-plugin-visualizer";
=======
export default defineConfig({
  plugins: [
    react({
      // Enable JSX runtime
>>>>>>> origin/main
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
    target: "esnext",
    minify: "terser",
    sourcemap: mode !== "production",
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
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
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          ui: ["framer-motion", "lucide-react"],
    chunkSizeWarningLimit: 500,
    assetsInlineLimit: 2048,
        drop_console: mode === "production",
        drop_debugger: mode === "production",
        // Remove unused code
=======
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./app"),
      "@/components": resolve(__dirname, "./app/components"),
      "@/pages": resolve(__dirname, "./app"),
      "@/utils": resolve(__dirname, "./utils"),
      "@/types": resolve(__dirname, "./types"),
      "@/hooks": resolve(__dirname, "./hooks"),
      "@/config": resolve(__dirname, "./config"),
      "@/data": resolve(__dirname, "./data"),
      "@/content": resolve(__dirname, "./content"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "terser",
    target: "es2020",
    cssCodeSplit: true,
    modulePreload: {
      polyfill: false,
    },
    // Performance optimizations
    chunkSizeWarningLimit: 500, // Increased threshold for better chunking
    assetsInlineLimit: 1024, // Optimized for better caching and faster initial load
    // Enable compression
    reportCompressedSize: true,
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
>>>>>>> origin/main
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
<<<<<<< HEAD
        // Mangle property names
=======
        safari10: true,
        toplevel: false,
>>>>>>> origin/main
        properties: {
          regex: /^_/,
        },
      },
      format: {
<<<<<<< HEAD
        // Remove comments in production
        comments: mode !== "production",
      },
    },
    // Enable CSS minification
    cssMinify: "esbuild",
    // Optimize assets
    assetsInlineLimit: 4096, // 4kb
      },
          // Large page components (lazy load)
          if (id.includes('/app/') && id.includes('/page.tsx')) {
            return 'pages'
          // Service pages
          if (id.includes('/ai-') || id.includes('/zion-')) {
            return 'services'
          // 5G service pages - group together
          // Group 5G service pages
          // Micro SAAS pages
          if (id.includes('/micro-') && id.includes('/page.tsx')) {
=======
        comments: false,
        ascii_only: true
      }
    },
    // Enhanced build optimizations
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core React libraries - keep together for better caching
          if (id.includes('react') || id.includes('react-dom')) {
            return 'react-vendor'
          }
          // Router - separate chunk
          if (id.includes('react-router')) {
            return 'router'
          }
          // UI libraries - group by functionality
          if (id.includes('framer-motion')) {
            return 'animations'
          }
          if (id.includes('lucide-react')) {
            return 'icons'
          }
          // SEO and meta - lightweight
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
          // Performance monitoring - separate for lazy loading
          if (id.includes('web-vitals')) {
            return 'performance'
          }
          // Error handling
          if (id.includes('react-error-boundary')) {
            return 'error-handling'
          }
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
          // 5G service pages - group together
          if (id.includes('/5g-') && id.includes('/page.tsx')) {
            return '5g-services'
          }
          // Micro SAAS pages
          if (id.includes('/micro-') && id.includes('/page.tsx')) {
            return 'micro-saas'
          }
          // Main pages - keep core pages together
          if (id.includes('/app/') && id.includes('/page.tsx') && 
              !id.includes('/ai-') && !id.includes('/zion-') && !id.includes('/5g-') && !id.includes('/micro-')) {
            return 'main-pages'
          }
>>>>>>> origin/main
          // Large vendor libraries
          if (id.includes('node_modules')) {
            // Group large libraries separately
            if (id.includes('axios') || id.includes('lodash')) {
              return 'http-utils'
<<<<<<< HEAD
            return 'vendor'
=======
            }
            if (id.includes('date-fns') || id.includes('moment')) {
              return 'date-utils'
            }
            return 'vendor'
          }
          // Default chunk for other modules
          return 'vendor'
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
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
  optimizeDeps: {
>>>>>>> origin/main
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "react-helmet-async",
      "framer-motion",
      "lucide-react",
<<<<<<< HEAD
      "recharts",
      "clsx",
      "tailwind-merge",
    ],
    // Exclude large dependencies from pre-bundling
    exclude: ["@prisma/client"],
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  },
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
    ],
  },
  // CSS optimization
  css: {
    devSourcemap: true,
  },
>>>>>>> origin/main
});
