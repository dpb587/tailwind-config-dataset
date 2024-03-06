const colors = require("tailwindcss/colors");
module.exports = {
    content: [
        "./public/**/*.js",
        "./resources/**/*.{html,php,js}",
    ],
    safelist: [
        'bg-slate-200',
        'hover:bg-slate-300',
    ],
    darkMode: 'media',
    theme: {
        extend: {
            colors: {
                primary: colors.blue,
                secondary: colors.slate,
                green: colors.emerald,
                dark: colors.slate,
                success: colors.emerald,
                error: colors.red,
                warning: colors.amber,
                info: colors.blue
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
};