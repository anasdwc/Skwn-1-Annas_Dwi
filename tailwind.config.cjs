/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        base: "0px 5px 10px rgba(0, 0, 0, 0.05)",
      },
      gridTemplateColumns: {
        "custom-2": "80% 20%",
      },
      colors: {
        brown: "#2F241F",
        "soft-brown": "#817253",
        "black-brown": "#553B33",
        "very-black-brown": "#2F241F",
        "light-green": "#E5F0B6",
        "light-green-500": "rgba(229, 240, 182, 0.5)",
        "transparent-white": "rgba(255, 255, 255, 0.5)",
        "soft-white": "#FCFAFA",
      },
      fontFamily: {
        jakarta: "Plus Jakarta Sans",
      },
      fontSize: {
        "3xl": "32px",
      },
      lineHeight: {
        12: "48px",
      },
      borderWidth: {
        1: "1px",
      },
      backgroundImage: {
        highlightedProductMobile: "url('/images/mobile/hero-banner.png')",
        highlightedProductDesktop: "url('/images/desktop/hero-banner.png')",
      },
    },
  },
  plugins: [],
};
