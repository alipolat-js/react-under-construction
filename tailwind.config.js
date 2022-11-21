const theme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['"Lato"', ...theme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}