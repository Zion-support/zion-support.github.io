<<<<<<< HEAD
<<<<<<< HEAD
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.',
  base: '/',
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
    }
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    sourcemap: false,
    reportCompressedSize: false,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        passes: 2,
        unsafe: true,
        unsafe_comps: true,
        unsafe_math: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        unsafe_undefined: true,
        hoist_funs: true,
        hoist_vars: true,
        reduce_vars: true,
        side_effects: false,
        dead_code: true,
        conditionals: true,
        evaluate: true,
        loops: true,
        sequences: true,
        unused: true
      },
      mangle: {
        toplevel: true,
        properties: {
          regex: /^_/
        }
      }
    },
    rollupOptions: {
      input: {
        main: './index.html'
      },
      output: {
        manualChunks: (id) => {
          // React ecosystem
          if (id.includes('react') || id.includes('react-dom')) {
            return 'react-vendor';
          }
          // Router
          if (id.includes('react-router')) {
            return 'router-vendor';
          }
          // UI libraries
          if (id.includes('framer-motion') || id.includes('lucide-react')) {
            return 'ui-vendor';
          }
          // Form handling
          if (id.includes('react-hook-form') || id.includes('@hookform') || id.includes('zod')) {
            return 'form-vendor';
          }
          // Utilities
          if (id.includes('date-fns') || id.includes('clsx') || id.includes('tailwind-merge')) {
            return 'utils-vendor';
          }
          // SEO and analytics
          if (id.includes('react-helmet') || id.includes('react-error-boundary')) {
            return 'seo-vendor';
          }
          // Large node modules
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
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
    chunkSizeWarningLimit: 1000
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
      'react-helmet-async',
      'react-error-boundary',
      '@radix-ui/react-accordion',
      '@radix-ui/react-avatar',
      '@radix-ui/react-checkbox',
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
    exclude: ['@vite/client', '@vite/env']
  },
  esbuild: {
    treeShaking: true,
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
    drop: ['console', 'debugger']
  },
  server: {
    port: 3000,
    host: true,
    open: true,
    cors: true,
    hmr: {
      overlay: false
    },
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '/api')
      }
    }
  },
  preview: {
    port: 4173,
    host: true,
    open: true
  },
  css: {
    devSourcemap: true,
    postcss: './postcss.config.js'
  },
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    __BUILD_TIME__: JSON.stringify(new Date().toISOString())
  }
});
import { defineConfig,splitVendorChunkPlugin } from 'vite'; import react from '@vitejs/plugin-react'; import path from 'node:path'; export default defineConfig({ plugins: [ react({ include: '**/*.{jsx,js,ts,tsx}',fastRefresh: true,jsxRuntime: 'automatic',}),splitVendorChunkPlugin() ],resolve: { alias: { '@': path.resolve(__dirname,'./src') },extensions: ['.js','.jsx','.ts','.tsx'] },build: { target: 'esnext',minify: 'terser',sourcemap: false,rollupOptions: { output: { manualChunks: { 'react-vendor': ['react','react-dom'],'ui-vendor': [ '@radix-ui/react-accordion','@radix-ui/react-alert-dialog','@radix-ui/react-avatar','@radix-ui/react-checkbox','@radix-ui/react-collapsible','@radix-ui/react-context-menu','@radix-ui/react-dialog','@radix-ui/react-dropdown-menu','@radix-ui/react-hover-card','@radix-ui/react-label','@radix-ui/react-menubar','@radix-ui/react-navigation-menu','@radix-ui/react-popover','@radix-ui/react-progress','@radix-ui/react-radio-group','@radix-ui/react-scroll-area','@radix-ui/react-select','@radix-ui/react-separator','@radix-ui/react-slider','@radix-ui/react-slot','@radix-ui/react-switch','@radix-ui/react-tabs','@radix-ui/react-toast','@radix-ui/react-toggle','@radix-ui/react-tooltip' ],'animation-vendor': ['framer-motion'],'utils-vendor': ['clsx','tailwind-merge','class-variance-authority'],'icons-vendor': ['lucide-react'],'state-vendor': ['@reduxjs/toolkit','react-redux'],'router-vendor': ['react-router-dom'] },chunkFileNames: 'js/[name]-[hash].js',entryFileNames: 'js/[name]-[hash].js',assetFileNames: (assetInfo) => { if (/\.(css)$/.test(assetInfo.name || '')) return 'css/[name]-[hash].[ext]'; if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(assetInfo.name || '')) return 'images/[name]-[hash].[ext]'; if (/\.(woff2?|eot|ttf|otf)$/.test(assetInfo.name || '')) return 'fonts/[name]-[hash].[ext]'; return 'assets/[name]-[hash].[ext]'} } },terserOptions: { compress: { drop_console: true,drop_debugger: true,pure_funcs: ['console.log','console.info','console.debug','console.warn'],passes: 2,unsafe: true,unsafe_comps: true,unsafe_math: true,unsafe_proto: true,unsafe_regexp: true,unsafe_undefined: true },mangle: { safari10: true,properties: { regex: /^_/ } } },chunkSizeWarningLimit: 1000,reportCompressedSize: false,emptyOutDir: true,assetsInlineLimit: 4096 },optimizeDeps: { include: [ 'react','react-dom','react-router-dom','framer-motion','lucide-react','@radix-ui/react-accordion','@radix-ui/react-alert-dialog','@radix-ui/react-aspect-ratio','@radix-ui/react-avatar','@radix-ui/react-checkbox','@radix-ui/react-context-menu','@radix-ui/react-dialog','@radix-ui/react-dropdown-menu','@radix-ui/react-label','@radix-ui/react-popover','@radix-ui/react-progress','@radix-ui/react-radio-group','@radix-ui/react-scroll-area','@radix-ui/react-select','@radix-ui/react-separator','@radix-ui/react-slider','@radix-ui/react-slot','@radix-ui/react-switch','@radix-ui/react-tabs','@radix-ui/react-toast','@radix-ui/react-tooltip' ],exclude: ['@radix-ui/react-icons'],esbuildOptions: { target: 'esnext' } },css: { devSourcemap: false },esbuild: { jsx: 'automatic',},server: { port: 3000,host: true,open: true,cors: true,hmr: { overlay: false },fs: { allow: ['..'] } },preview: { port: 4173,host: true,open: true },define: { __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),__PROD__: JSON.stringify(process.env.NODE_ENV === 'production'),'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) },envPrefix: ['VITE_','ZION_'],experimental: { renderBuiltUrl(filename,{ hostType }) { if (hostType === 'js') { return { js: `__ASSET__${filename}__` } } else { return { relative: true } } } } });
=======
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({;
  plugins: [react()],
  server: {;
    port: 3000,,
},
  build: {;
    outDir: "dist",
    sourcemap: true,,
},
  resolve: {;
    alias: {;
      "@": "/src",,
},,
},,
});
>>>>>>> origin/automation-fixes
=======
import { defineConfig,splitVendorChunkPlugin } from 'vite'; import react from '@vitejs/plugin-react'; import path from 'node:path'; export default defineConfig({ plugins: [ react({ include: '**/*.{jsx,js,ts,tsx}',fastRefresh: true,jsxRuntime: 'automatic',}),splitVendorChunkPlugin() ],resolve: { alias: { '@': path.resolve(__dirname,'./src') },extensions: ['.js','.jsx','.ts','.tsx'] },build: { target: 'esnext',minify: 'terser',sourcemap: false,rollupOptions: { output: { manualChunks: { 'react-vendor': ['react','react-dom'],'ui-vendor': [ '@radix-ui/react-accordion','@radix-ui/react-alert-dialog','@radix-ui/react-avatar','@radix-ui/react-checkbox','@radix-ui/react-collapsible','@radix-ui/react-context-menu','@radix-ui/react-dialog','@radix-ui/react-dropdown-menu','@radix-ui/react-hover-card','@radix-ui/react-label','@radix-ui/react-menubar','@radix-ui/react-navigation-menu','@radix-ui/react-popover','@radix-ui/react-progress','@radix-ui/react-radio-group','@radix-ui/react-scroll-area','@radix-ui/react-select','@radix-ui/react-separator','@radix-ui/react-slider','@radix-ui/react-slot','@radix-ui/react-switch','@radix-ui/react-tabs','@radix-ui/react-toast','@radix-ui/react-toggle','@radix-ui/react-tooltip' ],'animation-vendor': ['framer-motion'],'utils-vendor': ['clsx','tailwind-merge','class-variance-authority'],'icons-vendor': ['lucide-react'],'state-vendor': ['@reduxjs/toolkit','react-redux'],'router-vendor': ['react-router-dom'] },chunkFileNames: 'js/[name]-[hash].js',entryFileNames: 'js/[name]-[hash].js',assetFileNames: (assetInfo) => { if (/\.(css)$/.test(assetInfo.name || '')) return 'css/[name]-[hash].[ext]'; if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(assetInfo.name || '')) return 'images/[name]-[hash].[ext]'; if (/\.(woff2?|eot|ttf|otf)$/.test(assetInfo.name || '')) return 'fonts/[name]-[hash].[ext]'; return 'assets/[name]-[hash].[ext]'} } },terserOptions: { compress: { drop_console: true,drop_debugger: true,pure_funcs: ['console.log','console.info','console.debug','console.warn'],passes: 2,unsafe: true,unsafe_comps: true,unsafe_math: true,unsafe_proto: true,unsafe_regexp: true,unsafe_undefined: true },mangle: { safari10: true,properties: { regex: /^_/ } } },chunkSizeWarningLimit: 1000,reportCompressedSize: false,emptyOutDir: true,assetsInlineLimit: 4096 },optimizeDeps: { include: [ 'react','react-dom','react-router-dom','framer-motion','lucide-react','@radix-ui/react-accordion','@radix-ui/react-alert-dialog','@radix-ui/react-aspect-ratio','@radix-ui/react-avatar','@radix-ui/react-checkbox','@radix-ui/react-context-menu','@radix-ui/react-dialog','@radix-ui/react-dropdown-menu','@radix-ui/react-label','@radix-ui/react-popover','@radix-ui/react-progress','@radix-ui/react-radio-group','@radix-ui/react-scroll-area','@radix-ui/react-select','@radix-ui/react-separator','@radix-ui/react-slider','@radix-ui/react-slot','@radix-ui/react-switch','@radix-ui/react-tabs','@radix-ui/react-toast','@radix-ui/react-tooltip' ],exclude: ['@radix-ui/react-icons'],esbuildOptions: { target: 'esnext' } },css: { devSourcemap: false },esbuild: { jsx: 'automatic',},server: { port: 3000,host: true,open: true,cors: true,hmr: { overlay: false },fs: { allow: ['..'] } },preview: { port: 4173,host: true,open: true },define: { __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),__PROD__: JSON.stringify(process.env.NODE_ENV === 'production'),'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) },envPrefix: ['VITE_','ZION_'],experimental: { renderBuiltUrl(filename,{ hostType }) { if (hostType === 'js') { return { js: `__ASSET__${filename}__` } } else { return { relative: true } } } } });
>>>>>>> origin/automation-improvements
