import React from 'react';
import {CardPostWrapper} from './styles';
type Props = {
  title: string;
};

export function PostCard(props: Props) {
  return (
    <CardPostWrapper>
      <h2>{props.title}</h2>
    </CardPostWrapper>
  );
}