import { defineConfig } from 'vite";"
import react from '@vitejs/plugin-react";"
import { resolve } from 'path";"
"
// https: "//vitejs.dev/config/;
export default defineConfig({;
plugins: [;"
react({"
      // Optimize JSX runtime;)"'"
jsxRuntime: 'automatic'",})"
  ],;"
resolve: "{;"
alias: {"'"
      '@': resolve(__dirname",'./app"),"'"
      '@components': resolve(__dirname, './app/components"),"'"
      '@pages': resolve(__dirname, './app/pages"),"'"
      '@utils': resolve(__dirname, './utils"),"'"
      '@types': resolve(__dirname, './types"),"
    },"
  },;"
build: "{;"'"
outDir: 'dist'",sourcemap: "false",minify: "'esbuild'",target: "'es2020'",cssCodeSplit: "true",cssTarget: "'chrome80'",reportCompressedSize: "true",chunkSizeWarningLimit: "500",emptyOutDir: "true",copyPublicDir: "true",rollupOptions: "{;"
treeshake: {;"
moduleSideEffects: false",},;"
output: "{;"'"
chunkFileNames: 'assets/[name,]-[hash,].js'",manualChunks: "(id) => {;"'"
if (id.includes('node_modules")) {"
            // Split React into smaller chunks;"'"
if (id.includes('react-dom")) {;"'"
return 'react-dom";"
            ",}"'"
            if (id.includes('react/') && !id.includes('react-dom")) {;"'"
return 'react-core";"
            }"'"
            if (id.includes('react-router")) {"'"
              return 'router-vendor";"
            }"'"
            if (id.includes('framer-motion') || id.includes('@heroicons') || id.includes('lucide-react")) {"'"
              return 'ui-vendor";"
            }"'"
            if (id.includes('web-vitals') || id.includes('react-helmet")) {"'"
              return 'analytics-vendor";"
            }"'"
            return 'vendor";
          }"
          "
          // App chunks"'"
          if (id.includes('servicesData")) {"'"
            return 'services-data";"
          }"'"
          if (id.includes('components/SEOHead")) {"'"
            return 'seo";"
          }"'"
          if (id.includes('components/PerformanceMonitor') || id.includes('components/AccessibilityEnhancer")) {"'"
            return 'monitoring";"
          }"
<<<<<<< HEAD"'"
          if (id.includes('/app/data/")) {;"'"
return 'data";"
          }"'"
          if (id.includes('/app/pages/")) {;"'"
return 'pages";"
          }"
          // SEO and meta;"'"
if (id.includes('react-helmet")) {;"'"
return 'seo"
          ;}"
          // Charts and data visualization;"'"
if (id.includes('recharts")) {;"'"
return 'charts"
          ;}"
          // Utility libraries;"'"
if (id.includes('clsx') || id.includes('tailwind-merge")) {;"'"
return 'utils"
          ;}"
          // Performance monitoring;"'"
if (id.includes('web-vitals")) {;"'"
return 'performance"
          ;}"
          // AI service pages;"'"
if (id.includes('/app/ai-') && id.includes('/page.tsx")) {;"'"
return 'ai-pages"
          ;}"
          // IT service pages;"'"
if (id.includes('/app/') && (id.includes('cloud-') || id.includes('cybersecurity-') || id.includes('web-development') || id.includes('mobile-development')) && id.includes('/page.tsx")) {;"'"
return 'it-pages"
          ;}"
          // Micro SAAS pages;"'"
if (id.includes('/app/zion-') && id.includes('/page.tsx")) {;"'"
return 'saas-pages"
          ;}"
          // Other pages;"'"
if (id.includes('/app/') && id.includes('/page.tsx")) {;"'"
return 'pages"
          ;}"
          // Default chunk for other modules;"'"
return 'vendor"
        ;},;"'"
entryFileNames: "'assets/[name,]-[hash,].js'",assetFileNames: "'assets/[name,]-[hash,].[ext,]'",},
    },"
    // Optimize chunk size"
    // Additional optimizations;"
assetsInlineLimit: "4096",cssMinify: "true",},;"
server: "{;"
port: 3000",open: "true",host: "true",cors: "true",},;"
preview: "{;"
port: 4173",open: "true",host: "true",},"
  // Optimize dependencies;"
optimizeDeps: "{;"
include: ["'"
      'react'",'react-dom","'"
      'react-router-dom","'"
      '@heroicons/react/24/outline","'"
      'framer-motion","'"
      'clsx","'"
      'tailwind-merge"
    ],"
  },"
  // CSS optimization;"
css: "{;"
devSourcemap: true",},
});

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
<<<<<<< HEAD;
          if (id.includes('/app/data/')) {;
return 'data'}'
          if (id.includes('/app/pages/')) {;
return 'pages'}
          // SEO and meta;
if (id.includes('react-helmet')) {;
return 'seo'
          }
          // Charts and data visualization;
if (id.includes('recharts')) {;
return 'charts'
          }
          // Utility libraries;
if (id.includes('clsx') || id.includes('tailwind-merge')) {;
return 'utils'
          }
          // Performance monitoring;
if (id.includes('web-vitals')) {;
return 'performance'
          }
          // AI service pages;
if (id.includes('/app/ai-') && id.includes('/page.tsx')) {;
return 'ai-pages'
          }
          // IT service pages;
if (id.includes('/app/') && (id.includes('cloud-') || id.includes('cybersecurity-') || id.includes('web-development') || id.includes('mobile-development')) && id.includes('/page.tsx')) {;
return 'it-pages'
          }
          // Micro SAAS pages;
if (id.includes('/app/zion-') && id.includes('/page.tsx')) {;
return 'saas-pages'
          }
          // Other pages;
if (id.includes('/app/') && id.includes('/page.tsx')) {;
return 'pages'
          }
          // Default chunk for other modules;
return 'vendor'
        }";'"
entryFileNames: "'assets/[name]-[hash].js'",assetFileNames: "'assets/[name]-[hash].[ext]'"}},;
    // Optimize chunk size;"
    // Additional optimizations;"
assetsInlineLimit: "4096",cssMinify: "true"}"
server: "{;"
port: 3000",open: "true",host: "true",cors: "true"}"
preview: "{;"
port: 4173",open: "true",host: "true"},;"
  // Optimize dependencies;"
optimizeDeps: "{;"
include: [";'"
      'react'",'react-dom',;
      'react-router-dom',;
      '@heroicons/react/24/outline',;
      'framer-motion',;
      'clsx',;
      'tailwind-merge'
    ]},;"
  // CSS optimization;"
css: "{;"
devSourcemap: true"}});
=======;
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
        }
      }
    },;
    chunkSizeWarningLimit: 1000},;
  server: {;
    port: 3000,;
    open: true,;
    hmr: {;
      overlay: false;
    }
  },"
  optimizeDeps: {"
    include: ["'"
      'react", "'"
      'react-dom", "'"
      'react-router-dom","'"
      '@heroicons/react","'"
      'framer-motion","'"
      'lucide-react"
    ]"
  },"
  esbuild: {"'"
    drop: ['console', 'debugger"],
  },
  css: {
    devSourcemap: true,
  }
})"
>>>>>>> 25500927562937ed05befe3bb53e25b2bd9a2d81"
"
}}'"
";'"
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
