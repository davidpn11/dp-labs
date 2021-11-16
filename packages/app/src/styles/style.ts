import {getThemedValues} from '@dplabs/shared';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: grid;
  grid-template-areas: 'logo logo routes routes routes routes routes routes tools tools';
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  background: ${props => props.theme.colors.primary[300]};
  color: ${props => props.theme.colors.neutral[100]};
  overflow-x: auto;
  padding: 0 8px;

  @media screen and (max-width: 600px) {
    grid-template-areas:
      'logo logo logo logo'
      'routes routes routes tools';
  }
`;

export const LogoContainer = styled.div`
  grid-area: logo;
  width: 64px;
  height: 64px;
  border: 2px solid forestgreen;
`;
export const ToolsContainer = styled.div`
  grid-area: tools;
  width: 64px;
  height: 64px;
  display: flex;
  cursor: pointer;
  align-items: center;
  display: flex;
  justify-content: flex-end;

  svg {
    fill: ${getThemedValues('text')};
  }
`;
export const PagesContainer = styled.div`
  grid-area: routes;
  display: flex;
  flex-direction: row;
  align-items: center;
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
