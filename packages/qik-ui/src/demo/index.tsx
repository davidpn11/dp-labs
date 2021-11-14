import React from 'react';
import {themeGen} from '../theme';

export function Demo() {
  const theme = themeGen({
    primaryColor: '#601F60',
    accentColor: '#F49D37',
    mainWhite: '#D1D5DB',
    mainDark: '#4A4B53',
  });

  return <div>{JSON.stringify(theme)}</div>;
}
