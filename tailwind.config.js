/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-cyan': '#00ffff',
        'cyber-purple': '#ff00ff',
        'cyber-pink': '#ff1493',
      },
      animation: {
        'cyber-glow': 'cyber-glow 3s ease-in-out infinite',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite alternate',
        'energy-pulse': 'energy-pulse 2s ease-in-out infinite',
        'scan-line': 'scan-line 3s linear infinite',
      },
      keyframes: {
        'cyber-glow': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'neon-pulse': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0.7' },
        },
        'energy-pulse': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        'scan-line': {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
      },
    },
  },
  plugins: [],
}
