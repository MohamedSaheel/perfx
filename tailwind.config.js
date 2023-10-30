/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        primary: '#017FBF',   // Change this to your primary color
        secondary: '#E5EEFA', // Change this to your secondary color
        bg: '#F3F6FC',
      },
    },
  },
  plugins: [],
}
