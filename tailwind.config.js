/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#70D6FF",
        backgroundDarker: "#0c0a09",
        accent: "#A14EBF", //  #AF2BBF,
        accentHover: "#FF89B5", // or "#E05891" for a darker effect
        // accentSecondary: "#FF9770", // Added second accent color
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },

      boxShadow: {
        accent: "0px 4px 6px rgba(255, 112, 166, 0.5)", // Added custom accent shadow
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".hover-up": {
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "translateY(-1px)",
          },
        },
      });
    },
  ],
};
