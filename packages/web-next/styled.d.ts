import "styled-components";
import { Theme } from "@dplabs/labs-ui";
import { WebTheme } from "./styles/theme";

type CombinedTheme = Theme & WebTheme;

declare module "styled-components" {
  export interface DefaultTheme extends CombinedTheme {}
}
