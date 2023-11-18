import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      indigo_dye: {
        DEFAULT: "#124e78",
        100: "#040f18",
        200: "#071f30",
        300: "#0b2e48",
        400: "#0e3e60",
        500: "#124e78",
        600: "#1c77b9",
        700: "#3d9de2",
        800: "#7dbeec",
        900: "#bedef5",
      },
      platinum: {
        DEFAULT: "#e6e6e9",
        100: "#2c2c31",
        200: "#575762",
        300: "#848492",
        400: "#b5b5be",
        500: "#e6e6e9",
        600: "#ececee",
        700: "#f0f0f2",
        800: "#f5f5f6",
        900: "#fafafb",
      },
      sea_green: {
        DEFAULT: "#5e8c61",
        100: "#131c13",
        200: "#263827",
        300: "#38543a",
        400: "#4b714e",
        500: "#5e8c61",
        600: "#7ba77e",
        700: "#9cbd9e",
        800: "#bdd3be",
        900: "#dee9df",
      },
      saffron: {
        DEFAULT: "#f9c22e",
        100: "#392b02",
        200: "#735504",
        300: "#ac8005",
        400: "#e6aa07",
        500: "#f9c22e",
        600: "#facf59",
        700: "#fbdb82",
        800: "#fce7ac",
        900: "#fef3d5",
      },
      chili_red: {
        DEFAULT: "#e03616",
        100: "#2d0b04",
        200: "#591609",
        300: "#86210d",
        400: "#b22c12",
        500: "#e03616",
        600: "#ec5b3e",
        700: "#f1846e",
        800: "#f5ad9e",
        900: "#fad6cf",
      },
    },
  },
  plugins: [],
};
export default config;
