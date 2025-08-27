import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
	plugins: [
		react({
			// Handle JSX in .js files
			include: '**/*.{jsx,js,ts,tsx}',
			// Fast refresh
			fastRefresh: true,
			// JSX runtime
			jsxRuntime: 'automatic',
		})
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		},
		extensions: ['.js', '.jsx', '.ts', '.tsx']
	},
	build: {
		target: 'esnext',
		minify: 'terser',
		sourcemap: false,
		// Enhanced chunk splitting for better caching
		chunkSizeWarningLimit: 1000,
		rollupOptions: {
			output: {
				chunkFileNames: 'js/[name]-[hash].js',
				entryFileNames: 'js/[name]-[hash].js',
				assetFileNames: (assetInfo) => {
					if (/\.(css)$/.test(assetInfo.name || '')) return 'css/[name]-[hash].[ext]';
					if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(assetInfo.name || '')) return 'images/[name]-[hash].[ext]';
					if (/\.(woff2?|eot|ttf|otf)$/.test(assetInfo.name || '')) return 'fonts/[name]-[hash].[ext]';
					return 'assets/[name]-[hash].[ext]';
				}
			}
		},
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true,
				pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
				// Enhanced compression
				passes: 2,
				unsafe: true,
				unsafe_comps: true,
				unsafe_math: true,
				unsafe_proto: true,
				unsafe_regexp: true,
				unsafe_undefined: true
			},
			mangle: { 
				safari10: true,
				// Enhanced mangling
				properties: {
					regex: /^_/
				}
			}
		},
		// Enhanced build options
		reportCompressedSize: false,
		emptyOutDir: true,
		assetsInlineLimit: 4096
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
			'i18next',
			'react-i18next'
		],
		exclude: ['@radix-ui/react-icons'],
		// Enhanced dependency optimization
		esbuildOptions: {
			target: 'esnext'
		}
	},
	css: { 
		devSourcemap: false
	},
	server: {
		port: 3000,
		host: true,
		open: true,
		cors: true,
		hmr: { overlay: false },
		// Enhanced dev server
		fs: {
			allow: ['..']
		}
	},
	preview: { 
		port: 4173, 
		host: true, 
		open: true 
	},
	define: {
		__DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
		__PROD__: JSON.stringify(process.env.NODE_ENV === 'production'),
		// Enhanced global definitions
		'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
	},
	esbuild: { 
		drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
		loader: 'tsx',
		include: /src\/.*\.[tj]sx?$/,
		exclude: [],
		// Enhanced esbuild options
		target: 'esnext',
		jsx: 'automatic'
	},
	worker: { format: 'es' },
	envPrefix: ['VITE_', 'ZION_'],
	// Enhanced experimental features
	experimental: {
		renderBuiltUrl(filename, { hostType }) {
			if (hostType === 'js') {
				return { js: `__ASSET__${filename}__` }
			} else {
				return { relative: true }
			}
		}
	}
});
