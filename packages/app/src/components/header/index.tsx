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
import LogoActiveDark from '../../assets/logo-active-dark.svg';
import LogoActiveLight from '../../assets/logo-active-light.svg';
import LogoExtendedDark from '../../assets/logo-extended-dark.svg';
import LogoExtendedLight from '../../assets/logo-extended-light.svg';
import {useThemeContext} from '@dplabs/shared';

export function PageHeader() {
  const {toggleMode, mode} = useThemeContext();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname.includes(path);
  };

  const getLogo = () => {
    if (mode === 'light') {
      return isActive('/') ? <LogoActiveLight /> : <LogoExtendedLight />;
    }
    return isActive('/') ? <LogoActiveDark /> : <LogoExtendedDark />;
  };

  return (
    <HeaderContainer>
      <Link to="/">
        <LogoContainer>{getLogo()}</LogoContainer>
      </Link>
      <PagesContainer>
        <Link to="/experiments">
          <GhostButton active={isActive('/experiments')} variant="default">
            Experiments
          </GhostButton>
        </Link>
        <Link to="/projects">
          <GhostButton active={isActive('/projects')} variant="default">
            Projects
          </GhostButton>
        </Link>
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
