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
				'zion-slate-dark': '#1e293b',
				'zion-slate-light': '#94a3b8',
				'zion-green': '#10b981',
				'zion-orange': '#f59e0b',
				'zion-red': '#ef4444',
			},
			animation: {
				'fade-in': 'fadeIn 0.5s ease-in-out',
				'slide-up': 'slideUp 0.5s ease-out',
				'slide-down': 'slideDown 0.5s ease-out',
				'slide-left': 'slideLeft 0.5s ease-out',
				'slide-right': 'slideRight 0.5s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'float-delay-1': 'float 6s ease-in-out infinite 1s',
				'float-delay-2': 'float 6s ease-in-out infinite 2s',
				'float-delay-3': 'float 6s ease-in-out infinite 3s',
				'pulse-glow': 'pulseGlow 2s ease-in-out infinite alternate',
				'background-shift': 'backgroundShift 20s ease-in-out infinite',
				'border-gradient': 'borderGradient 3s ease infinite',
				'particle-float': 'particleFloat 15s ease-in-out infinite',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				slideDown: {
					'0%': { transform: 'translateY(-20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				slideLeft: {
					'0%': { transform: 'translateX(20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				slideRight: {
					'0%': { transform: 'translateX(-20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				pulseGlow: {
					'from': { boxShadow: '0 0 20px rgba(34, 221, 210, 0.4)' },
					'to': { boxShadow: '0 0 40px rgba(34, 221, 210, 0.8)' },
				},
				backgroundShift: {
					'0%, 100%': { transform: 'scale(1) rotate(0deg)' },
					'50%': { transform: 'scale(1.1) rotate(1deg)' },
				},
				borderGradient: {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' },
				},
				particleFloat: {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'50%': { transform: 'translateY(-30px) rotate(180deg)' },
				},
			},
			backdropBlur: {
				'xs': '2px',
			},
			boxShadow: {
				'neon-cyan': '0 0 5px #22ddd2, 0 0 10px #22ddd2, 0 0 15px #22ddd2, 0 0 20px #22ddd2',
				'neon-purple': '0 0 5px #8c15e9, 0 0 10px #8c15e9, 0 0 15px #8c15e9, 0 0 20px #8c15e9',
				'neon-green': '0 0 5px #10b981, 0 0 10px #10b981, 0 0 15px #10b981, 0 0 20px #10b981',
				'glow-cyan': '0 0 30px rgba(34, 221, 210, 0.5)',
				'glow-purple': '0 0 30px rgba(140, 21, 233, 0.5)',
				'glow-green': '0 0 30px rgba(16, 185, 129, 0.5)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'gradient-futuristic': 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #1e293b 75%, #0f172a 100%)',
				'gradient-cyan-purple': 'linear-gradient(135deg, #22ddd2 0%, #8c15e9 100%)',
				'gradient-cyan-green': 'linear-gradient(135deg, #22ddd2 0%, #10b981 100%)',
				'gradient-purple-orange': 'linear-gradient(135deg, #8c15e9 0%, #f59e0b 100%)',
			},
			fontFamily: {
				'futuristic': ['Orbitron', 'monospace'],
				'tech': ['JetBrains Mono', 'monospace'],
			},
		},
	},
	plugins: [],
}

export default config
