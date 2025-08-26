import type { Config } from 'tailwindcss'

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
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { 
            boxShadow: "0 0 20px rgba(34, 221, 210, 0.5)",
            transform: "scale(1)"
          },
          "50%": { 
            boxShadow: "0 0 40px rgba(34, 221, 210, 0.8)",
            transform: "scale(1.05)"
          },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "gradient-shift": "gradient-shift 3s ease infinite",
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
    },
  },
  plugins: [
    animatePlugin,
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.rtl': {
          direction: 'rtl',
          textAlign: 'right',
        },
        '.ltr': {
          direction: 'ltr',
          textAlign: 'left',
        },
        '.text-gradient': {
          background: 'linear-gradient(45deg, #22ddd2, #8c15e9, #2e73ea)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        },
        '.bg-mesh': {
          background: 'linear-gradient(45deg, #8c15e9, #22ddd2, #2e73ea, #8c15e9)',
          backgroundSize: '400% 400%',
          animation: 'gradient-shift 3s ease infinite',
        },
        '.glass': {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.glass-dark': {
          background: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};

export default config;
=======
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'zion-blue': { DEFAULT: '#0ea5e9', dark: '#0b76a8', light: '#38bdf8' },
				'zion-purple': { DEFAULT: '#7c3aed', dark: '#5b21b6', light: '#a78bfa' },
				'zion-cyan': { DEFAULT: '#22d3ee', dark: '#0891b2', light: '#67e8f9' },
				'zion-slate': { DEFAULT: '#64748b', dark: '#334155', light: '#94a3b8' },
				'background': '#0b1220',
			},
		},
	},
	plugins: [],
} satisfies Config
