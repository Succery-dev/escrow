/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3E8EEC",
        "black-100": "#5F6F77",
        "black-200": "#D9D9D9",
      },
      boxShadow: {
        card: "4px 4px 4px 1px rgba(0, 0, 0, 0.25)",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
