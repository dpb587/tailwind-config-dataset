module.exports = {
  presets: [require('./vendor/wireui/wireui/tailwind.config.js')],
  content: [
    './app/Livewire/**/*.php',
    './app/View/**/*.php',
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './vendor/wireui/wireui/resources/**/*.blade.php',
    './vendor/wireui/wireui/ts/**/*.ts',
    './vendor/wireui/wireui/src/View/**/*.php'
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: '3px 3px 16px #446b8d33'
      },
      zIndex: {
        '55': '55',
        '60': '60'
      },
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem'
      },
      screens: {
        '3xl': '1600px',
        '4xl': '2560px'
      },
      maxWidth: {
        '8xl': '90rem',
        '9xl': '95rem'
      }
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
}
