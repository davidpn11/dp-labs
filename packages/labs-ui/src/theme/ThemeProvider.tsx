import React from 'react';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';
import {theme, Theme} from './';

type Props = {
  children: React.ReactNode;
  customTheme?: Partial<Theme>;
};

export function ThemeProvider({children, customTheme}: Props) {
  const newTheme = {...theme, ...customTheme};
  console.log('new', newTheme);
  return <StyledThemeProvider theme={newTheme}>{children}</StyledThemeProvider>;
}
