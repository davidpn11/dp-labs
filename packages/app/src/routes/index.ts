import React from 'react';

const Home = React.lazy(() => import('../pages/Home'));
const Projects = React.lazy(() => import('../pages/Projects'));
const ExperimentPage = React.lazy(() => import('../pages/ExperiementsPage'));
const ExperimentDetail = React.lazy(() => import('../pages/ExperimentDetail'));
const About = React.lazy(() => import('../pages/About'));

type Route = {
  path: string;
  Component: React.LazyExoticComponent<() => JSX.Element>;
  isDisabled: boolean;
};

const routes: Route[] = [
  {path: '/', Component: Home, isDisabled: false},
  {path: '/projects', Component: Projects, isDisabled: false},
  {path: '/experiments', Component: ExperimentPage, isDisabled: false},
  {
    path: '/experiments/:experimentId',
    Component: ExperimentDetail,
    isDisabled: false,
  },
  {path: '/about', Component: About, isDisabled: false},
];

export default routes;
