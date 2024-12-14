/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			//colors
			colors: {
				primary: '#007F5F',
				secondary: '#2B9348',
			},
		},
	},
	plugins: [],
};
