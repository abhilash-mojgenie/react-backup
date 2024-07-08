/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js',
	],
	theme: {
		extend: {
			// Add your custom theme configurations here if needed
		},
	},
	plugins: [
		function ({ addUtilities }) {
			const newUtilities = {
				'.scrollbar-hidden': {
					'&::-webkit-scrollbar': {
						display: 'none'
					},
					scrollbarWidth: 'none',
					'-ms-overflow-style': 'none'
				},
			};
			addUtilities(newUtilities, ['responsive', 'hover']);
		},
		require('flowbite/plugin'),
		require('tailwindcss-animated'),
		require('taos/plugin')
	],
};
