import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	build: {
		target: 'esnext',
		minify: 'terser',
		sourcemap: false,
		chunkSizeWarningLimit: 1000,
		rollupOptions: {
			output: {
				manualChunks: {
					'react-vendor': ['react', 'react-dom'],
					'animation-vendor': ['framer-motion'],
					'icons-vendor': ['lucide-react'],
				},
				entryFileNames: 'js/[name]-[hash].js',
				chunkFileNames: 'js/[name]-[hash].js',
				assetFileNames: (assetInfo) => {
					const name = assetInfo.name || ''
					if (/\.css$/.test(name)) return 'css/[name]-[hash].[ext]'
					if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(name)) return 'images/[name]-[hash].[ext]'
					if (/\.(woff2?|eot|ttf|otf)$/.test(name)) return 'fonts/[name]-[hash].[ext]'
					return 'assets/[name]-[hash].[ext]'
				},
			},
		},
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true,
				pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
			},
			mangle: { safari10: true },
		},
	},
	optimizeDeps: {
		include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'lucide-react'],
		exclude: [],
	},
	css: { devSourcemap: false },
	esbuild: {
		jsx: 'automatic',
	},
	server: {
		port: 3000,
		host: true,
		open: false,
		cors: true,
		hmr: { overlay: false },
	},
	preview: { port: 4173, host: true, open: false },
	define: {
		__DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
		__PROD__: JSON.stringify(process.env.NODE_ENV === 'production'),
	},
	envPrefix: ['VITE_', 'ZION_'],
})
