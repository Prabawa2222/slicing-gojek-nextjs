import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        green: "var(--green)",
      },
      fontFamily: {
        MaisonNeueBold: ['var(--font-maison-neue-bold)', 'sans-serif'],
        MaisonNeueBook: ['var(--font-maison-neue-book)', 'sans-serif'],
        MaisonNeueDemi: ['var(--font-maison-neue-demi)', 'sans-serif'],
        MaisonNeueExtendedBold: ['var(--font-maison-neue-extended-bold)', 'sans-serif'],
        MaisonNeueExtendedExtraBold: ['var(--font-maison-neue-extended-extra-bold)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
