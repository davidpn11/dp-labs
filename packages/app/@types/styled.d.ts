import 'styled-components';
import type {ThemeWithMode} from '@dplabs/shared';
import type {Theme} from '@dplabs/qik-ui';

type GeneralTheme = ThemeWithMode | Theme;
declare module 'styled-components' {
  interface DefaultTheme extends GeneralTheme {}
}
