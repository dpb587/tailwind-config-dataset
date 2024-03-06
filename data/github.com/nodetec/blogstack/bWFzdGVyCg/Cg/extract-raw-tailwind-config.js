const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      main: ["Cantarell", "Roboto", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        error: "rgb(201, 74, 74)",
        red: "rgb(247, 0, 0)",
        "red-hover": "rgb(210, 19, 7)",
        green: "rgb(26, 137, 23)",
        "green-hover": "rgb(15, 115, 12)",
        gray: "rgb(117, 117, 117)",
        "gray-hover": "rgb(41, 41, 41)",
        "light-gray": "rgb(225, 225, 225)",
        "medium-gray": "rgb(168, 168, 168)",
      },
      gridTemplateColumns: {
        "content-profile": "5fr 2fr",
      },
      boxShadow: {
        "profile-menu": "rgb(230, 230, 230) 0px 1px 4px",
        popup: "rgba(0, 0, 0, 0.15) 0px 2px 10px",
        editor:
          "0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgb(16 22 26 / 0%), 0 1px 1px rgb(16 22 26 / 20%)",
      },
      maxHeight: {
        192: "48rem",
      },
      clipPath: {
        "clip-path": "rect(0px, 18px, 14px, -4px)",
      },
      keyframes: {
        "slide-down": {
          from: {
            opacity: 0,
            transform: "translateY(1rem)",
          },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
      animation: {
        "slide-down": "slide-down 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* IE and Edge */
          "-ms-overflow-style": "none",

          /* Firefox */
          "scrollbar-width": "none",

          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    }),
  ],
};
