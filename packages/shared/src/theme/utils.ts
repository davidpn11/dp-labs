import {AliasKeys} from '@dplabs/qik-ui';
import {LabsTheme} from '.';

export function getThemedValues(value: AliasKeys) {
  return (props: {theme: LabsTheme}) => {
    return props.theme.mode === 'light'
      ? props.theme.light[value]
      : props.theme.dark[value];
  };
}
