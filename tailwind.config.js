/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        main: '#2e9189',
        dark_gray: '#1c1c1c',
      },
      fontFamily:{
        noto: ['Noto Sans TC', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

