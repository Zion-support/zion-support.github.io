/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'zion-blue': '#0f172a',
        'zion-blue-dark': '#020617',
        'zion-blue-light': '#1e293b',
        'zion-cyan': '#06b6d4',
        'zion-cyan-light': '#22d3ee',
        'zion-purple': '#581c87',
        'zion-purple-light': '#7c3aed',
        'zion-slate': '#64748b',
        'zion-slate-light': '#94a3b8',
        'zion-slate-dark': '#334155',
      },
    },
  },
  plugins: [],
}
