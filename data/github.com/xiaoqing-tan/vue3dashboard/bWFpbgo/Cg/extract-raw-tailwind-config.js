/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      lineClamp: {
        7: "7",
        8: "8",
        9: "9",
        10: "10",
      },
    },
  },
  variants: {
    lineClamp: ["responsive", "hover"],
  },
  // require("@tailwindcss/forms"),
  // eslint-disable-next-line no-undef
  plugins: [require("@tailwindcss/line-clamp"), require('@tailwindcss/typography')],
};
