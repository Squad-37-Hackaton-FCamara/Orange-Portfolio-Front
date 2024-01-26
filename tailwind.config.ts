import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        'color-principal': {
          70: "#EDEFF2",
          80: "#444466",
          90: "#222244",
          100: "#111133",
        },
        'color-secondary': {
          60: "#FFEECC",
          70: "#FFCC99",
          80: "#FFAA66",
          90: "#FF8833",
          100: "#FF5522",
          110: "#CC4400",
          120: "#993300",
          130: "#662200",
        },
        'color-neutral': {
          60: "#FCFDFF",
          70: "#E6E9F2",
          80: "#C2C4CC",
          90: "#A1A3AA",
          100: "#818388",
          110: "#515255",
          120: "#303133",
          130: "#0B0COD",
        },
        'color-success': {
          60: "#EEFFBB",
          70: "#BBEE88",
          80: "#88CC66",
          90: "#55BB44",
          100: "#229922",
          110: "#118822",
          120: "#006622",
          130: "#004422",
        },
        'color-alert': {
          60: "#FFFFCC",
          70: "#FFEE99",
          80: "#FFEE66",
          90: "#FFDD33",
          100: "#FFCC00",
          110: "#CC9900",
          120: "#997700",
          130: "#664400",
        },
        'color-error': {
          60: "#FFDDCC",
          70: "#FFAA99",
          80: "#FF7766",
          90: "#FF4433",
          100: "#DD0000",
          110: "#BB0000",
          120: "#880000",
          130: "#660000",
        },
        'color-info': {
          60: "#ADCBFA",
          70: "#82A9FO",
          80: "#608AE1",
          90: "#315FCE",
          100: "#2348B1",
          110: "#183594",
          120: "#0F2477",
          130: "#091862",
        },
      },
    },
  },
  plugins: [],
};
export default config;