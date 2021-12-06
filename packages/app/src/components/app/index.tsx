import React from 'react';
import {GlobalStyles} from './styles/global';
import {PageHeader} from '../header';
import {Routes, Route} from 'react-router-dom';
import routes from '../../routes';
import Page404 from '../../pages/404';
import {ThemeProvider as SharedThemeProvider} from '@dplabs/shared';
const Home = React.lazy(() => import('../../pages/Home'));
const Projects = React.lazy(() => import('../../pages/Projects'));
const ExperimentPage = React.lazy(() => import('../../pages/ExperiementsPage'));
const ExperimentDetail = React.lazy(
  () => import('../../pages/ExperimentDetail'),
);
const About = React.lazy(() => import('../../pages/About'));

export function App() {
  return (
    <SharedThemeProvider>
      <GlobalStyles />
      <PageHeader />
      <React.Suspense fallback={<span> loading...</span>}>
        <Routes>
          <Route index element={<Home />} />
          <Route path={'projects'} element={<Projects />}></Route>
          <Route path={'experiments'} element={<ExperimentPage />}></Route>
          <Route
            path={'/experiments/:experimentId'}
            element={<ExperimentDetail />}
          />
          <Route path={'about'} element={<About />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </React.Suspense>
    </SharedThemeProvider>
  );
}
