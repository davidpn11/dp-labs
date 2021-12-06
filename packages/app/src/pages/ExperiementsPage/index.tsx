import React from 'react';
import {ExperimentList} from '@dplabs/experiments-app';
import {ProjectWrapper} from '@dplabs/shared';
import {Header, Body1} from '@dplabs/shared';

export default function ExperimentsPage() {
  return (
    <ProjectWrapper>
      <Header>
        Welcome to <strong>Experiments</strong>
      </Header>
      <Body1>
        If you’re the same kind of developer as I am, you have little
        experiments everywhere. From trying out new libraries and frameworks to
        build my own tools, I found myself with a ton of repositories and
        Codesanbox’s links, each one to give a shot at something that sparked my
        interest but I very rarely look back into (or know where it is). This
        page is an atempt to not only keep a better track, but also to solidify
        my learning and put it out there for the next person trying it out.
      </Body1>
      <ExperimentList />
    </ProjectWrapper>
  );
}
