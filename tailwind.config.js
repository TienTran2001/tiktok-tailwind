/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ibm: ['"IBM Plex Sans"', "sans-serif"],
      },
      colors: {
        primary: "#fe2c55",
        gray: "#16182380",
        grayLight: "#16182308",
      },
      boxShadow: {
        header: "0px 1px 1px rgb(0 0 0 / 12%)",
        popper: "rgb(0 0 0 / 12%) 0px 2px 12px",
      },
      width: {
        container: "1150px",
        headerSearch: "361px",
      },
      fontSize: {
        14: "1.4rem",
        16: "1.6rem",
      },
    },
  },
  plugins: [],
};
