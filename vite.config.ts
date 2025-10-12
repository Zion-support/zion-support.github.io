import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const isProduction = mode === 'production'
  
  return {
    plugins: [
      react(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@components': path.resolve(__dirname, './src/components'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@utils': path.resolve(__dirname, './src/utils'),
        '@hooks': path.resolve(__dirname, './src/hooks'),
        '@types': path.resolve(__dirname, './src/types'),
        '@styles': path.resolve(__dirname, './src/styles'),
        '@assets': path.resolve(__dirname, './src/assets'),
      },
      dedupe: ['date-fns', 'react', 'react-dom'],
    },
    build: {
      target: 'es2020',
      minify: 'terser',
      sourcemap: false,
      outDir: 'dist',
      cssCodeSplit: true,
      modulePreload: {
        polyfill: true,
      },
      assetsInlineLimit: 4096,
      terserOptions: {
        compress: {
          drop_console: isProduction,
          drop_debugger: isProduction,
          pure_funcs: isProduction ? ['console.log', 'console.info'] : [],
        },
        mangle: {
          safari10: true,
        },
      },
      rollupOptions: {
        input: {
          main: './index.html',
        },
        external: ['fs', 'path', 'stream', 'zlib', 'util', 'crypto', 'os', 'url', 'querystring'],
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'router-vendor': ['react-router-dom'],
            'ui-vendor': ['@radix-ui/react-accordion', '@radix-ui/react-alert-dialog', '@radix-ui/react-aspect-ratio', '@radix-ui/react-avatar', '@radix-ui/react-checkbox', '@radix-ui/react-context-menu', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-label', '@radix-ui/react-popover', '@radix-ui/react-progress', '@radix-ui/react-radio-group', '@radix-ui/react-scroll-area', '@radix-ui/react-select', '@radix-ui/react-separator', '@radix-ui/react-slider', '@radix-ui/react-slot', '@radix-ui/react-switch', '@radix-ui/react-tabs', '@radix-ui/react-toast', '@radix-ui/react-tooltip'],
            'form-vendor': ['react-hook-form', '@hookform/resolvers', 'zod'],
            'utils-vendor': ['clsx', 'class-variance-authority', 'tailwind-merge', 'date-fns'],
            'charts-vendor': ['recharts', 'd3-color', 'd3-format', 'd3-path', 'd3-time-format'],
            'animation-vendor': ['framer-motion'],
            'state-vendor': ['@reduxjs/toolkit', 'react-redux'],
          },
          chunkFileNames: (chunkInfo) => {
            const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/').pop() : 'chunk';
            return `js/${facadeModuleId}-[hash].js`;
          },
          entryFileNames: 'js/[name]-[hash].js',
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name.split('.');
            const ext = info[info.length - 1];
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
              return `images/[name]-[hash][extname]`;
            }
            if (id.includes('react-router')) {
              return 'vendor-router'
            }
            if (id.includes('framer-motion')) {
              return 'vendor-framer';
            }
            if (id.includes('lucide-react') || id.includes('@heroicons')) {
              return 'vendor-icons';
            }
            if (id.includes('recharts')) {
              return 'vendor-charts'
            }
            if (id.includes('web-vitals')) {
              return 'vendor-analytics'
            }
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
          }
          return 'app'
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name?.split('.').pop()
          if (/\.(css)$/i.test(assetInfo.name || '')) {
            return `assets/css/[name]-[hash].${ext}`
          }
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name || '')) {
            return `assets/images/[name]-[hash].${ext}`
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name || '')) {
            return `assets/fonts/[name]-[hash].${ext}`
          }
          return `assets/[name]-[hash].${ext}`
        }
      }
    },
    server: {
      port: 3000,
      host: true,
      open: false,
      hmr: {
        overlay: false,
      },
      watch: {
        ignored: ['**/node_modules/**', '**/dist/**', '**/build/**', '**/temp_backup/**', '**/pages_backup/**', '**/src.broken/**', '**/*.backup.*', '**/*.cleanup-backup.*']
      }
    },
    preview: {
      port: 4173,
      host: true,
    },
    css: {
      devSourcemap: true,
    },
    define: {
      global: 'globalThis',
      'process.env': 'process.env',
    },
  }
})