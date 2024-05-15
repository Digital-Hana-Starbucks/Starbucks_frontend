/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        starbucksGreen: "#00754A",
        starbucksBeige: "#F2F0EB",
        danger: "#DC3545",
        primary: "0000FF",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
