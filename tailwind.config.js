/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
        },
        accent: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        neon: {
          cyan: '#00ffff',
          pink: '#ff00ff',
          green: '#00ff00',
          blue: '#0080ff',
          purple: '#8000ff',
          orange: '#ff8000',
          yellow: '#ffff00',
        },
        cyber: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        futuristic: {
          dark: '#0a0a0a',
          darker: '#050505',
          light: '#1a1a2e',
          accent: '#16213e',
          neon: '#00d4ff',
          glow: '#00ffff',
        }
      },
      font Family: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Jet Brains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fade In 0.5s ease-in-out',
        'slide-up': 'slide Up 0.5s ease-out',
        'slide-down': 'slide Down 0.5s ease-out',
        'scale-in': 'scale In 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'gradient': 'gradient 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'neon-pulse': 'neon Pulse 2s ease-in-out infinite alternate',
        'cyber-scan': 'cyber Scan 3s linear infinite',
        'matrix-rain': 'matrix Rain 20s linear infinite',
        'hologram': 'hologram 4s ease-in-out infinite',
        'data-stream': 'data Stream 8s linear infinite',
        'neon-flicker': 'neon Flicker 0.5s ease-in-out infinite alternate',
        'cyber-glow': 'cyber Glow 3s ease-in-out infinite',
        'particle-float': 'particle Float 10s ease-in-out infinite',
        'grid-move': 'grid Move 20s linear infinite',
        'neon-border': 'neon Border 2s ease-in-out infinite',
      },
      keyframes: {
        fade In: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slide Up: {
          '0%': { transform: 'translate Y(20px)', opacity: '0' },
          '100%': { transform: 'translate Y(0)', opacity: '1' },
        },
        slide Down: {
          '0%': { transform: 'translate Y(-20px)', opacity: '0' },
          '100%': { transform: 'translate Y(0)', opacity: '1' },
        },
        scale In: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translate Y(0px)' },
          '50%': { transform: 'translate Y(-20px)' },
        },
        glow: {
          '0%': { box Shadow: '0 0 5px rgba(168, 85, 247, 0.5)' },
          '100%': { box Shadow: '0 0 20px rgba(168, 85, 247, 0.8), 0 0 30px rgba(168, 85, 247, 0.6)' },
        },
        neon Pulse: {
          '0%': { 
            box Shadow: '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff',
            text Shadow: '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff'
          },
          '100%': { 
            box Shadow: '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff, 0 0 40px #00ffff',
            text Shadow: '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff, 0 0 40px #00ffff'
          },
        },
        cyber Scan: {
          '0%': { transform: 'translate Y(-100%)' },
          '100%': { transform: 'translate Y(100vh)' },
        },
        matrix Rain: {
          '0%': { transform: 'translate Y(-100vh)' },
          '100%': { transform: 'translate Y(100vh)' },
        },
        hologram: {
          '0%, 100%': { 
            opacity: '0.8',
            transform: 'translate Y(0px) scale(1)',
            filter: 'hue-rotate(0deg)'
          },
          '50%': { 
            opacity: '1',
            transform: 'translate Y(-10px) scale(1.02)',
            filter: 'hue-rotate(90deg)'
          },
        },
        data Stream: {
          '0%': { transform: 'translate X(-100%)' },
          '100%': { transform: 'translate X(100vw)' },
        },
        neon Flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        cyber Glow: {
          '0%, 100%': { 
            box Shadow: '0 0 5px #00d4ff, inset 0 0 5px #00d4ff',
            border Color: '#00d4ff'
          },
          '50%': { 
            box Shadow: '0 0 20px #00d4ff, 0 0 30px #00d4ff, inset 0 0 20px #00d4ff',
            border Color: '#00ffff'
          },
        },
        particle Float: {
          '0%, 100%': { transform: 'translate Y(0px) translate X(0px)' },
          '25%': { transform: 'translate Y(-20px) translate X(10px)' },
          '50%': { transform: 'translate Y(-10px) translate X(-10px)' },
          '75%': { transform: 'translate Y(-30px) translate X(5px)' },
        },
        grid Move: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(20px, 20px)' },
        },
        neon Border: {
          '0%, 100%': { 
            border Color: '#00ffff',
            box Shadow: '0 0 5px #00ffff, inset 0 0 5px #00ffff'
          },
          '50%': { 
            border Color: '#ff00ff',
            box Shadow: '0 0 15px #ff00ff, inset 0 0 15px #ff00ff'
          },
        },
      },
      background Image: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)',
        'neon-grid': 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
        'matrix-pattern': 'linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px)',
        'hologram-bg': 'radial-gradient(circle at 20% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 0, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(0, 255, 0, 0.1) 0%, transparent 50%)',
        'cyber-circuit': 'linear-gradient(45deg, rgba(0, 212, 255, 0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(0, 212, 255, 0.1) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(0, 212, 255, 0.1) 75%), linear-gradient(-45deg, transparent 75%, rgba(0, 212, 255, 0.1) 75%)',
        'neon-circuit': 'linear-gradient(45deg, rgba(0, 255, 255, 0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(0, 255, 255, 0.1) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(0, 255, 255, 0.1) 75%), linear-gradient(-45deg, transparent 75%, rgba(0, 255, 255, 0.1) 75%)',
        'data-stream': 'linear-gradient(90deg, transparent 0%, rgba(0, 255, 255, 0.1) 50%, transparent 100%)',
        'hologram-overlay': 'linear-gradient(135deg, rgba(0, 255, 255, 0.05) 0%, rgba(255, 0, 255, 0.05) 50%, rgba(0, 255, 0, 0.05) 100%)',
      },
      background Size: {
        'cyber-grid': '20px 20px',
        'neon-grid': '30px 30px',
        'matrix-pattern': '25px 25px',
        'cyber-circuit': '20px 20px',
        'neon-circuit': '30px 30px',
        'data-stream': '200px 100%',
      },
      backdrop Blur: {
        xs: '2px',
      },
      box Shadow: {
        'cyber': '0 0 20px rgba(168, 85, 247, 0.3), inset 0 0 20px rgba(168, 85, 247, 0.1)',
        'neon': '0 0 5px current Color, 0 0 10px current Color, 0 0 15px current Color',
        'glow': '0 0 20px rgba(168, 85, 247, 0.5)',
        'neon-cyan': '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff, 0 0 20px #00ffff',
        'neon-pink': '0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 15px #ff00ff, 0 0 20px #ff00ff',
        'neon-green': '0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 15px #00ff00, 0 0 20px #00ff00',
        'hologram': '0 0 20px rgba(0, 255, 255, 0.3), 0 0 40px rgba(0, 255, 255, 0.2), inset 0 0 20px rgba(0, 255, 255, 0.1)',
        'cyber-glow': '0 0 10px rgba(0, 212, 255, 0.5), 0 0 20px rgba(0, 212, 255, 0.3), 0 0 30px rgba(0, 212, 255, 0.2)',
        'matrix': '0 0 10px rgba(0, 255, 0, 0.5), 0 0 20px rgba(0, 255, 0, 0.3), inset 0 0 10px rgba(0, 255, 0, 0.1)',
        'data-stream': '0 0 15px rgba(0, 255, 255, 0.4), 0 0 30px rgba(0, 255, 255, 0.2)',
        'neon-border': '0 0 0 1px #00ffff, 0 0 5px #00ffff, inset 0 0 5px #00ffff',
        'cyber-border': '0 0 0 1px #00d4ff, 0 0 10px #00d4ff, inset 0 0 10px #00d4ff',
        'hologram-border': '0 0 0 1px rgba(0, 255, 255, 0.5), 0 0 15px rgba(0, 255, 255, 0.3), inset 0 0 15px rgba(0, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
}
