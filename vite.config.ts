import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	root: '.',
	publicDir: 'public',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
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
					if (/\.(css)$/.test(name)) return 'css/[name]-[hash].[ext]'
					if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(name)) return 'images/[name]-[hash].[ext]'
					if (/\.(woff2?|eot|ttf|otf)$/.test(name)) return 'fonts/[name]-[hash].[ext]'
					return 'assets/[name]-[hash].[ext]'
				},
			},
			external: [],
		},
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true,
				pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
			},
			mangle: { safari10: true },
		},
		chunkSizeWarningLimit: 1000,
	},
	optimizeDeps: {
		include: ['react', 'react-dom', 'react-router-dom'],
	},
	css: { devSourcemap: false },
	server: { port: 3000, host: true, open: true, cors: true, hmr: { overlay: false } },
	preview: { port: 4173, host: true, open: true },
})
