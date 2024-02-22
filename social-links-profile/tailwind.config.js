/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#C5F82A",
				normalGrey: "#333333",
				darkGrey: "#1F1F1F",
				offBlack: "#141414",
			},
		},
	},
	plugins: [],
};
