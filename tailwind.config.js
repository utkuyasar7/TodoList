/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          lightest: "#e6fffa",
          DEFAULT: "#4dc0b5",
        },
        grey: {
          darkest: "#1a202c",
          darker: "#2d3748",
        },
        green: {
          DEFAULT: "#48bb78",
        },
        red: {
          DEFAULT: "#f56565",
        },
      },
    },
  },
  plugins: [],
};
