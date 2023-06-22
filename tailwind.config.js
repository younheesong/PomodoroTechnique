/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    keyframes: {
      bounce: {
        "0%, 100%": {
          transform: "translateY(-20%)",
          "animation-timing-function": "cubic-bezier(0.8,0,1,1)",
        },
        "50%": {
          transform: "none",
          "animation-timing-function": "cubic-bezier(0,0,0.2,1)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
