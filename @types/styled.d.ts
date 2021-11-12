import "styled-components";
import type { Theme } from "../packages/shared/src/theme/index";

declare module "styled-components" {
  interface DefaultTheme extends Theme {}
}
