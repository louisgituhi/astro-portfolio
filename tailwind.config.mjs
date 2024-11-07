/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				"inter": ["Inter", "sans-serif"],
				"sacramento": ["Sacramento", "cursive"]
			  }
		},
	},
	plugins: [],
}
