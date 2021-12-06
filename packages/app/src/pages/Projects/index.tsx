import React from 'react';
import {ProjectList} from '@dplabs/projects-app';
import {Body1, Header, ProjectWrapper} from '@dplabs/shared';

export default function Projects() {
  return (
    <ProjectWrapper>
      <Header>
        Check out some of my personal <strong>Projects</strong>
      </Header>
      <ProjectList />
    </ProjectWrapper>
  );
}
