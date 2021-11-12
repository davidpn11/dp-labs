import styled from 'styled-components';

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 0 0;
  max-width: 800px;

  @media screen and (max-width: 600px) {
    padding: 8px 8px 0;
  }
`;
