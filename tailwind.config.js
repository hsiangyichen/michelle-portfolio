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
    },
  },
  plugins: [],
  important: true,
};
