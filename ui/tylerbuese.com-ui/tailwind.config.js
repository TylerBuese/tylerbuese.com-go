/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'redhen-red': '#e22030',
        'redhen-red-hover': '#A40000',
        'redhen-body-bg': '#f0f8ff',
        'redhen-blue': '#136371',
        'redhen-error': '#FFD6D6',
        'redhen-pinkish': "#f9dece"
      },
      
      boxShadow: {
        'redhen-form-shadow': '0px 0px 0px #136371'
      }
    },
  },
  plugins: [],
}

