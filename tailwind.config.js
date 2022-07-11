/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'healthcare': "url('/public/assets/healthcare.jpg')",
        'europe': "url('/public/assets/europe.jpg')",
        'meeting': "url('/public/assets/meeting.jpg')"
      }
    },
  },
  plugins: [],
}
