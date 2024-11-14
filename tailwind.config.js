/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark03: "#403F3F",
        dark07: "#F3F3F3",
      },
    },
  },
  plugins: [require("daisyui")],
};
