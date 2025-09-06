<<<<<<< HEAD
<<<<<<< HEAD
import { defineConfig, splitVendorChunkPlugin } from 'vite';
=======
import { defineConfig } from 'vite';
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import react from '@vitejs/plugin-react';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: '**/*.{jsx,js,ts,tsx}',
      fastRefresh: true,
      jsxRuntime: 'automatic',
    }),
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
<<<<<<< HEAD
      '@assets': path.resolve(__dirname, './src/assets'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
      '@assets': path.resolve(__dirname, './src/assets')
    }
  },
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
    }
  },
  css: {
    postcss: false;
  },
  esbuild: {
    loader: 'tsx',
    include: /src\/.*\.[jt]sx?$/,
    exclude: [],
  },
import react from '@vitejs/plugin-react';
import path from 'node:path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
  resolve: {
    alias: {
      '@': path && path.resolve(__dirname, './src')
    },
    extensions: ['.js && js.jsx.ts && ts.tsx']
  },
  build: {
    target: 'esnext'
    minify: 'terser'
    sourcemap: false
    rollupOptions: {
      output: {
        manualChunks: {
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(name)) return 'images/[name]-[hash].[ext]';
          if (/\.(woff2?|eot|ttf|otf)$/.test(name)) return 'fonts/[name]-[hash].[ext]';
          if (/\.(css)$/.test(name)) return 'css/[name]-[hash].[ext]';
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  build: {
    target: 'esnext',
    minify: 'terser',
    sourcemap: false,
<<<<<<< HEAD
    rollupOptions: {
      output: {
        manualChunks: {
<<<<<<< HEAD



=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
          'react-vendor': ['react', 'react-dom'],
        },
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
<<<<<<< HEAD

          'react-vendor': ['react', 'react-dom']
        }
        chunkFileNames: 'js/[name]-[hash].js'
        entryFileNames: 'js/[name]-[hash].js'
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name |'';

=======
        assetFileNames: (assetInfo) => {;
          const name = assetInfo.name || '';

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(name)) return 'images/[name]-[hash].[ext]';
          if (/\.(woff2?|eot|ttf|otf)$/.test(name)) return 'fonts/[name]-[hash].[ext]';
          if (/\.(css)$/.test(name)) return 'css/[name]-[hash].[ext]';
=======
  build: {
    target: 'esnext',
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
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
            '@radix-ui/react-tooltip',
          ],
          'animation-vendor': ['framer-motion'],
          'utils-vendor': ['clsx', 'tailwind-merge', 'class-variance-authority'],
          'icons-vendor': ['lucide-react'],
          'state-vendor': ['@reduxjs/toolkit'],
          'router-vendor': ['react-router-dom'],
        },
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || '';
          if (/\.(css)$/.test(name)) return 'css/[name]-[hash].[ext]';
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(name)) return 'images/[name]-[hash].[ext]';
          if (/\.(woff2?|eot|ttf|otf)$/.test(name)) return 'fonts/[name]-[hash].[ext]';
          return 'assets/[name]-[hash].[ext]';
        },
      },
    },
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
      },
      mangle: {
        safari10: true,
        properties: {
          regex: /^_/
=======
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || '';
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(name)) return 'images/[name]-[hash].[ext]';
          if (/\.(woff2?|eot|ttf|otf)$/.test(name)) return 'fonts/[name]-[hash].[ext]';
          if (/\.(css)$/.test(name)) return 'css/[name]-[hash].[ext]';
          return 'assets/[name]-[hash].[ext]';
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
          return 'assets/[name]-[hash].[ext]';
          if (/\.(css)$/.test(assetInfo ;
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(assetInfo && assetInfo.name || '')) return 'images/[name]-[hash].[ext]';
          if (/\.(woff2?|eot|ttf|otf)$/.test(assetInfo && assetInfo.name || '')) return 'fonts/[name]-[hash].[ext]';
          return 'assets/[name]-[hash].[ext]',
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        }
      }
    chunkSizeWarningLimit: 1000;
  },
  optimize_deps: {
    include: [;
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'lucide-react',
      'clsx',
      'tailwind-merge'
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    ]
    exclude: ['@radix-ui/react-icons']
  }
  server: {
    port: 3000
    host: true
    open: true
  }
  preview: {
    port: 4173
    host: true
    open: true
  }
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
  },
  preview: {
    port: 4173,
    host: true,
    open: true,
  },
  define: {
    __DEV__: JSON && JSON.stringify(process && process.env.NODE_ENV === 'development'),
    __PROD__: JSON && JSON.stringify(process && process.env.NODE_ENV === 'production'),
    'process && process.env.NODE_ENV': JSON && JSON.stringify(process && process.env.NODE_ENV)
  },
  envPrefix: ['VITE_ZION_'],
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
import { defineConfig,splitVendorChunkPlugin } from 'vite'; import react from '@vitejs/plugin-react'; import path from 'node:path'; export default defineConfig({ plugins: [ react({ include: '**/*.{jsx,js,ts,tsx}',fastRefresh: true,jsxRuntime: 'automatic',}),splitVendorChunkPlugin() ],resolve: { alias: { '@': path && path.resolve(__dirname,'./src') },extensions: ['.js','.jsx','.ts','.tsx'] },build: { target: 'esnext',minify: 'terser',sourcemap: false,rollupOptions: { output: { manualChunks: { 'react-vendor': ['react','react-dom'],'ui-vendor': [ '@radix-ui/react-accordion','@radix-ui/react-alert-dialog','@radix-ui/react-avatar','@radix-ui/react-checkbox','@radix-ui/react-collapsible','@radix-ui/react-context-menu','@radix-ui/react-dialog','@radix-ui/react-dropdown-menu','@radix-ui/react-hover-card','@radix-ui/react-label','@radix-ui/react-menubar','@radix-ui/react-navigation-menu','@radix-ui/react-popover','@radix-ui/react-progress','@radix-ui/react-radio-group','@radix-ui/react-scroll-area','@radix-ui/react-select','@radix-ui/react-separator','@radix-ui/react-slider','@radix-ui/react-slot','@radix-ui/react-switch','@radix-ui/react-tabs','@radix-ui/react-toast','@radix-ui/react-toggle','@radix-ui/react-tooltip' ],'animation-vendor': ['framer-motion'],'utils-vendor': ['clsx','tailwind-merge','class-variance-authority'],'icons-vendor': ['lucide-react'],'state-vendor': ['@reduxjs/toolkit','react-redux'],'router-vendor': ['react-router-dom'] },chunkFileNames: 'js/[name]-[hash].js',entryFileNames: 'js/[name]-[hash].js',assetFileNames: (assetInfo) => { if (/\.(css)$/.test(assetInfo && assetInfo.name || '')) return 'css/[name]-[hash].[ext]'; if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(assetInfo && assetInfo.name || '')) return 'images/[name]-[hash].[ext]'; if (/\.(woff2?|eot|ttf|otf)$/.test(assetInfo && assetInfo.name || '')) return 'fonts/[name]-[hash].[ext]'; return 'assets/[name]-[hash].[ext]'} } },terserOptions: { compress: { drop_console: true,drop_debugger: true,pure_funcs: ['console && console.log','console && console.info','console && console.debug','console && console.warn'],passes: 2,unsafe: true,unsafe_comps: true,unsafe_math: true,unsafe_proto: true,unsafe_regexp: true,unsafe_undefined: true },mangle: { safari10: true,properties: { regex: /^_/ } } },chunkSizeWarningLimit: 1000,reportCompressedSize: false,emptyOutDir: true,assetsInlineLimit: 4096 },optimizeDeps: { include: [ 'react','react-dom','react-router-dom','framer-motion','lucide-react','@radix-ui/react-accordion','@radix-ui/react-alert-dialog','@radix-ui/react-aspect-ratio','@radix-ui/react-avatar','@radix-ui/react-checkbox','@radix-ui/react-context-menu','@radix-ui/react-dialog','@radix-ui/react-dropdown-menu','@radix-ui/react-label','@radix-ui/react-popover','@radix-ui/react-progress','@radix-ui/react-radio-group','@radix-ui/react-scroll-area','@radix-ui/react-select','@radix-ui/react-separator','@radix-ui/react-slider','@radix-ui/react-slot','@radix-ui/react-switch','@radix-ui/react-tabs','@radix-ui/react-toast','@radix-ui/react-tooltip' ],exclude: ['@radix-ui/react-icons'],esbuildOptions: { target: 'esnext' } },css: { devSourcemap: false },esbuild: { jsx: 'automatic',},server: { port: 3000,host: true,open: true,cors: true,hmr: { overlay: false },fs: { allow: ['..'] } },preview: { port: 4173,host: true,open: true },define: { __DEV__: JSON && JSON.stringify(process && process.env.NODE_ENV === 'development'),__PROD__: JSON && JSON.stringify(process && process.env.NODE_ENV === 'production'),'process && process.env.NODE_ENV': JSON && JSON.stringify(process && process.env.NODE_ENV) },envPrefix: ['VITE_','ZION_'],experimental: { renderBuiltUrl(filename,{ hostType }) { if (hostType === 'js') { return { js: `__ASSET__${filename}__` } } else { return { relative: true } } } } });
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vitejs && vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path && path.resolve(__dirname, './src'),
			'@components': path && path.resolve(__dirname, './src/components'),
			'@pages': path && path.resolve(__dirname, './src/pages'),
			'@utils': path && path.resolve(__dirname, './src/utils'),
			'@hooks': path && path.resolve(__dirname, './src/hooks'),
			'@types': path && path.resolve(__dirname, './src/types'),
			'@styles': path && path.resolve(__dirname, './src/styles'),
			'@assets': path && path.resolve(__dirname, './src/assets')
		}
	},
	css: {
		postcss: false
	},
	esbuild: {
		loader: 'tsx',
		include: /src\/.*\.[jt]sx?$/,
		exclude: [],
	},

	build: {
		target: 'esnext',
		minify: 'terser',
		sourcemap: false,
		rollupOptions: {
			output: {
				manualChunks: {
					'react-vendor': ['react', 'react-dom'],

				},
				chunkFileNames: 'js/[name]-[hash].js',
				entryFileNames: 'js/[name]-[hash].js',
				assetFileNames: (assetInfo) => {
});
					const name = assetInfo ;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======

=======
});


  server: {
    port: 3000
    host: true
    open: true
  }
  preview: {
    port: 4173
    host: true
    open: true
  }
});

>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

    },
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
      },
      mangle: {
        safari10: true,
        properties: {
          regex: /^_/,
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: false,
    emptyOutDir: true,
    assetsInlineLimit: 4096,
  },
  optimizeDeps: {
    include: [
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
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    ],
    exclude: ['@radix-ui/react-icons'],
    esbuildOptions: {
      target: 'esnext',
    },
  },
  css: {
    devSourcemap: false,
  },
  server: { 
    port: 3000, 
    host: true, 
    open: true 
  },
<<<<<<< HEAD
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
      if (hostType === 'js') {
        return { js: `__ASSET__${filename}__` };
      } else {
        return { relative: true };
      }
    },
  },
=======
  preview: { 
    port: 4173, 
    host: true, 
    open: true 
  }
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
});
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
