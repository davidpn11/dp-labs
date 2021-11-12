import 'styled-components';
import type {ThemeWithMode} from '@dplabs/shared';

declare module 'styled-components' {
  interface DefaultTheme extends ThemeWithMode {}
}
