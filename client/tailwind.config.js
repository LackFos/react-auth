/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        input: "0 0 0 3px #dbeafe",
        button: "0 1px 3px 0 rgba(0, 0, 0, 0.2), inset 0 1px 0 0 #60a5fa",
        card: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
      },
    },
  },
  plugins: [],
};
