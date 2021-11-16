import React, {PropsWithChildren} from 'react';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';
import {Theme, defaultTheme, themeGen, ThemeGenParams} from '../../theme';

type Props = {
  genParams: ThemeGenParams;
  customTheme?: Partial<Theme>;
  mode: 'light' | 'dark';
};

export function ThemeProvider({
  children,
  customTheme,
  mode,
  genParams,
}: PropsWithChildren<Props>) {
  // const newTheme: Theme = {...defaultTheme, ...customTheme};
  const theme = themeGen(genParams);
  const newTheme: Theme = {...theme, ...customTheme, mode};

  return <StyledThemeProvider theme={newTheme}>{children}</StyledThemeProvider>;
}
