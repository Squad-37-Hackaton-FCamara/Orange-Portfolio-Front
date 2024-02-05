"use client";
import { createTheme } from "@mui/material/styles";

interface CustomPalette {
  [key: string]: {
    [key: number]: string;
  };
}

const customPalette: CustomPalette = {
  primary: {
    70: "#EDEFF2",
    80: "#444466",
    90: "#222244",
    100: "#111133",
    110: "#000022",
    120: "#000011",
  },
  secondary: {
    60: "#FFEECC",
    70: "#FFCC99",
    80: "#FFAA66",
    90: "#FF8833",
    100: "#FF5522",
    110: "#CC4400",
    120: "#993300",
    130: "#662200",
  },
  neutral: {
    60: "#FCFDFF",
    70: "#E6E9F2",
    80: "#C2C4CC",
    90: "#A1A3AA",
    100: "#818388",
    110: "#515255",
    120: "#303133",
    130: "#0B0COD",
  },
  success: {
    60: "#EEFFBB",
    70: "#BBEE88",
    80: "#88CC66",
    90: "#55BB44",
    100: "#229922",
    110: "#118822",
    120: "#006622",
    130: "#004422",
  },
  alert: {
    60: "#FFFFCC",
    70: "#FFEE99",
    80: "#FFEE66",
    90: "#FFDD33",
    100: "#FFCC00",
    110: "#CC9900",
    120: "#997700",
    130: "#664400",
  },
  error: {
    60: "#FFDDCC",
    70: "#FFAA99",
    80: "#FF7766",
    90: "#FF4433",
    100: "#DD0000",
    110: "#BB0000",
    120: "#880000",
    130: "#660000",
  },
  info: {
    60: "#ADCBFA",
    70: "#82A9FO",
    80: "#608AE1",
    90: "#315FCE",
    100: "#2348B1",
    110: "#183594",
    120: "#0F2477",
    130: "#091862",
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: customPalette.primary[70],
      dark: customPalette.primary[120],
      light: customPalette.primary[90],
    },
    secondary: {
      main: customPalette.secondary[90],
      dark: customPalette.secondary[100],
      light: customPalette.secondary[60],
    },
    success: {
      main: customPalette.success[90],
      dark: customPalette.success[130],
      light: customPalette.success[60],
    },
    error: {
      main: customPalette.error[100],
      dark: customPalette.error[130],
      light: customPalette.error[60],
    },
    info: {
      main: customPalette.info[90],
      dark: customPalette.info[130],
      light: customPalette.info[60],
    },
  },
});
