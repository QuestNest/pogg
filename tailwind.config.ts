import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-bg": "linear-gradient(180deg, rgba(92,45,58,0.2) 0%, rgba(100,17,63,1) 74%), url('/background-syndra.jpg')",
      },
      colors: {
        "background": "#64113F",
        "light-background": "#75204F",
        "blush": "#DE4D86",
        "salmon-pink": "F29CA3",
        "tea-rose": "#F7CACD",
        "non-photo-blue": "#84E6F8",
        "gray": "#A9A9AC",
        "white": "#FFFFFF",
        "dark-gray": "#292929"
      },
    },
  },
  plugins: [],
} satisfies Config;
