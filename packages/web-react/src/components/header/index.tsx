import {GhostButton} from '@dplabs/labs-ui';
import React from 'react';
import {
  PagesContainer,
  LogoContainer,
  HeaderContainer,
  ToolsContainer,
  PageLink,
} from './style';

export function PageHeader() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <h1>Logo</h1>
      </LogoContainer>
      <PagesContainer>
        <GhostButton>Projects</GhostButton>
        <GhostButton>About</GhostButton>
      </PagesContainer>
      <ToolsContainer>Tools</ToolsContainer>
    </HeaderContainer>
  );
}
