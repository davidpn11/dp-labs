import React from 'react';

import {GlobalStyles} from './styles/global';
import {PageHeader} from '../header';
import {PageContent} from './styles/style';
import {Routes, Route} from 'react-router-dom';
import routes from '../../routes';
import {ThemeProvider} from '../ThemeProvider';

export function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <PageHeader />
      <PageContent>
        <React.Suspense fallback={<span> loading...</span>}>
          <Routes>
            {routes.map(({path, Component}) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Routes>
        </React.Suspense>
      </PageContent>
    </ThemeProvider>
  );
}
