/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
  extend: {
    fontFamily: {
      sans: ['DIN Alternate', 'sans-serif'],
    }
  }
},
  plugins: []
}