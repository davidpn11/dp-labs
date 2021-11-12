import React, {PropsWithChildren} from 'react';
import {ThemeProvider as SharedThemeProvider} from '@dplabs/shared';

export const ThemeContext = React.createContext({
  mode: 'light',
  toggleMode: () => {},
});

export function ThemeProvider(props: PropsWithChildren<{}>) {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');

  const toggleMode = () =>
    mode === 'light' ? setMode('dark') : setMode('light');

  return (
    <ThemeContext.Provider value={{mode, toggleMode}}>
      <SharedThemeProvider mode={mode}>{props.children}</SharedThemeProvider>
    </ThemeContext.Provider>
  );
}
