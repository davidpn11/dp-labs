import styled, {css} from 'styled-components';
import {getThemedValues} from '@dplabs/shared';

export const ProjectCardWrapper = styled.div<{onDisplay: boolean}>`
  width: 400px;
  height: 220px;
  ${props =>
    props.onDisplay &&
    css`
      max-height: 100%;
      max-width: 100%;
      width: 600px;
      height: 100%;
    `}
  display: flex;
  flex-direction: column;
  overflow: hidden;
  color: ${getThemedValues('text')};
  background: ${getThemedValues('background')};
  border-radius: 0.5rem;
  margin: 0.75rem;
  box-shadow: ${props => props.theme.zIndex.z1};
`;
