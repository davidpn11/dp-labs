import React from 'react';
import QuiUI from './assets/thumbnails/qik-ui.png';
import {Demo as QikUiDemo} from '@dplabs/qik-ui/src/demo';

export type Experiment = {
  name: string;
  description: string;
  status: 'STARTED' | 'ONGOING' | 'COMPLETED';
  experimentType: 'PERSONAL_POST' | 'LIVE_LEARNING' | 'PROJECT';
  thumbnail: string;
  thumbnailAlt: string;
  tags: string[];
  demo: JSX.Element;
};

export const experimentList: Record<string, Experiment> = {
  'qik-ui': {
    name: ' QIK-UI',
    description:
      'Instead of creating new components for each app, have an entire design system at your disposal with only a few inputs',
    status: 'ONGOING',
    experimentType: 'PROJECT',
    thumbnail: QuiUI,
    tags: [],
    thumbnailAlt: 'Qik up demo image',
    demo: <QikUiDemo />,
  },
};
