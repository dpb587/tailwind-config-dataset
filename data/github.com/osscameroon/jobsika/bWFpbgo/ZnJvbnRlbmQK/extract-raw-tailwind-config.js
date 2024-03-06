module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#f1f5f9',
        white: '#ffffff',
        blue: '#7994A0',
        blueDark: '#235365',
        grayC: '#b1b1b1',
        grayDark: '#504E57',
        grayNav: '#454545',
        primaryGray: '#7694A0',
        primaryGray50: '#b7c9d2',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
