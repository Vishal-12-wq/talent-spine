/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      colors:{
        primary: "#0784E2",        
        primaryp1: "#d7eafe",       
        secondary: "#212222",    
        secondarys1: "#757575",
        customgreen:"#58AF47",
        skygreen:"#EFF6F3",
        bordercolor:"#C4C4C4",
        footetext:"#757575",
        success:"#58AF47"
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        daysOne: ['Days One', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      },
      screens:{
        'xl-2': '1710px',
        'xl-25':"1025px",
        
      },
      borderRadius:{
        "r30":"30px"
      }
    },
  },
  plugins: [],
}