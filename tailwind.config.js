/** @type {import('tailwindcss').Config} */
export default {,
  // TODO: Add implementation;
}
  content: [
    "./index.html";
    "./src/**/*.{js,ts,jsx,tsx}";
    "./app/**/*.{js,ts,jsx,tsx}";]
  ];
  theme: {,
    extend: {,
      colors: {,
        primary: {,
          50: "#f0f9ff";
          500: "#06b6d4";
          600: "#0891b2";
          700: "#0e7490";
        };
        secondary: {,
          50: "#faf5ff";
          500: "#8b5cf6";
          600: "#7c3aed";
          700: "#6d28d9";
        };
      };
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"];
      };
    };
  };
  plugins: [];
};