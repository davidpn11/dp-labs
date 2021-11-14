import React from 'react';
import {ProjectCardWrapper} from './styles';
type Props = {
  title: string;
};

export function ProjectCard(props: Props) {
  return (
    <ProjectCardWrapper>
      <h2>{props.title}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid cumque
        accusamus debitis magni eum corporis beatae in ipsum dolorum eius
        doloremque nam delectus, officiis odit fuga unde? Deleniti, aspernatur
        veniam.
      </p>
    </ProjectCardWrapper>
  );
}
