import { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";
import animatePlugin from "tailwindcss-animate";
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  safelist: ['border-border'],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom Zion colors (updated palette)
        "zion-blue": {
          DEFAULT: "#2e73ea",
          light: "#8ab1f3",
          dark: "#172d67",
        },
        "zion-purple": {
          DEFAULT: "#8c15e9",
          light: "#b971f2",
          dark: "#530c8b",
        },
        "zion-cyan": {
          DEFAULT: "#22ddd2",
          light: "#7aeae4",
          dark: "#14847e",
        },
        "zion-slate": {
          DEFAULT: "#17072b",
          light: "#451582",
          dark: "#000000",
        },
        "zion-neon": {
          DEFAULT: "#22ddd2",
          light: "#7aeae4",
          dark: "#14847e",
          glow: "#22ddd2",
        },
        "zion-purple": {
          DEFAULT: "#8c15e9",
          light: "#b971f2",
          dark: "#530c8b",
          neon: "#b971f2",
        },
        "zion-cyber": {
          DEFAULT: "#00ff88",
          light: "#66ffaa",
          dark: "#00cc6a",
          neon: "#00ff88",
        },
        "zion-matrix": {
          DEFAULT: "#00ff41",
          light: "#66ff7a",
          dark: "#00cc33",
          neon: "#00ff41",
        },
        // Neon color palette for components
        "neon-blue": "#00d4ff",
        "neon-purple": "#8b5cf6",
        "neon-pink": "#ec4899",
        "neon-green": "#00ff88",
        "neon-orange": "#ff8000",
        "neon-red": "#ff0000",
        "neon-yellow": "#ffff00",
        "neon-cyan": "#00ffff",
        "neon-magenta": "#ff00ff",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-out": {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        "slide-in-from-top": {
          from: { transform: "translateY(-100%)" },
          to: { transform: "translateY(0)" },
        },
        "slide-in-from-bottom": {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        "slide-in-from-left": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-in-from-right": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        "glow-pulse": {
          "0%, 100%": { 
            boxShadow: "0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor" 
          },
          "50%": { 
            boxShadow: "0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor" 
          },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "matrix-rain": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "fade-out": "fade-out 0.3s ease-out",
        "slide-in-from-top": "slide-in-from-top 0.3s ease-out",
        "slide-in-from-bottom": "slide-in-from-bottom 0.3s ease-out",
        "slide-in-from-left": "slide-in-from-left 0.3s ease-out",
        "slide-in-from-right": "slide-in-from-right 0.3s ease-out",
        "spin-slow": "spin 3s linear infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "matrix-rain": "matrix-rain 20s linear infinite",
      },
    },
  },
  plugins: [animatePlugin],
};

export default config;
