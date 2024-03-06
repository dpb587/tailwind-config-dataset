const minimist = require('minimist');
const colorVariable = require('@mertasan/tailwindcss-variables/colorVariable');
const defaultTheme = require('./config/tailwind-theme/index.cjs');

/** @type {import('tailwindcss').Config} */
const config = {
    darkMode: 'media',
    content: process.env.NODE_ENV === 'development' ? [
        './index.html',
        './index.md',
        './src/**/*.{vue,js,ts,jsx,tsx}',
        './lib/*/index.html',
        './lib/*/README.md',
        './lib/*/src/**/*.{vue,js,ts,jsx,tsx}',
        './exts/*/*/src/**/*.{vue,js,ts,jsx,tsx}',
    ] : [{raw: ''}],
    safelist: ['dark'],
    theme: defaultTheme,
    plugins: [
        require('@mertasan/tailwindcss-variables')({
            colorVariables: true,
            darkToRoot: false,
        }),
    ],
    prefix: '-',
};

function colorToVars(colorObject, parentName = 'color', vars = {}) {
    Object.keys(colorObject).forEach(name => {
        const value = colorObject[name];
        if (!value || ['transparent', 'inherit', 'currentColor'].includes(value)) {
            return;
        }
        const varName = String(name).replace(/([A-Z])/g, '-$1').toLowerCase();
        if (typeof value === 'object') {
            vars[name] = colorToVars(value, `${parentName}-${varName}`);
        } else {
            vars[name] = value.startsWith('#') ? colorVariable(`--${parentName}-${varName}`) : `var(--${parentName}-${varName})`;
        }
    });
    return vars;
}

const argv = minimist(process.argv.slice(4));

let tailwind = argv.tailwind || process.env.TAILWIND_CONFIG;
if (tailwind) {
    const mergePresets = (preset) => {
        if (typeof preset === 'function') {
            mergePresets(preset({config, colorToVars}));
        } else if (Array.isArray(preset)) {
            preset.forEach(mergePresets);
        } else if (typeof preset === 'object') {
            if (!config.presets) {
                config.presets = [];
            }
            config.presets.push(preset);
        }
    };
    if (typeof tailwind === 'string') {
        tailwind = tailwind.split(',');
    }
    if (Array.isArray(tailwind)) {
        tailwind.forEach(tailwindPath => {
            mergePresets(require(tailwindPath));
        });
    }
}

if (argv.noPreflightStyle || process.env.TAILWIND_NO_PREFLIGHT) {
    config.corePlugins = {
        preflight: false,
    };
}

[config.theme, config.theme.extend].forEach(theme => {
    const varsSafelist = [];
    ['variables', 'darkVariables'].forEach(key => {
        const variables = theme[key];
        if (typeof variables === 'object') {
            Object.keys(variables).forEach(varKey => {
                if (varKey.startsWith('.')) {
                    varsSafelist.push(varKey.substring(1));
                }
            });
        }
    });
    if (varsSafelist.length) {
        config.safelist = [...new Set([...(config.safelist || []), ...varsSafelist])];
    }
});

module.exports = config;
