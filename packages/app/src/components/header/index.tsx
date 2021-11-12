import {GhostButton} from '@dplabs/shared';
import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {ThemeContext} from '../ThemeProvider';
import {
  PagesContainer,
  LogoContainer,
  HeaderContainer,
  ToolsContainer,
} from '../../pages/Projects/style';
import Moon from '../../assets/Moon.svg';
import Sun from '../../assets/Sun.svg';

export function PageHeader() {
  const {toggleMode, mode} = useContext(ThemeContext);
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
      <ToolsContainer onClick={toggleMode}>
        {mode === 'light' ? <Sun /> : <Moon />}
      </ToolsContainer>
    </HeaderContainer>
  );
}
