/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js,css}"],
  theme: {
    extend: {

      colors: {
        grey_col:{
          100:'#D5E1EF',
          200:'#7D889E',
        }
      },
      fontFamily:{
        outfit:['Outfit', 'sans-serif']
      }
  },
  plugins: [],
}
}
