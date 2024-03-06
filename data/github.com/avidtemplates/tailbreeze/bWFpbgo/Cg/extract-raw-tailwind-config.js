/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{html,js}", "./src/**/*.{scss,css}"],
	theme: {
		fontSize: {
			xs: 9 / 16 + "rem",
			sm: 11 / 16 + "rem",
			md: 12 / 16 + "rem",
			base: 13 / 16 + "rem",
			lg: 15 / 16 + "rem",
			xl: 17 / 16 + "rem",
			"2xl": 20 / 16 + "rem",
			"3xl": 25 / 16 + "rem",
			"4xl": 30 / 16 + "rem",
			"5xl": 35 / 16 + "rem",
			"6xl": 40 / 16 + "rem",
			"7xl": 45 / 16 + "rem",
			"8xl": 50 / 16 + "rem",
		},

		extend: {
			colors: {
				theme: {
					DEFAULT: "rgb(var(--theme-color) / <alpha-value>)",
					blue: "rgb(var(--blue) / <alpha-value>)",
					green: "rgb(var(--green) / <alpha-value>)",
					indigo: "rgb(var(--indigo) / <alpha-value>)",
					orange: "rgb(var(--orange) / <alpha-value>)",
					purple: "rgb(var(--purple) / <alpha-value>)",
					red: "rgb(var(--red) / <alpha-value>)",
					cyan: "rgb(var(--cyan) / <alpha-value>)",
					teal: "rgb(var(--teal) / <alpha-value>)",
				},
				light: {
					100: "rgb(var(--theme-light-100) / <alpha-value>)",
					200: "rgb(var(--theme-light-200) / <alpha-value>)",
					300: "rgb(var(--theme-light-300) / <alpha-value>)",
					400: "rgb(var(--theme-light-400) / <alpha-value>)",
					500: "rgb(var(--theme-light-500) / <alpha-value>)",
				},
				dark: {
					100: "rgb(var(--theme-dark-100) / <alpha-value>)",
					200: "rgb(var(--theme-dark-200) / <alpha-value>)",
					300: "rgb(var(--theme-dark-300) / <alpha-value>)",
					400: "rgb(var(--theme-dark-400) / <alpha-value>)",
					500: "rgb(var(--theme-dark-500) / <alpha-value>)",
				},
			},
			fontFamily: {
				sans: ["Roboto", "sans-serif"],
				icon: ["Material Symbols Rounded"],
			},
			textColor: {
				body: "var(--body-color)",
				muted: "#6a8ca3",
				heading: "var(--text-heading)",
				link: "rgb(var(--theme-color))",
			},
			backgroundColor: {
				body: "rgb(var(--body-bg) / <alpha-value>)",
			},
			borderRadius: {
				DEFAULT: "0.2rem",
			},
			fontWeight: {
				bold: "500",
			},
		},
	},
	plugins: [],
};
