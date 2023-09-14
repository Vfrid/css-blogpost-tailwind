/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "Avenir", "Helvetica", "Arial", "sans-serif"],
      },
      dropShadow: {
        logo: "0 0 2em #646cffaa",
        "logo-tw": "0 0 2em #38bdf8aa",
      },
      height: {
        18: "4.5rem",
      },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'green': {
        100: '#E4F79E',
        200: '#CDE295',
        300: '#C1D57B',
        400: '#22d3ee',
        500: '#82D03B',
        600: '#E4F79E',
        700: '#4FA952',
        800: '#4E7E23 ',
        900: '#2C4615',
      },
      // ...
    },
  },
},
plugins: [],
}