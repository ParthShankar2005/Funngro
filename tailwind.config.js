/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          primary: "#0F1B2A",
          secondary: "#1D2D3F",
          muted: "#2A3F57",
        },
        accent: {
          DEFAULT: "#20C878",
          soft: "#48C987",
        },
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
        display: ["Sora", "Manrope", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 80px rgba(32, 200, 120, 0.2)",
        card: "0 14px 40px rgba(4, 10, 18, 0.28)",
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(circle at top right, rgba(72, 201, 135, 0.16), transparent 45%), radial-gradient(circle at top left, rgba(32, 200, 120, 0.14), transparent 40%)",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "float-slow": "float 12s ease-in-out infinite",
        pulseGlow: "pulseGlow 3.5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.75" },
        },
      },
    },
  },
  plugins: [],
};
