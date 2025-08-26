/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
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
        // Enhanced Zion brand colors
        'zion-blue-dark': '#172d67',
        'zion-blue': '#1e3a8a',
        'zion-blue-light': '#2e73ea',
        'zion-purple': '#8c15e9',
        'zion-purple-dark': '#6b21a8',
        'zion-purple-light': '#a855f7',
        'zion-cyan': '#22ddd2',
        'zion-cyan-dark': '#14b8a6',
        'zion-slate-light': '#94a3b8',
        'zion-slate': '#64748b',
        'zion-slate-dark': '#475569',
        // Additional colors for enhanced design
        'zion-green': '#10b981',
        'zion-green-light': '#34d399',
        'zion-yellow': '#f59e0b',
        'zion-yellow-light': '#fbbf24',
        'zion-orange': '#f97316',
        'zion-orange-light': '#fb923c',
        'zion-red': '#ef4444',
        'zion-red-light': '#f87171',
        'zion-pink': '#ec4899',
        'zion-pink-light': '#f472b6',
        'zion-indigo': '#6366f1',
        'zion-indigo-light': '#818cf8',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s linear infinite',
        'gradient': 'gradient 8s ease infinite',
        'neon-pulse': 'neon-pulse 1.5s ease-in-out infinite alternate',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.5s ease-out forwards',
        'scale-in': 'scale-in 0.3s ease-out forwards',
        'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'text-shimmer': 'text-shimmer 3s ease-in-out infinite',
        'border-glow': 'border-glow 2s ease-in-out infinite',
        'floating-delay-1': 'floating-delay-1 6s ease-in-out infinite',
        'floating-delay-2': 'floating-delay-2 6s ease-in-out infinite',
        'floating-delay-3': 'floating-delay-3 6s ease-in-out infinite',
        'floating-delay-4': 'floating-delay-4 6s ease-in-out infinite',
        'floating-delay-5': 'floating-delay-5 6s ease-in-out infinite',
        'floating-delay-6': 'floating-delay-6 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(34, 221, 210, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(34, 221, 210, 0.8), 0 0 40px rgba(34, 221, 210, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'neon-pulse': {
          '0%': { 
            textShadow: '0 0 5px rgba(34, 221, 210, 0.5), 0 0 10px rgba(34, 221, 210, 0.3), 0 0 15px rgba(34, 221, 210, 0.1)' 
          },
          '100%': { 
            textShadow: '0 0 10px rgba(34, 221, 210, 0.8), 0 0 20px rgba(34, 221, 210, 0.6), 0 0 30px rgba(34, 221, 210, 0.4)' 
          },
        },
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: 0, transform: 'translateX(30px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: 0, transform: 'scale(0.9)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        'bounce-gentle': {
          '0%, 20%, 53%, 80%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '40%, 43%': { transform: 'translate3d(0, -8px, 0)' },
          '70%': { transform: 'translate3d(0, -4px, 0)' },
          '90%': { transform: 'translate3d(0, -2px, 0)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(34, 221, 210, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(34, 221, 210, 0.6), 0 0 60px rgba(34, 221, 210, 0.4)' },
        },
        'text-shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'border-glow': {
          '0%, 100%': { 
            borderColor: 'rgba(34, 221, 210, 0.3)',
            boxShadow: '0 0 10px rgba(34, 221, 210, 0.2)'
          },
          '50%': { 
            borderColor: 'rgba(34, 221, 210, 0.6)',
            boxShadow: '0 0 20px rgba(34, 221, 210, 0.4)'
          },
        },
        'floating-delay-1': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'floating-delay-2': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-25px)' },
        },
        'floating-delay-3': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        'floating-delay-4': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'floating-delay-5': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-22px)' },
        },
        'floating-delay-6': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
        '4xl': '72px',
      },
      boxShadow: {
        'zion-glow': '0 0 30px rgba(34, 221, 210, 0.3), 0 0 60px rgba(34, 221, 210, 0.1)',
        'zion-glow-strong': '0 0 40px rgba(34, 221, 210, 0.4), 0 0 80px rgba(34, 221, 210, 0.2)',
        'zion-glow-purple': '0 0 30px rgba(140, 21, 233, 0.3), 0 0 60px rgba(140, 21, 233, 0.1)',
      },
      fontFamily: {
        'display': ['Orbitron', 'monospace'],
        'body': ['Inter', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      zIndex: {
        'behind': '-1',
        'floating': '1000',
        'modal': '2000',
        'tooltip': '3000',
        'dropdown': '4000',
        'sticky': '5000',
        'overlay': '6000',
        'modal-overlay': '7000',
        'popover': '8000',
        'toast': '9000',
        'tooltip-overlay': '10000',
      },
    },
  },
  plugins: [],
}

