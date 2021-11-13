import React from 'react';
import styled from 'styled-components';
import {GhostButton} from '.';

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
    <GhostButton variant="inverted" onClick={() => {}}>
      Ghost Button
    </GhostButton>
  </Wrapper>
);

export default {
  title: 'Components/Ghost Button',
  component: PrimaryButton,
};
