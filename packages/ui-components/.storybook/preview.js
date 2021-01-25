import React, { Fragment } from "react";
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/theme";

//TODO return with darktheme application when this is ready
/* <Theme customTheme={useDarkMode() ? darkTheme : baseTheme} /> */
const WrapperDecorator = (storyFn) => (
  <Fragment>
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
  </Fragment>
);

addDecorator(WrapperDecorator);
