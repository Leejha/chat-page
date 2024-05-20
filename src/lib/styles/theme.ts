const colors = {
  main: "#7761FF",
  border_01: "#D6DDFF",
  border_02: "#D9D9D9",
  black_01: "#222222",
  black_02: "#666666",
  black_03: "#9E9E9E",
  black_04: "#EEEEEE",
} as const;

export type ThemeColors = typeof colors;

export const theme = {
  colors,
} as const;
