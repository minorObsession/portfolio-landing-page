/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // add these chatGPT
        // #70D6FF
        // #FF70A6
        // #FF9770
        // #FFD670
        // #E9FF70
        background: "#70D6FF",
        backgroundDarker: "#0c0a09",
        accent: "#FF70A6",
        accentHover: "#FF70A6",
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
          transition: "transform 0.3s ease", // Transition on transform property
          "&:hover": {
            transform: "translateY(-1px)", // Move up on hover
          },
        },
      });
    },
  ],
};
