import { text } from "stream/consumers";
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#282A36",
        surface: "1E1E24",
        text: "C4C4C4",
        accent:"A29BFE",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
