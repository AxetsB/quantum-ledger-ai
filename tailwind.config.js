/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js,ts}", // Look for Tailwind classes in all HTML, JS, TS files inside the public folder
    "./src/**/*.{js,ts}",         // Look for Tailwind classes in all JS, TS files inside the src folder
  ],
  theme: {
    extend: {
      fontFamily: {
        // We're defining a custom font family named 'inter'.
        // If you use `font-inter` in your HTML, Tailwind will apply 'Inter' or a generic sans-serif.
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

