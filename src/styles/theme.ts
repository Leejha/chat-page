const colors = {
  main: "#7761FF",
  border_01: "#D6DDFF",
} as const;

export type ThemeColors = typeof colors;

export const theme = {
  colors,
} as const;
