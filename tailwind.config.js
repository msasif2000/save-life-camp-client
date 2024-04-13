/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xxl: '1536px',
    },
    colors: { 
      prime: "#8CC63E", 
      second: "#407A01",
      third: "#FFFE03",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

