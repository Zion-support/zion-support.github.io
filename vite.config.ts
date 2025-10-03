import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { visualizer } from 'rollup-plugin-visualizer'

// Optimized Vite configuration for better performance and smaller bundle size
export default defineConfig({/* content */}
  plugins: [
    react({/* content */}
      jsxRuntime: 'automatic'
    }),
    visualizer({/* content */}
      filename: 'dist/stats.html',
      open: false,
      gzipSize: true,
    }),
  ],
  root: '.',
  publicDir: 'public',
  resolve: {/* content */}
    alias: {/* content */}
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'components'),
      '@app': resolve(__dirname, 'app'),
    },
  },
  build: {/* content */}
    sourcemap: false,
    minify: 'terser',
    cssMinify: true,
    target: 'es2020',
    reportCompressedSize: false,
    rollupOptions: {/* content */}
      treeshake: {/* content */}
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false,
        preset: 'smallest'
      },
      output: {/* content */}
        manualChunks: (id) => {/* content */}
          // Vendor chunks - more granular splitting
          if (id.includes('node_modules')) {/* content */}
            // React core
            if (id.includes('react') || id.includes('react-dom')) {/* content */}
              return 'vendor-react';
            }
            // Router
            if (id.includes('react-router')) {/* content */}
              return 'vendor-router';
            }
            // UI libraries
            if (id.includes('framer-motion')) {/* content */}
              return 'vendor-animations';
            }
            if (id.includes('lucide-react')) {/* content */}
              return 'vendor-icons';
            }
            // Utility libraries
            if (id.includes('clsx') || id.includes('tailwind-merge')) {/* content */}
              return 'vendor-styling';
            }
            if (id.includes('axios')) {/* content */}
              return 'vendor-http';
            }
            // SEO and analytics
            if (id.includes('react-helmet') || id.includes('web-vitals')) {/* content */}
              return 'vendor-seo';
            }
            return 'vendor-misc';
          }
          // App chunks - lazy load pages
          if (id.includes('src/pages/')) {/* content */}
            // Split large page bundles
            if (id.includes('services/')) {/* content */}
              return 'pages-services';
            }
            if (id.includes('case-studies/')) {/* content */}
              return 'pages-case-studies';
            }
            if (id.includes('blog/')) {/* content */}
              return 'pages-blog';
            }
            return 'pages-core';
          }
          // Component chunks
          if (id.includes('src/components/')) {/* content */}
            if (id.includes('banner') || id.includes('Banner')) {/* content */}
              return 'components-banners';
            }
            return 'components-core';
          }
          // Charts and data visualization
          if (id.includes('recharts') || id.includes('d3')) {/* content */}
            return 'vendor-charts';
          }
          // Large libraries
          if (id.includes('lodash') || id.includes('moment')) {/* content */}
            return 'vendor-large';
          }
          return 'vendor';
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/main-[hash].js',
        assetFileNames: (assetInfo) => {/* content */}
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/\.(css)$/.test(assetInfo.name)) {/* content */}
            return `assets/css/[name]-[hash].${ext}`;
          }
          return `assets/[name]-[hash].${ext}`;
        }
      },
    },
    chunkSizeWarningLimit: 1000,
    terserOptions: {/* content */}
      compress: {/* content */}
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 2,
        unsafe: false,
        dead_code: true,
        unused: true,
      },
      mangle: {/* content */}
        safari10: true,
        toplevel: true,
      },
      format: {/* content */}
        comments: false,
        ascii_only: true,
      },
    },
  },
  server: {/* content */}
    port: 3000,
    open: true,
    cors: true,
    host: true,
  },
  preview: {/* content */}
    port: 3000,
    open: true,
    cors: true,
    host: true,
  },
  optimizeDeps: {/* content */}
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'lucide-react',
      'clsx',
      'tailwind-merge',
      'axios',
    ],
    exclude: ['@vite/client', '@vite/env'],
  },
  assetsInclude: ['**/*.html', '**/*.new'],
  define: {/* content */}
    global: 'globalThis',
  },
  esbuild: {/* content */}
    target: 'es2020',
    format: 'esm',
    treeShaking: true,
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
  },
})