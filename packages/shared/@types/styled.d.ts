import 'styled-components';
import {LabsTheme} from '../src/theme';

declare module 'styled-components' {
  interface DefaultTheme extends LabsTheme {}
}
