import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

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
    exclude: [
      /src\/components\/video\//,
      /src\/components\/DynamicListingPage\.tsx$/,
      /pages_backup/,
      /pages\./,
      /pages-/,
      /pages_disabled/,
      /pages\.disabled/,
      /pages\.broken/,
      /pages\.corrupted/,
      /pages\.old/,
      /pages\._/,
      /pages\.__/,
      /backup-pages/,
      /src\.pages\.disabled/,
      /lib_backup/,
      /src_backup/,
      /corrupted-files-backup/,
      /performance-reports/,
      /log-analysis-reports/,
      /link-reports/,
      /lint-target/,
      /monitoring/,
      /pm2-automation/,
      /automation\/logs/,
      /automation\/backup/,
      /apps/,
      /temp_exclude/,
      /temp_backup/,
      /temp_working/,
      /test_build/,
      /tests\.disabled/,
      /components\.disabled/,
      /components\.disabled_full/,
      /hooks\.disabled/,
      /pages\.disabled/,
      /solutions\.disabled/,
      /zion-os\.disabled/
    ],
  },
  build: {
    target: 'es2020',
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'ui': ['@radix-ui/react-accordion', '@radix-ui/react-alert-dialog', '@radix-ui/react-avatar'],
          'utils': ['clsx', 'tailwind-merge', 'framer-motion'],
          'icons': ['lucide-react']
        },
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || '';
          if (/\.(css)$/.test(name)) return 'css/[name]-[hash].[ext]';
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(name)) return 'images/[name]-[hash].[ext]';
          if (/\.(woff2?|eot|ttf|otf)$/.test(name)) return 'fonts/[name]-[hash].[ext]';
          return 'assets/[name]-[hash].[ext]';
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: false,
    emptyOutDir: true,
    assetsInlineLimit: 2048,
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'lucide-react',
      'clsx',
      'tailwind-merge'
    ],
    exclude: ['@radix-ui/react-icons'],
    esbuildOptions: {
      target: 'es2020'
    }
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
      allow: ['..']
    }
  },
  preview: {
    port: 4173,
    host: true,
    open: true,
  },
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
    __PROD__: JSON.stringify(process.env.NODE_ENV === 'production'),
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  },
  envPrefix: ['VITE_', 'ZION_'],
  experimental: {
    renderBuiltUrl(filename, { hostType }) {
      if (hostType === 'js') {
        return { js: `__ASSET__${filename}__` };
      } else {
        return { relative: true };
      }
    }
  }
});