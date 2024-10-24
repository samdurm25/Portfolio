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

		extend: {
		// TOOD: Working Animations with Tailwind - Either Scrap or Perfect 
			// keyframes: {
			// 	bounce: {
			// 		// '0%, 25%, 50%, 75%, 100%': {}
			// 	}
			// },
			// animation: {
			// 	bounce: 'bounce 1s ease-in-out infinite',
			// }
		},
	},
	plugins: [],
}