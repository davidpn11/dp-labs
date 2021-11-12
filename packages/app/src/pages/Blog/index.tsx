import React from 'react';
import {PostCard} from '@dplabs/blog-app';
import {ProjectWrapper} from '@dplabs/shared';

export default function Blog() {
  return (
    <ProjectWrapper>
      <h1>This is the Blog page</h1>
      <PostCard title={'first post'} />
    </ProjectWrapper>
  );
}
