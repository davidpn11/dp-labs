import styled from 'styled-components';

export const FieldWrapper = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  flex-direction: column;
`;

export const FieldLabel = styled.strong`
  font-size: 16px;
  color: blue;
  letter-spacing: 0.5px;
`;

export const FieldInput = styled.input`
  outline: none;
  font-size: 16px;
  padding: 12px 16px;
  border: 1px solid grey;
  border-radius: 6px;
  margin-top: 8px;
  display: flex;
  align-self: flex-start;
  min-width: 250px;
  &:focus {
    border: 2px solid darkblue;
  }
`;
