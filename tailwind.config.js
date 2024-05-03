/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#586867',

					secondary: '#d9a643',

					accent: '#fc766a',

					neutral: '#ae583f',

					'base-100': '#faf6ed',

					'base-content': '#120300',

					info: '#45e7ce',

					success: '#52cf6a',

					warning: '#34c3e7',

					error: '#d55958'
				}
			}
		]
	},
	theme: {
		extend: {}
	},
	plugins: [require('daisyui', '@tailwindcss/typography', '@tailwindcss/forms')]
};
