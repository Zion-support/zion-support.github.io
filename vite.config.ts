import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react
import { defineConfig  } from "vite";
import { react  } from "@vitejs/plugin-react";
import { resolve  } from "path";
//https: "//vitejs.dev/config/export default defineConfig({
plugins: [react({
      //Optimize JSX runtime)
jsxRuntime: "automatic""})
  ]
resolve: "{
alias: {
      "@": resolve(__dirname","./app")

      "@components": resolve(__dirname, "./app/components")

      "@pages": resolve(__dirname, "./app/pages")

      "@utils": resolve(__dirname, "./utils")

      "@types": resolve(__dirname, "./types")

    }

  }
build: "{
outDir: "dist"",sourcemap: "false",minify: ""esbuild"",target: ""es2020"",cssCodeSplit: "true",cssTarget: ""chrome80"",reportCompressedSize: "true",chunkSizeWarningLimit: "500",emptyOutDir: "true",copyPublicDir: "true",rollupOptions: "{
treeshake: {
moduleSideEffects: false"}
output: "{
chunkFileNames: "assets/[name,]-[hash,].js"",manualChunks: "(id) => {
if (id.includes("node_modules")) {
            //Split React into smaller chunks
if (id.includes("react-dom")) {
return "react-dom
            "}
            if (id.includes("react/") && !id.includes("react-dom")) {
return "react-core
import { react  } from "@vitejs/plugin-react";
//https://vitejs.dev/config/export default defineConfig({
  plugins: [react()]
  build: {
    outDir: dist,
    sourcemap: true,
    minify: terser,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes(node_modules)) {
            if (id.includes(react) || id.includes(react-dom)) {
              return react-vendor";
            }"'
            if (id.includes('react-router")) {"'
              return 'router-vendor";
            }"'
            if (id.includes('framer-motion') || id.includes('@heroicons') || id.includes('lucide-react")) {"'
              return 'ui-vendor";
            }"'
            if (id.includes('web-vitals') || id.includes('react-helmet")) {"'
              return 'analytics-vendor";
            }"'
            return 'vendor";
          }

          // App chunks"'
          if (id.includes('servicesData")) {"'
            return 'services-data";
          }"'
          if (id.includes('components/SEOHead")) {"'
            return 'seo";
          }"'
          if (id.includes('components/PerformanceMonitor') || id.includes('components/AccessibilityEnhancer")) {"'
            return 'monitoring";
          }
    outDir: "dist
    sourcemap: true
    minify: "terser
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          //Vendor chunks
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("react-dom")) {
              return "react-vendor
            }
            if (id.includes("react-router")) {
              return "router-vendor
            }
            if (id.includes("framer-motion") || id.includes("@heroicons") || id.includes("lucide-react")) {
              return "ui-vendor
            }
            if (id.includes("web-vitals") || id.includes("react-helmet")) {
              return "analytics-vendor
            }
            return "vendor
          }

          //App chunks
          if (id.includes("servicesData")) {
            return "services-data
          }
          if (id.includes("components/SEOHead")) {
            return "seo
          }
          if (id.includes("components/PerformanceMonitor") || id.includes("components/AccessibilityEnhancer")) {
            return "monitoring
          }
import { defineConfig } from from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from from 'path'
;
// https: "//vitejs.dev/config/;
export default defineConfig({;
plugins: [;
react({);
      // Optimize JSX runtime)";'
jsxRuntime: 'automatic'"});
  ],;
resolve: "{;
alias: {";'
      '@': resolve(__dirname",'./app'),;
      '@components': resolve(__dirname, './app/components'),;
      '@pages': resolve(__dirname, './app/pages'),;
      '@utils': resolve(__dirname, './utils'),;'
      '@types': resolve(__dirname, './types')}}
build: "{;;'
outDir: 'dist'",sourcemap: "false",minify: "'esbuild'",target: "'es2020'",cssCodeSplit: "true",cssTarget: "'chrome80'",reportCompressedSize: "true",chunkSizeWarningLimit: "500",emptyOutDir: "true",copyPublicDir: "true",rollupOptions: "{;
treeshake: {;
moduleSideEffects: false"}
output: "{;;'
chunkFileNames: 'assets/[name]-[hash].js'",manualChunks: "(id) => {;
if (id.includes('node_modules')) {;
            // Split React into smaller chunks;'
if (id.includes('react-dom')) {;;'
return 'react-dom'"}'
            if (id.includes('react/') && !id.includes('react-dom')) {;
return 'react-core'
import { defineConfig    } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/;
export default defineConfig({);
  plugins: [react()],;
  build: {;
    outDir: 'dist',;
    sourcemap: true,;
    minify: 'terser',;
    rollupOptions: {;
      output: {;
        manualChunks: (id) => {;
          // Vendor chunks;
          if (id.includes('node_modules')) {;
            if (id.includes('react') || id.includes('react-dom')) {;
              return 'react-vendor'
            }'
            if (id.includes('react-router')) {;
              return 'router-vendor'}'
            if (id.includes('framer-motion') || id.includes('@heroicons') || id.includes('lucide-react')) {;
              return 'ui-vendor'}'
            if (id.includes('web-vitals') || id.includes('react-helmet')) {;
              return 'analytics-vendor'}'
            return 'vendor'}
          // App chunks;
          if (id.includes('servicesData')) {;
            return 'services-data'}'
          if (id.includes('components/SEOHead')) {;
            return 'seo'}'
          if (id.includes('components/PerformanceMonitor') || id.includes('components/AccessibilityEnhancer')) {;
            return 'monitoring'}
        }
      }
    }

    chunkSizeWarningLimit: 1000
  }

  server: {
    port: 3000
    open: true
    hmr: {
      overlay: false
    }
  }

  optimizeDeps: {
    include: ["react
      "react-dom
      "react-router-dom
      "@heroicons/react
      "framer-motion
      "lucide-react
    ]
  }

  esbuild: {
    drop: ["console", "debugger"]
  }

  css: {
    devSourcemap: true
  }
})

}}'
  },;
  optimizeDeps: {;
    include: [;
      'react',;
      'react-dom',;
      'react-router-dom',;
      '@heroicons/react',;
      'framer-motion',;
      'lucide-react'
    ];
  },;
  esbuild: {;
    drop: ['console', 'debugger']},;
  css: {;
    devSourcemap: true}
});;'