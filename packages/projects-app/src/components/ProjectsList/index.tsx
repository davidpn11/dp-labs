import React from 'react';
import {demos} from './list';
import {ProjectCard} from '../ProjectCard';

export function ProjectList() {
  console.log(demos);
  if (demos.length === 0) {
    return <h2>No Projects</h2>;
  }
  return (
    <>
      {demos.map(demo => (
        <ProjectCard key={demo.name} title={demo.name}>
          {demo.demoComponent}
        </ProjectCard>
      ))}
    </>
  );
}
