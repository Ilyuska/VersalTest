export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1028px",
      },
      colors: {
        mainGreen: "#4E674F",
        mainGray: "#393939", //for Header & Footer
      },
    },
  },
  plugins: [],
};
