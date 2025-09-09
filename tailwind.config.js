/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        // Zion brand colors
        'zion-blue-dark': '#0f172a',
        'zion-blue': '#1e40af',
        'zion-blue-light': '#1e293b',
        'zion-slate': '#334155',
        'zion-slate-light': '#64748b',
        'zion-purple': '#7c3aed',
        'zion-purple-dark': '#581c87',
        'zion-purple-light': '#a855f7',
        'zion-cyan': '#06b6d4',
        'zion-cyan-light': '#22d3ee',
        'zion-green': '#10b981',
        'zion-orange': '#f59e0b',
        'zion-red': '#ef4444',
        
        // CSS Variables for components
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};
