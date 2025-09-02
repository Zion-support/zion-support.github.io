<<<<<<< HEAD
/** @type {import('tailwindcss').Config} */
export default {
=======
/** @type {import(,
  tailwindcss').Config} */
module.exports = {
content: [./pages/**/*.{js,ts,jsx,tsx}',
  './src/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

/** @type {import(
  'tailwindcss').Config} */
module.exports = {darkMode: ["class"],
>>>>>>> origin/main
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
<<<<<<< HEAD
        'zion-cyan': '#06b6d4',
        'zion-purple': '#8b5cf6',
        'zion-slate-dark': '#1e293b',
        'zion-slate-light': '#334155',
=======
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
,
  zion-blue-dark': '#172d67,
,
  zion-blue': '#1e3a8a,
,
  zion-blue-light': '#2e73ea,
,
  zion-purple': '#8c15e9,
,
  zion-purple-dark': '#6b21a8,
,
  zion-purple-light': '#a855f7,
,
  zion-cyan': '#22ddd2,
,
  zion-cyan-dark': '#14b8a6,
,
  zion-slate-light': '#94a3b8,
,
  zion-slate': '#64748b,
,
  zion-slate-dark': '#475569,
>>>>>>> origin/main
      },
    },
  },
  plugins: [],
}