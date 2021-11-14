import React from 'react';
import {Button, GhostButton} from '../components/Button';
import {ThemeProvider} from '../components/Provider';
import {themeGen, ThemeGenParams, Theme} from '../theme';
import {
  ColorSummaryWrapper,
  ComponentsWrapper,
  DemoWrapper,
  ThemeGenFormWrapper,
  ColorCircle,
} from './styles';
import {useTheme} from 'styled-components';

function ColorSummary() {
  const theme = useTheme();

  return (
    <ColorSummaryWrapper>
      <h4>Primary and Accent</h4>
      <span>
        {Object.entries(theme.colors.primary).map(([key, value]) => {
          return <ColorCircle color={value} />;
        })}
        <ColorCircle color={theme.colors.accent.default} />
        <ColorCircle color={theme.colors.accent.strong} />
      </span>
      <h4>Neutral</h4>
      <span>
        {Object.entries(theme.colors.neutral).map(([key, value]) => {
          console.log(key, value);
          return <ColorCircle color={value} />;
        })}
      </span>
      <h4>Misc</h4>
      <span>
        <ColorCircle color={theme.colors.green} />
        <ColorCircle color={theme.colors.yellow} />
        <ColorCircle color={theme.colors.red} />
      </span>
    </ColorSummaryWrapper>
  );
}

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
      <DemoWrapper>
        <ColorSummary />
        <ThemeGenFormWrapper>Form Comess here</ThemeGenFormWrapper>
        <ComponentsWrapper>
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <GhostButton variant="default" active>
            Ghost Button
          </GhostButton>
          <GhostButton variant="inverted">Inverted Ghost Button</GhostButton>
        </ComponentsWrapper>
      </DemoWrapper>
    </ThemeProvider>
  );
}
