import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: var(--font-family-primary);
}

html,
body, #root {
  margin: 0;
  padding: 0;
  background: ${props => props.theme.colors.neutral[100]};
};

p {
  padding: 0;
  margin: 0 0 8px;
}

b {
  font-weight: bold;
}

h1 {
  margin: 0 0 16px;
  font-weight: bold;
}

h2 {
  margin: 16px 0 8px;
  font-weight: bolder;
}

h3 {
  margin: 16px 0 8px;
  font-weight: bolder;
}

ul {
  padding: 0 0 0 16px;
  margin: 0;
}
li {
  margin: 4px 0;
}

a {
  text-decoration: none;
  font-weight: bold;
}


`;
