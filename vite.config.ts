import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

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
