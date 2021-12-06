import styled from 'styled-components';
import {getThemedValues} from '@dplabs/qik-ui';
import {ExperimentStatus} from '../..';

export const CardPostWrapper = styled.div`
  min-width: 400px;
  max-width: 600px;
  height: 256px;
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
  margin: 20px;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 600px;
  height: 256px;
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

export const StatusWrapper = styled.div`
  margin: 14px 0;
  display: flex;
  align-items: center;
  align-content: center;
`;

export const StatusLight = styled.span<{status: ExperimentStatus}>`
  display: flex;
  height: 20px;
  width: 20px;
  margin: 0 8px 4px;
  border-radius: 50px;
  background: ${props => {
    switch (props.status) {
      case 'STARTED':
        return props.theme.colors.yellow;
      case 'ONGOING':
        return '#F49D37';
      case 'COMPLETED':
        return props.theme.colors.green;
      default:
        return 'transparent';
    }
  }};
`;

export const Tag = styled.span`
  padding: 4px 8px;
  font-size: 12px;
  color: ${getThemedValues('textInverse')};
  background-color: ${getThemedValues('accent')};
  border: none;
  border-radius: 5px;
  margin: 0 4px;
`;
