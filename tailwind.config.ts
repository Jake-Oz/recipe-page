import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    colors: {
      "primary-nutmeg": "hsl(14, 45%, 36%)",
      "primary-darkRaspberry": "hsl(332, 51%, 32%)",
      "neutral-white": "hsl(0, 0%, 100%)",
      "neutral-roseWhite": "hsl(330, 100%, 98%)",
      "neutral-eggshell": "hsl(30, 54%, 90%)",
      "neutral-lightGrey": "hsl(30, 18%, 87%)",
      "neutral-wengeBrown": "hsl(30, 10%, 34%)",
      "neutral-darkCharcoal": "hsl(24, 5%, 18%)",
      attribution: "hsl(228, 45%, 44%)",
    },
  },
  plugins: [],
};

export default config;
