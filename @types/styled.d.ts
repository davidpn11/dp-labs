import "styled-components";
import type { Theme } from "../packages/labs-ui/src/theme/index";

declare module "styled-components" {
  interface DefaultTheme extends Theme {}
}
