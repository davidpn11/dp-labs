import 'styled-components';
import type {Theme} from '@dplabs/labs-ui';

declare module 'styled-components' {
  interface DefaultTheme extends Theme {}
}
