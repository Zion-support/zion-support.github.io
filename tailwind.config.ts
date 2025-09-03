<<<<<<< HEAD
import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx,js,jsx}',
    './index.html',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        // Zion Tech Group brand colors
        zion: {
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
          950: '#082f49',
        },
        // Extended gray palette for better contrast
        gray: {
          950: '#0a0a0a',
          960: '#050505',
          970: '#030303',
          980: '#020202',
          990: '#010101',
        },
        // Accent colors
        accent: {
          cyan: '#06b6d4',
          blue: '#3b82f6',
          purple: '#8b5cf6',
          pink: '#ec4899',
          emerald: '#10b981',
          amber: '#f59e0b',
          rose: '#f43f5e',
        }
      },
      animation: {
        'gradient': 'gradient 6s ease infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
        heading: [
          'var(--font-poppins), Poppins',
          ...defaultTheme.fontFamily.sans
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace'
        ]
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' }
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem'
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ]
};

export default config;
=======
import type { Config } from "tailwindcss";
export default {;
  content: [;
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",;
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",;
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",;
  ],;
  darkMode: "class",;
  theme: {;
    extend: {;
      colors: {;
        // Zion Tech Group brand colors;
        zion: {;
          50: "#f0f9ff",;
          100: "#e0f2fe",;
          200: "#bae6fd",;
          300: "#7dd3fc",;
          400: "#38bdf8",;
          500: "#0ea5e9",;
          600: "#0284c7",;
          700: "#0369a1",;
          800: "#075985",;
          900: "#0c4a6e",;
          950: "#082f49",;,
},;
        // Extended gray palette for better contrast;
        gray: {;
          950: "#0a0a0a",;
          960: "#050505",;
          970: "#030303",;
          980: "#020202",;
          990: "#010101",;,
},;
        // Accent colors;
        accent: {;
          cyan: "#06b6d4",;
          blue: "#3b82f6",;
          purple: "#8b5cf6",;
          pink: "#ec4899",;
          emerald: "#10b981",;
          amber: "#f59e0b",;
          rose: "#f43f5e",;,
},;,
},;
      animation: {;
        "gradient": "gradient 6s ease infinite",;
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",;
        "bounce-slow": "bounce 3s infinite",;
        "spin-slow": "spin 8s linear infinite",;,
},;
      keyframes: {;
        gradient: {;
          "0%, 100%": {;
            "background-size": "200% 200%",;
            "background-position": "left center",;,
},;
          "50%": {;
            "background-size": "200% 200%",;
            "background-position": "right center",;,
},;,
},;,
},;
      fontFamily: {;
        sans: ["Inter", "system-ui", "sans-serif"],;,
},;,
},;,
},;
  plugins: [;
    require("@tailwindcss/forms"),;
    require("@tailwindcss/typography"),;
    require("@tailwindcss/aspect-ratio"),;
  ],;,
} satisfies Config
>>>>>>> main
