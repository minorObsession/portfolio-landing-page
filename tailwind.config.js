/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#1a1a1a",
        backgroundDarker: "#0c0a09",
        accent: "#515bcf",
        accentHover: "#6574cd",
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".hover-up": {
          transition: "transform 0.2s ease", // Transition on transform property
          "&:hover": {
            transform: "translateY(-1px)", // Move up on hover
          },
        },
      });
    },
  ],
};
