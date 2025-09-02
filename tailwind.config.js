/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'zion-cyan': '#06b6d4',
        'zion-purple': '#8b5cf6',
        'zion-slate-dark': '#1e293b',
        'zion-slate-light': '#334155',
      },
    },
  },
  plugins: [],
}