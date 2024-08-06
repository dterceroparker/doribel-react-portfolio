/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // or 'media'
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust paths to your source files
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        light: '#f8f9fa',
        dark: '#343a40',
        'text-light': '#f8f9fa',
        'text-dark': '#343a40',
      },
    },
  },
  plugins: []
}