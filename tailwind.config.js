/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
      },
      center: true,
    },
    extend: {
      gridTemplateColumns: {
        cards: "auto 1fr",
      },
    },
    fontFamily: {
      exo: ['"Exo 2"', "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
