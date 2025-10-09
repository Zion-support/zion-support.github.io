/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cyber-cyan': '#00ffff',
        'cyber-magenta': '#ff00ff',
        'cyber-yellow': '#ffff00',
        'cyber-green': '#00ff00',
        'neon-blue': '#00bfff',
        'neon-pink': '#ff1493',
        'neon-purple': '#8a2be2',
        'neon-orange': '#ff8c00',
        'hologram-bg': 'rgba(255, 255, 255, 0.1)',
        'quantum-bg': 'rgba(255, 255, 255, 0.05)',
        'cyber-border': 'rgba(0, 255, 255, 0.3)',
        'quantum-border': 'rgba(139, 92, 246, 0.3)',
      },
      fontFamily: {
        'cyber': ['Orbitron', 'monospace'],
        'neon': ['Exo 2', 'sans-serif'],
        'hologram': ['Rajdhani', 'sans-serif'],
      },
      animation: {
        'cyber-glow': 'cyber-glow 3s ease-in-out infinite',
        'hologram-flicker': 'hologram-flicker 3s ease-in-out infinite',
        'hologram-scan': 'hologram-scan 2s linear infinite',
        'energy-pulse': 'energy-pulse 2s ease-in-out infinite',
        'scan-line': 'scan-line 2s linear infinite',
        'neural-pulse': 'neural-pulse 8s ease-in-out infinite',
        'holographic-shift': 'holographic-shift 4s ease-in-out infinite',
        'glitch': 'glitch 2s infinite',
        'glitch-1': 'glitch-1 0.5s infinite',
        'glitch-2': 'glitch-2 0.5s infinite',
        'neon-flicker': 'neon-flicker 2s infinite alternate',
        'grid-pulse': 'grid-pulse 4s ease-in-out infinite',
        'particle-float': 'particle-float 20s linear infinite',
        'matrix-fall': 'matrix-fall 1s linear infinite',
        'matrix-move': 'matrix-move 20s linear infinite',
        'hologram-sweep': 'hologram-sweep 3s linear infinite',
        'cyber-glow-pulse': 'cyber-glow-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        'cyber-glow': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'hologram-flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'hologram-scan': {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
        'energy-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(139, 92, 246, 0.6)' },
        },
        'scan-line': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'neural-pulse': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.1)' },
        },
        'holographic-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%', filter: 'hue-rotate(0deg)' },
          '25%': { backgroundPosition: '100% 50%', filter: 'hue-rotate(90deg)' },
          '50%': { backgroundPosition: '200% 50%', filter: 'hue-rotate(180deg)' },
          '75%': { backgroundPosition: '300% 50%', filter: 'hue-rotate(270deg)' },
        },
        'glitch': {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        'glitch-1': {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(2px, -2px)' },
          '40%': { transform: 'translate(-2px, 2px)' },
          '60%': { transform: 'translate(-2px, -2px)' },
          '80%': { transform: 'translate(2px, 2px)' },
        },
        'glitch-2': {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(-2px, -2px)' },
        },
        'neon-flicker': {
          '0%, 18%, 22%, 25%, 53%, 57%, 100%': {
            textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor, 0 0 20px currentColor, 0 0 35px currentColor, 0 0 40px currentColor',
          },
          '20%, 24%, 55%': {
            textShadow: '0 0 2px currentColor, 0 0 5px currentColor, 0 0 8px currentColor, 0 0 12px currentColor, 0 0 18px currentColor, 0 0 22px currentColor',
          },
        },
        'grid-pulse': {
          '0%, 100%': { backgroundSize: '20px 20px', opacity: '0.1' },
          '50%': { backgroundSize: '25px 25px', opacity: '0.2' },
        },
        'particle-float': {
          '0%': { transform: 'translateY(0px) rotate(0deg)' },
          '100%': { transform: 'translateY(-200px) rotate(360deg)' },
        },
        'matrix-fall': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'matrix-move': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100px)' },
        },
        'hologram-sweep': {
          '0%': { transform: 'translateX(-100%) translateY(-100%) rotate(45deg)' },
          '100%': { transform: 'translateX(100%) translateY(100%) rotate(45deg)' },
        },
        'cyber-glow-pulse': {
          '0%, 100%': {
            textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor, 0 0 20px currentColor',
          },
          '50%': {
            textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor',
          },
        },
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
        'neural-network': 'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)',
        'hologram-gradient': 'linear-gradient(135deg, rgba(0, 255, 255, 0.1) 0%, rgba(139, 92, 246, 0.1) 50%, rgba(236, 72, 153, 0.1) 100%)',
        'cyber-button': 'linear-gradient(45deg, #00ffff, #ff00ff)',
        'holographic-text': 'linear-gradient(45deg, #00ffff, #ff00ff, #ffff00, #00ff00, #00ffff)',
      },
      boxShadow: {
        'cyber-glow': '0 0 20px rgba(0, 255, 255, 0.5), inset 0 0 20px rgba(0, 255, 255, 0.1)',
        'cyber-glow-hover': '0 0 30px rgba(0, 255, 255, 0.8), 0 0 60px rgba(255, 0, 255, 0.4), inset 0 0 20px rgba(0, 255, 255, 0.2)',
        'neon-glow': '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor, 0 0 20px currentColor',
        'quantum-glow': '0 0 20px rgba(139, 92, 246, 0.3)',
        'quantum-glow-hover': '0 0 40px rgba(139, 92, 246, 0.6)',
      },
      backdropBlur: {
        'cyber': '10px',
        'hologram': '20px',
      },
      textShadow: {
        'neon': '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff, 0 0 20px #00ffff',
        'cyber': '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor, 0 0 20px currentColor',
        'holographic': '0 0 30px rgba(0, 255, 255, 0.5)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}