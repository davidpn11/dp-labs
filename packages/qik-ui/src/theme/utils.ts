import {AliasKeys, Theme} from '@dplabs/qik-ui';

export function getThemedValues(value: AliasKeys) {
  return (props: {theme: Theme}) => {
    return props.theme.mode === 'light'
      ? props.theme.light[value]
      : props.theme.dark[value];
  };
}
