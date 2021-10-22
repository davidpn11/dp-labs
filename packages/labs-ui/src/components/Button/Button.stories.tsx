import React from 'react';
import styled from 'styled-components';
import {Button} from '.';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  button {
    margin-bottom: 16px;
  }
`;

export const PrimaryButton = () => (
  <Wrapper>
    <h1>Button</h1>
    <Button variant="primary" onClick={() => {}}>
      Primary Button
    </Button>
    <Button variant="warning" onClick={() => {}}>
      Secondary Button
    </Button>
    <Button variant="success" onClick={() => {}}>
      Secondary Button
    </Button>
  </Wrapper>
);

export default {
  title: 'Components/Button',
  component: PrimaryButton,
};
