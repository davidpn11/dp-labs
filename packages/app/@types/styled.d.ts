import 'styled-components';
import type {Theme} from '@dplabs/shared';

declare module 'styled-components' {
  interface DefaultTheme extends Theme {}
}
