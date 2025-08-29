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
        // Enhanced Zion color palette
        "zion": {
          blue: {
            DEFAULT: "#00d4ff",
            light: "#22d3ee",
            dark: "#0891b2",
            neon: "#00d4ff",
          },
          purple: {
            DEFAULT: "#a855f7",
            light: "#c084fc",
            dark: "#7c3aed",
            neon: "#a855f7",
          },
          cyan: {
            DEFAULT: "#22d3ee",
            light: "#67e8f9",
            dark: "#0891b2",
            neon: "#22d3ee",
          },
          pink: {
            DEFAULT: "#ec4899",
            light: "#f472b6",
            dark: "#be185d",
            neon: "#ec4899",
          },
          green: {
            DEFAULT: "#10b981",
            light: "#34d399",
            dark: "#059669",
            neon: "#10b981",
          },
          orange: {
            DEFAULT: "#f59e0b",
            light: "#fbbf24",
            dark: "#d97706",
            neon: "#f59e0b",
          },
          slate: {
            DEFAULT: "#0f172a",
            light: "#1e293b",
            dark: "#020617",
            neon: "#334155",
          },
          gray: {
            DEFAULT: "#64748b",
            light: "#94a3b8",
            dark: "#475569",
            neon: "#cbd5e1",
          },
        },
        // Glassmorphism colors
        glass: {
          DEFAULT: "rgba(255, 255, 255, 0.1)",
          light: "rgba(255, 255, 255, 0.2)",
          dark: "rgba(0, 0, 0, 0.2)",
          border: "rgba(255, 255, 255, 0.2)",
        },
        // Neon glow colors
        neon: {
          blue: "#00d4ff",
          purple: "#a855f7",
          cyan: "#22d3ee",
          pink: "#ec4899",
          green: "#10b981",
          orange: "#f59e0b",
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
        sans: ["Inter", "var(--font-sans)", ...fontFamily.sans],
        orbitron: ["Orbitron", "monospace"],
        rajdhani: ["Rajdhani", "sans-serif"],
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
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "float-delayed": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        "glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 212, 255, 0.5)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 212, 255, 0.8), 0 0 60px rgba(0, 212, 255, 0.3)" },
        },
        "pulse-glow": {
          "0%, 100%": { 
            boxShadow: "0 0 20px rgba(168, 85, 247, 0.5)",
            transform: "scale(1)"
          },
          "50%": { 
            boxShadow: "0 0 40px rgba(168, 85, 247, 0.8)",
            transform: "scale(1.05)"
          },
        },
        "fade-in-up": {
          from: { transform: "translateY(30px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "scale-in": {
          from: { transform: "scale(0.9)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },
        "bounce-in": {
          "0%": { transform: "scale(0.3)", opacity: "0" },
          "50%": { transform: "scale(1.05)" },
          "70%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "slide-up": {
          from: { transform: "translateY(100%)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "slide-down": {
          from: { transform: "translateY(-100%)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "rotate-in": {
          from: { transform: "rotate(-200deg)", opacity: "0" },
          to: { transform: "rotate(0)", opacity: "1" },
        },
        "flip-in": {
          from: { transform: "perspective(400px) rotateY(90deg)", opacity: "0" },
          to: { transform: "perspective(400px) rotateY(0)", opacity: "1" },
        },
        "zoom-in": {
          from: { transform: "scale(0.5)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "gradient-y": {
          "0%, 100%": { backgroundPosition: "50% 0%" },
          "50%": { backgroundPosition: "50% 100%" },
        },
        "gradient-xy": {
          "0%, 100%": { backgroundPosition: "0% 0%" },
          "25%": { backgroundPosition: "100% 0%" },
          "50%": { backgroundPosition: "100% 100%" },
          "75%": { backgroundPosition: "0% 100%" },
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
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float-delayed 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out",
        "scale-in": "scale-in 0.6s ease-out",
        "bounce-in": "bounce-in 0.8s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
        "slide-down": "slide-down 0.6s ease-out",
        "rotate-in": "rotate-in 0.8s ease-out",
        "flip-in": "flip-in 0.8s ease-out",
        "zoom-in": "zoom-in 0.6s ease-out",
        "shimmer": "shimmer 2s linear infinite",
        "gradient-x": "gradient-x 15s ease infinite",
        "gradient-y": "gradient-y 15s ease infinite",
        "gradient-xy": "gradient-xy 15s ease infinite",
      },
      backdropBlur: {
        xs: "2px",
        "4xl": "72px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-mesh": "linear-gradient(45deg, #00d4ff, #a855f7, #ec4899, #10b981, #f59e0b, #00d4ff)",
        "gradient-mesh-2": "linear-gradient(135deg, #00d4ff, #a855f7, #ec4899, #10b981, #f59e0b, #00d4ff)",
        "gradient-mesh-3": "linear-gradient(225deg, #00d4ff, #a855f7, #ec4899, #10b981, #f59e0b, #00d4ff)",
        "gradient-mesh-4": "linear-gradient(315deg, #00d4ff, #a855f7, #ec4899, #10b981, #f59e0b, #00d4ff)",
        "grid-pattern": "linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)",
        "dots-pattern": "radial-gradient(circle, rgba(0, 212, 255, 0.3) 1px, transparent 1px)",
        "circuit-pattern": "radial-gradient(circle at 1px 1px, rgba(0, 212, 255, 0.3) 1px, transparent 0)",
      },
      backgroundSize: {
        "grid-pattern": "50px 50px",
        "dots-pattern": "20px 20px",
        "circuit-pattern": "50px 50px",
      },
      boxShadow: {
        "glow-blue": "0 0 20px rgba(0, 212, 255, 0.5)",
        "glow-purple": "0 0 20px rgba(168, 85, 247, 0.5)",
        "glow-cyan": "0 0 20px rgba(34, 211, 238, 0.5)",
        "glow-pink": "0 0 20px rgba(236, 72, 153, 0.5)",
        "glow-green": "0 0 20px rgba(16, 185, 129, 0.5)",
        "glow-orange": "0 0 20px rgba(245, 158, 11, 0.5)",
        "glow-blue-lg": "0 0 40px rgba(0, 212, 255, 0.8), 0 0 60px rgba(0, 212, 255, 0.3)",
        "glow-purple-lg": "0 0 40px rgba(168, 85, 247, 0.8), 0 0 60px rgba(168, 85, 247, 0.3)",
        "glass": "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        "glass-lg": "0 16px 64px 0 rgba(31, 38, 135, 0.37)",
        "inner-glow": "inset 0 0 20px rgba(0, 212, 255, 0.3)",
        "neon": "0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor, 0 0 20px currentColor",
      },
      textShadow: {
        "glow-blue": "0 0 20px rgba(0, 212, 255, 0.8)",
        "glow-purple": "0 0 20px rgba(168, 85, 247, 0.8)",
        "glow-cyan": "0 0 20px rgba(34, 211, 238, 0.8)",
        "glow-pink": "0 0 20px rgba(236, 72, 153, 0.8)",
        "glow-green": "0 0 20px rgba(16, 185, 129, 0.8)",
        "glow-orange": "0 0 20px rgba(245, 158, 11, 0.8)",
      },
      transitionTimingFunction: {
        "bounce-in": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        "elastic": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
        "bounce": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
      zIndex: {
        "60": "60",
        "70": "70",
        "80": "80",
        "90": "90",
        "100": "100",
      },
    },
  },
  plugins: [
    animatePlugin,
    plugin(({ addUtilities, theme }) => {
      const newUtilities = {
        ".text-shadow": {
          textShadow: "0 2px 4px rgba(0,0,0,0.1)",
        },
        ".text-shadow-lg": {
          textShadow: "0 4px 8px rgba(0,0,0,0.12)",
        },
        ".text-shadow-xl": {
          textShadow: "0 8px 16px rgba(0,0,0,0.14)",
        },
        ".text-shadow-2xl": {
          textShadow: "0 16px 32px rgba(0,0,0,0.16)",
        },
        ".text-shadow-none": {
          textShadow: "none",
        },
        ".backdrop-blur-xs": {
          backdropFilter: "blur(2px)",
        },
        ".scrollbar-hide": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".scrollbar-thin": {
          "scrollbar-width": "thin",
          "scrollbar-color": `${theme("colors.zion.blue.DEFAULT")} ${theme("colors.zion.slate.DEFAULT")}`,
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: theme("colors.zion.slate.DEFAULT"),
          },
          "&::-webkit-scrollbar-thumb": {
            background: theme("colors.zion.blue.DEFAULT"),
            borderRadius: "4px",
          },
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};

export default config;
