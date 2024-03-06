module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
      72: "18rem",
      84: "21rem",
      96: "24rem",
      108: "27rem",
      120: "30rem",
      132: "33rem",
      154: "36rem",
    },
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      letterSpacing: {
        xl: "0.3em",
        "2xl": "0.6em",
        "3xl": "0.9em",
        "4xl": "1.2em",
      },
      inset: {
        "1/8": "12.5%",
        "1/5": "20%",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
        108: "27rem",
        120: "30rem",
        132: "33rem",
        154: "36rem",
        166: "39rem",
        178: "42rem",
      },
      colors: {
        primary: "#E3350D",
        primarySecondary: "#EA5D60",
        primaryGray: "#DEDEDE",
        secondaryGray: "#ACAAAA",
        tertiaryGray: "#8A8A8A",
        darkGray: "#8C8C8C",
        darkerGray: "#6D6D6D",
      },
    },
  },
};