import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

const config: Config = {
=======
=======
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
=======
  ],
  safelist: ['border-border'],
  theme: {
    extend: {

          200:,
  #bae6fd'',;
          300: '#7dd3f,c',;
          400:,
  #38bdf8'',;
          500: '#0ea5e,9',;
          600:,
  #0284c7'',;
          700: '#0369a,1',;
          800:,
  #075985'',;
          900: '#0c4a6,e',;
          950:,
  #082f49'}',;
        // Extended: gray palette for better contrast;
        gray: {

          960:,
  #050505'',;
          970: '#03030,3',;
          980:,
  #020202'',;
          990: '#01010,1}',;
        // Accent: colors;
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // Zion color palette (consolidated)
=======
        'zion-blue': {
          DEFAULT: '#0a0f1f',
          light: '#1e263b',
          dark: '#090c1a',
          neon: '#00e5ff',
          glow: '#0ea5e9',
        },
        'zion-purple': {
          DEFAULT: '#a855f7',
          light: '#d8b4fe',
          dark: '#9333ea',
          neon: '#c084fc',
          glow: '#8b5cf6',
        },
        'zion-cyan': {
          DEFAULT: '#00e5ff',
          light: '#7df9ff',
          dark: '#00c4cc',
          neon: '#06b6d4',
          glow: '#0891b2',
        },
        'zion-slate': {
          DEFAULT: '#94A3B8',
          light: '#CBD5E1',
          dark: '#64748B',
          neon: '#475569',
          glow: '#334155',
        },
<<<<<<< HEAD
        // New futuristic colors
=======
<<<<<<< HEAD
        // Futuristic accents
=======
        // New futuristic colors
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
        'neon-pink': '#ff0080',
        'neon-green': '#00ff41',
        'neon-orange': '#ff6b35',
        'neon-yellow': '#ffff00',
        'quantum-blue': '#1e40af',
        'quantum-purple': '#7c3aed',
        'quantum-cyan': '#0891b2',
<<<<<<< HEAD
=======
=======
        // Custom Zion colors
        "zion-blue": {
          DEFAULT: "#0a0f1f",
          light: "#1e263b",
          dark: "#090c1a",
        },
        "zion-purple": {
          DEFAULT: "#a855f7",
          light: "#d8b4fe",
          dark: "#9333ea",
        },
        "zion-cyan": {
          DEFAULT: "#00e5ff",
          light: "#7df9ff",
          dark: "#00c4cc",
        },
        "zion-slate": {
          DEFAULT: "#94A3B8",
          light: "#CBD5E1",
          dark: "#64748B",
        },
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-631c
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8fef
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4a81
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
=======
        "zion-green": {
          DEFAULT: "#10b981",
          light: "#34d399",
          dark: "#059669",
        },
        "zion-pink": {
          DEFAULT: "#ec4899",
          light: "#f472b6",
          dark: "#be185d",
        },
        "zion-amber": {
          DEFAULT: "#f59e0b",
          light: "#fbbf24",
          dark: "#d97706",
        },
=======
        "zion-neon": {
          cyan: "#22ddd2",
          purple: "#8c15e9",
          blue: "#2e73ea",
          pink: "#ff0080",
          green: "#00ff88",
          yellow: "#ffff00",
        },
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-de94
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter Fallback', ...defaultTheme.fontFamily.sans],
        heading: [
          'var(--font-poppins)',
          'Poppins Fallback',
          ...defaultTheme.fontFamily.sans
        ],
        futuristic: ['Orbitron', 'monospace'],
        neon: ['Rajdhani', 'sans-serif'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
=======
=======
        'neon-pulse': {
          '0%, 100%': { 
            textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
            opacity: '1'
          },
          '50%': { 
            textShadow: '0 0 2px currentColor, 0 0 5px currentColor, 0 0 7px currentColor',
            opacity: '0.8'
          },
        },
        'quantum-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'holographic-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'neon-flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'quantum-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
=======
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
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 229, 255, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 229, 255, 0.8)' },
        },
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d2d6
        'neon-pulse': {
          '0%, 100%': { 
            textShadow: '0 0 5px #00e5ff, 0 0 10px #00e5ff, 0 0 15px #00e5ff, 0 0 20px #00e5ff',
            opacity: '1'
          },
          '50%': { 
            textShadow: '0 0 2px #00e5ff, 0 0 5px #00e5ff, 0 0 7px #00e5ff, 0 0 10px #00e5ff',
            opacity: '0.8'
          },
        },
        'holographic-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
<<<<<<< HEAD
        'matrix-rain': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'neon-flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'quantum-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-631c
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
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
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 229, 255, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 229, 255, 0.8)' },
        },
