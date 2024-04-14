/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    colors: { 
      prime: "#8CC63E", 
      second: "#407A01",
      third: "#FFFE03",
      white: "#FFFFFF",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

