/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx,html}',
		'./public/**/*.html',
	],
	theme: {
		extend: {
			colors: {
				// Zion palette
				'zion-blue': {
					DEFAULT: '#3b82f6',
					light: '#93c5fd',
					dark: '#1e3a8a',
				},
				'zion-purple': {
					DEFAULT: '#8b5cf6',
					dark: '#6d28d9',
				},
				'zion-cyan': {
					DEFAULT: '#22d3ee',
					light: '#67e8f9',
				},
				'zion-slate': {
					light: '#94a3b8',
					dark: '#0f172a',
				},
				// UI tokens (shadcn-style)
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
		},
	},
	plugins: [],
}