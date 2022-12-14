/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const MyClass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".persepective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden"
    },
    ".text-shadow-xl": {
      textShadow: "0 10px 30px white"
    }
  });
});

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [MyClass],
};
