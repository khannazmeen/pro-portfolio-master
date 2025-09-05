/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "pf-dark-max": "#24252c",
        "pf-dark-med": "#32333f",
        "pf-dark-min": "#2e2b4e",
        "pf-dark-primary": "#7658e4"
      },
      fontFamily: {
        sans: ["Poppins"]
      }
    }
  },
  plugins: []
};
