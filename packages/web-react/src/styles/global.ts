import styled, {css} from 'styled-components';

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  ${props => {
    return css`
      background: linear-gradient(
        0deg,
        ${props.theme.colors.primary[100]},
        ${props.theme.colors.primary[300]}
      );
    `;
  }}
`;
