/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0f1a24",
        card: "#1b2733",
        chip: "#0f1a24",
        text: "#ffffff",
        sub: "#cfd7df",
        link: "#bfc7d0",
        accent: "#00a3ff"
      },
      boxShadow: {
        modal: "0 10px 30px rgba(0,0,0,.5)",
        inner: "inset 0 1px 0 rgba(255,255,255,.03)"
      }
    },
  },
  plugins: [],
};
