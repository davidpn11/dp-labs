import React, {PropsWithChildren} from 'react';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';
import {Theme, themeGen, ThemeGenParams} from '../../theme';

type Props<T = {}> = {
  genParams: ThemeGenParams;
  customTheme?: Partial<Theme>;
  additional?: T;
  mode: 'light' | 'dark';
};

export function ThemeProvider<T = {}>({
  children,
  customTheme,
  additional,
  mode,
  genParams,
}: PropsWithChildren<Props<T>>) {
  const theme = themeGen(genParams);
  const newTheme: Theme = {...theme, ...customTheme, ...additional, mode};

  //@ts-ignore
  return <StyledThemeProvider theme={newTheme}>{children}</StyledThemeProvider>;
}
