import React, {useContext, useState} from 'react';
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
};

type ModeContextType = {
  mode: 'light' | 'dark';
  setMode: (mode: 'light' | 'dark') => void;
  toggleMode: () => void;
};
const initialModeContext: ModeContextType = {
  mode: 'light',
  setMode: _ => {},
  toggleMode: () => {},
};
const ModeContext = React.createContext<ModeContextType>(initialModeContext);

export function useThemeContext() {
  const themeContext = useContext(ModeContext);
  return themeContext;
}

export function ThemeProvider({children, customTheme}: Props) {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');
  const setMode = (m: 'light' | 'dark') => setThemeMode(m);
  const toggleMode = () =>
    themeMode === 'light' ? setThemeMode('dark') : setThemeMode('light');
  return (
    <ModeContext.Provider value={{mode: themeMode, setMode, toggleMode}}>
      <QikThemeProvider
        genParams={themeGenParams}
        mode={themeMode}
        additional={labsComplementaryTheme}>
        {children}
      </QikThemeProvider>
    </ModeContext.Provider>
  );
}
