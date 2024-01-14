import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      plex: ["IBM Plex Sans", "sans-serif"],
    },
    extend: {
      "@layer base": {
        h1: {
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
      },
    },
    colors: {
      gold: "#CDAF75",
      base: "#7A602C",
      black: "#001314",
      grapevine: "#dba6f4",
      vine: "#a981fe",
      white: "#FFFFFF",
      line: "#081F20",
      abyss: "#041f24",
    },
  },
  plugins: [],
};
export default config;
