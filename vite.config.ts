import { defineConfig } from &apos;vite&apos;;
import react from &apos;@vitejs/plugin-react&apos;;
import path from &apos;path&apos;;

const resolve = path.resolve;

export default defineConfig({
  plugins: [
    react({
      // Enable React Fast Refresh
      include: "**/*.{jsx,tsx}",
    }),
  ],
  resolve: {
    alias: {
      &apos;@&apos;: resolve(__dirname, &apos;./src&apos;),
      &apos;@app&apos;: resolve(__dirname, &apos;./app&apos;),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "esbuild",
    cssCodeSplit: true,
    modulePreload: {
      polyfill: false,
    },
    // Performance optimizations
    chunkSizeWarningLimit: 100, // Reduced threshold for better chunking
    assetsInlineLimit: 4096, // Optimized for better caching and faster initial load
    // Enable compression
    reportCompressedSize: true,
    // Optimize for production
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: [&apos;console.log&apos;, &apos;console.info&apos;, &apos;console.debug&apos;, &apos;console.warn&apos],
        passes: 3, // More passes for better optimization
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
        safari10: true, // Better Safari compatibility
        toplevel: true,
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
    rollupOptions: {output: {
        manualChunks: (id: string) => {
          // Split vendor chunks for better caching
          if (id.includes(&apos;node_modules&apos;)) {
            // React ecosystem
            if (id.includes(&apos;react&apos;) || id.includes(&apos;react-dom&apos;) || id.includes(&apos;react-router&apos;)) {
              return &apos;react-vendor&apos;}
            // UI libraries
            if (id.includes(&apos;lucide-react&apos;) || id.includes(&apos;framer-motion&apos;)) {return &apos;ui-vendor&apos;}
            // Other vendor libraries
            return &apos;vendor&apos;;
          }
          // App chunks
          if (id.includes(&apos;/app/&apos;)) {return &apos;app&apos;}
          return undefined;
        },
        assetFileNames: (assetInfo) => {if (
            assetInfo.name &&
            /\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)
          ) {
            return `assets/images/[name]-[hash][extname]`}
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
  },
  server: {
    port: 3000,
    open: false,
    cors: true,
    hmr: {
      overlay: true,
    },
  },
  optimizeDeps: {
    include: [&apos;react&apos;, &apos;react-dom&apos;, &apos;react-router-dom&apos],
  },
});