import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        'zion-blue': {
          DEFAULT: '#2e73ea',
          light: '#8ab1f3',
          dark: '#172d67'
        },
        'zion-purple': {
          DEFAULT: '#a855f7',
          light: '#c084fc',
          dark: '#6b21a8'
        },
        'zion-cyan': {
          DEFAULT: '#0d9488',
          light: '#7aeae4',
          dark: '#0f766e'
        },
        'zion-slate': {
          DEFAULT: '#475569',
          light: '#64748b',
          dark: '#334155'
        },
        'zion-slate-dark': '#1e293b',
        'zion-slate-light': '#cbd5e1'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif']
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
};

export default config;