<<<<<<< HEAD
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

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
    }
  },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  css: {
    postcss: false
  },
  esbuild: {
    loader: 'tsx',
    include: /src\/.*\.[jt]sx?$/,
<<<<<<< HEAD
<<<<<<< HEAD
    exclude: [],
  },
=======
>>>>>>> 3f7c15facc9823ab5565fbace7f3bee3dce9111e
=======
    exclude: [
      /src\/components\/video\//,
      /src\/components\/DynamicListingPage\.tsx$/,
    ],
  },
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
    exclude: [],
  },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  build: {
    target: 'esnext',
    minify: 'terser',
    sourcemap: false,
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
        },
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || '';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          if (/\.(css)$/.test(name)) return 'css/[name]-[hash].[ext]';
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(name)) return 'images/[name]-[hash].[ext]';
          if (/\.(woff2?|eot|ttf|otf)$/.test(name)) return 'fonts/[name]-[hash].[ext]';
          return 'assets/[name]-[hash].[ext]';
    },
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: false,
    emptyOutDir: true,
<<<<<<< HEAD
    assetsInlineLimit: 4096,
<<<<<<< HEAD
=======
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(name)) return 'images/[name]-[hash].[ext]';
          if (/\.(woff2?|eot|ttf|otf)$/.test(name)) return 'fonts/[name]-[hash].[ext]';
          if (/\.(css)$/.test(name)) return 'css/[name]-[hash].[ext]';
          return 'assets/[name]-[hash].[ext]';
        }
      }
    },
    chunkSizeWarningLimit: 1000
>>>>>>> 3f7c15facc9823ab5565fbace7f3bee3dce9111e
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'lucide-react',
<<<<<<< HEAD
      'clsx',
      'tailwind-merge'
    ],
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    exclude: ['@radix-ui/react-icons'],
    esbuildOptions: {
      target: 'esnext'
    }
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
      allow: ['..']
    }
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  },
  preview: {
    port: 4173,
    host: true,
    open: true,
  },
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
    __PROD__: JSON.stringify(process.env.NODE_ENV === 'production'),
  },
  envPrefix: ['VITE_', 'ZION_'],
  experimental: {
    renderBuiltUrl(filename, { hostType }) {
      if (hostType === 'js') {
        return { js: `__ASSET__${filename}__` };
      } else {
        return { relative: true };
      }
<<<<<<< HEAD
    }
<<<<<<< HEAD
=======
    exclude: ['@radix-ui/react-icons']
  },
  server: { 
    port: 3000, 
    host: true, 
    open: true 
  },
  preview: { 
    port: 4173, 
    host: true, 
    open: true 
>>>>>>> 3f7c15facc9823ab5565fbace7f3bee3dce9111e
  }
<<<<<<< HEAD
});
=======
});
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
  }
});
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
