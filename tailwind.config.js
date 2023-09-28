/** @type {import('tailwindcss').Config} */

//const colors = require('tailwindcss/colors');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        mobileBig:  {'max': '576px'},
        mobileSmall: {'max': '375px'},
      },
      colors: {
        primary: {
          brightBlue: 'hsl(220, 98%, 61%)',
        },
        neutral: {
          light: {
            veryLightGray: 'hsl(0, 0%, 98%)',
            veryLightGrayishBlue: 'hsl(236, 33%, 92%)',
            lightGrayishBlue: 'hsl(233, 11%, 84%)',
            darkGrayishBlue: 'hsl(236, 9%, 61%)',
            veryDarkGrayishBlue: 'hsl(235, 19%, 35%)',
          },
          dark: {
            veryDarkBlue: 'hsl(235, 21%, 11%)',
            veryDarkDesaturatedBlue: 'hsl(235, 24%, 19%)',
            lightGrayishBlue: 'hsl(234, 39%, 85%)',
            lightGrayishBlueHover: 'hsl(236, 33%, 92%)',
            darkGrayishBlue: 'hsl(234, 11%, 52%)',
            veryDarkGrayishBlue: 'hsl(233, 14%, 35%)',
            veryDarkGrayishBlueHover: 'hsl(237, 14%, 26%)',
          },
        },
      },
    },
  },
  plugins: [],
}