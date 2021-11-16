import styled from 'styled-components';
import {getThemedValues} from '../utils';

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FieldLabel = styled.strong`
  font-size: 14px;
  letter-spacing: 0.5px;
  color: ${getThemedValues('accent')};
`;

export const FieldInput = styled.input`
  outline: none;
  font-size: 16px;
  padding: 12px 16px;
  border-radius: 6px;
  margin-top: 8px;
  display: flex;
  background: transparent;
  align-self: flex-start;
  min-width: 250px;
  color: ${getThemedValues('text')};
  border: 1px solid ${getThemedValues('accent')};
  &::placeholder {
    color: 2px solid ${props => props.theme.colors.neutral[400]};
  }

  &:focus {
    border: 2px solid ${props => props.theme.colors.primary[200]};
  }
`;
