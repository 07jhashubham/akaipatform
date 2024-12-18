import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'helvetica-medium': ['Helvetica-Medium', 'Arial', 'sans-serif'],
      'helvetica-bold': ['Helvetica-Bold', 'Arial', 'sans-serif'],
      'rexlia': ['Rexlia', 'serif'],
    },
    extend: {
      colors: {
        prime:"#CF0B21"
      },
    },
  },
  plugins: [],
} satisfies Config;
