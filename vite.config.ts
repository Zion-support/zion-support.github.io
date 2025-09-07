<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node: path';
export default defineConfig($2);
    splitVendorChunkPlugin()
  ],
<<<<<<< HEAD
=======
import { defineConfig, splitVendorChunkPlugin } from 'vite';
=======
<<<<<<< HEAD
=======
import { defineConfig } from 'vite';
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import path from 'node:path';

export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
<<<<<<< HEAD
      '@': path.resolve(__dirname, './src')
=======
<<<<<<< HEAD
      @': path.resolve(__dirname, './src)
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    },
    extensions: ['.js.jsx.ts.tsx']
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  build: {
  }
})ursor/automate-test-improve-and-merge-code-646c;
<<<<<<< HEAD
  },resolve: {alias: {'@': '/workspace/src';
    target: 'esnext',
    minify: 'terser',
=======
  },resolve: {alias: {@': '/workspace/src;
    target: esnext',
    minify: 'terser,
=======
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@types': path.resolve(__dirname, './src/types'),
      '@styles': path.resolve(__dirname, './src/styles'),
<<<<<<< HEAD
      '@assets': path.resolve(__dirname, './src/assets'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
=======
<<<<<<< HEAD
      '@assets': path.resolve(__dirname, './src/assets'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
=======
      '@assets': path.resolve(__dirname, './src/assets')
    }
  },
  css: {
    postcss: false
  },
  esbuild: {
    loader: 'tsx',
    include: /src\/.*\.[jt]sx?$/,
    exclude: [],
    jsx: 'automatic'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
  },
  build: {
    target: 'esnext',
    minify: 'terser',
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
<<<<<<< HEAD
          'react-vendor': ['reactreact-dom'],
          'ui-vendor': [
            '@radix-ui/react-accordion@radix-ui/react-alert-dialog@radix-ui/react-avatar@radix-ui/react-checkbox@radix-ui/react-collapsible@radix-ui/react-dialog@radix-ui/react-dropdown-menu@radix-ui/react-hover-card@radix-ui/react-label@radix-ui/react-menubar@radix-ui/react-navigation-menu@radix-ui/react-popover@radix-ui/react-progress@radix-ui/react-radio-group@radix-ui/react-scroll-area@radix-ui/react-select@radix-ui/react-separator@radix-ui/react-slider@radix-ui/react-slot@radix-ui/react-switch@radix-ui/react-tabs@radix-ui/react-toast@radix-ui/react-toggle@radix-ui/react-tooltip'
          ],
          'animation-vendor': ['framer-motion'],
          'utils-vendor': ['clsxtailwind-mergeclass-variance-authority'],
          'icons-vendor': ['lucide-react'],
          'state-vendor': ['@reduxjs/toolkitreact-redux'],
          'router-vendor': ['react-router-dom']
=======
<<<<<<< HEAD
          'react-vendor': ['reactreact-dom'],
=======
          'react-vendor': ['react', 'react-dom'],
>>>>>>> origin/chore/fix-lint-and-merge
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
            '@radix-ui/react-tooltip',
          ],
          'animation-vendor': ['framer-motion'],
          'utils-vendor': ['clsx', 'tailwind-merge', 'class-variance-authority'],
          'icons-vendor': ['lucide-react'],
          'state-vendor': ['@reduxjs/toolkit', 'react-redux'],
          'router-vendor': ['react-router-dom'],
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        },
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
<<<<<<< HEAD
          if (/\.(css)$/.test(assetInfo.name || '')) return 'css/[name]-[hash].[ext]',
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(assetInfo.name || '')) return 'images/[name]-[hash].[ext]',
          if (/\.(woff2?|eot|ttf|otf)$/.test(assetInfo.name || '')) return 'fonts/[name]-[hash].[ext]',
          return 'assets/[name]-[hash].[ext]'
        }
