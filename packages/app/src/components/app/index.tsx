import React from 'react';
import {GlobalStyles} from './styles/global';
import {PageHeader} from '../header';
import {Routes, Route} from 'react-router-dom';
import routes from '../../routes';
import Page404 from '../../pages/404';
import {ThemeProvider as SharedThemeProvider} from '@dplabs/shared';

export function App() {
  return (
    <SharedThemeProvider>
      <GlobalStyles />
      <PageHeader />
      <React.Suspense fallback={<span> loading...</span>}>
        <Routes>
          {routes.map(({path, Component}) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </React.Suspense>
    </SharedThemeProvider>
  );
}
