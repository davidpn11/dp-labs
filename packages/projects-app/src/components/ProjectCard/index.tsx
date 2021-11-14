import React, {PropsWithChildren} from 'react';
import {ProjectCardWrapper} from './styles';
type Props = {
  title: string;
  onDisplay?: boolean;
  onClick?: () => void;
};

export function ProjectCard(props: PropsWithChildren<Props>) {
  return (
    <ProjectCardWrapper
      onClick={props.onClick}
      onDisplay={Boolean(props.onDisplay)}>
      <h2>{props.title}</h2>
      {props.children}
    </ProjectCardWrapper>
  );
}
