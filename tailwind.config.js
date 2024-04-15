/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {  
    extend: {
      colors: { 
      prime: "#AFFC41", 
      second: "#086375",
      third: "#1DD3B0",
      grn: "#3C1642",
      white: "#FFFFFF",
      ski: "#B2FF9E",
    },
  },
  },
  plugins: [require("daisyui")],
}

