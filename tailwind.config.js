/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#70D6FF",
        backgroundDarker: "#212529", // #495057 #0c0a09 ;
        accent: "#845ef7", //  #7048e8 #7950f2 #6741d9
        accentHover: "#b197fc", // or  for a darker effect
        // accentSecondary: "#e5dbff", // Added second accent color
        // accentTertiary: "#d0bfff",
        accentSecondary: "#212529", // Added second accent color
        accentTertiary: "#343a40",
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
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "translateY(-1px)",
          },
        },
      });
    },
  ],
};
