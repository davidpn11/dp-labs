import React from 'react';
import {ThemeProvider} from '@dplabs/labs-ui';
import {GlobalStyles} from './styles/global';

export function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}
