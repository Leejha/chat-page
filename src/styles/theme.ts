const colors = {
  main: "#7761FF",
  border_01: "#D6DDFF",
  border_02: "#D9D9D9",
} as const;

export type ThemeColors = typeof colors;

export const theme = {
  colors,
} as const;
