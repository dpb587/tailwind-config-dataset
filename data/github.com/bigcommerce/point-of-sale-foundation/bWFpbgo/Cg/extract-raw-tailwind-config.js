module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        dark: "0 1px 3px 1px rgb(0 0 0 / 0.1), 0 0px 3px -1px rgb(0 0 0 / 0.1)"
      },
      colors: {
        opaque: {
          50: "rgba(0,0,0,0.05)",
          100: "rgba(0,0,0,0.1)",
          200: "rgba(0,0,0,0.2)",
          300: "rgba(0,0,0,0.3)",
          400: "rgba(0,0,0,0.4)",
          500: "rgba(0,0,0,0.5)",
          600: "rgba(0,0,0,0.6)",
          700: "rgba(0,0,0,0.7)",
          800: "rgba(0,0,0,0.8)",
          900: "rgba(0,0,0,0.9)"
        }
      },
      height: {
        "screen--navbar": "calc(100vh - 3.625rem)"
      },
      spacing: {
        18: "4.5rem"
      },
      width: {
        112: "28rem",
        128: "32rem"
      }
    }
  },
  variants: {
    outline: ["focus"]
  }
};
