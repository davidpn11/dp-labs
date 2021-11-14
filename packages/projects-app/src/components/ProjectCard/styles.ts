import styled, {css, StyledComponent} from 'styled-components';
import {getThemedValues} from '@dplabs/shared';

export const Overlay = styled.div<{onDisplay: boolean}>`
  position: absolute;
  width: 400px;
  height: 220px;
  background: ${props => props.theme.colors.neutral[600]};
  opacity: 0;
  color: ${props => props.theme.colors.neutral[100]};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;

export const ProjectCardWrapper = styled.div<{onDisplay: boolean}>`
  width: 400px;
  height: 220px;
  ${props =>
    props.onDisplay &&
    css`
      max-height: 100%;
      max-width: 100%;
      width: fit-content;
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
