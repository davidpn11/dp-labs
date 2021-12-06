import React from 'react';
import {ExperimentCard} from '@dplabs/experiments-app';
import {ProjectWrapper} from '@dplabs/shared';

export default function ExperimentsPage() {
  return (
    <ProjectWrapper>
      <h1>This is the Experiments page</h1>
      <ExperimentCard title={'first post'} />
    </ProjectWrapper>
  );
}
