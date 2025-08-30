/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        'zion-blue-dark': '#0f172a',
        'zion-blue': '#1e293b',
        'zion-blue-light': '#334155',
        'zion-slate-dark': '#1e293b',
        'zion-slate': '#475569',
        'zion-slate-light': '#64748b',
        'zion-cyan': '#06b6d4',
        'zion-cyan-light': '#22d3ee',
        'zion-purple': '#7c3aed',
        'zion-purple-light': '#a855f7',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s linear infinite',
        'gradient': 'gradient 8s ease infinite',
        'neon-pulse': 'neon-pulse 1.5s ease-in-out infinite alternate',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(147, 51, 234, 0.3)" },
          "100%": { boxShadow: "0 0 30px rgba(147, 51, 234, 0.6)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "neon-pulse": {
          "0%, 100%": {
            boxShadow:
              "0 0 5px rgba(0, 212, 255, 0.5), 0 0 10px rgba(0, 212, 255, 0.3), 0 0 15px rgba(0, 212, 255, 0.1)",
          },
          "50%": {
            boxShadow:
              "0 0 10px rgba(0, 212, 255, 0.8), 0 0 20px rgba(0, 212, 255, 0.5), 0 0 30px rgba(0, 212, 255, 0.3)",
          },
        },
        "holographic-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "cyber-float": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "25%": { transform: "translateY(-10px) rotate(1deg)" },
          "50%": { transform: "translateY(-20px) rotate(0deg)" },
          "75%": { transform: "translateY(-10px) rotate(-1deg)" },
        },
        "particle-drift": {
          "0%": {
            transform: "translateX(-100px) translateY(0px)",
            opacity: "0",
          },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": {
            transform: "translateX(calc(100vw + 100px)) translateY(-100px)",
            opacity: "0",
          },
        },
        "matrix-rain": {
          "0%": { transform: "translateY(-100vh)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(100vh)", opacity: "0" },
        },
        "neon-text-glow": {
          "0%, 100%": {
            textShadow:
              "0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor",
          },
          "50%": {
            textShadow:
              "0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor",
          },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
        },
        typewriter: {
          "0%": { width: "0%" },
          "50%": { width: "100%" },
          "100%": { width: "0%" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(50px) rotate(0deg)" },
          "100%": {
            transform: "rotate(360deg) translateX(50px) rotate(-360deg)",
          },
        },
        "pulse-neon": {
          "0%, 100%": {
            boxShadow:
              "0 0 5px rgba(0, 212, 255, 0.5), 0 0 10px rgba(0, 212, 255, 0.3)",
          },
          "50%": {
            boxShadow:
              "0 0 15px rgba(0, 212, 255, 0.8), 0 0 25px rgba(0, 212, 255, 0.5)",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        wave: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        holographic:
          "linear-gradient(45deg, #00d4ff, #8b5cf6, #ec4899, #10b981)",
        cyber: "linear-gradient(135deg, #0f0f23, #1a1a2e, #16213e, #0f3460)",
        "neon-blue": "linear-gradient(45deg, #00d4ff, #0099cc)",
        "neon-purple": "linear-gradient(45deg, #8b5cf6, #7c3aed)",
        "neon-pink": "linear-gradient(45deg, #ec4899, #db2777)",
        "neon-green": "linear-gradient(45deg, #10b981, #059669)",
        glass:
          "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
        "glass-dark":
          "linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.1))",
        shimmer:
          "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
      },
      fontSize: {
        "responsive-xs": ["0.75rem", { lineHeight: "1rem" }],
        "responsive-sm": ["0.875rem", { lineHeight: "1.25rem" }],
        "responsive-base": ["1rem", { lineHeight: "1.5rem" }],
        "responsive-lg": ["1.125rem", { lineHeight: "1.75rem" }],
        "responsive-xl": ["1.25rem", { lineHeight: "1.75rem" }],
        "responsive-2xl": ["1.5rem", { lineHeight: "2rem" }],
        "responsive-3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "responsive-4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "responsive-5xl": ["3rem", { lineHeight: "1" }],
      },
      colors: {
        neon: {
          blue: "#00d4ff",
          purple: "#8b5cf6",
          pink: "#ec4899",
          green: "#10b981",
        },
        cyber: {
          dark: "#0f0f23",
          darker: "#1a1a2e",
          "dark-blue": "#16213e",
          blue: "#0f3460",
        },
        zion: {
          cyan: "#22ddd2",
          "cyan-dark": "#14b8a6",
          purple: "#8c15e9",
          "purple-dark": "#6b21a8",
          "purple-light": "#a855f7",
          blue: "#2e73ea",
          "blue-dark": "#172d67",
          "blue-light": "#2e73ea",
          green: "#22c55e",
          orange: "#f97316",
          pink: "#ec4899",
          red: "#ef4444",
          slate: "#64748b",
          "slate-light": "#94a3b8",
          "slate-dark": "#475569",
        },
        "high-contrast": "#ffffff",
        "high-contrast-secondary": "#e5e7eb",
      },
      boxShadow: {
        "neon-blue": "0 0 20px rgba(0, 212, 255, 0.5)",
        "neon-purple": "0 0 20px rgba(139, 92, 246, 0.5)",
        "neon-pink": "0 0 20px rgba(236, 72, 153, 0.5)",
        "neon-green": "0 0 20px rgba(16, 185, 129, 0.5)",
        "neon-glow":
          "0 0 30px rgba(0, 212, 255, 0.3), 0 0 60px rgba(0, 212, 255, 0.1)",
      },
      opacity: {
        "2": "0.02",
        "3": "0.03",
        "5": "0.05",
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
        '5': '5px',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      minHeight: {
        'screen-75': '75vh',
        'screen-90': '90vh',
      },
    },
  },
  plugins: [],
}
