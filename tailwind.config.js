/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx, svg}"],
  theme: {
    extend: {},
    screens: {
      xs: "410px",
      "2xs": "510px",
      sm: "610px",
      sx: "710px",
      md: "768px",
      mg: "840px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
