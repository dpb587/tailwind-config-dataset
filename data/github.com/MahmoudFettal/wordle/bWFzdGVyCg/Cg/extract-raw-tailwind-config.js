module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Outfit", "ui-sans-serif", "system-ui"],
    },
    extend: {
      dropShadow: {
        "3xl": "0px 35px 35px rgba(0, 0, 0, 0.45)",
      },
      colors: {
        "correct": "#20AA57",
        "exist": "#E5B22D",
        "wrong": "#989898"
      },
      width: {
        128: "35rem",
      },
      height: {
        128: "35rem",
      },
      transitionDelay: {
        '0': '0ms',
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
      },
      screens: {
        'sm': '500px',
      },
    },
  },
  plugins: [],
};
