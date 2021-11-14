import styled from 'styled-components';
import {getThemedValues} from '@dplabs/shared';

export const ProjectCardWrapper = styled.div`
  min-width: 400px;
  max-width: 600px;
  height: 220px;
  display: flex;
  overflow: hidden;
  color: ${getThemedValues('text')};
  background: ${getThemedValues('background')};
  border-radius: 0.5rem;
  margin: 0.75rem;
  box-shadow: ${props => props.theme.zIndex.z1};
`;
