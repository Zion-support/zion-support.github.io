/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}./components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'fade-in': 'fadeIn 0.6s ease-out forwardsfade-in-up': 'fadeInUp 0.6s ease-out forwardsfade-in-down': 'fadeInDown 0.6s ease-out forwardsslide-in-left': 'slideInLeft 0.6s ease-out forwardsslide-in-right': 'slideInRight 0.6s ease-out forwardsscale-in': 'scaleIn 0.6s ease-out forwardsfloat': 'float 6s ease-in-out infinitepulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinitebounce-slow': 'bounce 2s infiniteglow': 'glow 2s ease-in-out infinite alternateshimmer': 'shimmer 2.5s linear infinitematrix': 'matrix 20s linear infiniteneon-pulse': 'neonPulse 1.5s ease-in-out infinitecyber-float': 'cyberFloat 8s ease-in-out infinitehologram': 'hologram 3s ease-in-out infiniteenergy-wave': 'energyWave 4s ease-in-out infinitequantum-spin': 'quantumSpin 6s linear infiniteneural-network': 'neuralNetwork 10s linear infiniteplasma-flow': 'plasmaFlow 5s ease-in-out infinitecyber-grid': 'cyberGrid 15s linear infinite',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',


    './src/**/*.{js,ts,jsx,tsx,mdx}',

    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
background: 'var(--background)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },

      },
    },
  },
  plugins: [],

