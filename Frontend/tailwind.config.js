/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'monte': ['Montserrat', 'sans-serif'] // Add your font name and fallbacks
      }
    },
  },
  plugins: [],
}

