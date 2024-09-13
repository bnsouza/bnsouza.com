import typographyPlugin from "@tailwindcss/typography";
import {type Config} from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme";

import typographyStyles from "./typography";

export default {
  content: ["./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "selector",
  plugins: [typographyPlugin],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 10s linear infinite",
        gradient: "animatedgradient 3s ease infinite alternate",
      },
      backgroundSize: {
        "300%": "300%",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        animatedgradient: {
          "0%": {backgroundPosition: "0% 50%"},
          "50%": {backgroundPosition: "100% 50%"},
          "100%": {backgroundPosition: "0% 50%"},
        },
      },
    },
    fontSize: {
      xs: ["0.8125rem", {lineHeight: "1.5rem"}],
      sm: ["0.875rem", {lineHeight: "1.5rem"}],
      base: ["1rem", {lineHeight: "1.75rem"}],
      lg: ["1.125rem", {lineHeight: "1.75rem"}],
      xl: ["1.25rem", {lineHeight: "2rem"}],
      "2xl": ["1.5rem", {lineHeight: "2rem"}],
      "3xl": ["1.875rem", {lineHeight: "2.25rem"}],
      "4xl": ["2rem", {lineHeight: "2.5rem"}],
      "5xl": ["3rem", {lineHeight: "3.5rem"}],
      "6xl": ["3.75rem", {lineHeight: "1"}],
      "7xl": ["4.5rem", {lineHeight: "1"}],
      "8xl": ["6rem", {lineHeight: "1"}],
      "9xl": ["8rem", {lineHeight: "1"}],
    },
    typography: typographyStyles,
  },
} satisfies Config;
