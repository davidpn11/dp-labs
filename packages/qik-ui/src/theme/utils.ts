import {AliasKeys, Theme} from '@dplabs/qik-ui';
import {transparentize} from 'polished';

export function getThemedValues(value: AliasKeys) {
  return (props: {theme: Theme}) => {
    return props.theme.mode === 'light'
      ? props.theme.light[value]
      : props.theme.dark[value];
  };
}

export function transparentizeThemedValue(opacity: number, value: AliasKeys) {
  return (props: {theme: Theme}) => {
    const color =
      props.theme.mode === 'light'
        ? props.theme.light[value]
        : props.theme.dark[value];
    return transparentize(opacity, color);
  };
}
