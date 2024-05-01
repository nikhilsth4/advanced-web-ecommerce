const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        lg: "1440px",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
      colors: {
        "raw-sienna": "#D87D4A",
        "hit-pink": "#FBAF85",
        "cod-gray": "#101010",
        seashell: "#F1F1F1",
        alabaster: "#FAFAFA",
        alto: "#CFCFCF",
        "persian-red": "#CD2C2C",
      },
    },
  },
  plugins: [],
};
export default config;
