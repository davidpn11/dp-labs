import React from 'react';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';
import {themeGenParams, labsComplementaryTheme} from './';
import {
  themeGen,
  Theme,
  ThemeProvider as QikThemeProvider,
} from '@dplabs/qik-ui';

type Props = {
  children: React.ReactNode;
  customTheme?: Partial<Theme>;
  mode: 'light' | 'dark';
};

export function ThemeProvider({children, customTheme, mode}: Props) {
  return (
    <QikThemeProvider
      genParams={themeGenParams}
      mode={mode}
      additional={labsComplementaryTheme}>
      {children}
    </QikThemeProvider>
  );
}
