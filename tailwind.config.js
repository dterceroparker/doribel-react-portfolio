/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,jsx}'],
	darkMode: 'class', // Enable dark mode using the class strategy
	theme: {
		extend: {
      colors: {
        dark: '#1a202c', // Define the custom 'dark' color here
        light: '#f7fafc', // Define the custom 'light' color here
      },
		},
	},
	plugins: [],
};
