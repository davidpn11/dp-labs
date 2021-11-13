import {GhostButton} from '@dplabs/shared';
import React, {useContext} from 'react';
import {Link, useLocation, useParams} from 'react-router-dom';
import {ThemeContext} from '../ThemeProvider';
import {
  PagesContainer,
  LogoContainer,
  HeaderContainer,
  ToolsContainer,
} from '../../styles/style';
import Moon from '../../assets/MoonWhite.svg';
import Sun from '../../assets/SunWhite.svg';

function isActive(path: string) {
  return;
}

export function PageHeader() {
  const {toggleMode, mode} = useContext(ThemeContext);
  const location = useLocation();

  const isActive = (path: string) => {
    return path === location.pathname;
  };
  return (
    <HeaderContainer>
      <Link to="/">
        <LogoContainer></LogoContainer>
      </Link>
      <PagesContainer>
        <Link to="blog">
          <GhostButton active={isActive('/blog')} variant="inverted">
            Blog
          </GhostButton>
        </Link>
        <Link to="/projects">
          <GhostButton active={isActive('/projects')} variant="inverted">
            Projects
          </GhostButton>
        </Link>
        <Link to="/library">
          <GhostButton active={isActive('/library')} variant="inverted">
            Library
          </GhostButton>
        </Link>
        <Link to="/about">
          <GhostButton active={isActive('/about')} variant="inverted">
            About
          </GhostButton>
        </Link>
      </PagesContainer>
      <ToolsContainer onClick={toggleMode}>
        {mode === 'light' ? <Sun fill={'white'} /> : <Moon fill={'white'} />}
      </ToolsContainer>
    </HeaderContainer>
  );
}
