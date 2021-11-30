import {getThemedValues} from '@dplabs/qik-ui';
import {darken, opacify, transparentize} from 'polished';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: grid;
  grid-template-areas: 'logo routes routes tools';
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  background: transparent;
  color: ${props => props.theme.colors.neutral[100]};
  overflow-x: auto;
  padding: 0 8px;
  align-items: center;

  @media screen and (max-width: 600px) {
    grid-template-areas:
      'logo logo logo tools'
      'routes routes routes routes';
  }
`;

export const LogoContainer = styled.div`
  grid-area: logo;
  padding: 16px;
  svg {
    width: 180px;
    height: 72px;
  }
`;
export const ToolsContainer = styled.div`
  grid-area: tools;
  width: 64px;
  height: 64px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-right: 16px;
  border-radius: 8px;

  :hover {
    background: ${props =>
      transparentize(0.9, getThemedValues('text')({theme: props.theme}))};
  }

  svg {
    fill: ${getThemedValues('text')};
  }
`;
export const PagesContainer = styled.div`
  grid-area: routes;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const PageLink = styled.span`
  font-size: 16px;
  padding: 12px 24px;
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
  opacity: 1;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.theme.colors.neutral[500]};
    opacity: 0.8;
  }
`;
