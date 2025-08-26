import type { Config } from 'tailwindcss'

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
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
        // Zion Tech Group brand colors
        "zion-blue": {
          DEFAULT: "#1e40af",
          light: "#3b82f6",
          lighter: "#60a5fa",
          dark: "#1e3a8a",
          darker: "#1e293b",
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
<<<<<<< HEAD
=======
        // Additional service category colors
        "zion-green": {
          DEFAULT: "#10b981",
          light: "#34d399",
          dark: "#059669",
        },
        "zion-orange": {
          DEFAULT: "#f59e0b",
          light: "#fbbf24",
          dark: "#d97706",
        },
        "zion-red": {
          DEFAULT: "#ef4444",
          light: "#f87171",
          dark: "#dc2626",
        },
        "zion-pink": {
          DEFAULT: "#ec4899",
          light: "#f472b6",
          dark: "#db2777",
        },
        "zion-indigo": {
          DEFAULT: "#6366f1",
          light: "#818cf8",
          dark: "#4f46e5",
        },
        "zion-emerald": {
          DEFAULT: "#10b981",
          light: "#34d399",
          dark: "#059669",
        },
        "zion-teal": {
          DEFAULT: "#14b8a6",
          light: "#2dd4bf",
          dark: "#0d9488",
        },
        "zion-amber": {
          DEFAULT: "#f59e0b",
          light: "#fbbf24",
          dark: "#d97706",
        },
        "zion-yellow": {
          DEFAULT: "#eab308",
          light: "#facc15",
          dark: "#ca8a04",
        },
        "zion-lime": {
          DEFAULT: "#84cc16",
          light: "#a3e635",
          dark: "#65a30d",
        },
        "zion-rose": {
          DEFAULT: "#f43f5e",
          light: "#fb7185",
          dark: "#e11d48",
        },
        "zion-violet": {
          DEFAULT: "#8b5cf6",
          light: "#a78bfa",
          dark: "#7c3aed",
        },
        "zion-fuchsia": {
          DEFAULT: "#d946ef",
          light: "#e879f9",
          dark: "#c026d3",
        },
        "zion-sky": {
          DEFAULT: "#0ea5e9",
          light: "#38bdf8",
          dark: "#0284c7",
        },
        "zion-blue-light": {
          DEFAULT: "#3b82f6",
          light: "#60a5fa",
          dark: "#2563eb",
        },
        "zion-cyan-light": {
          DEFAULT: "#06b6d4",
          light: "#22d3ee",
          dark: "#0891b2",
        },
>>>>>>> cursor/expand-services-and-deploy-updates-ea0a
        "zion-neon": {
          DEFAULT: "#22ddd2",
          light: "#7aeae4",
          dark: "#14847e",
          glow: "#22ddd2",
        },
        "zion-purple": {
          DEFAULT: "#8c15e9",
          light: "#b971f2",
<<<<<<< HEAD
          dark: "#530c8b",
          neon: "#b971f2",
=======
          dark: "#7c3aed",
        },
        "zion-purple-light": {
          DEFAULT: "#a855f7",
          light: "#c084fc",
          dark: "#9333ea",
>>>>>>> cursor/expand-services-and-deploy-updates-ea0a
        },
      },
      fontFamily: {
<<<<<<< HEAD
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
      },
    },
  },
  plugins: [animatePlugin],
};

export default config;
=======
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        "bounce-gentle": "bounceGentle 2s infinite",
        "pulse-gentle": "pulseGentle 3s infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "gradient": "gradient 8s ease infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "typing": "typing 3.5s steps(40, end)",
        "blink-caret": "blinkCaret 0.75s step-end infinite",
        "slide-in-left": "slideInLeft 0.5s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out",
        "slide-in-top": "slideInTop 0.5s ease-out",
        "slide-in-bottom": "slideInBottom 0.5s ease-out",
        "zoom-in": "zoomIn 0.3s ease-out",
        "zoom-out": "zoomOut 0.3s ease-out",
        "rotate-in": "rotateIn 0.5s ease-out",
        "flip-in": "flipIn 0.6s ease-out",
        "hinge": "hinge 2s ease-in-out",
        "roll-in": "rollIn 0.6s ease-out",
        "bounce-in": "bounceIn 0.8s ease-out",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "fade-in-down": "fadeInDown 0.6s ease-out",
        "fade-in-left": "fadeInLeft 0.6s ease-out",
        "fade-in-right": "fadeInRight 0.6s ease-out",
        "fade-out": "fadeOut 0.5s ease-in",
        "fade-out-up": "fadeOutUp 0.6s ease-in",
        "fade-out-down": "fadeOutDown 0.6s ease-in",
        "fade-out-left": "fadeOutLeft 0.6s ease-in",
        "fade-out-right": "fadeOutRight 0.6s ease-in",
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
        xs: "2px",
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
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
} satisfies Config
>>>>>>> cursor/expand-services-and-deploy-updates-ea0a
