/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {  
    extend: {
      colors: { 
      ic1: "#E6FAD3",
      ic2: "#D6F5B7",
      ic3: "#C5EC9E",
      ski: "#B2FF9E",
      bs1: "#B4DF86",
      bs2: "#9FCE6A",
      bs3: "#82BA36",
      sl1:"#A9F537",
      sl2:"#9BEC00",
      txt1: "#547F0F",
      txt2: "#2F4317",
    },
  },
  },
  plugins: [require("daisyui")],
}

