import React from 'react';

const Home = React.lazy(() => import('../pages/Home'));
const Projects = React.lazy(() => import('../pages/Projects'));
const Blog = React.lazy(() => import('../pages/Blog'));
const Library = React.lazy(() => import('../pages/Library'));
const About = React.lazy(() => import('../pages/About'));

type Route = {
  path: string;
  Component: React.LazyExoticComponent<() => JSX.Element>;
};

const routes: Route[] = [
  {path: '/', Component: Home},
  {path: '/projects', Component: Projects},
  {path: '/blog', Component: Blog},
  {path: '/library', Component: Library},
  {path: '/about', Component: About},
];

export default routes;
