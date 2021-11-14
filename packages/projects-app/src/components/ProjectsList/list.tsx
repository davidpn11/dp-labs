import React from 'react';
import {Demo as QikUiDemo} from '@dplabs/qik-ui';

type Demo = {
  name: string;
  demoComponent: JSX.Element | null;
};

export const demos: Demo[] = [
  {name: 'Theme Generator', demoComponent: <QikUiDemo />},
];
