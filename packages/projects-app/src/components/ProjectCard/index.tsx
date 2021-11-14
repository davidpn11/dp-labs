import React, {PropsWithChildren} from 'react';
import {ProjectCardWrapper} from './styles';
type Props = {
  title: string;
};

export function ProjectCard(props: PropsWithChildren<Props>) {
  return (
    <ProjectCardWrapper>
      <h2>{props.title}</h2>
      {props.children}
    </ProjectCardWrapper>
  );
}
