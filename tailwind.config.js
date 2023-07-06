/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  content: [],
  theme: {
    extend: {
      colors: {
        primaryBG: 'grey',
        secondaryBG: 'rgb(185, 185, 185)',
        secondaryBGHover: 'rgb(160, 160, 160)',
        
      },
      borderColor: {
        DEFAULT: 'black', 
      },
      borderWidth: {
        DEFAULT: '2px',
      },
    },
  },
  plugins: [],
}

