import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { visualizer } from "rollup-plugin-visualizer";
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
          // Large vendor libraries
          if (id.includes('node_modules')) {
            // Group large libraries separately
            if (id.includes('axios') || id.includes('lodash')) {
              return 'http-utils'
            return 'vendor'
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "react-helmet-async",
      "framer-motion",
      "lucide-react",
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
});
