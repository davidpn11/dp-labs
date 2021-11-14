import React, {useState} from 'react';
import {demos} from './list';
import {ProjectCard} from '../ProjectCard';

export function ProjectList() {
  const [expand, setExpand] = useState('');
  if (demos.length === 0) {
    return <h2>No Projects</h2>;
  }

  const onClick = (name: string) => () => setExpand(name);
  return (
    <>
      {demos.map(demo => (
        <ProjectCard
          expand={demo.name === expand}
          onClick={onClick(demo.name)}
          key={demo.name}
          title={demo.name}>
          {demo.demoComponent}
        </ProjectCard>
      ))}
    </>
  );
}
