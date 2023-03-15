/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "navbar-width": "15%",
        "main-width": "50%",
        "display-width": "35%"
      }
    },
  },
  plugins: [],
}