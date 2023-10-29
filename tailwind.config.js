/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('./src/assets/background.jpg')",
        'login': "url('./src/assets/login.jpg')",
        'register': "url('./src/assets/register.jpg')",
      }
    },
  },
  plugins: [],
}

