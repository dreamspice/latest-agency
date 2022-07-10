/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'waves': "url('../images/wave.svg')",
      },
      fontFamily: {
        openSans: "'Open Sans', sans-serif",
        montSerrat: "'Montserrat', sans-serif"
      },
      colors: {
        'primary-blue': '#2280E0',
        'primary-orange': '#FEBB94'
      },
    },
  },
  plugins: [],
}
