/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#737373",
        secondary: "#737373",
        textColor: "#252B42",
        secondaryTextColor: "#737373",
        successColor: "#2DC071",
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
