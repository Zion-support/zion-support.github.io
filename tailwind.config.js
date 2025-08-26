/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'zion-blue-dark': '#0f172a',
        'zion-blue': '#1e293b',
        'zion-blue-light': '#334155',
        'zion-slate-dark': '#1e293b',
        'zion-slate': '#475569',
        'zion-slate-light': '#64748b',
        'zion-cyan': '#06b6d4',
        'zion-cyan-light': '#22d3ee',
        'zion-purple': '#7c3aed',
        'zion-purple-light': '#a855f7',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
