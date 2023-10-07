/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
        grey: "#C5C5C5",
        "light-grey": "#F9F9F9",
        "dark-grey": "#5C5F62",
        "primary-blue": "#0ea5e9",
      },
      textColor: {
        "primary-blue": "#0ea5e9",
      },
    },
  },
  plugins: [],
};
