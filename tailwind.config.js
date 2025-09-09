/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
    './scripts/**/*.{js,ts,jsx,tsx,mdx}',
    './automation/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  // Enable JIT mode for better performance
  mode: 'jit',
  
  // Dark mode configuration
  darkMode: 'class',
  
  // Theme configuration
  theme: {
    extend: {
      // Custom colors for Zion Tech Group brand
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
      spacing: {
        responsive: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
