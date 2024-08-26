/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enables dark mode based on the class
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
        'dark-bg': '#1a1a2e',
        'dark-bg-alt': '#162447',
        'dark-text': '#e4e4e4',
      },
    },
  },
  plugins: [],
}
