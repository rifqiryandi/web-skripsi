/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
     "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      'posblue': '#002a5c',
    },

  },
  plugins: [
    require('flowbite/plugin')
  ],
}