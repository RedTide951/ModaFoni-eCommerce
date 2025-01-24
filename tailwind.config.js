/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#1ea7f3",
        secondaryColor1: "#268570",
        secondaryColor2: "#3d3f3c",
        darkBgColor: "#252b44",
        lightBgColor: "#fcfcfc",
        successColor: "#2ebb6b",
        alerColor: "#e17d45",
        dangerColor: "#c3454e",
        hoverColor: "#287ec4",
        disabledElementColor: "#93c0f0",
        mutedColor: "#bdbdbd",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Custom default sans font
        heading: ['"Montserrat"', "sans-serif"], // Custom font for headings
        serif: ['"Times New Roman"', "serif"], // Custom serif font
      },
    },
  },
  plugins: [],
};
