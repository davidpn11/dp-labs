import React, {PropsWithChildren} from 'react';
import {ProjectCardWrapper, Overlay} from './styles';
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
      {!props.onDisplay && (
        <Overlay onDisplay={Boolean(props.onDisplay)}>
          Click to see more
        </Overlay>
      )}
      <h2>{props.title}</h2>
      {props.children}
    </ProjectCardWrapper>
  );
}
