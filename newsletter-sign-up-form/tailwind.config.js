/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				tomato: "hsl(4, 100%, 67%)",
				darkSlateGrey: "hsl(234, 29%, 20%)",
				charcoalGrey: "hsl(235, 18%, 26%)",
				grey: "hsl(231, 7%, 60%)",
				white: "hsl(0, 0%, 100%)",
			},
			backgroundImage: {
				hoverGradient:
					"linear-gradient(90deg, rgba(255,83,123,1) 0%, rgba(254,93,96,1) 33%, rgba(255,105,62,1) 100%);",
			},
		},
	},
	plugins: [],
};
