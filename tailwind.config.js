
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}'
    './components/**/*.{js,ts,jsx,tsx,mdx}'
    './app/**/*.{js,ts,jsx,tsx,mdx}']
  theme: {,
    extend: {
      color,
  s: {,
    primary: {
          5,
  0: '#ecfeff',
    100: '#cffafe'
          20,
  0: '#a5f3fc',
    300: '#67e8f9'
          40,
  0: '#22d3ee',
    500: '#06b6d4'
          60,
  0: '#0891b2',
    700: '#0e7490'
          80,
  0: '#155e75',
    900: '#164e63'}
        secondary: {,
    50: '#faf5ff'
          10,
  0: '#f3e8ff',
    200: '#e9d5ff'
          30,
  0: '#d8b4fe',
    400: '#c084fc'
          50,
  0: '#a855f7',
    600: '#9333ea'
          70,
  0: '#7c3aed',
    800: '#6b21a8'
          90,
  0: '#581c87'}
        gray: {,
    50: '#f9fafb'
          10,
  0: '#f3f4f6',
    200: '#e5e7eb'
          30,
  0: '#d1d5db',
    400: '#9ca3af'
          50,
  0: '#6b7280',
    600: '#4b5563'
          70,
  0: '#374151',
    800: '#1f2937'
          90,
  0: '#111827'}}
      fontFamily: {,
    sans: ['Inter', 'system-ui', 'sans-serif']}
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out'
        'slide-up': 'slideUp 0.5s ease-out'
        'bounce-slow': 'bounce 2s infinite'}
      keyframes: {,
    fadeIn: {
          '0%': { opacit,
  y: '0' }
          '100%': { opacity: '1' }}
        slideUp: {
          '0%': { transfor,
  m: 'translateY(20px)', opacity: '0' }
          '100%': { transform: 'translateY(0)', opacity: '1' }}}}}
  plugins: []}