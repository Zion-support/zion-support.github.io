<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
=======




import { defineConfig } from 'vite';
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/vite.config.ts
import { define_config } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
;
// https://vitejs.dev / config/;
export default define_config ({
  plugins: [react ()],
  resolve: {
    alias: {
      '@': path.resolve (__dirname, './src'),
      '@components': path.resolve (__dirname, './src / components'),
      '@pages': path.resolve (__dirname, './src / pages'),
      '@utils': path.resolve (__dirname, './src / utils'),
      '@hooks': path.resolve (__dirname, './src / hooks'),
      '@types': path.resolve (__dirname, './src / types'),
      '@styles': path.resolve (__dirname, './src / styles'),
      '@assets': path.resolve (__dirname, './src / assets');
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
<<<<<<<< HEAD:vite.config.ts


=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import { defineConfig, splitVendorChunkPlugin } from 'vite';

import {defineConfig, splitVendorChunkPlugin} from 'vite';

=======
import { defineConfig } from 'vite';
>>>>>>> origin/main
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/automation-improvements-final
import react from '@vitejs/plugin-react';

      '@': path && path.resolve(__dirname, './src')
    },
    extensions: ['.js && js.jsx.ts && ts.tsx']
=======

=======
=======
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import {defineConfig, splitVendorChunkPlugin} from 'vite';
import react from '@vitejs/plugin-react';

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

export default defineConfig({
<<<<<<< HEAD
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

=======
  plugins: [
    react({
      include: '**/*.{jsx,js,ts,tsx}',
      fastRefresh: true,

    }),
    splitVendorChunkPlugin(),
  ],
  resolve: {
    alias: {




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  build: {
    target: 'esnext'
    minify: 'terser'
    sourcemap: false
    rollupOptions: {
      output: {
        manualChunks: {



          'react-vendor': ['react', 'react-dom'],
        },
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',

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
=======
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
  css: {
    postcss: false
  },
  esbuild: {
    jsx: 'automatic',
  },
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  build: {
    target: 'esnext',
    minify: 'terser',
    sourcemap: false,
<<<<<<< HEAD
    rollup_options: {
      output: {
        manual_chunks: {
          'react - vendor': ['react', 'react-dom'],
        },
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: (asset_info) => {
          const name = asset_info.name || '';
          if ($/.test (name)) return 'images/[name]-[hash].[ext]') {
  $2
}
          if ($/.test (name)) return 'fonts/[name]-[hash].[ext]') {
  $2
}
          if ($/.test (name)) return 'css/[name]-[hash].[ext]') {
  $2
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
========
=======
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
;
export default defineConfig({;
  plugins:[;
    react({;
      include:'**/*.{jsx,js,ts,tsx}',;
      fastRefresh:true,;
      jsxRuntime:'automatic',;
    }),;
    splitVendorChunkPlugin(),;
  ],;
  resolve:{;
    alias:{;
      '@':path.resolve(__dirname, './src'),;
    },;
    extensions:['.js', '.jsx', '.ts', '.tsx'],;
  },;
  build:{;
    target:'esnext',;
    minify:'terser',;
    sourcemap:false,;
    rollupOptions:{;
      output:{;
        manualChunks:{;
          'react-vendor':['react', 'react-dom'],;
          'ui-vendor':[;
            '@radix-ui/react-accordion',;
            '@radix-ui/react-alert-dialog',;
            '@radix-ui/react-avatar',;
            '@radix-ui/react-checkbox',;
            '@radix-ui/react-collapsible',;
            '@radix-ui/react-dialog',;
            '@radix-ui/react-dropdown-menu',;
            '@radix-ui/react-hover-card',;
            '@radix-ui/react-label',;
            '@radix-ui/react-menubar',;
            '@radix-ui/react-navigation-menu',;
            '@radix-ui/react-popover',;
            '@radix-ui/react-progress',;
            '@radix-ui/react-radio-group',;
            '@radix-ui/react-scroll-area',;
            '@radix-ui/react-select',;
            '@radix-ui/react-separator',;
            '@radix-ui/react-slider',;
            '@radix-ui/react-slot',;
            '@radix-ui/react-switch',;
            '@radix-ui/react-tabs',;
            '@radix-ui/react-toast',;
            '@radix-ui/react-toggle',;
            '@radix-ui/react-tooltip';
          ],;
          'animation-vendor':['framer-motion'],;
          'utils-vendor':['clsx', 'tailwind-merge', 'class-variance-authority'],;
          'icons-vendor':['lucide-react'],;
          'state-vendor':['@reduxjs/toolkit', 'react-redux'],;
          'router-vendor':['react-router-dom'];
        },;
        chunkFileNames:'js/[name]-[hash].js',;
        entryFileNames:'js/[name]-[hash].js',;
        assetFileNames:(assetInfo) => {;
          if (/\.(css)$/.test(assetInfo.name || '')) return 'css/[name]-[hash].[ext]';
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(assetInfo.name || '')) return 'images/[name]-[hash].[ext]';
          if (/\.(woff2?|eot|ttf|otf)$/.test(assetInfo.name || '')) return 'fonts/[name]-[hash].[ext]';
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/vite.config.ts
          return 'assets/[name]-[hash].[ext]';
          if (/\.(css)$/.test(assetInfo ;
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(assetInfo && assetInfo.name || '')) return 'images/[name]-[hash].[ext]';
          if (/\.(woff2?|eot|ttf|otf)$/.test(assetInfo && assetInfo.name || '')) return 'fonts/[name]-[hash].[ext]';
          return 'assets/[name]-[hash].[ext]',
        }
      }
<<<<<<<< HEAD:vite.config.ts

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/vite.config.ts
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console && console.logconsole.infoconsole && infoconsole.debugconsole.warn'],
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
        }
      }
    },
<<<<<<<< HEAD:vite.config.ts

========
    chunkSizeWarningLimit: 1000;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/vite.config.ts
  },
  optimize_deps: {
    include: [;
=======
    rollupOptions: {
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
    chunkSizeWarningLimit: 1000
  },
  optimizeDeps: {
    include: [
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'lucide-react',
      'clsx',
<<<<<<< HEAD
      'tailwind - merge';
    ],
    exclude: ['@radix - ui / react - icons'];
  },
  server: {
    port: 3000,
    host: true,
    open: true;
  },
<<<<<<<< HEAD:vite.config.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/vite.config.ts
  preview: {
    port: 4173,
    host: true,
    open: true;
<<<<<<<< HEAD:vite.config.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/vite.config.ts
  }
});
=======
    },;
    terserOptions:{;
      compress:{;
        drop_console:true,;
        drop_debugger:true,;
        pure_funcs:['console.log', 'console.info', 'console.debug', 'console.warn'],;
        passes:2,;
        unsafe:true,;
        unsafe_comps:true,;
        unsafe_math:true,;
        unsafe_proto:true,;
        unsafe_regexp:true,;
        unsafe_undefined:true,;
      },;
      mangle:{;
        safari10:true,;
        properties:{;
          regex:/^_/,;
        }
      }
    },;
    chunkSizeWarningLimit:1000,;
    reportCompressedSize:false,;
    emptyOutDir:true,;
    assetsInlineLimit:4096,;
  },;
  optimizeDeps:{;
    include:[;
      'react',;
      'react-dom',;
      'react-router-dom',;
      'framer-motion',;
      'lucide-react',;
      '@radix-ui/react-accordion',;
      '@radix-ui/react-alert-dialog',;
      '@radix-ui/react-avatar',;
      '@radix-ui/react-checkbox',;
      '@radix-ui/react-collapsible',;
      '@radix-ui/react-dialog',;
      '@radix-ui/react-dropdown-menu',;
      '@radix-ui/react-label',;
      '@radix-ui/react-popover',;
      '@radix-ui/react-progress',;
      '@radix-ui/react-radio-group',;
      '@radix-ui/react-scroll-area',;
      '@radix-ui/react-select',;
      '@radix-ui/react-separator',;
      '@radix-ui/react-slider',;
      '@radix-ui/react-slot',;
      '@radix-ui/react-switch',;
      '@radix-ui/react-tabs',;
      '@radix-ui/react-toast',;
      '@radix-ui/react-tooltip';
    ],;
    exclude:['@radix-ui/react-icons'],;
    esbuildOptions:{;
      target:'esnext',;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    }
  },;
  css:{;
    devSourcemap:false,;
  },;
  esbuild:{;
    jsx:'automatic',;
  },;
  server:{;
    port:3000,;
    host:true,;
    open:true,;
    cors:true,;
    hmr:{;
      overlay:false,;
    },;
    fs:{;
      allow:['..'],;
    }
  },;
  preview:{;
    port:4173,;
    host:true,;
    open:true,;
  },;
  define:{;
    __DEV__:JSON.stringify(process.env.NODE_ENV === 'development'),;
    __PROD__:JSON.stringify(process.env.NODE_ENV === 'production'),;
    'process.env.NODE_ENV':JSON.stringify(process.env.NODE_ENV),;
  },;
  envPrefix:['VITE_', 'ZION_'],;
  experimental:{;
    renderBuiltUrl(filename, { hostType }) {;
      if (hostType === 'js') {;
        return { js:`__ASSET__${filename}__` };
      } else {;
        return { relative:true };      fastRefresh: true,
      jsxRuntime: 'automatic'
    }),
    splitVendorChunkPlugin()
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
      },    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: [
          'console.log',
          'console.info',
          'console.debug',
          'console.warn',
        ],        passes: 2,
        unsafe: true,
        unsafe_comps: true,
        unsafe_math: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        unsafe_undefined: true
      },
      mangle: {
        safari10: true,
        properties: {
          regex: /^_/,
        },      },        }
      }
    },
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: false,
    emptyOutDir: true,
    assetsInlineLimit: 4096
  },
  optimizeDeps: {
    include: [
<<<<<<<< HEAD:vite.config.ts
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



========
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
      '@radix-ui/react-tooltip',
    ],
    exclude: ['@radix-ui/react-icons'],
    esbuildOptions: {
      target: 'esnext',
    },  },  css: {
    devSourcemap: false
  },
  esbuild: {
    jsx: 'automatic'
  },
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/vite.config.ts
  server: {
    port: 3000,
    host: true,
    open: true,
    cors: true,
    hmr: {
      overlay: false
    },
    fs: {
      allow: ['..'],
    },  },  preview: {
    port: 4173,
    host: true,
    open: true
  },
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
    __PROD__: JSON.stringify(process.env.NODE_ENV === 'production'),
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
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
  }
<<<<<<< HEAD
  preview: {
    port: 4173
    host: true
    open: true
  }
<<<<<<<< HEAD:vite.config.ts


import { defineConfig,splitVendorChunkPlugin } from 'vite'; import react from '@vitejs/plugin-react'; import path from 'node:path'; export default defineConfig({ plugins: [ react({ include: '**/*.{jsx,js,ts,tsx}',fastRefresh: true,jsxRuntime: 'automatic',}),splitVendorChunkPlugin() ],resolve: { alias: { '@': path.resolve(__dirname,'./src') },extensions: ['.js','.jsx','.ts','.tsx'] },build: { target: 'esnext',minify: 'terser',sourcemap: false,rollupOptions: { output: { manualChunks: { 'react-vendor': ['react','react-dom'],'ui-vendor': [ '@radix-ui/react-accordion','@radix-ui/react-alert-dialog','@radix-ui/react-avatar','@radix-ui/react-checkbox','@radix-ui/react-collapsible','@radix-ui/react-context-menu','@radix-ui/react-dialog','@radix-ui/react-dropdown-menu','@radix-ui/react-hover-card','@radix-ui/react-label','@radix-ui/react-menubar','@radix-ui/react-navigation-menu','@radix-ui/react-popover','@radix-ui/react-progress','@radix-ui/react-radio-group','@radix-ui/react-scroll-area','@radix-ui/react-select','@radix-ui/react-separator','@radix-ui/react-slider','@radix-ui/react-slot','@radix-ui/react-switch','@radix-ui/react-tabs','@radix-ui/react-toast','@radix-ui/react-toggle','@radix-ui/react-tooltip' ],'animation-vendor': ['framer-motion'],'utils-vendor': ['clsx','tailwind-merge','class-variance-authority'],'icons-vendor': ['lucide-react'],'state-vendor': ['@reduxjs/toolkit','react-redux'],'router-vendor': ['react-router-dom'] },chunkFileNames: 'js/[name]-[hash].js',entryFileNames: 'js/[name]-[hash].js',assetFileNames: (assetInfo) => { if (/\.(css)$/.test(assetInfo.name || '')) return 'css/[name]-[hash].[ext]'; if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(assetInfo.name || '')) return 'images/[name]-[hash].[ext]'; if (/\.(woff2?|eot|ttf|otf)$/.test(assetInfo.name || '')) return 'fonts/[name]-[hash].[ext]'; return 'assets/[name]-[hash].[ext]'} } },terserOptions: { compress: { drop_console: true,drop_debugger: true,pure_funcs: ['console.log','console.info','console.debug','console.warn'],passes: 2,unsafe: true,unsafe_comps: true,unsafe_math: true,unsafe_proto: true,unsafe_regexp: true,unsafe_undefined: true },mangle: { safari10: true,properties: { regex: /^_/ } } },chunkSizeWarningLimit: 1000,reportCompressedSize: false,emptyOutDir: true,assetsInlineLimit: 4096 },optimizeDeps: { include: [ 'react','react-dom','react-router-dom','framer-motion','lucide-react','@radix-ui/react-accordion','@radix-ui/react-alert-dialog','@radix-ui/react-aspect-ratio','@radix-ui/react-avatar','@radix-ui/react-checkbox','@radix-ui/react-context-menu','@radix-ui/react-dialog','@radix-ui/react-dropdown-menu','@radix-ui/react-label','@radix-ui/react-popover','@radix-ui/react-progress','@radix-ui/react-radio-group','@radix-ui/react-scroll-area','@radix-ui/react-select','@radix-ui/react-separator','@radix-ui/react-slider','@radix-ui/react-slot','@radix-ui/react-switch','@radix-ui/react-tabs','@radix-ui/react-toast','@radix-ui/react-tooltip' ],exclude: ['@radix-ui/react-icons'],esbuildOptions: { target: 'esnext' } },css: { devSourcemap: false },esbuild: { jsx: 'automatic',},server: { port: 3000,host: true,open: true,cors: true,hmr: { overlay: false },fs: { allow: ['..'] } },preview: { port: 4173,host: true,open: true },define: { __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),__PROD__: JSON.stringify(process.env.NODE_ENV === 'production'),'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) },envPrefix: ['VITE_','ZION_'],experimental: { renderBuiltUrl(filename,{ hostType }) { if (hostType === 'js') { return { js: `__ASSET__${filename}__` } } else { return { relative: true } } } } });
=======
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/vite.config.ts
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
<<<<<<<< HEAD:vite.config.ts

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/vite.config.ts
				},
				chunkFileNames: 'js/[name]-[hash].js',
				entryFileNames: 'js/[name]-[hash].js',
				assetFileNames: (assetInfo) => {
<<<<<<<< HEAD:vite.config.ts
<<<<<<< HEAD
					const name = assetInfo.name || ''
					if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(name)) return 'images/[name]-[hash].[ext]'
					if (/\.(woff2?|eot|ttf|otf)$/.test(name)) return 'fonts/[name]-[hash].[ext]'
					if (/\.(css)$/.test(name)) return 'css/[name]-[hash].[ext]'
					return 'assets/[name]-[hash].[ext]'
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
			'tailwind-merge'
		],
		exclude: ['@radix-ui/react-icons']
	},
	server: { port: 3000, host: true, open: true },
	preview: { port: 4173, host: true, open: true }
})
========
});
					const name = assetInfo ;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/vite.config.ts
