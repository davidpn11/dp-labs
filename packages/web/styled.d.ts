import "styled-components";
import { Theme } from "@dp-labs/ui-components/dist";
import { WebTheme } from "./styles/theme";

type CombinedTheme = Theme & WebTheme;

declare module "styled-components" {
  export interface DefaultTheme extends CombinedTheme {}
}
