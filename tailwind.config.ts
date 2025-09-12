import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./index.html",
  ],
  safelist: ['border-border'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
        },
        'zion-purple': {
          DEFAULT: '#a855f7',
          light: '#c084fc',
          dark: '#6b21a8',
        },
        'zion-cyan': {
          DEFAULT: '#0d9488',
          light: '#7aeae4',
          dark: '#0f766e',
        },
        'zion-slate': {
          DEFAULT: '#17072b',
          light: '#451582',
          dark: '#000000',
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        // Zion Tech Group Color Palette
        'zion-cyan': '#00ffff',
        'zion-purple': '#8b5cf6',
        'zion-pink': '#ec4899',
        'zion-blue': '#3b82f6',
        'zion-green': '#10b981',
        'zion-yellow': '#f59e0b',
        'zion-orange': '#f97316',
        'zion-red': '#ef4444',
        'zion-indigo': '#6366f1',
        'zion-teal': '#14b8a6',
        'zion-rose': '#f43f5e',
        // Zion Dark Theme
        'zion-bg-primary': '#0a0a0a',
        'zion-bg-secondary': '#111111',
        'zion-bg-tertiary': '#1a1a1a',
        'zion-text-primary': '#ffffff',
        'zion-text-secondary': '#a1a1aa',
        'zion-text-muted': '#71717a',
        'zion-border': '#27272a',
        'zion-border-light': '#3f3f46',
      },
      fontFamily: {
        sans: ['Orbitron', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-out': 'fadeOut 0.5s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'slide-out': 'slideOut 0.3s ease-in',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 3s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'holographic': 'holographic 3s ease-in-out infinite',
        'quantum-sweep': 'quantum-sweep 2s linear infinite',
        'neural-pulse': 'neural-pulse 1.5s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)' },
          'to': { boxShadow: '0 0 30px rgba(0, 255, 255, 0.8)' },
        },
        holographic: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'quantum-sweep': {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
        'neural-pulse': {
          '0%, 100%': { transform: 'scale(0)', opacity: '0' },
          '50%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'gradient-y': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center bottom'
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '400% 400%',
            'background-position': 'right center'
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'zion-gradient': 'linear-gradient(135deg, #00ffff 0%, #8b5cf6 50%, #ec4899 100%)',
        'zion-gradient-horizontal': 'linear-gradient(90deg, #00ffff 0%, #8b5cf6 50%, #ec4899 100%)',
        'zion-gradient-vertical': 'linear-gradient(180deg, #00ffff 0%, #8b5cf6 50%, #ec4899 100%)',
        'holographic': 'linear-gradient(45deg, #00ffff, #8b5cf6, #ec4899, #00ffff)',
        'quantum-field': 'radial-gradient(ellipse at center, rgba(0, 255, 255, 0.1) 0%, transparent 70%)',
        'neural-network': 'linear-gradient(45deg, #00ff80, #8000ff, #ff0080, #00ffff)',
        'cyberpunk-grid': 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
      },
      boxShadow: {
        'zion-glow': '0 0 20px rgba(0, 255, 255, 0.3)',
        'zion-glow-lg': '0 0 40px rgba(0, 255, 255, 0.4)',
        'zion-glow-xl': '0 0 60px rgba(0, 255, 255, 0.5)',
        'zion-purple-glow': '0 0 20px rgba(139, 92, 246, 0.3)',
        'zion-pink-glow': '0 0 20px rgba(236, 72, 153, 0.3)',
        'inner-zion': 'inset 0 2px 4px 0 rgba(0, 255, 255, 0.1)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
        '4xl': '1920px',
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities, addComponents, theme }) {
      addUtilities({
        '.text-zion-gradient': {
          background: 'linear-gradient(135deg, #00ffff 0%, #8b5cf6 50%, #ec4899 100%)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.bg-zion-gradient': {
          background: 'linear-gradient(135deg, #00ffff 0%, #8b5cf6 50%, #ec4899 100%)',
        },
        '.border-zion-gradient': {
          border: '1px solid transparent',
          background: 'linear-gradient(135deg, #00ffff 0%, #8b5cf6 50%, #ec4899 100%) border-box',
          '-webkit-mask': 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
          '-webkit-mask-composite': 'xor',
          'mask-composite': 'exclude',
        },
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.scrollbar-zion': {
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: theme('colors.slate.900'),
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'rgba(0, 255, 255, 0.5)',
            'border-radius': '9999px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: 'rgba(0, 255, 255, 0.7)',
          },
        },
      });

      addComponents({
        '.zion-card': {
          background: 'rgba(255, 255, 255, 0.05)',
          'backdrop-filter': 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          'border-radius': '1rem',
        },
        '.zion-button': {
          padding: '0.75rem 1.5rem',
          background: 'linear-gradient(135deg, #00ffff 0%, #8b5cf6 100%)',
          color: 'white',
          'font-weight': '600',
          'border-radius': '0.75rem',
          'box-shadow': '0 4px 15px rgba(0, 255, 255, 0.25)',
          transition: 'all 0.3s ease',
          '&:hover': {
            'box-shadow': '0 6px 20px rgba(0, 255, 255, 0.4)',
            transform: 'translateY(-2px)',
          },
        },
        '.zion-input': {
          padding: '0.75rem 1rem',
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          'border-radius': '0.75rem',
          color: 'white',
          '&::placeholder': {
            color: 'rgba(156, 163, 175, 1)',
          },
          '&:focus': {
            outline: 'none',
            'border-color': '#00ffff',
            'box-shadow': '0 0 0 1px rgba(0, 255, 255, 0.5)',
          },
        },
        '.futuristic-glow': {
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: '0',
            background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.2) 0%, rgba(139, 92, 246, 0.2) 50%, rgba(236, 72, 153, 0.2) 100%)',
            'border-radius': '1rem',
            filter: 'blur(20px)',
            opacity: '0',
            transition: 'opacity 0.3s ease',
            'z-index': '-1',
          },
          '&:hover::before': {
            opacity: '1',
          },
        },
      });
    }),
  ],
};

export default config;