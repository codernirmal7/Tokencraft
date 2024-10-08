const defaultTheme = require("tailwindcss/defaultTheme");

const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#5D3FD3',
        p1: "#2EF2FF",
        p2: "#3C52D9",
        p3: "#C8EA80",
        p4: "#EAEDFF",
        p5: "#C4CBF5",
        s1: "#080D27",
        s2: "#0C1838",
        s3: "#334679",
        s4: "#1959AD",
        s5: "#263466",
        black: {
          DEFAULT: "#000000",
          100: "#05091D",
        },
    },
    animation: {
      spotlight: "spotlight 2s ease .75s 1 forwards",
    },
    boxShadow: {
      100: "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 3px 6px #1959AD",
      200: "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 4px 10px #3391FF",
      300: "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 3px 6px #1959AD",
      400: "inset 0px 2px 4px 0 rgba(255, 255, 255, 0.05)",
      500: "0px 16px 24px rgba(0, 0, 0, 0.25), 0px -14px 48px rgba(40, 51, 111, 0.7)",
    },
    borderRadius: {
      14: "14px",
      20: "20px",
      40: "40px",
      half: "50%",
      "7xl": "40px",
    },
    flex: {
      50: "0 0 50%",
      320: "1px 0 320px",
      300: "0 0 300px",
      540: "0 0 540px",
      280: "0 0 280px",
      256: "0 0 256px",
      100: "0 0 100%",
    },

    backgroundImage: {
      'gradient-primary': 'linear-gradient(to right, #5D3FD3, #3b82f6)',
      'gradient-hover': 'linear-gradient(to right, #3e24a6, #2b69ce)',
    },
    
    animation: {
      marquee: 'marquee 20s linear infinite', // 20s scrolling time
      bounce: 'bounce 1s infinite',
    },
    keyframes: {
      spotlight: {
        "0%": {
          opacity: 0,
          transform: "translate(-72%, -62%) scale(0.5)",
        },
        "100%": {
          opacity: 1,
          transform: "translate(-50%,-40%) scale(1)",
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
},
  plugins: [
    addVariablesForColors,
    function ({
      matchUtilities,
      theme
    }) {
      matchUtilities({
        "bg-grid": (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
          )}")`,
        }),
        "bg-grid-small": (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
          )}")`,
        }),
        "bg-dot": (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
          )}")`,
        }),
      }, { values: flattenColorPalette(theme("backgroundColor")), type: "color" });
    },
  ],
};

function addVariablesForColors({
  addBase,
  theme
}) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ":root": newVars,
  });
}
