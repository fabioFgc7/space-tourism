/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 30s linear infinite",
        "spin-planet": "spin 200s linear infinite",
      },
    },
    fontFamily: {
      heebo: ["Heebo", "sans-serif"],
    },
  },
  
  plugins: [],
};
