import type { Config } from 'tailwindcss'
const config: Config = {,
  content: [,
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          cyan: '#00ffff'
          purple: '#8b5cf6'
          pink: '#ec4899'
          blue: '#3b82f6',
          green: '#10b981',
          orange: '#f59e0b',
          red: '#ef4444',
          yellow: '#eab308'},
        dark: {,
          bg: '#0a0a0a',
          darker: '#050505',
          card: '#1 a1 a1 a',
          border: '#2 a2 a2 a'}},
      fontFamily: {,
        orbitron: ['Orbitron', 'monospace'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        exo: ['Exo 2', 'sans-serif'],
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8'},
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          900: '#0f172a'}},
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']},
      animation: {,
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out'},
      keyframes: {,
        fadeIn: {,
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }},
        slideUp: {,
          '0%': { transform: 'translateY(20px)', opacity: '0' },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }}}}},
  plugins: []}

export default config;