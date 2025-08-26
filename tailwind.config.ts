import type { Config } from 'tailwindcss'

export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'zion-blue': { DEFAULT: '#0ea5e9', dark: '#0b76a8', light: '#38bdf8' },
				'zion-purple': { DEFAULT: '#7c3aed', dark: '#5b21b6', light: '#a78bfa' },
				'zion-cyan': { DEFAULT: '#22d3ee', dark: '#0891b2', light: '#67e8f9' },
				'zion-slate': { DEFAULT: '#64748b', dark: '#334155', light: '#94a3b8' },
				'background': '#0b1220',
			},
		},
	},
	plugins: [],
} satisfies Config