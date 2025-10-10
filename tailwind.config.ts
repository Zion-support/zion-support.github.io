
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
          cyan: '#00 ffff',
          purple: '#8 b5 cf6',
          pink: '#ec4899',
          blue: '#3 b82 f6',
          green: '#10 b981',
          orange: '#f59 e0 b',
          red: '#ef4444',
          yellow: '#eab308',
        },
        dark: {
          bg: '#0 a0 a0 a',
          darker: '#050505',
          card: '#1 a1 a1 a',
          border: '#2 a2 a2 a',
        },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'monospace'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        exo: ['Exo 2', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5 s ease-in-out',
        'slide-up': 'slideUp 0.5 s ease-out',
        'pulse-slow': 'pulse 3 s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20 px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;