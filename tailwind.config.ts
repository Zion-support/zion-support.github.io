import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import animatePlugin from "tailwindcss-animate";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        // Enhanced Zion Tech Group color palette
        "zion": {
          blue: {
            DEFAULT: "#2e73ea",
            light: "#8ab1f3",
            dark: "#172d67",
            neon: "#00d4ff",
          },
          purple: {
            DEFAULT: "#8c15e9",
            light: "#b971f2",
            dark: "#530c8b",
            neon: "#b971f2",
          },
          cyan: {
            DEFAULT: "#22ddd2",
            light: "#7aeae4",
            dark: "#14847e",
            neon: "#22ddd2",
          },
          slate: {
            DEFAULT: "#17072b",
            light: "#451582",
            dark: "#000000",
            glow: "#2a1b3d",
          },
          green: {
            DEFAULT: "#10b981",
            light: "#34d399",
            dark: "#059669",
            neon: "#00ff88",
          },
          orange: {
            DEFAULT: "#f59e0b",
            light: "#fbbf24",
            dark: "#d97706",
            neon: "#ff6b35",
          },
          red: {
            DEFAULT: "#ef4444",
            light: "#f87171",
            dark: "#dc2626",
            neon: "#ff4757",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        mono: ["var(--font-mono)", ...fontFamily.mono],
        display: ["var(--font-display)", ...fontFamily.sans],
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
        "glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(34, 221, 210, 0.5)" },
          "50%": { boxShadow: "0 0 40px rgba(34, 221, 210, 0.8)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "float-medium": "float-medium 4s ease-in-out infinite",
        "float-fast": "float-fast 3s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-out": "fade-out 0.3s ease-out",
        "slide-in-from-top": "slide-in-from-top 0.3s ease-out",
        "slide-in-from-bottom": "slide-in-from-bottom 0.3s ease-out",
        "slide-in-from-left": "slide-in-from-left 0.3s ease-out",
        "slide-in-from-right": "slide-in-from-right 0.3s ease-out",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "zion-gradient": "linear-gradient(135deg, #17072b 0%, #451582 50%, #8c15e9 100%)",
        "zion-cyber": "linear-gradient(135deg, #22ddd2 0%, #2e73ea 50%, #8c15e9 100%)",
      },
      backdropBlur: {
        xs: "2px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-mesh": "linear-gradient(45deg, #8c15e9, #22ddd2, #2e73ea, #8c15e9)",
        "gradient-neon": "linear-gradient(45deg, #22ddd2, #8c15e9, #22ddd2)",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "neon": "0 0 20px rgba(34, 221, 210, 0.5)",
        "neon-purple": "0 0 20px rgba(140, 21, 233, 0.5)",
        "neon-blue": "0 0 20px rgba(46, 115, 234, 0.5)",
        "glow": "0 0 40px rgba(34, 221, 210, 0.3)",
        "glow-purple": "0 0 40px rgba(140, 21, 233, 0.3)",
        "glow-blue": "0 0 40px rgba(46, 115, 234, 0.3)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGentle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px #22ddd2" },
          "100%": { boxShadow: "0 0 20px #22ddd2, 0 0 30px #22ddd2" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        typing: {
          "from": { width: "0" },
          "to": { width: "100%" },
        },
        blinkCaret: {
          "from, to": { borderColor: "transparent" },
          "50%": { borderColor: "#22ddd2" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInTop: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInBottom: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        zoomIn: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        zoomOut: {
          "0%": { transform: "scale(1.2)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        rotateIn: {
          "0%": { transform: "rotate(-200deg)", opacity: "0" },
          "100%": { transform: "rotate(0)", opacity: "1" },
        },
        flipIn: {
          "0%": { transform: "perspective(400px) rotateY(90deg)", opacity: "0" },
          "40%": { transform: "perspective(400px) rotateY(-20deg)" },
          "60%": { transform: "perspective(400px) rotateY(10deg)" },
          "80%": { transform: "perspective(400px) rotateY(-5deg)" },
          "100%": { transform: "perspective(400px) rotateY(0deg)", opacity: "1" },
        },
        hinge: {
          "0%": { transform: "rotate(0)", transformOrigin: "top left", animationTimingFunction: "ease-in-out" },
          "20%, 60%": { transform: "rotate(80deg)", transformOrigin: "top left", animationTimingFunction: "ease-in-out" },
          "40%, 80%": { transform: "rotate(60deg)", transformOrigin: "top left", animationTimingFunction: "ease-in-out", opacity: "1" },
          "100%": { transform: "rotate(60deg)", transformOrigin: "top left", opacity: "0" },
        },
        rollIn: {
          "0%": { transform: "translateX(-100%) rotate(-120deg)", opacity: "0" },
          "100%": { transform: "translateX(0) rotate(0deg)", opacity: "1" },
        },
        bounceIn: {
          "0%": { transform: "scale(0.3)", opacity: "0" },
          "50%": { transform: "scale(1.05)" },
          "70%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        fadeInUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeInDown: {
          "0%": { transform: "translateY(-30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeInLeft: {
          "0%": { transform: "translateX(-30px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fadeInRight: {
          "0%": { transform: "translateX(30px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        fadeOutUp: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-30px)" },
        },
        fadeOutDown: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(30px)" },
        },
        fadeOutLeft: {
          "0%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "0", transform: "translateX(-30px)" },
        },
        fadeOutRight: {
          "0%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "0", transform: "translateX(30px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-zion": "linear-gradient(135deg, #1e40af 0%, #22ddd2 100%)",
        "gradient-zion-dark": "linear-gradient(135deg, #1e3a8a 0%, #14847e 100%)",
        "gradient-zion-light": "linear-gradient(135deg, #3b82f6 0%, #7aeae4 100%)",
        "gradient-zion-purple": "linear-gradient(135deg, #8c15e9 0%, #22ddd2 100%)",
        "gradient-zion-cyan": "linear-gradient(135deg, #22ddd2 0%, #7aeae4 100%)",
        "gradient-zion-blue": "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
        "gradient-zion-green": "linear-gradient(135deg, #10b981 0%, #22ddd2 100%)",
        "gradient-zion-orange": "linear-gradient(135deg, #f59e0b 0%, #22ddd2 100%)",
        "gradient-zion-red": "linear-gradient(135deg, #ef4444 0%, #22ddd2 100%)",
        "gradient-zion-pink": "linear-gradient(135deg, #ec4899 0%, #22ddd2 100%)",
        "gradient-zion-indigo": "linear-gradient(135deg, #6366f1 0%, #22ddd2 100%)",
        "gradient-zion-emerald": "linear-gradient(135deg, #10b981 0%, #22ddd2 100%)",
        "gradient-zion-teal": "linear-gradient(135deg, #14b8a6 0%, #22ddd2 100%)",
        "gradient-zion-amber": "linear-gradient(135deg, #f59e0b 0%, #22ddd2 100%)",
        "gradient-zion-yellow": "linear-gradient(135deg, #eab308 0%, #22ddd2 100%)",
        "gradient-zion-lime": "linear-gradient(135deg, #84cc16 0%, #22ddd2 100%)",
        "gradient-zion-rose": "linear-gradient(135deg, #f43f5e 0%, #22ddd2 100%)",
        "gradient-zion-violet": "linear-gradient(135deg, #8b5cf6 0%, #22ddd2 100%)",
        "gradient-zion-fuchsia": "linear-gradient(135deg, #d946ef 0%, #22ddd2 100%)",
        "gradient-zion-sky": "linear-gradient(135deg, #0ea5e9 0%, #22ddd2 100%)",
        "gradient-zion-blue-light": "linear-gradient(135deg, #3b82f6 0%, #22ddd2 100%)",
        "gradient-zion-cyan-light": "linear-gradient(135deg, #06b6d4 0%, #22ddd2 100%)",
        "gradient-zion-neon": "linear-gradient(135deg, #22ddd2 0%, #7aeae4 100%)",
        "gradient-zion-purple": "linear-gradient(135deg, #8c15e9 0%, #22ddd2 100%)",
        "gradient-zion-purple-light": "linear-gradient(135deg, #a855f7 0%, #22ddd2 100%)",
      },
      boxShadow: {
        "zion": "0 4px 20px rgba(34, 221, 210, 0.3)",
        "zion-lg": "0 10px 40px rgba(34, 221, 210, 0.4)",
        "zion-xl": "0 20px 60px rgba(34, 221, 210, 0.5)",
        "zion-2xl": "0 25px 80px rgba(34, 221, 210, 0.6)",
        "zion-inner": "inset 0 2px 4px rgba(34, 221, 210, 0.2)",
        "zion-neon": "0 0 20px rgba(34, 221, 210, 0.8), 0 0 40px rgba(34, 221, 210, 0.4)",
        "zion-glow": "0 0 30px rgba(34, 221, 210, 0.6), 0 0 60px rgba(34, 221, 210, 0.3)",
      },
      backdropBlur: {
        'xs': '2px',
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      zIndex: {
        "60": "60",
        "70": "70",
        "80": "80",
        "90": "90",
        "100": "100",
      },
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
} satisfies Config