import React, {useEffect, useState} from 'react';
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
import {TextField} from '../components/TextField';
import {getValueAndUnit} from 'polished';

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

const initialGenParams: ThemeGenParams = {
  primaryColor: '#601F60',
  accentColor: '#F49D37',
  mainWhite: '#D1D5DB',
  mainDark: '#4A4B53',
  green: 'green',
  yellow: 'gold',
  red: 'firebrick',
};

export function Demo() {
  const [genParams, setGenParams] = useState<ThemeGenParams>(initialGenParams);
  const [editedGenParams, setEditedGenParams] = useState<ThemeGenParams>(
    initialGenParams,
  );

  const onChangeParams = (key: keyof ThemeGenParams) => (value: string) => {
    setEditedGenParams({...genParams, [key]: value});
  };

  useEffect(() => {
    setEditedGenParams(genParams);
  }, [genParams]);

  const onSubmit = () => {
    setGenParams(editedGenParams);
  };

  return (
    <ThemeProvider genParams={genParams} mode="light">
      <DemoWrapper>
        <ColorSummary />
        <ThemeGenFormWrapper>
          <TextField
            value={editedGenParams.primaryColor}
            label={'Primary'}
            onChange={onChangeParams('primaryColor')}
          />
          <TextField
            value={editedGenParams.accentColor}
            label={'Accent'}
            onChange={onChangeParams('accentColor')}
          />
          <TextField
            value={editedGenParams.mainWhite}
            label={'White'}
            onChange={onChangeParams('mainWhite')}
          />
          <TextField
            value={editedGenParams.mainDark}
            label={'Black'}
            onChange={onChangeParams('mainDark')}
          />
          <Button variant="primary" onClick={onSubmit}>
            Generate
          </Button>
        </ThemeGenFormWrapper>
        <ComponentsWrapper>
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <GhostButton variant="default" active>
            Ghost Button
          </GhostButton>
          <GhostButton variant="inverted">Inverted Ghost Button</GhostButton>
          <TextField value={'Value'} label={'Label'} onChange={() => {}} />
          <TextField
            value={''}
            placeholder={'Placeholder'}
            label={'Label'}
            onChange={() => {}}
          />
        </ComponentsWrapper>
      </DemoWrapper>
    </ThemeProvider>
  );
}
