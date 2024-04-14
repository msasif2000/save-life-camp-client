/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {  
    extend: {
      colors: { 
      prime: "#8CC63E", 
      second: "#407A01",
      third: "#FFFE03",
      green: "#71AB23",
      white: "#FFFFFF",
    },
  },
  },
  plugins: [require("daisyui")],
}

