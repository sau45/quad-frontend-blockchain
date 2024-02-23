/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "button-custom-color":"#2E3241",
        "custom-color":"#03fcf4"
      }
    },
  },
  plugins: [],
}