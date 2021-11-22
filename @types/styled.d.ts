import "styled-components";
import type { LabsTheme } from "../packages/shared/src/theme/index";

declare module "styled-components" {
  interface DefaultTheme extends LabsTheme {}
}
