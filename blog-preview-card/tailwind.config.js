/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "hsl(47, 88%, 63%)",
				grey: "hsl(0, 0%, 50%)",
				black: "hsl(0, 0%, 7%)",
			},
			boxShadow: {
				base: "8px 8px",
				hover: "16px 16px",
			},
		},
	},
	plugins: [],
};
