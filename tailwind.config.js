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
        'zion-blue-light': '#1e293b',
        'zion-slate': '#334155',
        'zion-purple-dark': '#581c87',
        'zion-cyan': '#06b6d4',
        'zion-green': '#10b981',
        'zion-orange': '#f59e0b',
        'zion-red': '#ef4444',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'orbitron': ['Orbitron', 'monospace'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true,
  },
}
