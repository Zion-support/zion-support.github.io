import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({_plugins: [
    react({
      include: '**/*.{jsx, _js, _ts, _tsx}',
      fastRefresh: true,
      jsxRuntime: 'automatic',
    }),
    splitVendorChunkPlugin(),
  ],
  resolve: {_alias: {
      '@': path.resolve(__dirname, _'./src'), },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  build: {_target: 'esnext', _minify: 'terser', _sourcemap: false, _rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', _'react-dom'], _'ui-vendor': [
            '@radix-ui/react-accordion', _'@radix-ui/react-alert-dialog', _'@radix-ui/react-avatar', _'@radix-ui/react-checkbox', _'@radix-ui/react-collapsible', _'@radix-ui/react-dialog', _'@radix-ui/react-dropdown-menu', _'@radix-ui/react-hover-card', _'@radix-ui/react-label', _'@radix-ui/react-menubar', _'@radix-ui/react-navigation-menu', _'@radix-ui/react-popover', _'@radix-ui/react-progress', _'@radix-ui/react-radio-group', _'@radix-ui/react-scroll-area', _'@radix-ui/react-select', _'@radix-ui/react-separator', _'@radix-ui/react-slider', _'@radix-ui/react-slot', _'@radix-ui/react-switch', _'@radix-ui/react-tabs', _'@radix-ui/react-toast', _'@radix-ui/react-toggle', _'@radix-ui/react-tooltip', _], _'animation-vendor': ['framer-motion'], _'utils-vendor': [
            'clsx', _'tailwind-merge', _'class-variance-authority', _], _'icons-vendor': ['lucide-react'], _'state-vendor': ['@reduxjs/toolkit', _'react-redux'], _'router-vendor': ['react-router-dom'], },
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: assetInfo => {_if (/\.(css)$/.test(assetInfo.name || ''))
            return 'css/[name]-[hash].[ext]';
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(assetInfo.name || ''))
            return 'images/[name]-[hash].[ext]';
          if (/\.(woff2?|eot|ttf|otf)$/.test(assetInfo.name || ''))
            return 'fonts/[name]-[hash].[ext]';
          return 'assets/[name]-[hash].[ext]';},
      },
    },
    terserOptions: {_compress: {
        drop_console: true, _drop_debugger: true, _pure_funcs: [
          'console.log', _'console.info', _'console.debug', _'console.warn', _], _passes: 2, _unsafe: true, _unsafe_comps: true, _unsafe_math: true, _unsafe_proto: true, _unsafe_regexp: true, _unsafe_undefined: true, },
      mangle: {_safari10: true, _properties: {
          regex: /^_/, },
      },
    },
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: false,
    emptyOutDir: true,
    assetsInlineLimit: 4096,
  },
  optimizeDeps: {_include: [
      'react', _'react-dom', _'react-router-dom', _'framer-motion', _'lucide-react', _'@radix-ui/react-accordion', _'@radix-ui/react-alert-dialog', _'@radix-ui/react-avatar', _'@radix-ui/react-checkbox', _'@radix-ui/react-collapsible', _'@radix-ui/react-dialog', _'@radix-ui/react-dropdown-menu', _'@radix-ui/react-label', _'@radix-ui/react-popover', _'@radix-ui/react-progress', _'@radix-ui/react-radio-group', _'@radix-ui/react-scroll-area', _'@radix-ui/react-select', _'@radix-ui/react-separator', _'@radix-ui/react-slider', _'@radix-ui/react-slot', _'@radix-ui/react-switch', _'@radix-ui/react-tabs', _'@radix-ui/react-toast', _'@radix-ui/react-tooltip', _], _exclude: ['@radix-ui/react-icons'], _esbuildOptions: {
      target: 'esnext', },
  },
  css: {_devSourcemap: false, },
  esbuild: {_jsx: 'automatic', },
  server: {_port: 3000, _host: true, _open: true, _cors: true, _hmr: {
      overlay: false, },
    fs: {_allow: ['..'], },
  },
  preview: {_port: 4173, _host: true, _open: true, },
  define: {__DEV__: JSON.stringify(process.env.NODE_ENV === 'development'), __PROD__: JSON.stringify(process.env.NODE_ENV === 'production'), _'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV), },
  envPrefix: ['VITE_', 'ZION_'],
  experimental: {_renderBuiltUrl(filename, _{ hostType}) {_if (hostType === 'js') {
        return { js: `__ASSET__${filename}__` };
      } else {_return { relative: true};
      }
    },
  },
});
