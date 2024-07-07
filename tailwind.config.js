/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        xsm:'550px'
      },
      container:{
        screens: {
      
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1240px',
          '2xl': '1569px',
        },
        display: ["group-hover"],
      }
    },
  },
  plugins: [
    require("tailwindcss-question-mark"),
  ],
}

