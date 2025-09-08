import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

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
			'@assets': resolve(__dirname, './src/assets')
		}
	},
	server: { port: 3000, host: true, open: true },
	preview: { port: 4173, host: true, open: true }
});
