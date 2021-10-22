import { Theme, theme as UItheme } from "@dplabs/labs-ui";

export const theme: Partial<Theme> = {
  ...UItheme,
  colors: {
    ...UItheme.colors,
    primary: {
      100: "#457b9d",
      200: "#3d405b",
      300: "#14213d",
      400: "#4d194d",
    },
    success100: "#2A7F62",
  },
};

export type WebTheme = typeof theme;
