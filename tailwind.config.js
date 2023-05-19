/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      colors: {
        primary: '#6366f1',
        dark: '#0f172a'
      },
      screens: {
        'xl' : '1366',
      }
    },
  },
  plugins: [],
}

