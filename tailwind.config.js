/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        healthcare: "url('/public/assets/healthcare.jpg')",
        europe: "url('/public/assets/europe.jpg')",
        meeting: "url('/public/assets/meeting.jpg')",
        scrubs: "url('/public/assets/scrubs.jpg')",
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
