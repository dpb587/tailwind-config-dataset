module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('tailwind-scrollbar'),
        require('@tailwindcss/typography'),
        require('daisyui'),
    ],
    daisyui: {
        themes: [
            'corporate',
            {
                business: {
                    ...require('daisyui/src/colors/themes')[
                        '[data-theme=business]'
                    ],
                    'base-100': '#10151a',
                },
            },
        ],
        darkTheme: 'business',
    },
}
// #10151a
