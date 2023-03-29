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
      // estilos para los breadpoints de container
      container: {
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1024px",
          "2x1": "1536px",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
