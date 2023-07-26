/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      colors: {
        theme_green: '#2e9189',
        dark_gray: '#1c1c1c',
      },
      fontFamily:{
        noto: ['Noto Sans TC', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

