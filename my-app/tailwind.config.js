/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			'sans': ['"Monsterrat", sans-serif'],
			'serif': ['"Old Standard TT Static", serif'],
			'mono': ['"Anonymous Pro", monospace']
		},
		extend: {},
	},
	plugins: [],
}