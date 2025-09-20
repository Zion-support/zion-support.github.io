import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react({
			// Enable React Fast Refresh for better development experience
			fastRefresh: true,
			// Optimize JSX runtime
			jsxRuntime: 'automatic',
			// Enable babel plugins for better tree shaking
			babel: {
				plugins: [
					['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }]
				]
			}
		})
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
	css: {
		postcss: './postcss.config.js',
		// Enable CSS code splitting and optimization
		devSourcemap: false
	},
	esbuild: {
		loader: 'tsx',
		include: /(src\/.*\.[jt]sx?|App\.tsx)$/,
		exclude: [],
		// Optimize for production
		target: 'es2020',
		// Enable tree shaking
		treeShaking: true,
		// Minify in production
		minify: true,
		// Drop console logs in production
		drop: ['console', 'debugger']
	},

	build: {
		target: 'esnext',
		minify: 'terser',
		sourcemap: false,
		// Enable CSS code splitting
		cssCodeSplit: true,
		// Optimize asset handling
		assetsInlineLimit: 4096,
		rollupOptions: {
			output: {
				manualChunks: {
					'react-vendor': ['react', 'react-dom'],
					'router-vendor': ['react-router-dom'],
					'ui-vendor': ['framer-motion', 'lucide-react'],
					'utils-vendor': ['clsx', 'tailwind-merge']
				},
				chunkFileNames: 'js/[name]-[hash].js',
				entryFileNames: 'js/[name]-[hash].js',
				assetFileNames: (assetInfo) => {
					const name = assetInfo.name || ''
					if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(name)) return 'images/[name]-[hash].[ext]'
					if (/\.(woff2?|eot|ttf|otf)$/.test(name)) return 'fonts/[name]-[hash].[ext]'
					if (/\.(css)$/.test(name)) return 'css/[name]-[hash].[ext]'
					return 'assets/[name]-[hash].[ext]'
				}
			}
		},
		chunkSizeWarningLimit: 1000,
		// Enable compression
		reportCompressedSize: true
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
		// Enable pre-bundling for faster dev startup
		force: false
	},
	server: { 
		port: 3000, 
		host: true, 
		open: true,
		// Enable HMR for better development experience
		hmr: {
			overlay: false
		}
	},
	preview: { 
		port: 4173, 
		host: true, 
		open: true,
		// Enable gzip compression in preview
		compress: true
	},
	// Enable experimental features for better performance
	experimental: {
		// Enable renderBuiltUrl for better asset handling
		renderBuiltUrl(filename: string, { hostType }: { hostType: 'js' | 'css' | 'html' }) {
			if (hostType === 'js') {
				return { js: `/${filename}` }
			} else {
				return { relative: true }
			}
		}
	}
})