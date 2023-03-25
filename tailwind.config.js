/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors"); // personalizacion de nombres
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        success: colors.green,
        primary: colors.blue,
        error: colors.red,
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
