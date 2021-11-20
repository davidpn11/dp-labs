import 'styled-components';
import {LabsTheme} from '../src/theme/index';
declare module 'styled-components' {
  interface DefaultTheme extends LabsTheme {}
}
