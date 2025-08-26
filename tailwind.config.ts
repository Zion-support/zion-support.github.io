import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './components/**/*.{ts,tsx}', './pages/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'zion-blue': { DEFAULT: '#1e3a8a', dark: '#172554', light: '#3b82f6' },
				'zion-purple': { DEFAULT: '#8c15e9', dark: '#6b21a8', light: '#a855f7' },
				'zion-cyan': { DEFAULT: '#22ddd2', dark: '#14b8a6', light: '#5fe8e0' },
				'zion-slate': { DEFAULT: '#64748b', dark: '#334155', light: '#94a3b8' },
			},
		},
	},
	plugins: [],
}

export default config
