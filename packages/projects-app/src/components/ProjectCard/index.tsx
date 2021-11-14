import React, {PropsWithChildren} from 'react';
import {ProjectCardWrapper, Overlay} from './styles';
type Props = {
  title: string;
  expand?: boolean;
  onClick?: () => void;
};

export function ProjectCard(props: PropsWithChildren<Props>) {
  return (
    <ProjectCardWrapper onClick={props.onClick} expand={Boolean(props.expand)}>
      {!props.expand && (
        <Overlay expand={Boolean(props.expand)}>Click to see more</Overlay>
      )}
      <h2>{props.title}</h2>
      {props.children}
    </ProjectCardWrapper>
  );
}
