/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xs": "360px",
        xs: "414px",
        sm: "640px",
        md: "768px",
        md2: "850px",
        lg: "1024px",
        xl: "1250px",
        "2xl": "1350px",
        "2xl2": "1400px",
        "3xl": "1500px",
        "4xl": "1700px",
        "5xl": "1800px",
        "6xl": "2000px",
        "6xl2": "2100px",
        "7xl": "2350px",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        passive: "#898D91",
        black: "#000",
        "black-100": "#0006",
        "black-secondary": "#24292F",
        background: "rgba(242, 245, 249 ,1)",
        footerBackground: "#F9F9F9",
        whitetext: "#E4E4E4",
        yellow: "#FFA826",
        green: "#37C760",
        red: "#F14343",
        blue: "#1D4ED8",
      },
      fontSize: {
        xsm: ".813rem",
      },
      spacing: {
        128: "32rem",
        256: "64rem",
      },
    },
    // fontWeight: {
    //     thin: "100",
    //     hairline: "100",
    //     extralight: "200",
    //     light: "300",
    //     normal: "400",
    //     medium: "500",
    //     semibold: "600",
    //     bold: "700",
    //     extrabold: "800",
    //     "extra-bold": "800",
    //     black: "900",
    // },
    fontFamily: {
      regular: "inter",
      medium: "inter",
      semi: "inter",
      bold: "inter",
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
