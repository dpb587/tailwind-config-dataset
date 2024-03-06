import { chaiBuilderTheme } from "./src/core/tailwind-config";

/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./core/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: chaiBuilderTheme(),
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwindcss-animate")],
};
