import styled, {css} from 'styled-components';

export const ProjectWrapper = styled.div<{center?: boolean}>`
  display: flex;
  flex-direction: column;
  ${props =>
    props.center &&
    css`
      align-items: center;
    `}
  justify-content: center;
  padding: 12px 0 0;
  margin: auto;
  margin-top: 12px;
  max-width: 1280px;

  @media screen and (max-width: 600px) {
    padding: 8px 8px 0;
  }
`;
