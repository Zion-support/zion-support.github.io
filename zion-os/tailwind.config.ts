import type { Config } from "tailwindcss",

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        'zion-blue': '#3b82f6zion-purple': '#8b5cf6zion-green': '#10b981zion-orange': '#f59e0bzion-red': '#ef4444zion-teal': '#14b8a6zion-cyan': '#06b6d4zion-indigo': '#6366f1zion-emerald': '#059669zion-pink': '#ec4899'
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-outslide-up': 'slideUp 0.8s ease-outbounce-slow': 'bounce 2s infinitepulse-slow': 'pulse 3s infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      backdropBlur: {
        xs: '2px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
},

export default config,