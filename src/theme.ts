import { createTheme, DEFAULT_THEME, mergeMantineTheme } from "@mantine/core";

const themeOverride = createTheme({
  primaryColor: "lynch",
  defaultRadius: 5,
  colors: {
    mirage: [
      "#f0f7fe",
      "#deecfb",
      "#c4e0f9",
      "#9cccf4",
      "#6dafed",
      "#4b90e6",
      "#3674da",
      "#2d60c8",
      "#2a4fa3",
      "#274481",
      "#0f172a"
    ],
    lynch: [
      "#f4f7f9",
      "#ebf1f4",
      "#dae6eb",
      "#c3d5de",
      "#aac0cf",
      "#94abc0",
      "#7d92ae",
      "#657790",
      "#58677b",
      "#4b5664",
      "#2c323a"
    ],
    "black-haze": [
      "#f8fafc",
      "#e9eff5",
      "#cedde9",
      "#a3c1d6",
      "#729fbe",
      "#5083a7",
      "#3d698c",
      "#325572",
      "#2d495f",
      "#293e51",
      "#1b2836"
    ],
    mauvelous: [
      "#fef2f3",
      "#fde6e9",
      "#fad1d8",
      "#f5acb8",
      "#f0899c",
      "#e44f6f",
      "#cf2f58",
      "#ae224a",
      "#921f44",
      "#7d1e3f",
      "#460b1e"
    ],
    shakespeare: [
      "#ebfdff",
      "#cef8ff",
      "#a2f0ff",
      "#63e3fd",
      "#1ccbf4",
      "#00b5e2",
      "#038ab7",
      "#0a6f94",
      "#125a78",
      "#144b65",
      "#063146"
    ],
  },
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);
