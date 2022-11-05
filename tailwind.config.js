/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        typing: "type 2s steps(12), blink .5s infinite step-end alternate",
        "type-reverse": "type 2s ease-out 0s infinite alternate-reverse both",
      },
      keyframes: {
        type: {
          from: { width: "0" },
        },
        blink: {
          "50%": { "border-color": "transparent" },
        },
      },
    },
  },
  plugins: [],
};
