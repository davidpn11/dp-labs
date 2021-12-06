import styled from 'styled-components';
import {getThemedValues} from '@dplabs/qik-ui';

export const CardPostWrapper = styled.div`
  min-width: 400px;
  max-width: 600px;
  height: 220px;
  display: flex;
  overflow: hidden;
  color: ${getThemedValues('text')};
  background: ${getThemedValues('background')};
  border-radius: 0.5rem;
  margin: 0.75rem;
  border: 1px solid ${props => props.theme.colors.neutral[300]};
  border-radius: 16px;
  justify-content: space-between;
`;

export const ExperimentDetails = styled.div`
  width: 50%;
  margin: 8px 0 0 20px;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 600px;
  height: 220px;
  background: ${props => props.theme.colors.neutral[600]};
  opacity: 0;
  color: ${props => props.theme.colors.neutral[100]};
  font-weight: bold;
  display: flex;
  border-radius: 0.5rem;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;
