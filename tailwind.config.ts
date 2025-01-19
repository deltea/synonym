import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    colors: {
      bg: {
        DEFAULT: "#282828",
        0: "#282828",
        1: "#3C3836",
        2: "#504946",
        3: "#665C54",
        4: "#7C6F64",
      },
      fg: {
        DEFAULT: "#EBDBB2",
        0: "#FBF1C7",
        1: "#EBDBB2",
        2: "#D5C4A1",
        3: "#BCAF93",
        4: "#A79A84"
      },
      gray: {
        dark: "#938374",
        light: "#A79A84",
      },
      red: {
        DEFAULT: "#CC241D",
        light: "#FB4934",
      },
      green: {
        DEFAULT: "#98971A",
        light: "#B8BB26",
      },
      yellow: {
        DEFAULT: "#D79921",
        light: "#FABD2F",
      },
      blue: {
        DEFAULT: "#458588",
        light: "#83A598",
      },
      purple: {
        DEFAULT: "#B16286",
        light: "#D3869B",
      },
      aqua: {
        DEFAULT: "#689D6A",
        light: "#8EC07C",
      },
      orange: {
        DEFAULT: "#D65D0E",
        light: "#FE8019",
      },
    },
    extend: {
      fontFamily: {
        cascadia: ["Cascadia Code", "sans-serif"],
      },
    },
  },

  plugins: []
} satisfies Config;
