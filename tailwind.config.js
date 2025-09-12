/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'zion-blue': '#2e73ea',
        'zion-blue-light': '#8ab1f3',
        'zion-blue-dark': '#172d67',
        'zion-purple': '#8c15e9',
        'zion-purple-light': '#b971f2',
        'zion-purple-dark': '#530c8b',
        'zion-cyan': '#22ddd2',
        'zion-cyan-light': '#7aeae4',
        'zion-cyan-dark': '#14847e',
        'zion-slate': '#17072b',
        'zion-slate-light': '#451582',
        'zion-slate-dark': '#000000',
        'zion-green': '#10b981',
        'zion-orange': '#f59e0b',
        'zion-red': '#ef4444',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(34, 221, 210, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(34, 221, 210, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}