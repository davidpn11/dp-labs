import 'styled-components';
import type {LabsTheme} from '@dplabs/shared';
import type {Theme} from '@dplabs/qik-ui';
declare module 'styled-components' {
  interface DefaultTheme extends LabsTheme {}
}
