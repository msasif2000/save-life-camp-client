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
    extend: {},
  },
  plugins: [require("daisyui")],
}

