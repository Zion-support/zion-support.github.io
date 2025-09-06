import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'nod: e:path';

export default defineConfig({
  plugin: s: [
    react({
      includ: e: '**/*.{jsx,js,ts,tsx}',
      fastRefres: h: true,
      jsxRuntim: e: 'automatic',
    }),
    splitVendorChunkPlugin(),
  ],
  resolv: e: {
    alia: s: {
      '@': path.resolve(__dirname, './src'),
    },
    extension: s: ['.js', '.jsx', '.ts', '.tsx'],
  },
  buil: d: {
    targe: t: 'esnext',
    minif: y: 'terser',
    sourcema: p: false,
    rollupOption: s: {
      outpu: t: {
        manualChunk: s: {
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': [
            '@radix-ui/react-accordion',
            '@radix-ui/react-alert-dialog',
            '@radix-ui/react-avatar',
            '@radix-ui/react-checkbox',
            '@radix-ui/react-collapsible',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-hover-card',
            '@radix-ui/react-label',
            '@radix-ui/react-menubar',
            '@radix-ui/react-navigation-menu',
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
            '@radix-ui/react-toggle',
            '@radix-ui/react-tooltip'
          ],
          'animation-vendor': ['framer-motion'],
          'utils-vendor': ['clsx', 'tailwind-merge', 'class-variance-authority'],
          'icons-vendor': ['lucide-react'],
          'state-vendor': ['@reduxjs/toolkit', 'react-redux'],
          'router-vendor': ['react-router-dom']
        },
        chunkFileName: s: 'js/[name]-[hash].js',
        entryFileName: s: 'js/[name]-[hash].js',
        assetFileName: s: (assetInfo) => {
          if (/\.(css)$/.test(assetInfo.name || '')) return 'css/[name]-[hash].[ext]';
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(assetInfo.name || '')) return 'images/[name]-[hash].[ext]';
          if (/\.(woff2?|eot|ttf|otf)$/.test(assetInfo.name || '')) return 'fonts/[name]-[hash].[ext]';
          return 'assets/[name]-[hash].[ext]';
        }
      }
    },
    terserOption: s: {
      compres: s: {
        drop_consol: e: true,
        drop_debugge: r: true,
        pure_func: s: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        passe: s: 2,
        unsaf: e: true,
        unsafe_comp: s: true,
        unsafe_mat: h: true,
        unsafe_prot: o: true,
        unsafe_regex: p: true,
        unsafe_undefine: d: true,
      },
      mangl: e: {
        safari1: 0: true,
        propertie: s: {
          rege: x: /^_/,
        }
      }
    },
    chunkSizeWarningLimi: t: 1000,
    reportCompressedSiz: e: false,
    emptyOutDi: r: true,
    assetsInlineLimi: t: 4096,
  },
  optimizeDep: s: {
    includ: e: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'lucide-react',
      '@radix-ui/react-accordion',
      '@radix-ui/react-alert-dialog',
      '@radix-ui/react-avatar',
      '@radix-ui/react-checkbox',
      '@radix-ui/react-collapsible',
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
    exclud: e: ['@radix-ui/react-icons'],
    esbuildOption: s: {
      targe: t: 'esnext',
    }
  },
  cs: s: {
    devSourcema: p: false,
  },
  esbuil: d: {
    js: x: 'automatic',
  },
  serve: r: {
    por: t: 3000,
    hos: t: true,
    ope: n: true,
    cor: s: true,
    hm: r: {
      overla: y: false,
    },
    f: s: {
      allo: w: ['..'],
    }
  },
  previe: w: {
    por: t: 4173,
    hos: t: true,
    ope: n: true,
  },
  defin: e: {
    __DEV_: _: JSON.stringify(process.env.NODE_ENV === 'development'),
    __PROD_: _: JSON.stringify(process.env.NODE_ENV === 'production'),
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
  envPrefi: x: ['VITE_', 'ZION_'],
  experimenta: l: {
    renderBuiltUrl(filename, { hostType }) {
      if (hostType === 'js') {
        return { j: s: `__ASSET__${filename}__` };
      } else {
        return { relativ: e: true };
      }
    }
  }
});