/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      padding: {
        '12': '0.8rem',
      },
      backgroundColor: {
        'purple-light': '#5F2263',
        'purple-dark': '#421745 ',
        'gold': '#E48D1C',
        'black-light': '#000000cc',
        'pink-light': '#FFE7C7',
        'gray-light': '#EEF1F5',
      },
      textColor: {
        'purple-100': '#5F2263',
        'purple-200': '#242464',
        'purple-300': '#171740',
        'black-100': '#141414',
        'black-200': '#141414',
        'blue-100': '#0043C5',
        'blue-200': '#344767',
        'red-100': '#C32026',
      },
      borderRadius: {
        'large': '20px',
      },
    },
  },
  plugins: [],
}
