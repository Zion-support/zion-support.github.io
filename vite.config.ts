<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { defineConfig, splitVendorChunkPlugin } from 'vite';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import react from '@vitejs/plugin-react';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: '**/*.{jsx,js,ts,tsx}',
      fastRefresh: true,
    }),
    splitVendorChunkPlugin(),
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
      '@assets': path.resolve(__dirname, './src/assets')
    }
  },
=======
      '@assets': path.resolve(__dirname, './src/assets'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  build: {
    target: 'esnext',
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {



          if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(name)) return 'images/[name]-[hash].[ext]';
          if (/\.(woff2?|eot|ttf|otf)$/.test(name)) return 'fonts/[name]-[hash].[ext]';
          if (/\.(css)$/.test(name)) return 'css/[name]-[hash].[ext]';
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
=======
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
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(name)) return 'images/[name]-[hash].[ext]';
          if (/\.(woff2?|eot|ttf|otf)$/.test(name)) return 'fonts/[name]-[hash].[ext]';
          return 'assets/[name]-[hash].[ext]';
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        }
      }
    },
=======
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
      'tailwind-merge'
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


import { defineConfig,splitVendorChunkPlugin } from 'vite'; import react from '@vitejs/plugin-react'; import path from 'node:path'; export default defineConfig({ plugins: [ react({ include: '**/*.{jsx,js,ts,tsx}',fastRefresh: true,jsxRuntime: 'automatic',}),splitVendorChunkPlugin() ],resolve: { alias: { '@': path.resolve(__dirname,'./src') },extensions: ['.js','.jsx','.ts','.tsx'] },build: { target: 'esnext',minify: 'terser',sourcemap: false,rollupOptions: { output: { manualChunks: { 'react-vendor': ['react','react-dom'],'ui-vendor': [ '@radix-ui/react-accordion','@radix-ui/react-alert-dialog','@radix-ui/react-avatar','@radix-ui/react-checkbox','@radix-ui/react-collapsible','@radix-ui/react-context-menu','@radix-ui/react-dialog','@radix-ui/react-dropdown-menu','@radix-ui/react-hover-card','@radix-ui/react-label','@radix-ui/react-menubar','@radix-ui/react-navigation-menu','@radix-ui/react-popover','@radix-ui/react-progress','@radix-ui/react-radio-group','@radix-ui/react-scroll-area','@radix-ui/react-select','@radix-ui/react-separator','@radix-ui/react-slider','@radix-ui/react-slot','@radix-ui/react-switch','@radix-ui/react-tabs','@radix-ui/react-toast','@radix-ui/react-toggle','@radix-ui/react-tooltip' ],'animation-vendor': ['framer-motion'],'utils-vendor': ['clsx','tailwind-merge','class-variance-authority'],'icons-vendor': ['lucide-react'],'state-vendor': ['@reduxjs/toolkit','react-redux'],'router-vendor': ['react-router-dom'] },chunkFileNames: 'js/[name]-[hash].js',entryFileNames: 'js/[name]-[hash].js',assetFileNames: (assetInfo) => { if (/\.(css)$/.test(assetInfo.name || '')) return 'css/[name]-[hash].[ext]'; if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(assetInfo.name || '')) return 'images/[name]-[hash].[ext]'; if (/\.(woff2?|eot|ttf|otf)$/.test(assetInfo.name || '')) return 'fonts/[name]-[hash].[ext]'; return 'assets/[name]-[hash].[ext]'} } },terserOptions: { compress: { drop_console: true,drop_debugger: true,pure_funcs: ['console.log','console.info','console.debug','console.warn'],passes: 2,unsafe: true,unsafe_comps: true,unsafe_math: true,unsafe_proto: true,unsafe_regexp: true,unsafe_undefined: true },mangle: { safari10: true,properties: { regex: /^_/ } } },chunkSizeWarningLimit: 1000,reportCompressedSize: false,emptyOutDir: true,assetsInlineLimit: 4096 },optimizeDeps: { include: [ 'react','react-dom','react-router-dom','framer-motion','lucide-react','@radix-ui/react-accordion','@radix-ui/react-alert-dialog','@radix-ui/react-aspect-ratio','@radix-ui/react-avatar','@radix-ui/react-checkbox','@radix-ui/react-context-menu','@radix-ui/react-dialog','@radix-ui/react-dropdown-menu','@radix-ui/react-label','@radix-ui/react-popover','@radix-ui/react-progress','@radix-ui/react-radio-group','@radix-ui/react-scroll-area','@radix-ui/react-select','@radix-ui/react-separator','@radix-ui/react-slider','@radix-ui/react-slot','@radix-ui/react-switch','@radix-ui/react-tabs','@radix-ui/react-toast','@radix-ui/react-tooltip' ],exclude: ['@radix-ui/react-icons'],esbuildOptions: { target: 'esnext' } },css: { devSourcemap: false },esbuild: { jsx: 'automatic',},server: { port: 3000,host: true,open: true,cors: true,hmr: { overlay: false },fs: { allow: ['..'] } },preview: { port: 4173,host: true,open: true },define: { __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),__PROD__: JSON.stringify(process.env.NODE_ENV === 'production'),'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) },envPrefix: ['VITE_','ZION_'],experimental: { renderBuiltUrl(filename,{ hostType }) { if (hostType === 'js') { return { js: `__ASSET__${filename}__` } } else { return { relative: true } } } } });
import { defineConfig } from 'vite'
=======
import { defineConfig } from 'vite''
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

>>>>>>> origin/automation-improvements-final
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
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
=======
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: false,
    emptyOutDir: true,
    assetsInlineLimit: 4096,
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
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
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
    exclude: ['@radix-ui/react-icons']
  },
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
    open: true,
  },
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
    __PROD__: JSON.stringify(process.env.NODE_ENV === 'production'),
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
  }
});
<<<<<<< HEAD
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
});
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { defineConfig } from 'vite'
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
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

// https://vitejs.dev/config/
export default defineConfig({}
  plugins: [react()],
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  server: {
    port: 3000,
    host: true
=======
  server: {};
    port: 3000,;
    host: true;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  },
  build: {'
    outDir: 'dist',
<<<<<<< HEAD
    sourcemap: true
<<<<<<< HEAD
<<<<<<< HEAD
  }
<<<<<<< HEAD
})
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
=======
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          animations: ['framer-motion']
        }
      }
    }
  }
});
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
})
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  },
  resolve: {
    alias: {
      '@': '/workspace/src'
    }
  },
  css: {
    postcss: {
      plugins: []
    }
  }
})
<<<<<<< HEAD
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    sourcemap: true;
  }
})'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
