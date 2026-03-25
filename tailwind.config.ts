import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      screens: {
        fhd: "1920px",   // ← 핵심
        // "2k": "2560px",  // 선택
        // "4k": "3840px",  // 선택
      },
    },
  },
};

export default config;