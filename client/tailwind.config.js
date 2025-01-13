
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1038px",
      },
      colors: {
        mainGreen: "#4E674F",
        mainGray: "#393939", //for Header & Footer
        lightMainGray: "#B5B5B5"
      },
      boxShadow: {
        "3xl": "0px 0px 10px 0px rgba(0, 0, 0, 0.5);",
      },
    },
  },
  plugins: [],
};
