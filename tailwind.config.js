/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				forest: {
					50: '#f3f6f3',
					100: '#e3e9e2',
					200: '#c9d3c7',
					300: '#a2b4a1',
					400: '#788f79',
					500: '#577058',
					600: '#435845',
					700: '#354737',
					800: '#2c392d',
					900: '#252f27',
					950: '#141a15'
				}
			}
		}
	},
	plugins: []
};
