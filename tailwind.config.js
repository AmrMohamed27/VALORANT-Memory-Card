/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "riot-white": "#ece8e1",
        red: "#ff4655",
        black: "#111111",
        darkBlue: "#0f1923",
        gray: "#282828",
        "sec-gray": "#7e7e7e",
        "riot-gray": "#ececec",
        "riot-font-gray": "#4a4a4a",
        "riot-light-gray": "#f2f2f2",
        "mobile-gray": "#1f1f1f",
        "riot-orange": "rgb(255, 125, 102)",
        "riot-red": "rgb(255, 51, 66)",
      },
    },
  },
  plugins: [],
};
