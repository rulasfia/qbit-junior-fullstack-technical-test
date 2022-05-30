/* eslint-disable no-undef */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
        logo: ["Lobster Two", ...defaultTheme.fontFamily.serif],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.zinc,
      primary: colors.amber,
      danger: colors.red,
      success: colors.emerald,
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
