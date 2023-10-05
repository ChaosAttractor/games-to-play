/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "gray-primary": "#30343F",
        "blue-primary": "#273469",
        "blue-dark": "#1E2749"
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"]
      }
    }
  },
  plugins: []
}
