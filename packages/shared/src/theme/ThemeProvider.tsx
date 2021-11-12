import React from 'react';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';
import {theme, Theme} from './';

type Props = {
  children: React.ReactNode;
  customTheme?: Partial<Theme>;
  mode: 'light' | 'dark';
};

export function ThemeProvider({children, customTheme, mode}: Props) {
  const newTheme = {...theme, ...customTheme, mode};
  return <StyledThemeProvider theme={newTheme}>{children}</StyledThemeProvider>;
}
