import React from 'react';
import {labsComplementaryTheme, themeGenParams} from './';
import {ThemeProvider as QuikThemeProvider} from '@dplabs/qik-ui';

type Props = {
  children: React.ReactNode;
  mode: 'light' | 'dark';
};

export function ThemeProvider({children, mode}: Props) {
  const newParams = {...themeGenParams, mode};
  return (
    <QuikThemeProvider
      // extraTheme={labsComplementaryTheme}
      mode={mode}
      genParams={newParams}></QuikThemeProvider>
  );
  // return <StyledThemeProvider theme={newTheme}>{children}</StyledThemeProvider>;
}