=======
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
=======
=======
=======
=======
        'neon-pulse': {
          '0%, 100%': { 
            textShadow: '0 0 5px #00e5ff, 0 0 10px #00e5ff, 0 0 15px #00e5ff, 0 0 20px #00e5ff' 
          },
          '50%': { 
            textShadow: '0 0 2px #00e5ff, 0 0 5px #00e5ff, 0 0 7px #00e5ff, 0 0 10px #00e5ff' 
          },
        }
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-631c
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
=======
=======
=======
        'gradient-x': 'gradient-x 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s ease infinite',
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-434d
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
=======
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow": {
          "0%, 100%": { boxShadow: "0 0 5px currentColor" },
          "50%": { boxShadow: "0 0 20px currentColor, 0 0 30px currentColor" },
        },
      },
      animation: {
<<<<<<< HEAD
=======
<<<<<<< HEAD
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in-left": "slide-in-left 0.5s ease-out",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        "float": "float 3s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7053
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
        "neon-pulse": "neon-pulse 2s ease-in-out infinite",
        "cyber-scan": "cyber-scan 3s linear infinite",
        "matrix-rain": "matrix-rain 10s linear infinite",
        "gradient-shift": "gradient-shift 3s ease infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "fade-in-left": "fade-in-left 0.6s ease-out",
        "fade-in-right": "fade-in-right 0.6s ease-out",
        "scale-in": "scale-in 0.6s ease-out",
=======
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 3s ease-in-out infinite",
        "neon-pulse": "neon-pulse 2s ease-in-out infinite",
        "matrix-rain": "matrix-rain 8s linear infinite",
        "slide-in-left": "slide-in-left 0.5s ease-out",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out",
=======
        "neon-glow": "neon-glow 2s ease-in-out infinite alternate",
        "neon-pulse": "neon-pulse 2s ease-in-out infinite",
        "gradient-shift": "gradient-shift 3s ease infinite",
        "float": "float 3s ease-in-out infinite",
        "rotate-slow": "rotate-slow 20s linear infinite",
        "slide-in-left": "slide-in-left 0.8s ease-out",
        "slide-in-right": "slide-in-right 0.8s ease-out",
        "fade-in-up": "fade-in-up 0.8s ease-out",
=======
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "neon-pulse": "neon-pulse 2s ease-in-out infinite",
        "gradient-shift": "gradient-shift 3s ease infinite",
=======
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "fade-in-down": "fade-in-down 0.6s ease-out",
        "fade-in-left": "fade-in-left 0.6s ease-out",
        "fade-in-right": "fade-in-right 0.6s ease-out",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-dfab
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
=======
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
        'quantum-float': 'quantum-float 6s ease-in-out infinite',
        'holographic-shift': 'holographic-shift 3s ease infinite',
        'matrix-rain': 'matrix-rain 20s linear infinite',
        'neon-flicker': 'neon-flicker 0.15s ease-in-out infinite alternate',
        'quantum-spin': 'quantum-spin 20s linear infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
=======
        "spin-slow": "spin 3s linear infinite",
        "spin-reverse": "spin-reverse 4s linear infinite",
        "bounce-slow": "bounce 2s infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-099c
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
      },
      backgroundImage: {
        'quantum-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'neon-gradient': 'linear-gradient(45deg, #ff0080, #00ff41, #00e5ff, #a855f7)',
        'holographic-gradient': 'linear-gradient(45deg, #ff0080, #00ff41, #00e5ff, #a855f7, #ff0080)',
        'cyber-gradient': 'linear-gradient(135deg, #0a0f1f 0%, #1e263b 50%, #0a0f1f 100%)',
        'quantum-mesh': 'radial-gradient(circle at 50% 50%, rgba(0, 229, 255, 0.1) 0%, transparent 50%)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'neon': '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
        'quantum': '0 0 20px rgba(0, 229, 255, 0.5), 0 0 40px rgba(0, 229, 255, 0.3)',
        'holographic': '0 0 30px rgba(168, 85, 247, 0.6), 0 0 60px rgba(168, 85, 247, 0.4)',
      },
=======
=======
=======
      }
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.rtl': {
          direction: 'rtl',
          textAlign: 'right',
        },
        '.ltr': {
          direction: 'ltr',
          textAlign: 'left',
        },
        '.text-neon': {
          textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
        },
        '.border-neon': {
          boxShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
        },
        '.bg-holographic': {
          background: 'linear-gradient(45deg, #ff0080, #00ff41, #00e5ff, #a855f7)',
          backgroundSize: '400% 400%',
          animation: 'holographic-shift 3s ease infinite',
        },
        '.quantum-border': {
          border: '1px solid transparent',
          background: 'linear-gradient(45deg, #00e5ff, #a855f7) border-box',
          backgroundClip: 'border-box',
        },
      };
      addUtilities(newUtilities);
    })
  ]
};

