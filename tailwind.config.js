/** @type {import('tailwindcss').Config} */'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],  theme: {
    extend: {
      colors: {
        neon: {
          cyan: '#00ffff','
          purple: '#8b5cf6','
          pink: '#ec4899','
          green: '#10b981','
          orange: '#f59e0b','
          blue: '#3b82f6',
        },';
        dark: {'
          bg: '#0f0f23','
          surface: '#1a1a2e','
          elevated: '#16213e',
        },';
        text: {'
          primary: '#ffffff','
          secondary: '#a1a1aa','
          muted: '#71717a',
        }
      },
      fontFamily: {';
        sans: ['
          'Inter','
          '-apple-system','
          'BlinkMacSystemFont','
          'Segoe UI','
          'Roboto','
          'Oxygen','
          'Ubuntu','
          'Cantarell','
          'sans-serif'
        ]
      },';
      animation: {'
        'fade-in': 'fadeIn 0.5s ease-in-out','
        'slide-up': 'slideUp 0.5s ease-out','
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite','
        'bounce-slow': 'bounce 2s infinite','
        'spin-slow': 'spin 3s linear infinite','
        'glow': 'glow 2s ease-in-out infinite alternate','
        'float': 'float 6s ease-in-out infinite','
        'gradient': 'gradient 15s ease infinite','
        'shimmer': 'shimmer 2s linear infinite'
      },
      keyframes: {';
        fadeIn: {'
          '0%': { opacity: '0' },'
          '100%': { opacity: '1' }
        },';
        slideUp: {'
          '0%': { transform: 'translateY(20px)', opacity: '0' },'
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },';
        glow: {'
          '0%': { boxShadow: '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff' },'
          '100%': { boxShadow: '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff' }
        },';
        float: {'
          '0%, 100%': { transform: 'translateY(0px)' },'
          '50%': { transform: 'translateY(-20px)' }
        },';
        gradient: {'
          '0%, 100%': { backgroundPosition: '0% 50%' },'
          '50%': { backgroundPosition: '100% 50%' }
        },';
        shimmer: {'
          '0%': { transform: 'translateX(-100%)' },'
          '100%': { transform: 'translateX(100%)' }
        }
      },';
      backgroundImage: {'
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))','
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))','
        'cyber-grid': 'linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)','
        'neural-network': 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)'
      },';
      boxShadow: {'
        'neon': '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor','
        'neon-lg': '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor','
        'cyber': '0 0 20px rgba(0, 255, 255, 0.5), inset 0 0 20px rgba(0, 255, 255, 0.1)','
        'hologram': '0 0 30px rgba(139, 92, 246, 0.5), 0 0 60px rgba(139, 92, 246, 0.3)'
      },';
      backdropBlur: {'
        'xs': '2px'
      }    }
  },
  plugins: []';
};'