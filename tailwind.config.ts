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
          cyan: '#00ffff',
          purple: '#8b5cf6',
          pink: '#ec4899',
          blue: '#3b82f6',
          green: '#10b981',
          orange: '#f59e0b',
          red: '#ef4444',
          yellow: '#eab308',
        },
        dark: {
          bg: '#0a0a0a',
          darker: '#050505',
          card: '#1a1a1a',
          border: '#2a2a2a',
        },
        neon: {
          cyan: '#00ffff',
          purple: '#8b5cf6',
          pink: '#ec4899',
          blue: '#3b82f6',
          green: '#10b981',
          orange: '#f59e0b',
          red: '#ef4444',
          yellow: '#eab308',
        },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'monospace'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        exo: ['Exo 2', 'sans-serif'],
        cyber: ['Orbitron', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'neon-flicker': 'neonFlicker 2s ease-in-out infinite alternate',
        'neon-pulse': 'neonPulse 2s ease-in-out infinite',
        'cyber-float': 'cyberFloat 6s ease-in-out infinite',
        'glitch-skew': 'glitchSkew 1s infinite linear alternate-reverse',
        'scan-line': 'scanLine 3s linear infinite',
        'scan-sweep': 'scanSweep 4s ease-in-out infinite',
        'energy-pulse': 'energyPulse 3s ease-in-out infinite',
        'neural-pulse': 'neuralPulse 8s ease-in-out infinite',
        'grid-move': 'gridMove 20s linear infinite',
        'matrix-fall': 'matrixFall 3s linear infinite',
        'particle-float': 'particleFloat 20s linear infinite',
        'neural-connect': 'neuralConnect 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        neonFlicker: {
          '0%, 18%, 22%, 25%, 53%, 57%, 100%': {
            textShadow: '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff, 0 0 20px #00ffff',
          },
          '20%, 24%, 55%': {
            textShadow: 'none',
          },
        },
        neonPulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        cyberFloat: {
          '0%, 100%': { transform: 'translateY(0) rotateX(0deg)' },
          '50%': { transform: 'translateY(-10px) rotateX(5deg)' },
        },
        glitchSkew: {
          '0%': { transform: 'skew(0deg)' },
          '10%': { transform: 'skew(-2deg)' },
          '20%': { transform: 'skew(2deg)' },
          '30%': { transform: 'skew(0deg)' },
          '40%': { transform: 'skew(1deg)' },
          '50%': { transform: 'skew(0deg)' },
          '60%': { transform: 'skew(-1deg)' },
          '70%': { transform: 'skew(0deg)' },
          '80%': { transform: 'skew(2deg)' },
          '90%': { transform: 'skew(0deg)' },
          '100%': { transform: 'skew(0deg)' },
        },
        scanLine: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        scanSweep: {
          '0%': { left: '-100%' },
          '50%': { left: '100%' },
          '100%': { left: '100%' },
        },
        energyPulse: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.3), inset 0 0 20px rgba(139, 92, 246, 0.1)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(139, 92, 246, 0.6), inset 0 0 40px rgba(139, 92, 246, 0.2)',
          },
        },
        neuralPulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
        gridMove: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '50px 50px' },
        },
        matrixFall: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        particleFloat: {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '100%': { transform: 'translateY(-100px) rotate(360deg)' },
        },
        neuralConnect: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.7' },
        },
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
        'neural-network': 'radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)',
        'matrix-rain': 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.03) 2px, rgba(0, 255, 255, 0.03) 4px)',
        'particle-field': 'radial-gradient(2px 2px at 20px 30px, rgba(0, 255, 255, 0.3), transparent), radial-gradient(2px 2px at 40px 70px, rgba(139, 92, 246, 0.3), transparent), radial-gradient(1px 1px at 90px 40px, rgba(236, 72, 153, 0.3), transparent), radial-gradient(1px 1px at 130px 80px, rgba(59, 130, 246, 0.3), transparent), radial-gradient(2px 2px at 160px 30px, rgba(16, 185, 129, 0.3), transparent)',
      },
      boxShadow: {
        'neon-cyan': '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff, 0 0 20px #00ffff',
        'neon-purple': '0 0 5px #8b5cf6, 0 0 10px #8b5cf6, 0 0 15px #8b5cf6, 0 0 20px #8b5cf6',
        'neon-pink': '0 0 5px #ec4899, 0 0 10px #ec4899, 0 0 15px #ec4899, 0 0 20px #ec4899',
        'cyber-glow': '0 0 20px rgba(0, 255, 255, 0.3), inset 0 0 20px rgba(0, 255, 255, 0.1)',
        'quantum-glow': '0 0 30px rgba(139, 92, 246, 0.4), inset 0 0 30px rgba(139, 92, 246, 0.1)',
      },
      backdropBlur: {
        'cyber': '10px',
        'quantum': '15px',
      },
    },
  },
  plugins: [],
};

export default config;