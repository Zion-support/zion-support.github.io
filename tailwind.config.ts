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
  safelist: [],
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
        "zion-gold": {
          DEFAULT: "#ffd700",
          light: "#ffe55c",
          dark: "#ccac00",
        },
        "zion-silver": {
          DEFAULT: "#c0c0c0",
          light: "#e5e5e5",
          dark: "#808080",
        },
        "zion-bronze": {
          DEFAULT: "#cd7f32",
          light: "#daa520",
          dark: "#b8860b",
        },
        "zion-emerald": {
          DEFAULT: "#50c878",
          light: "#90ee90",
          dark: "#228b22",
        },
        "zion-ruby": {
          DEFAULT: "#e0115f",
          light: "#ff1493",
          dark: "#8b0000",
        },
        "zion-sapphire": {
          DEFAULT: "#0f52ba",
          light: "#4169e1",
          dark: "#000080",
        },
        "zion-diamond": {
          DEFAULT: "#b9f2ff",
          light: "#e0ffff",
          dark: "#87ceeb",
        },
        "zion-platinum": {
          DEFAULT: "#e5e4e2",
          light: "#f5f5f5",
          dark: "#c0c0c0",
        },
        "zion-titanium": {
          DEFAULT: "#878681",
          light: "#a8a8a8",
          dark: "#696969",
        },
        "zion-carbon": {
          DEFAULT: "#36454f",
          light: "#4a4a4a",
          dark: "#1a1a1a",
        },
        "zion-hydrogen": {
          DEFAULT: "#ffffff",
          light: "#f8f8f8",
          dark: "#e0e0e0",
        },
        "zion-helium": {
          DEFAULT: "#d4f1f4",
          light: "#e0ffff",
          dark: "#b0e0e6",
        },
        "zion-lithium": {
          DEFAULT: "#f0f8ff",
          light: "#f8f8ff",
          dark: "#e6e6fa",
        },
        "zion-beryllium": {
          DEFAULT: "#f0fff0",
          light: "#f5fffa",
          dark: "#e0eee0",
        },
        "zion-boron": {
          DEFAULT: "#fff8dc",
          light: "#ffffe0",
          dark: "#f0e68c",
        },
        "zion-carbon": {
          DEFAULT: "#f5f5dc",
          light: "#faf0e6",
          dark: "#deb887",
        },
        "zion-nitrogen": {
          DEFAULT: "#e6e6fa",
          light: "#f0f8ff",
          dark: "#b0c4de",
        },
        "zion-oxygen": {
          DEFAULT: "#f0f8ff",
          light: "#f8f8ff",
          dark: "#e6e6fa",
        },
        "zion-fluorine": {
          DEFAULT: "#f0fff0",
          light: "#f5fffa",
          dark: "#e0eee0",
        },
        "zion-neon": {
          DEFAULT: "#f0f8ff",
          light: "#f8f8ff",
          dark: "#e6e6fa",
        },
        "zion-sodium": {
          DEFAULT: "#fff8dc",
          light: "#ffffe0",
          dark: "#f0e68c",
        },
        "zion-magnesium": {
          DEFAULT: "#f5f5dc",
          light: "#faf0e6",
          dark: "#deb887",
        },
        "zion-aluminum": {
          DEFAULT: "#e6e6fa",
          light: "#f0f8ff",
          dark: "#b0c4de",
        },
        "zion-silicon": {
          DEFAULT: "#f0f8ff",
          light: "#f8f8ff",
          dark: "#e6e6fa",
        },
        "zion-phosphorus": {
          DEFAULT: "#f0fff0",
          light: "#f5fffa",
          dark: "#e0eee0",
        },
        "zion-sulfur": {
          DEFAULT: "#fff8dc",
          light: "#ffffe0",
          dark: "#f0e68c",
        },
        "zion-chlorine": {
          DEFAULT: "#f5f5dc",
          light: "#faf0e6",
          dark: "#deb887",
        },
        "zion-argon": {
          DEFAULT: "#e6e6fa",
          light: "#f0f8ff",
          dark: "#b0c4de",
        },
        "zion-potassium": {
          DEFAULT: "#f0f8ff",
          light: "#f8f8ff",
          dark: "#e6e6fa",
        },
        "zion-calcium": {
          DEFAULT: "#f0fff0",
          light: "#f5fffa",
          dark: "#e0eee0",
        },
        "zion-scandium": {
          DEFAULT: "#fff8dc",
          light: "#ffffe0",
          dark: "#f0e68c",
        },
        "zion-titanium": {
          DEFAULT: "#f5f5dc",
          light: "#faf0e6",
          dark: "#deb887",
        },
        "zion-vanadium": {
          DEFAULT: "#e6e6fa",
          light: "#f0f8ff",
          dark: "#b0c4de",
        },
        "zion-chromium": {
          DEFAULT: "#f0f8ff",
          light: "#f8f8ff",
          dark: "#e6e6fa",
        },
        "zion-manganese": {
          DEFAULT: "#f0fff0",
          light: "#f5fffa",
          dark: "#e0eee0",
        },
        "zion-iron": {
          DEFAULT: "#fff8dc",
          light: "#ffffe0",
          dark: "#f0e68c",
        },
        "zion-cobalt": {
          DEFAULT: "#f5f5dc",
          light: "#faf0e6",
          dark: "#deb887",
        },
        "zion-nickel": {
          DEFAULT: "#e6e6fa",
          light: "#f0f8ff",
          dark: "#b0c4de",
        },
        "zion-copper": {
          DEFAULT: "#f0f8ff",
          light: "#f8f8ff",
          dark: "#e6e6fa",
        },
        "zion-zinc": {
          DEFAULT: "#f0fff0",
          light: "#f5fffa",
          dark: "#e0eee0",
        },
        "zion-gallium": {
          DEFAULT: "#fff8dc",
          light: "#ffffe0",
          dark: "#f0e68c",
        },
        "zion-germanium": {
          DEFAULT: "#f5f5dc",
          light: "#faf0e6",
          dark: "#deb887",
        },
        "zion-arsenic": {
          DEFAULT: "#e6e6fa",
          light: "#f0f8ff",
          dark: "#b0c4de",
        },
        "zion-selenium": {
          DEFAULT: "#f0f8ff",
          light: "#f8f8ff",
          dark: "#e6e6fa",
        },
        "zion-bromine": {
          DEFAULT: "#f0fff0",
          light: "#f5fffa",
          dark: "#e0eee0",
        },
        "zion-krypton": {
          DEFAULT: "#fff8dc",
          light: "#ffffe0",
          dark: "#f0e68c",
        },
        "zion-rubidium": {
          DEFAULT: "#f5f5dc",
          light: "#faf0e6",
          dark: "#deb887",
        },
        "zion-strontium": {
          DEFAULT: "#e6e6fa",
          light: "#f0f8ff",
          dark: "#b0c4de",
        },
        "zion-yttrium": {
          DEFAULT: "#f0f8ff",
          light: "#f8f8ff",
          dark: "#e6e6fa",
        },
        "zion-zirconium": {
          DEFAULT: "#f0fff0",
          light: "#f5fffa",
          dark: "#e0eee0",
        },
        "zion-niobium": {
          DEFAULT: "#fff8dc",
          light: "#ffffe0",
          dark: "#f0e68c",
        },
        "zion-molybdenum": {
          DEFAULT: "#f5f5dc",
          light: "#faf0e6",
          dark: "#deb887",
        },
        "zion-technetium": {
          DEFAULT: "#e6e6fa",
          light: "#f0f8ff",
          dark: "#b0c4de",
        },
        "zion-ruthenium": {
          DEFAULT: "#f0f8ff",
          light: "#f8f8ff",
          dark: "#e6e6fa",
        },
        "zion-rhodium": {
          DEFAULT: "#f0fff0",
          light: "#f5fffa",
          dark: "#e0eee0",
        },
        "zion-palladium": {
          DEFAULT: "#fff8dc",
          light: "#ffffe0",
          dark: "#f0e68c",
        },
        "zion-silver": {
          DEFAULT: "#f5f5dc",
          light: "#faf0e6",
          dark: "#deb887",
        },
        "zion-cadmium": {
          DEFAULT: "#e6e6fa",
          light: "#f0f8ff",
          dark: "#b0c4de",
        },
        "zion-indium": {
          DEFAULT: "#f0f8ff",
          light: "#f8f8ff",
          dark: "#e6e6fa",
        },
        "zion-tin": {
          DEFAULT: "#f0fff0",
          light: "#f5fffa",
          dark: "#e0eee0",
        },
        "zion-antimony": {
          DEFAULT: "#fff8dc",
          light: "#ffffe0",
          dark: "#f0e68c",
        },
        "zion-tellurium": {
          DEFAULT: "#f5f5dc",
          light: "#faf0e6",
          dark: "#deb887",
        },
        "zion-iodine": {
          DEFAULT: "#e6e6fa",
          light: "#f0f8ff",
          dark: "#b0c4de",
        },
        "zion-xenon": {
          DEFAULT: "#f0f8ff",
          light: "#f8f8ff",
          dark: "#e6e6fa",
        },
        "zion-cesium": {
          DEFAULT: "#f0fff0",
          light: "#f5fffa",
          dark: "#e0eee0",
        },
        "zion-barium": {
          DEFAULT: "#fff8dc",
          light: "#ffffe0",
          dark: "#f0e68c",
        },
        "zion-lanthanum": {
          DEFAULT: "#f5f5dc",
          light: "#faf0e6",
          dark: "#deb887",
        },
        "zion-cerium": {
          DEFAULT: "#e6e6fa",
          light: "#f0f8ff",
          dark: "#b0c4de",
        },
        "zion-praseodymium": {
          DEFAULT: "#f0f8ff",
          light: "#f8f8ff",
          dark: "#e6e6fa",
        },
        "zion-neodymium": {
          DEFAULT: "#f0fff0",
          light: "#f5fffa",
          dark: "#e0eee0",
        },
        "zion-promethium": {
          DEFAULT: "#fff8dc",
          light: "#ffffe0",
          dark: "#f0e68c",
        },
        "zion-samarium": {
          DEFAULT: "#f5f5dc",
          light: "#faf0e6",
          dark: "#deb887",
        },
        "zion-europium": {
          DEFAULT: "#e6e6fa",
          light: "#f0f8ff",
          dark: "#b0c4de",
        },
        "zion-gadolinium": {
          DEFAULT: "#f0f8ff",
          light: "#f8f8ff",
          dark: "#e6e6fa",
        },
        "zion-terbium": {
          DEFAULT: "#f0fff0",
          light: "#f5fffa",
          dark: "#e0eee0",
        },
        "zion-dysprosium": {
          DEFAULT: "#fff8dc",
          light: "#ffffe0",
          dark: "#f0e68c",
        },
        "zion-holmium": {
          DEFAULT: "#f5f5dc",
          light: "#faf0e6",
          dark: "#deb887",
        },
        "zion-erbium": {
          DEFAULT: "#e6e6fa",
          light: "#f0f8ff",
          dark: "#b0c4de",
        },
        "zion-thulium": {
          DEFAULT: "#f0f8ff",
          light: "#f8f8ff",
          dark: "#e6e6fa",
        },
        "zion-ytterbium": {
          DEFAULT: "#f0fff0",
          light: "#f5fffa",
          dark: "#e0eee0",
        },
        "zion-lutetium": {
          DEFAULT: "#fff8dc",
          light: "#ffffe0",
          dark: "#f0e68c",
        },
        "zion-hafnium": {
          DEFAULT: "#f5f5dc",
          light: "#faf0e6",
          dark: "#deb887",
        },
        "zion-tantalum": {
          DEFAULT: "#e6e6fa",
          light: "#f0f8ff",
          dark: "#b0c4de",
        },
        "zion-tungsten": {
          DEFAULT: "#f0f8ff",
          light: "#f8f8ff",
          dark: "#e6e6fa",
        },
        "zion-rhenium": {
          DEFAULT: "#f0fff0",
          light: "#f5fffa",
          dark: "#e0eee0",
        },
        "zion-osmium": {
          DEFAULT: "#fff8dc",
          light: "#ffffe0",
          dark: "#f0e68c",
        },
        "zion-iridium": {
          DEFAULT: "#f5f5dc",
          light: "#faf0e6",
          dark: "#deb887",
        },
        "zion-platinum": {
          DEFAULT: "#e6e6fa",
          light: "#f0f8ff",
          dark: "#b0c4de",
        },
        "zion-gold": {
          DEFAULT: "#f0f8ff",
          light: "#f8f8ff",
          dark: "#e6e6fa",
        },
        "zion-mercury": {
          DEFAULT: "#f0fff0",
          light: "#f5fffa",
          dark: "#e0eee0",
        },
        "zion-thallium": {
          DEFAULT: "#fff8dc",
          light: "#ffffe0",
          dark: "#f0e68c",
        },
        "zion-lead": {
          DEFAULT: "#f5f5dc",
          light: "#faf0e6",
          dark: "#deb887",
        },
        "zion-bismuth": {
          DEFAULT: "#e6e6fa",
          light: "#f0f8ff",
          dark: "#b0c4de",
        },
        "zion-polonium": {
          DEFAULT: "#f0f8ff",
          light: "#f8f8ff",
          dark: "#e6e6fa",
        },
        "zion-astatine": {
          DEFAULT: "#f0fff0",
          light: "#f5fffa",
          dark: "#e0eee0",
        },
        "zion-radon": {
          DEFAULT: "#fff8dc",
          light: "#ffffe0",
          dark: "#f0e68c",
        },
        "zion-francium": {
          DEFAULT: "#f5f5dc",
          light: "#faf0e6",
          dark: "#deb887",
        },
        "zion-radium": {
          DEFAULT: "#e6e6fa",
          light: "#f0f8ff",
          dark: "#b0c4de",
        },
        "zion-actinium": {
          DEFAULT: "#f0f8ff",
          light: "#f8f8ff",
          dark: "#e6e6fa",
        },
        "zion-thorium": {
          DEFAULT: "#f0fff0",
          light: "#f5fffa",
          dark: "#e0eee0",
        },
        "zion-protactinium": {
          DEFAULT: "#fff8dc",
          light: "#ffffe0",
          dark: "#f0e68c",
        },
        "zion-uranium": {
          DEFAULT: "#f5f5dc",
          light: "#faf0e6",
          dark: "#deb887",
        },
        "zion-neptunium": {
          DEFAULT: "#e6e6fa",
          light: "#f0f8ff",
          dark: "#b0c4de",
        },
        "zion-plutonium": {
          DEFAULT: "#f0f8ff",
          light: "#f8f8ff",
          dark: "#e6e6fa",
        },
        "zion-americium": {
          DEFAULT: "#f0fff0",
          light: "#f5fffa",
          dark: "#e0eee0",
        },
        "zion-curium": {
          DEFAULT: "#fff8dc",
          light: "#ffffe0",
          dark: "#f0e68c",
        },
        "zion-berkelium": {
          DEFAULT: "#f5f5dc",
          light: "#faf0e6",
          dark: "#deb887",
        },
        "zion-californium": {
          DEFAULT: "#e6e6fa",
          light: "#f0f8ff",
          dark: "#b0c4de",
        },
        "zion-einsteinium": {
          DEFAULT: "#f0f8ff",
          light: "#f8f8ff",
          dark: "#e6e6fa",
        },
        "zion-fermium": {
          DEFAULT: "#f0fff0",
          light: "#f5fffa",
          dark: "#e0eee0",
        },
        "zion-mendelevium": {
          DEFAULT: "#fff8dc",
          light: "#ffffe0",
          dark: "#f0e68c",
        },
        "zion-nobelium": {
          DEFAULT: "#f5f5dc",
          light: "#faf0e6",
          dark: "#deb887",
        },
        "zion-lawrencium": {
          DEFAULT: "#e6e6fa",
          light: "#f0f8ff",
          dark: "#b0c4de",
        },
        "zion-rutherfordium": {
          DEFAULT: "#f0f8ff",
          light: "#f8f8ff",
          dark: "#e6e6fa",
        },
        "zion-dubnium": {
          DEFAULT: "#f0fff0",
          light: "#f5fffa",
          dark: "#e0eee0",
        },
        "zion-seaborgium": {
          DEFAULT: "#fff8dc",
          light: "#ffffe0",
          dark: "#f0e68c",
        },
        "zion-bohrium": {
          DEFAULT: "#f5f5dc",
          light: "#faf0e6",
          dark: "#deb887",
        },
        "zion-hassium": {
          DEFAULT: "#e6e6fa",
          light: "#f0f8ff",
          dark: "#b0c4de",
        },
        "zion-meitnerium": {
          DEFAULT: "#f0f8ff",
          light: "#f8f8ff",
          dark: "#e6e6fa",
        },
        "zion-darmstadtium": {
          DEFAULT: "#f0fff0",
          light: "#f5fffa",
          dark: "#e0eee0",
        },
        "zion-roentgenium": {
          DEFAULT: "#fff8dc",
          light: "#ffffe0",
          dark: "#f0e68c",
        },
        "zion-copernicium": {
          DEFAULT: "#f5f5dc",
          light: "#faf0e6",
          dark: "#deb887",
        },
        "zion-nihonium": {
          DEFAULT: "#e6e6fa",
          light: "#f0f8ff",
          dark: "#b0c4de",
        },
        "zion-flerovium": {
          DEFAULT: "#f0f8ff",
          light: "#f8f8ff",
          dark: "#e6e6fa",
        },
        "zion-moscovium": {
          DEFAULT: "#f0fff0",
          light: "#f5fffa",
          dark: "#e0eee0",
        },
        "zion-livermorium": {
          DEFAULT: "#fff8dc",
          light: "#ffffe0",
          dark: "#f0e68c",
        },
        "zion-tennessine": {
          DEFAULT: "#f5f5dc",
          light: "#faf0e6",
          dark: "#deb887",
        },
        "zion-oganesson": {
          DEFAULT: "#e6e6fa",
          light: "#f0f8ff",
          dark: "#b0c4de",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        orbitron: ["Orbitron", "monospace"],
        rajdhani: ["Rajdhani", "sans-serif"],
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out infinite 2s",
        "pulse-slow": "pulseSlow 4s ease-in-out infinite",
        "glow": "glow 3s ease-in-out infinite alternate",
        "neon-flicker": "neonFlicker 2s ease-in-out infinite alternate",
        "cyber-grid": "cyberGrid 20s linear infinite",
        "hologram": "hologram 8s ease-in-out infinite",
        "quantum-pulse": "quantumPulse 5s ease-in-out infinite",
        "background-shift": "backgroundShift 20s ease-in-out infinite",
        "grid-move": "gridMove 30s linear infinite",
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
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px currentColor" },
          "100%": { boxShadow: "0 0 20px currentColor, 0 0 30px currentColor" },
        },
        neonFlicker: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0.8" },
        },
        cyberGrid: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(50px, 50px)" },
        },
        hologram: {
          "0%": { opacity: "0.3" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0.3" },
        },
        quantumPulse: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        backgroundShift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "25%": { transform: "translate(-2%, -1%) scale(1.02)" },
          "50%": { transform: "translate(1%, -2%) scale(0.98)" },
          "75%": { transform: "translate(-1%, 1%) scale(1.01)" },
        },
        gridMove: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(50px, 50px)" },
        },
      },
      boxShadow: {
        "neon": "0 0 5px #22ddd2, 0 0 10px #22ddd2, 0 0 15px #22ddd2, 0 0 20px #22ddd2",
        "neon-lg": "0 0 10px #22ddd2, 0 0 20px #22ddd2, 0 0 30px #22ddd2, 0 0 40px #22ddd2",
        "neon-purple": "0 0 5px #8c15e9, 0 0 10px #8c15e9, 0 0 15px #8c15e9, 0 0 20px #8c15e9",
        "neon-blue": "0 0 5px #2e73ea, 0 0 10px #2e73ea, 0 0 15px #2e73ea, 0 0 20px #2e73ea",
        "cyber": "0 0 10px #00ff88, 0 0 20px #00ff88, 0 0 30px #00ff88",
        "matrix": "0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41",
      },
      backdropBlur: {
        xs: "2px",
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
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
    plugin(({ addUtilities, addComponents, theme }) => {
      // Add custom utilities
      addUtilities({
        ".text-shadow": {
          textShadow: "0 2px 4px rgba(0,0,0,0.1)",
        },
        ".text-shadow-lg": {
          textShadow: "0 4px 8px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08)",
        },
        ".text-shadow-xl": {
          textShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
        },
        ".text-shadow-2xl": {
          textShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
        },
        ".text-shadow-none": {
          textShadow: "none",
        },
        ".bg-grid-pattern": {
          backgroundImage: "linear-gradient(rgba(34, 221, 210, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 221, 210, 0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        },
        ".bg-dots-pattern": {
          backgroundImage: "radial-gradient(circle, rgba(34, 221, 210, 0.3) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        },
        ".bg-hexagon-pattern": {
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322ddd2' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        },
        ".scrollbar-hide": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".scrollbar-default": {
          "&::-webkit-scrollbar": {
            width: "8px",
            height: "8px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(34, 221, 210, 0.3)",
            borderRadius: "4px",
            "&:hover": {
              backgroundColor: "rgba(34, 221, 210, 0.5)",
            },
          },
        },
      });

      // Add custom components
      addComponents({
        ".btn-futuristic": {
          background: "linear-gradient(135deg, #22ddd2 0%, #2e73ea 100%)",
          border: "none",
          color: "white",
          padding: "12px 24px",
          borderRadius: "12px",
          fontWeight: "600",
          cursor: "pointer",
          transition: "all 0.3s ease",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: "''",
            position: "absolute",
            top: "0",
            left: "-100%",
            width: "100%",
            height: "100%",
            background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
            transition: "left 0.5s",
          },
          "&:hover::before": {
            left: "100%",
          },
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 10px 25px rgba(34, 221, 210, 0.3)",
          },
        },
        ".card-futuristic": {
          backgroundColor: "rgba(23, 7, 43, 0.8)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(34, 221, 210, 0.2)",
          borderRadius: "16px",
          padding: "24px",
          transition: "all 0.3s ease",
          "&:hover": {
            borderColor: "rgba(34, 221, 210, 0.4)",
            transform: "translateY(-4px)",
            boxShadow: "0 20px 40px rgba(34, 221, 210, 0.1)",
          },
        },
        ".input-futuristic": {
          backgroundColor: "rgba(23, 7, 43, 0.6)",
          border: "2px solid rgba(34, 221, 210, 0.2)",
          borderRadius: "8px",
          padding: "12px 16px",
          color: "white",
          transition: "all 0.3s ease",
          "&:focus": {
            outline: "none",
            borderColor: "rgba(34, 221, 210, 0.6)",
            boxShadow: "0 0 0 3px rgba(34, 221, 210, 0.1)",
          },
          "&::placeholder": {
            color: "rgba(255, 255, 255, 0.5)",
          },
        },
      });
    }),
  ],
};

export default config;
