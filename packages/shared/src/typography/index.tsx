import styled from 'styled-components';
import {getThemedValues} from '@dplabs/qik-ui';

export const Header = styled.h1`
  margin: 24px 12px;
  font-size: 28px;
  padding: 0 12px;

  strong {
    color: ${getThemedValues('accent')};
    text-decoration: underline;
  }
`;

export const Body1 = styled.p`
  margin: 12px 0;
  line-height: 2.5;
`;
