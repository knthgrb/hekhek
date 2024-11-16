/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-green": "#25af59",
        green: "#139a3e",
        "light-pink": "#f3a69e",
        pink: "#ff8081",
        yellowish: "#eddec1",
      },
    },
  },
  plugins: [],
};
