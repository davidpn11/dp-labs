import {css} from 'styled-components';
import {Theme, AliasKeys} from '../../theme';

export function getThemedValues(value: AliasKeys) {
  return (props: {theme: Theme}) => {
    return props.theme.mode === 'light'
      ? props.theme.light[value]
      : props.theme.dark[value];
  };
}
