import React from 'react';
import {ProjectList} from '@dplabs/projects-app';
import {ProjectWrapper} from '@dplabs/shared';

export default function Projects() {
  return (
    <ProjectWrapper>
      <h1>This is the Project page</h1>
      <ProjectList />
    </ProjectWrapper>
  );
}