=======
          if (/\.(css)$/.test(assetInfo.name || '')) return 'css/[name]-[hash].[ext]';
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(assetInfo.name || '')) return 'images/[name]-[hash].[ext]';
          if (/\.(woff2?|eot|ttf|otf)$/.test(assetInfo.name || '')) return 'fonts/[name]-[hash].[ext]';
          return 'assets/[name]-[hash].[ext]';
        },
      },
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
<<<<<<< HEAD
        pure_funcs: ['console.logconsole.infoconsole.debugconsole.warn'],
=======
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        passes: 2,
        unsafe: true,
        unsafe_comps: true,
        unsafe_math: true,
        unsafe_proto: true,
        unsafe_regexp: true,
<<<<<<< HEAD
        unsafe_undefined: true},
      mangle: {
        safari10: true,
        properties: {
          regex: /^_/
        }
=======
        unsafe_undefined: true,
      },
      mangle: {
        safari10: true,
        properties: {
          regex: /^_/,
        },
      },
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    },
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: false,
    emptyOutDir: true,
<<<<<<< HEAD
    assetsInlineLimit: 4096},
  optimizeDeps: {
    include: [
=======
    assetsInlineLimit: 4096,
  },
  optimizeDeps: {
    include: [
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      'reactreact-domreact-router-domframer-motionlucide-react@radix-ui/react-accordion@radix-ui/react-alert-dialog@radix-ui/react-avatar@radix-ui/react-checkbox@radix-ui/react-collapsible@radix-ui/react-dialog@radix-ui/react-dropdown-menu@radix-ui/react-label@radix-ui/react-popover@radix-ui/react-progress@radix-ui/react-radio-group@radix-ui/react-scroll-area@radix-ui/react-select@radix-ui/react-separator@radix-ui/react-slider@radix-ui/react-slot@radix-ui/react-switch@radix-ui/react-tabs@radix-ui/react-toast@radix-ui/react-tooltip'
    ],
    exclude: ['@radix-ui/react-icons'],
    esbuildOptions: {
      target: 'esnext'
    }
  },
  css: {
    devSourcemap: false},
  esbuild: {
    jsx: 'automatic'
  },
  server: {
    port: 3000,
    host: true,
    open: true,
    cors: true,
    hmr: {
      overlay: false},
    fs: {
      allow: ['..']
    }
  },
  preview: {
    port: 4173,
    host: true,
    open: true},
  define: {
    __DEV__: JSON.stringify($2);
    __PROD__: JSON.stringify($2);
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  },
  envPrefix: ['VITE_ZION_'],
  experimental: {
    renderBuiltUrl(filename, { hostType }) {
      if (hostType = $2;
      'react'
      'react-dom'
      'react-router-dom'
      'framer-motion'
      'lucide-react'
      'clsx'
      'tailwind-merge'
    ]
    exclude: ['@radix-ui/react-icons']
  }
});
<<<<<<< HEAD
import { defineConfig,splitVendorChunkPlugin } from 'vite'; import react from '@vitejs/plugin-react'; import path from 'node:path'; export default defineConfig({ plugins: [ react({ include: '**/*.{jsx,js,ts,tsx}',fastRefresh: true,jsxRuntime: 'automatic',}),splitVendorChunkPlugin() ],resolve: { alias: { '@': path.resolve(__dirname,'./src') },extensions: ['.js','.jsx','.ts','.tsx'] },build: { target: 'esnext',minify: 'terser',sourcemap: false,rollupOptions: { output: { manualChunks: { 'react-vendor': ['react','react-dom'],'ui-vendor': [ '@radix-ui/react-accordion','@radix-ui/react-alert-dialog','@radix-ui/react-avatar','@radix-ui/react-checkbox','@radix-ui/react-collapsible','@radix-ui/react-context-menu','@radix-ui/react-dialog','@radix-ui/react-dropdown-menu','@radix-ui/react-hover-card','@radix-ui/react-label','@radix-ui/react-menubar','@radix-ui/react-navigation-menu','@radix-ui/react-popover','@radix-ui/react-progress','@radix-ui/react-radio-group','@radix-ui/react-scroll-area','@radix-ui/react-select','@radix-ui/react-separator','@radix-ui/react-slider','@radix-ui/react-slot','@radix-ui/react-switch','@radix-ui/react-tabs','@radix-ui/react-toast','@radix-ui/react-toggle','@radix-ui/react-tooltip' ],'animation-vendor': ['framer-motion'],'utils-vendor': ['clsx','tailwind-merge','class-variance-authority'],'icons-vendor': ['lucide-react'],'state-vendor': ['@reduxjs/toolkit','react-redux'],'router-vendor': ['react-router-dom'] },chunkFileNames: 'js/[name]-[hash].js',entryFileNames: 'js/[name]-[hash].js',assetFileNames: (assetInfo) => { if (/\.(css)$/.test(assetInfo.name || '')) return 'css/[name]-[hash].[ext]'; if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(assetInfo.name || '')) return 'images/[name]-[hash].[ext]'; if (/\.(woff2?|eot|ttf|otf)$/.test(assetInfo.name || '')) return 'fonts/[name]-[hash].[ext]'; return 'assets/[name]-[hash].[ext]'} } },terserOptions: { compress: { drop_console: true,drop_debugger: true,pure_funcs: ['console.log','console.info','console.debug','console.warn'],passes: 2,unsafe: true,unsafe_comps: true,unsafe_math: true,unsafe_proto: true,unsafe_regexp: true,unsafe_undefined: true },mangle: { safari10: true,properties: { regex: /^_/ } } },chunkSizeWarningLimit: 1000,reportCompressedSize: false,emptyOutDir: true,assetsInlineLimit: 4096 },optimizeDeps: { include: [ 'react','react-dom','react-router-dom','framer-motion','lucide-react','@radix-ui/react-accordion','@radix-ui/react-alert-dialog','@radix-ui/react-aspect-ratio','@radix-ui/react-avatar','@radix-ui/react-checkbox','@radix-ui/react-context-menu','@radix-ui/react-dialog','@radix-ui/react-dropdown-menu','@radix-ui/react-label','@radix-ui/react-popover','@radix-ui/react-progress','@radix-ui/react-radio-group','@radix-ui/react-scroll-area','@radix-ui/react-select','@radix-ui/react-separator','@radix-ui/react-slider','@radix-ui/react-slot','@radix-ui/react-switch','@radix-ui/react-tabs','@radix-ui/react-toast','@radix-ui/react-tooltip' ],exclude: ['@radix-ui/react-icons'],esbuildOptions: { target: 'esnext' } },css: { devSourcemap: false },esbuild: { jsx: 'automatic',},server: { port: 3000,host: true,open: true,cors: true,hmr: { overlay: false },fs: { allow: ['..'] } },preview: { port: 4173,host: true,open: true },define: { __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),__PROD__: JSON.stringify(process.env.NODE_ENV === 'production'),'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) },envPrefix: ['VITE_','ZION_'],experimental: { renderBuiltUrl(filename,{ hostType }) { if (hostType === 'js') { return { js: `__ASSET__${filename}__` } } else { return { relative: true } } } } });
=======
});
import { defineConfig,splitVendorChunkPlugin } from 'vite'; import react from '@vitejs/plugin-react'; import path from 'node:path'; export default defineConfig({ plugins: [ react({ include: '**/*.{jsx,js,ts,tsx}',fastRefresh: true,jsxRuntime: 'automatic',}),splitVendorChunkPlugin() ],resolve: { alias: { '@': path.resolve(__dirname,'./src') },extensions: ['.js','.jsx','.ts','.tsx'] },build: { target: 'esnext',minify: 'terser',sourcemap: false,rollupOptions: { output: { manualChunks: { 'react-vendor': ['react','react-dom'],'ui-vendor': [ '@radix-ui/react-accordion','@radix-ui/react-alert-dialog','@radix-ui/react-avatar','@radix-ui/react-checkbox','@radix-ui/react-collapsible','@radix-ui/react-context-menu','@radix-ui/react-dialog','@radix-ui/react-dropdown-menu','@radix-ui/react-hover-card','@radix-ui/react-label','@radix-ui/react-menubar','@radix-ui/react-navigation-menu','@radix-ui/react-popover','@radix-ui/react-progress','@radix-ui/react-radio-group','@radix-ui/react-scroll-area','@radix-ui/react-select','@radix-ui/react-separator','@radix-ui/react-slider','@radix-ui/react-slot','@radix-ui/react-switch','@radix-ui/react-tabs','@radix-ui/react-toast','@radix-ui/react-toggle','@radix-ui/react-tooltip' ],'animation-vendor': ['framer-motion'],'utils-vendor': ['clsx','tailwind-merge','class-variance-authority'],'icons-vendor': ['lucide-react'],'state-vendor': ['@reduxjs/toolkit','react-redux'],'router-vendor': ['react-router-dom'] },chunkFileNames: 'js/[name]-[hash].js',entryFileNames: 'js/[name]-[hash].js',assetFileNames: (assetInfo) => { if (/\.(css)$/.test(assetInfo.name || '')) return 'css/[name]-[hash].[ext]'; if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(assetInfo.name || '')) return 'images/[name]-[hash].[ext]'; if (/\.(woff2?|eot|ttf|otf)$/.test(assetInfo.name || '')) return 'fonts/[name]-[hash].[ext]'; return 'assets/[name]-[hash].[ext]'} } },terserOptions: { compress: { drop_console: true,drop_debugger: true,pure_funcs: ['console.log','console.info','console.debug','console.warn'],passes: 2,unsafe: true,unsafe_comps: true,unsafe_math: true,unsafe_proto: true,unsafe_regexp: true,unsafe_undefined: true },mangle: { safari10: true,properties: { regex: /^_/ } } },chunkSizeWarningLimit: 1000,reportCompressedSize: false,emptyOutDir: true,assetsInlineLimit: 4096 },optimizeDeps: { include: [ 'react','react-dom','react-router-dom','framer-motion','lucide-react','@radix-ui/react-accordion','@radix-ui/react-alert-dialog','@radix-ui/react-aspect-ratio','@radix-ui/react-avatar','@radix-ui/react-checkbox','@radix-ui/react-context-menu','@radix-ui/react-dialog','@radix-ui/react-dropdown-menu','@radix-ui/react-label','@radix-ui/react-popover','@radix-ui/react-progress','@radix-ui/react-radio-group','@radix-ui/react-scroll-area','@radix-ui/react-select','@radix-ui/react-separator','@radix-ui/react-slider','@radix-ui/react-slot','@radix-ui/react-switch','@radix-ui/react-tabs','@radix-ui/react-toast','@radix-ui/react-tooltip' ],exclude: ['@radix-ui/react-icons'],esbuildOptions: { target: 'esnext' } },css: { devSourcemap: false },esbuild: { jsx: 'automatic',},server: { port: 3000,host: true,open: true,cors: true,hmr: { overlay: false },fs: { allow: ['..'] } },preview: { port: 4173,host: true,open: true },define: { __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),__PROD__: JSON.stringify(process.env.NODE_ENV === 'production'),'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) },envPrefix: ['VITE_','ZION_'],experimental: { renderBuiltUrl(filename,{ hostType }) { if (hostType === 'js') { return { js: `__ASSET__${filename}__` } } else { return { relative: true } } } } });
=======
>>>>>>> origin/chore/fix-lint-and-merge
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
      '@radix-ui/react-tooltip',
    ],
    exclude: ['@radix-ui/react-icons'],
    esbuildOptions: {
      target: 'esnext',
    },
  },
<<<<<<< HEAD
  css: {
    devSourcemap: false,
  },
  esbuild: {
    jsx: 'automatic',
  },
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
    __PROD__: JSON.stringify(process.env.NODE_ENV === 'production'),
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
  envPrefix: ['VITE_', 'ZION_'],
  experimental: {
    renderBuiltUrl(filename, { hostType }) {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      if (hostType === 'js') {
        return { js: `__ASSET__${filename}__` };
      } else {
        return { relative: true };
      }
    },
<<<<<<< HEAD
});
=======
  },
});
<<<<<<< HEAD
=======
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
