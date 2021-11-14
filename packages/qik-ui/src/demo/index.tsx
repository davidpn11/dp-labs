import React from 'react';
import {Button, GhostButton} from '../components/Button';
import {ThemeProvider} from '../components/Provider';
import {themeGen, ThemeGenParams} from '../theme';

export function Demo() {
  const params: ThemeGenParams = {
    primaryColor: '#601F60',
    accentColor: '#F49D37',
    mainWhite: '#D1D5DB',
    mainDark: '#4A4B53',
    green: 'green',
    yellow: 'gold',
    red: 'firebrick',
  };

  return (
    <ThemeProvider genParams={params} mode="light">
      <div>{JSON.stringify(params)}</div>
      <Button variant="primary">Button</Button>
      <Button variant="error">Button</Button>
      <Button variant="success">Button</Button>
      <Button variant="warning">Button</Button>
      <GhostButton variant="default">Ghost Button</GhostButton>
      <GhostButton variant="inverted">Ghost Button</GhostButton>
    </ThemeProvider>
  );
}
