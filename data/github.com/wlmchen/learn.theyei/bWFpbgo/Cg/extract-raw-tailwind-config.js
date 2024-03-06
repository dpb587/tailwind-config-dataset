const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  corePlugins: {
    ringWidth: false,
    outline: false,
  },
  theme: {
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.yellow,
      blue: colors.blue,
      green: colors.green,
      orange: colors.orange,
    },
    extend: {
      colors: {
        yei: {
          primary: {
            gray: '#dce8e3',
            light: '#93d7b8',
            lighter: '#3bbf82',
            main: '#279361',
            darker: '#208556',
          },
          secondary: {
            brighter: '#113b47',
            main: '#293236',
            darker: '#0d303b',
            darkest: '#0d242b',
            black: '#232323',
            blackVibrant: '#010915',
          },
        },
      },
      boxShadow: {
        xlGreen: '0 20px 25px -5px #27936166, 0 10px 10px -5px #27936133',
      },
    },
  },
  variants: {
    extend: {
      cursor: ['disabled'],
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
