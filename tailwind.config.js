/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E2761",
        secondary: "#408EC6",
        tertiary: "#7A2048",
      },
    },
  },
  plugins: [],
};
