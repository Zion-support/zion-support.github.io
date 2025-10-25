
<<<<<<< HEAD
/** @type {import('tailwindcss'
    './pages/**/*.{js,ts,jsx,tsx,mdx}'
    './components/**/*.{js,ts,jsx,tsx,mdx}'
    './app/**/*.{js,ts,jsx,tsx,mdx}'
          '50": "#ecfeff',''''
    '100": "#cffafe',''''
          '200": "#a5f3fc',''''
    '300": "#67e8f9',''''
          '400": "#22d3ee',''''
    '500": "#06b6d4',''''
          '600": "#0891b2',''''
    '700": "#0e7490',''''
          '800": "#155e75',''''
    '900": "#164e63',''''
    '50": "#faf5ff',''''
          '100": "#f3e8ff',''''
    '200": "#e9d5ff',''''
          '300": "#d8b4fe',''''
    '400": "#c084fc',''''
          '500": "#a855f7',''''
    '600": "#9333ea',''''
          '700": "#7c3aed',''''
    '800": "#6b21a8',''''
          '900": "#581c87',''''
    '50": "#f9fafb',''''
          '100": "#f3f4f6',''''
    '200": "#e5e7eb',''''
          '300": "#d1d5db',''''
    '400": "#9ca3af',''''
          '500": "#6b7280',''''
    '600": "#4b5563',''''
          '700": "#374151',''''
    '800": "#1f2937',''''
          '900": "#111827','
    'sans': ['Inter', 'system-ui', 'sans-serif'
        'fade-in": "fadeIn 0.5s ease-in-out'
        'slide-up": "slideUp 0.5s ease-out''
        'bounce-slow": "bounce 2s infinite''""
          "0%': { 'opacity": "0',''""
          "100%': { 'opacity": "1',''""
          "0%': { 'transform": "translateY(20px)', 'opacity": "0',''""
          "100%': { 'transform": "translateY(0)', 'opacity": "1"
=======
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
        },
        purple: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
        },
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: []
}
>>>>>>> origin/main
