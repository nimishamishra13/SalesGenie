/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#13294B",
        sidebar: "#0D1726",
        secondary: "#EEF4FF",
        accent: "#00D084",
      },
    },
  },
  plugins: [],
};