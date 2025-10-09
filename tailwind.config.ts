import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          900: '#0f172a',
        },
        neon: {
          cyan: '#00ffff',
          pink: '#ff00ff',
          green: '#00ff00',
          blue: '#0080ff',
          purple: '#8000ff',
          orange: '#ff8000',
          red: '#ff0040',
          yellow: '#ffff00',
        },
        cyber: {
          dark: '#0a0a0a',
          darker: '#050505',
          gray: '#1a1a1a',
          light: '#2a2a2a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Courier New', 'monospace'],
        cyber: ['Courier New', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'neon-pulse': 'neonPulse 2s ease-in-out infinite alternate',
        'neon-flicker': 'neonFlicker 2s infinite alternate',
        'holographic-shift': 'holographicShift 3s ease-in-out infinite',
        'glitch': 'glitch 2s infinite',
        'energy-pulse': 'energyPulse 2s ease-in-out infinite',
        'quantum-shimmer': 'quantumShimmer 3s ease-in-out infinite',
        'hologram-scan': 'hologramScan 4s linear infinite',
        'neural-pulse': 'neuralPulse 8s ease-in-out infinite',
        'particle-float': 'particleFloat 20s linear infinite',
        'scan-line': 'scanLine 3s linear infinite',
        'glow-sweep': 'glowSweep 3s ease-in-out infinite',
        'matrix-flow': 'matrixFlow 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        neonPulse: {
          '0%': {
            textShadow: '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff',
          },
          '100%': {
            textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff, 0 0 40px #00ffff',
          },
        },
        neonFlicker: {
          '0%, 18%, 22%, 25%, 53%, 57%, 100%': {
            textShadow: '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff, 0 0 20px #00ffff',
          },
          '20%, 24%, 55%': {
            textShadow: 'none',
          },
        },
        holographicShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        energyPulse: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)',
            transform: 'scale(1)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(0, 255, 255, 0.6)',
            transform: 'scale(1.02)',
          },
        },
        quantumShimmer: {
          '0%, 100%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(100%)' },
        },
        hologramScan: {
          '0%': { transform: 'translateX(-100%) translateY(-100%)' },
          '100%': { transform: 'translateX(100%) translateY(100%)' },
        },
        neuralPulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
        particleFloat: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-200px)' },
        },
        scanLine: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
        glowSweep: {
          '0%, 100%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(100%)' },
        },
        matrixFlow: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
        'neural-network': 'radial-gradient(circle at 20% 20%, rgba(0, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 0, 255, 0.1) 0%, transparent 50%)',
        'holographic': 'linear-gradient(45deg, #00ffff, #ff00ff, #00ff00, #ffff00)',
        'cyber-gradient': 'linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1))',
      },
      backgroundSize: {
        'cyber-grid': '50px 50px',
        'holographic': '400% 400%',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'neon': '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
        'neon-lg': '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor',
        'cyber': '0 0 20px rgba(0, 255, 255, 0.3)',
        'cyber-lg': '0 0 40px rgba(0, 255, 255, 0.6)',
      },
    },
  },
  plugins: [],
};

export default config;