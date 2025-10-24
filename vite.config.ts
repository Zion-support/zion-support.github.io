            }"'"
            if (id.includes('react-router")) {"'"
              return 'router-vendor"
            }"'"
            if (id.includes('framer-motion') || id.includes('@heroicons') || id.includes('lucide-react")) {"'"
              return 'ui-vendor"
            }"'"
            if (id.includes('web-vitals') || id.includes('react-helmet")) {"'"
              return 'analytics-vendor"
            }"'"
            return 'vendor"
          }
          "
          // App chunks"'"
          if (id.includes('servicesData")) {"'"
            return 'services-data"
          }"'"
          if (id.includes('components/SEOHead")) {"'"
            return 'seo"
          }"'"
          if (id.includes('components/PerformanceMonitor') || id.includes('components/AccessibilityEnhancer")) {"'"
            return 'monitoring"
          }
            }'
            if (id.includes('react-router')) {
              return 'router-vendor'}'
            if (id.includes('framer-motion') || id.includes('@heroicons') || id.includes('lucide-react')) {
              return 'ui-vendor'}'
            if (id.includes('web-vitals') || id.includes('react-helmet')) {
              return 'analytics-vendor'}'
            return 'vendor'}
          // App chunks
          if (id.includes('servicesData')) {
            return 'services-data'}'
          if (id.includes('components/SEOHead')) {
            return 'seo'}'
          if (id.includes('components/PerformanceMonitor') || id.includes('components/AccessibilityEnhancer')) {
            return 'monitoring'}
        }
      }
    },
    chunkSizeWarningLimit: 1000},
  server: {
    port: 3000,
    open: true,
    hmr: {
      overlay: false
    }
";'"
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70