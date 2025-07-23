/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js,ts}",
    "./src/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'ai-hero': "url('/assets/ai-image.jpg')", // <-- THIS IS THE CORRECTED PATH
      }
    },
  },
  plugins: [],
}