=======

});
<<<<<<<< HEAD:vite.config.ts

>>>>>>> origin/automation-improvements-final
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
					const name = assetInfo ;
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

    },
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: false,
    emptyOutDir: true,
    assetsInlineLimit: 4096,
  },
  optimizeDeps: {
    include: [
      'reactreact-domreact-router-domframer-motion',
      'lucide-react@radix-ui/react-accordion@radix-ui/react-alert-dialog@radix-ui/react-avatar',
      '@radix-ui/react-checkbox@radix-ui/react-collapsible@radix-ui/react-dialog@radix-ui/react-dropdown-menu',
      '@radix-ui/react-label@radix-ui/react-popover@radix-ui/react-progress@radix-ui/react-radio-group',
      '@radix-ui/react-scroll-area@radix-ui/react-select@radix-ui/react-separator@radix-ui/react-slider',
      '@radix-ui/react-slot@radix-ui/react-switch@radix-ui/react-tabs@radix-ui/react-toast',
      '@radix-ui/react-tooltip'
    ],
    exclude: ['@radix-ui/react-icons'],
    esbuildOptions: {

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

  },
  preview: {
    port: 4173,
    host: true,
    open: true,
  },
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
    __PROD__: JSON.stringify(process.env.NODE_ENV === 'production'),

  experimental: {
    renderBuiltUrl(filename, { hostType }) {
      if (hostType === 'js') {
        return { js: `__ASSET__${filename}__` };
      } else {
        return { relative: true };



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/vite.config.ts
=======
      'tailwind-merge'
    ],
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
  }
});
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
