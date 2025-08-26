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
        // Enhanced Zion colors with better contrast ratios
        "zion-blue": {
          DEFAULT: "#2e73ea",
          light: "#8ab1f3",
          dark: "#172d67",
          "50": "#eff6ff",
          "100": "#dbeafe",
          "200": "#bfdbfe",
          "300": "#93c5fd",
          "400": "#60a5fa",
          "500": "#2e73ea",
          "600": "#2563eb",
          "700": "#1d4ed8",
          "800": "#1e3a8a",
          "900": "#172d67",
        },
        "zion-purple": {
          DEFAULT: "#8c15e9",
          light: "#b971f2",
          dark: "#530c8b",
          "50": "#faf5ff",
          "100": "#f3e8ff",
          "200": "#e9d5ff",
          "300": "#d8b4fe",
          "400": "#c084fc",
          "500": "#8c15e9",
          "600": "#7c3aed",
          "700": "#6d28d9",
          "800": "#5b21b6",
          "900": "#530c8b",
        },
        "zion-cyan": {
          DEFAULT: "#22ddd2",
          light: "#7aeae4",
          dark: "#14847e",
          "50": "#ecfeff",
          "100": "#cffafe",
          "200": "#a5f3fc",
          "300": "#67e8f9",
          "400": "#22d3ee",
          "500": "#22ddd2",
          "600": "#0891b2",
          "700": "#0e7490",
          "800": "#155e75",
          "900": "#14847e",
        },
        "zion-slate": {
          DEFAULT: "#17072b",
          light: "#451582",
          dark: "#000000",
          "50": "#f8fafc",
          "100": "#f1f5f9",
          "200": "#e2e8f0",
          "300": "#cbd5e1",
          "400": "#94a3b8",
          "500": "#64748b",
          "600": "#475569",
          "700": "#334155",
          "800": "#1e293b",
          "900": "#17072b",
        },
        // Additional performance-optimized colors
        "zion-green": {
          DEFAULT: "#10b981",
          light: "#34d399",
          dark: "#059669",
        },
        "zion-yellow": {
          DEFAULT: "#f59e0b",
          light: "#fbbf24",
          dark: "#d97706",
        },
        "zion-orange": {
          DEFAULT: "#f97316",
          light: "#fb923c",
          dark: "#ea580c",
        },
        "zion-red": {
          DEFAULT: "#ef4444",
          light: "#f87171",
          dark: "#dc2626",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        mono: ["var(--font-mono)", ...fontFamily.mono],
        display: ["Orbitron", "monospace"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.75rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
        "144": "36rem",
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
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "33%": { transform: "translateY(-20px) translateX(10px)" },
          "66%": { transform: "translateY(-10px) translateX(-15px)" },
        },
        "float-medium": {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-15px) translateX(20px)" },
        },
        "float-fast": {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "25%": { transform: "translateY(-25px) translateX(-10px)" },
          "75%": { transform: "translateY(-5px) translateX(15px)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "float-medium": "float-medium 4s ease-in-out infinite",
        "float-fast": "float-fast 3s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
      },
    },
  },
  plugins: [
    animatePlugin,
    plugin(function({ addUtilities, addComponents, theme }) {
      // Performance optimization utilities
      const performanceUtilities = {
        '.gpu-accelerated': {
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          perspective: '1000px',
        },
        '.performance-optimized': {
          contain: 'layout style paint',
          willChange: 'transform, opacity',
        },
        '.smooth-scroll': {
          scrollBehavior: 'smooth',
          scrollPaddingTop: '2rem',
        },
      };
      
      // Enhanced component utilities
      const componentUtilities = {
        '.glass-effect': {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.neon-border': {
          boxShadow: '0 0 20px rgba(34, 221, 210, 0.3)',
          border: '1px solid rgba(34, 221, 210, 0.5)',
        },
        '.gradient-text': {
          background: 'linear-gradient(135deg, #22ddd2, #8c15e9, #3b82f6)',
          backgroundSize: '200% 200%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'gradient 3s ease infinite',
        },
      };
      
      // Responsive utilities
      const responsiveUtilities = {
        '.mobile-first': {
          '@apply': 'block md:hidden',
        },
        '.desktop-first': {
          '@apply': 'hidden md:block',
        },
        '.tablet-only': {
          '@apply': 'hidden md:block lg:hidden',
        },
      };
      
      addUtilities(performanceUtilities);
      addUtilities(componentUtilities);
      addUtilities(responsiveUtilities);
      
      // Enhanced button components
      addComponents({
        '.btn-primary': {
          background: 'linear-gradient(135deg, #22ddd2, #2e73ea)',
          color: 'white',
          fontWeight: '600',
          padding: '0.75rem 1.5rem',
          borderRadius: '0.75rem',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'relative',
          overflow: 'hidden',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 25px rgba(34, 221, 210, 0.3)',
          },
          '&:focus': {
            outline: '2px solid rgba(34, 221, 210, 0.5)',
            outlineOffset: '2px',
          },
        },
        '.btn-secondary': {
          background: 'rgba(255, 255, 255, 0.1)',
          color: 'white',
          fontWeight: '600',
          padding: '0.75rem 1.5rem',
          borderRadius: '0.75rem',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          backdropFilter: 'blur(10px)',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.2)',
            borderColor: 'rgba(255, 255, 255, 0.4)',
            transform: 'translateY(-2px)',
          },
          '&:focus': {
            outline: '2px solid rgba(34, 221, 210, 0.5)',
            outlineOffset: '2px',
          },
        },
      });
    }),
  ],
};

export default config;