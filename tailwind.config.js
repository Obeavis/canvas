module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#47a4ad",
        secondary: "#2d8f9b",
      },
      width: {
        "42-rem": "42rem;",
        "36-rem": "36rem;",
        "24-rem": "24rem;",
      },
      maxWidth: {
        "18-rem": "18rem",
        "38-rem": "38rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
