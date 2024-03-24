/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'monte': ['Montserrat', 'sans-serif'] // Add your font name and fallbacks
      },
      colors: {
        'jet-grey': '#343434',
        'midnight-violet': '#311B4B',
        'regalia': '#522D80',
        'coral': '#FF7F5C'
      },
    },
  },
  plugins: [],
}

