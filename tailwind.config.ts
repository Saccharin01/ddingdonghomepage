import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      screens: {
        fhd: "1920px",
        // "2k": "2560px",
        // "4k": "3840px",
      },
    },
  },
};

export default config;