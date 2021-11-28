import {GhostButton} from '@dplabs/qik-ui';
import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import {
  PagesContainer,
  LogoContainer,
  HeaderContainer,
  ToolsContainer,
} from '../../styles/style';
import Moon from '../../assets/MoonWhite.svg';
import Sun from '../../assets/Sun.svg';
import LogoWhite from '../../assets/logo-white.svg';
import LogoBlack from '../../assets/logo-black.svg';
import LogoWhiteActive from '../../assets/logo-white-active.svg';
import LogoBlackActive from '../../assets/logo-black-active.svg';
import LogoActiveDark from '../../assets/logo-active-dark.svg';
import LogoActiveLight from '../../assets/logo-active-light.svg';
import LogoExtendedDark from '../../assets/logo-extended-dark.svg';
import LogoExtendedLight from '../../assets/logo-extended-light.svg';
import {useThemeContext} from '@dplabs/shared';

export function PageHeader() {
  const {toggleMode, mode} = useThemeContext();
  const location = useLocation();

  const isActive = (path: string) => {
    return path === location.pathname;
  };

  const getLogo = () => {
    if (mode === 'light') {
      // return <LogoExtendedLight />;
      // return isActive('/') ? <LogoExtendedLight /> : <LogoBlack />;
      return isActive('/') ? <LogoActiveLight /> : <LogoExtendedLight />;
    }
    // return <LogoExtendedDark />;
    return isActive('/') ? <LogoActiveDark /> : <LogoExtendedDark />;
    // return isActive('/') ? <LogoExtendedDark /> : <LogoWhite />;
  };

  return (
    <HeaderContainer>
      <Link to="/">
        <LogoContainer>{getLogo()}</LogoContainer>
      </Link>
      <PagesContainer>
        <Link to="blog">
          <GhostButton active={isActive('/blog')} variant="default">
            Blog
          </GhostButton>
        </Link>
        <Link to="/projects">
          <GhostButton active={isActive('/projects')} variant="default">
            Projects
          </GhostButton>
        </Link>
        {/* <Link to="/library">
          <GhostButton active={isActive('/library')} variant="default">
            Library
          </GhostButton>
        </Link> */}
        <Link to="/about">
          <GhostButton active={isActive('/about')} variant="default">
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
