import React from "react";
import { ThemeProvider as StyledComponentsProvider } from "styled-components";
import { theme } from "./";

type Props = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: Props) {
  return (
    <StyledComponentsProvider theme={theme}>
      {children}
    </StyledComponentsProvider>
  );
}
