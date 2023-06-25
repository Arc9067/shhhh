/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {},
      fontFamily: {
        primary: ["Attack Of Monster", "sans-serif"],
        serif: ["b Belimbing", " sans-serif"],
      },
    },
  },
  plugins: [],
};
