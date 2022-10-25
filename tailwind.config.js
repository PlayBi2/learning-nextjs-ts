/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        100: '100px',
        186: '186px'
      },
      width: {
        'm-100': "100%",
      },
      padding: {
        '40px': '40px',
        '15px': '15px'
      },
      margin: {
        '20px': '20px',
        '5px': '5px'
      },
      fontSize: {
        '17px': '17px'
      },
      backgroundColor: {
        'primary': '#ed6436',
        'footerColor': '#868686',
        'footerBg': '#292a2d',
        'white-bg': 'white'
      },
      colors: {
        'footerColor': '#868686',
        'primary': '#ed6436'
      },
      borderRadius: {
        '50%': '50%'
      },
      backgroundPosition: {
        'center-top': 'center top'
      },
      translate: {
        'hide-header': '-100px',
        'unhide-header': '0 !important'
      },
      borderColor:{
        'primary':'#ed6436'
      }

    },
  },
  plugins: [],
}