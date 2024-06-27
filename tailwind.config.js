/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      // Custom styles can be added here
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#4f46e5',
          DEFAULT: '#3730a3',
          dark: '#312e81',
        },
      },
    },
  },
  plugins: [],
}
