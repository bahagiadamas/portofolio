/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins"]
      },
      colors: {
        'Shadow': '#2A3132',
        'Mist': '#90AFC5',
        'Stone': '#336B87',
        'Autumn': '#763626'
      },
    },
  },
  plugins: [],
}

