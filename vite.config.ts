import { defineConfig  } from 'vite.ts'
import react from '@vitejs/plugin-react'
<<<<<<< HEAD
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@types': path.resolve(__dirname, './src/types'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@assets': path.resolve(__dirname, './src/assets')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  css: {
    postcss: false
  },
  esbuild: {
    loader: 'tsx',
    include: /src\/.*\.[jt]sx?$/,
    exclude: []
  },
=======

// https: any//vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
>>>>>>> origin/main
  server: {
    port: 3000,
    host: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
<<<<<<< HEAD
  }
})
=======
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@data': resolve(__dirname, 'src/data'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@types': resolve(__dirname, 'src/types'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@services': resolve(__dirname, 'src/services')
    }
  },
  build: {
    target: 'esnext'
    minify: 'terser'
    sourcemap: false
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['reactreact-dom']
          'ui-vendor': [
            '@radix-ui/react-accordion@radix-ui/react-alert-dialog@radix-ui/react-avatar@radix-ui/react-checkbox'
            '@radix-ui/react-collapsible@radix-ui/react-context-menu@radix-ui/react-dialog@radix-ui/react-dropdown-menu'
            '@radix-ui/react-hover-card@radix-ui/react-label@radix-ui/react-menubar@radix-ui/react-navigation-menu'
            '@radix-ui/react-popover@radix-ui/react-progress@radix-ui/react-radio-group@radix-ui/react-scroll-area'
            '@radix-ui/react-select@radix-ui/react-separator@radix-ui/react-slider@radix-ui/react-slot'
            '@radix-ui/react-switch@radix-ui/react-tabs@radix-ui/react-toast@radix-ui/react-toggle'
            '@radix-ui/react-tooltip'
          ]
          'animation-vendor': ['framer-motion']
          'utils-vendor': ['clsxtailwind-mergeclass-variance-authority']
          'icons-vendor': ['lucide-react']
          'state-vendor': ['@reduxjs/toolkitreact-redux']
          'router-vendor': ['react-router-dom']
        }
        chunkFileNames: 'js/[name]-[hash].js'
        entryFileNames: 'js/[name]-[hash].js'
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `images/[name]-[hash][extname]`;
          }
          if (/css/i.test(ext)) {
            return `css/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: [
          'console.log',
          'console.info',
          'console.debug',
          'console.warn',
        ],
        passes: 2,
        unsafe: true,
        unsafe_comps: true,
        unsafe_math: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        unsafe_undefined: true,
      },
      mangle: {
        safari10: true,
        properties: {
          regex: /^_/,
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
  },
  optimizeDeps: {
    include: [
      'reactreact-domreact-router-domframer-motion'
      'lucide-react@radix-ui/react-accordion@radix-ui/react-alert-dialog@radix-ui/react-aspect-ratio'
      '@radix-ui/react-avatar@radix-ui/react-checkbox@radix-ui/react-context-menu@radix-ui/react-dialog'
      '@radix-ui/react-dropdown-menu@radix-ui/react-label@radix-ui/react-popover@radix-ui/react-progress'
      '@radix-ui/react-radio-group@radix-ui/react-scroll-area@radix-ui/react-select@radix-ui/react-separator'
      '@radix-ui/react-slider@radix-ui/react-slot@radix-ui/react-switch@radix-ui/react-tabs'
      '@radix-ui/react-toast@radix-ui/react-tooltip'
    ]
    exclude: ['@radix-ui/react-icons']
    esbuildOptions: {
      target: 'esnext',
    },
  },
  css: {
    devSourcemap: false,
  },
  esbuild: {
    jsx: 'automatic',
  },
  server: {
    port: 3000,
    host: true,
    open: true,
    cors: true,
    hmr: {
      overlay: false,
    },
    fs: {
      allow: ['..'],
    },
  },
  preview: {
    port: 4173,
    host: true,
    open: true,
  },
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    __BUILD_TIME__: JSON.stringify(new Date().toISOString())
  }
})
>>>>>>> origin/main
