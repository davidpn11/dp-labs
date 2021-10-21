import {createGlobalStyle} from 'styled-components';
import {ThemeProvider} from '@dplabs/labs-ui';
import {theme} from '../styles/theme';
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

function MyApp({Component, pageProps}) {
  return (
    <ThemeProvider customTheme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
