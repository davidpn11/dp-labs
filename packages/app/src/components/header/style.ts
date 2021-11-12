import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  background: ${props => props.theme.colors.primary[500]};
  color: ${props => props.theme.colors.neutral[200]};
  padding: 0 32px;
  margin: auto;
`;

export const LogoContainer = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  width: 64px;
  height: 64px;
  border: 2px solid forestgreen;
`;
export const ToolsContainer = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  width: 64px;
  height: 64px;
  border: 2px solid goldenrod;
`;
export const PagesContainer = styled.div`
  grid-area: 1 / 2 / 2 / 4;
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
