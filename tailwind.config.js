/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        InterBold:["InterBold"],
        InterRegular:["InterRegular"],
       
      },
      colors:{
        "Green":'hsl(var(--Green)/ <alpha-value>)',
        "White":'hsl(var(--White)/ <alpha-value>)',
        "Grey":'hsl(var(--Grey)/ <alpha-value>)',
        "DarkGrey":'hsl(var(--DarkGrey)/ <alpha-value>)',
        "OffBlack":'hsl(var(--OffBlack)/ <alpha-value>)',
      }
    },
  },
  plugins: [],
}