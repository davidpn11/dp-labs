import React from 'react';

const Home = React.lazy(() => import('../pages/Home'));
const Projects = React.lazy(() => import('../pages/Projects'));
const Blog = React.lazy(() => import('../pages/Blog'));
const Library = React.lazy(() => import('../pages/Library'));
const About = React.lazy(() => import('../pages/About'));

type Route = {
  path: string;
  Component: React.LazyExoticComponent<() => JSX.Element>;
  isDisabled: boolean;
};

const routes: Route[] = [
  {path: '/', Component: Home, isDisabled: false},
  {path: '/projects', Component: Projects, isDisabled: false},
  {path: '/blog', Component: Blog, isDisabled: false},
  {path: '/library', Component: Library, isDisabled: true},
  {path: '/about', Component: About, isDisabled: false},
];

export default routes;
