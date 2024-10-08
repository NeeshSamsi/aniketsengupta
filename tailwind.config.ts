import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-plus-jakarta-sans)", "sans-serif"],
      serif: ["var(--font-playfair-display)", "serif"],
    },
    extend: {
      colors: {
        primary: {
          800: "#451B03",
          700: "#78350F",
          600: "#B4540A",
          300: "#FEF3C7",
          100: "#FFFBEB",
        },
      },
    },
  },
  plugins: [],
}
export default config
