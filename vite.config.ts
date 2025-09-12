<<<<<<< HEAD
// @ts-nocheck
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
=======
=======
// @ts-nocheck
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
<<<<<<< HEAD
import { resolve } from 'path'
import { analyzer } from 'vite-bundle-analyzer'
>>>>>>> origin/content/blog-sept12

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function resolve(dir: string, ...paths: string[]) {
  return path.resolve(__dirname, dir, ...paths)
}

function splitVendorChunkPlugin() {
  return {
    name: 'split-vendor-chunk',
    config(config: any) {
      config.build = config.build || {}
      config.build.rollupOptions = config.build.rollupOptions || {}
      config.build.rollupOptions.output = config.build.rollupOptions.output || {}
      config.build.rollupOptions.output.manualChunks = config.build.rollupOptions.output.manualChunks || {}
      
      config.build.rollupOptions.output.manualChunks = {
        'react-vendor': ['react', 'react-dom'],
        'ui-vendor': ['@radix-ui/react-accordion', '@radix-ui/react-alert-dialog', '@radix-ui/react-avatar'],
        'utils-vendor': ['clsx', 'tailwind-merge', 'framer-motion']
      }
    }
  }
}

export default defineConfig({
  plugins: [
<<<<<<< HEAD
=======
    react(),
    ...(mode === 'analyze' ? [analyzer()] : [])
=======
import path from 'path'
import { fileURLToPath } from 'url'

export default defineConfig({
  plugins: [
>>>>>>> origin/content/blog-sept12
    react({
      include: '**/*.{jsx,js,ts,tsx}',
      fastRefresh: true,
    }),
    splitVendorChunkPlugin(),
<<<<<<< HEAD
  ],
  resolve: {
    alias: {
      '@': resolve('src'),
      '@components': resolve('src/components'),
      '@pages': resolve('src/pages'),
      '@layout': resolve('src/layout'),
      '@utils': resolve('src/utils'),
      '@hooks': resolve('src/hooks'),
      '@types': resolve('src/types'),
      '@assets': resolve('src/assets'),
      '@styles': resolve('src/styles'),
      '@data': resolve('src/data'),
      '@services': resolve('src/services'),
      '@context': resolve('src/context'),
      '@constants': resolve('src/constants')
=======
>>>>>>> cursor/create-and-deploy-new-content-d63f
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@layout': resolve(__dirname, 'src/layout'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@types': resolve(__dirname, 'src/types'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@data': resolve(__dirname, 'src/data'),
      '@services': resolve(__dirname, 'src/services'),
      '@context': resolve(__dirname, 'src/context'),
      '@constants': resolve(__dirname, 'src/constants')
>>>>>>> origin/content/blog-sept12
    }
  },
  css: {
    postcss: './postcss.config.cjs',
    devSourcemap: true,
  },
  esbuild: {
    loader: 'tsx',
    include: /src\/.*\.[jt]sx?$/,
    exclude: [],
    jsx: 'automatic',
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: false,
    emptyOutDir: true,
    assetsInlineLimit: 4096,
    rollupOptions: {
      input: {
        main: './index.html'
      },
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
        },
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || '';
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(name)) return 'images/[name]-[hash].[ext]';
          if (/\.(woff2?|eot|ttf|otf)$/.test(name)) return 'fonts/[name]-[hash].[ext]';
          if (/\.(css)$/.test(name)) return 'css/[name]-[hash].[ext]';
          return 'assets/[name]-[hash].[ext]';
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
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
        properties: {}
      }
    }
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'lucide-react',
      'clsx',
      'tailwind-merge',
      '@radix-ui/react-accordion',
      '@radix-ui/react-alert-dialog',
      '@radix-ui/react-avatar',
      '@radix-ui/react-checkbox',
<<<<<<< HEAD
=======
      '@radix-ui/react-collapsible',
>>>>>>> origin/content/blog-sept12
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-label',
      '@radix-ui/react-popover',
      '@radix-ui/react-progress',
      '@radix-ui/react-radio-group',
      '@radix-ui/react-scroll-area',
      '@radix-ui/react-select',
      '@radix-ui/react-separator',
      '@radix-ui/react-slider',
      '@radix-ui/react-slot',
      '@radix-ui/react-switch',
      '@radix-ui/react-tabs',
      '@radix-ui/react-toast',
      '@radix-ui/react-tooltip'
    ],
    exclude: ['@radix-ui/react-icons']
  },
  server: {
    port: 3000,
    host: true,
    open: true,
    cors: true,
    hmr: {
      overlay: false,
    }
  },
  preview: {
    port: 4173,
    host: true,
    open: true
  },
  
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
<<<<<<< HEAD
    __PROD__: JSON.stringify(process.env.NODE_ENV === 'production'),
  }
});
=======
<<<<<<< HEAD
  },
}))
=======
    __PROD__: JSON.stringify(process.env.NODE_ENV === 'production'),
  }
});
>>>>>>> cursor/create-and-deploy-new-content-d63f
>>>>>>> origin/content/blog-sept12
