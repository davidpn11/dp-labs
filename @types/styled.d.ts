import "styled-components";
import type { ThemeWithMode } from "../packages/shared/src/theme/index";

declare module "styled-components" {
  interface DefaultTheme extends ThemeWithMode {}
}
