import React from "react";
import {
  PagesContainer,
  LogoContainer,
  HeaderContainer,
  ToolsContainer,
  PageLink,
} from "./style";

export function PageHeader() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <h1>Logo</h1>
      </LogoContainer>
      <PagesContainer>
        <PageLink>Projects</PageLink>
        <PageLink>About</PageLink>
      </PagesContainer>
      <ToolsContainer>Tools</ToolsContainer>
    </HeaderContainer>
  );
}
