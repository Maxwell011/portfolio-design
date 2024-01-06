import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      gold: "#CDAF75",
      base: "#7A602C",
      black: "#001314",
      grapevine: "#dba6f4",
      vine: "#a981fe",
    },
  },
  plugins: [],
};
export default config;
