import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
			'@components': resolve(__dirname, './src/components'),
			'@pages': resolve(__dirname, './src/pages'),
			'@utils': resolve(__dirname, './src/utils'),
			'@hooks': resolve(__dirname, './src/hooks'),
			'@types': resolve(__dirname, './src/types'),
			'@styles': resolve(__dirname, './src/styles'),
			'@assets': resolve(__dirname, './src/assets'),
		},
	},
	build: {
		target: 'esnext',
		minify: 'esbuild',
		sourcemap: false,
		rollupOptions: {
			output: {
				manualChunks: {
					'react-vendor': ['react', 'react-dom'],
				},
				entryFileNames: 'js/[name]-[hash].js',
				chunkFileNames: 'js/[name]-[hash].js',
				assetFileNames: (assetInfo) => {
					const name = assetInfo.name || ''
					if (/\.(css)$/.test(name)) return 'css/[name]-[hash].[ext]'
					if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(name)) return 'images/[name]-[hash].[ext]'
					if (/\.(woff2?|eot|ttf|otf)$/.test(name)) return 'fonts/[name]-[hash].[ext]'
					return 'assets/[name]-[hash].[ext]'
				},
			},
		},
		chunkSizeWarningLimit: 1000,
	},
	optimizeDeps: {
		include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'lucide-react', 'clsx', 'tailwind-merge'],
		exclude: ['@radix-ui/react-icons'],
	},
	css: { devSourcemap: false },
	server: {
		port: 3000,
		host: true,
		open: true,
		cors: true,
		hmr: { overlay: false },
	},
	preview: {
		port: 4173,
		host: true,
		open: true,
	},
	define: {
		__DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
		__PROD__: JSON.stringify(process.env.NODE_ENV === 'production'),
	},
	envPrefix: ['VITE_', 'ZION_'],
})
