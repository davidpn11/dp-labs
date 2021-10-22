import React from 'react';
import {ThemeProvider} from '@dplabs/labs-ui';
import {createGlobalStyle} from 'styled-components';
import {theme} from '../../styles/theme';
import {PageContainer} from '../../styles/global';
import {PageHeader} from '../header';
const GlobalStyle = createGlobalStyle`
  html,
  body, #__next{
    width: 100vw;
    height: 100vh;
    display: flex;
    padding: 0;
    margin: 0;
    font-family: Helvetica, sans-serif;
    font-size: 16px;
    justify-content: center;

  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p {
  }

  * {
    box-sizing: border-box;
  }
`;

export function App() {
  return (
    <ThemeProvider customTheme={theme}>
      <GlobalStyle />
      <PageContainer>
        <PageHeader />
      </PageContainer>
    </ThemeProvider>
  );
}
