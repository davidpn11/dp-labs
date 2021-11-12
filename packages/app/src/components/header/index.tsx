import {GhostButton} from '@dplabs/shared';
import React from 'react';
import {Link} from 'react-router-dom';
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
      <Link to="/">
        <LogoContainer></LogoContainer>
      </Link>
      <PagesContainer>
        <Link to="blog">
          <GhostButton>Blog</GhostButton>
        </Link>
        <Link to="/projects">
          <GhostButton>Projects</GhostButton>
        </Link>
        <Link to="/library">
          <GhostButton>Library</GhostButton>
        </Link>
        <Link to="/about">
          <GhostButton>About</GhostButton>
        </Link>
      </PagesContainer>
      <ToolsContainer></ToolsContainer>
    </HeaderContainer>
  );
}
