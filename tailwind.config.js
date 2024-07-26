/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-brown": "#2E241B",
        "hover-gray": "#f0eff0",
      },
      screens: {
        s: "480px",
        xs: "400px",
        xxs: "300px",
      },
      animation: {
        "bounce-arrow": "bounceArrow 1.5s infinite",
      },
      keyframes: {
        bounceArrow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
    },
  },
  plugins: [],
  important: true,
};
