/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        mainbg: "#ECDBBA",
        secondarybg: "#191919",
        compbg: "#A27B5C",
        light: "#DCD7C9",
        red: "#FF4500",
        green: "#4BB543",
      },
      fontFamily: {
        main: ["Quicksand", "sans-serif"],
        logo: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
