import {css} from 'styled-components';
import {ThemedValues, ThemeWithMode} from '.';

export function getThemedValues(value: ThemedValues) {
  return (props: {theme: ThemeWithMode}) => {
    return props.theme.mode === 'light'
      ? props.theme.colors.light[value]
      : props.theme.colors.dark[value];
  };
}
