import React from 'react';

import {GlobalStyles} from './styles/global';
import {PageHeader} from '../header';
import {PageContent} from './styles/style';
import {Routes, Route} from 'react-router-dom';
import routes from '../../routes';
import {ThemeProvider} from '../ThemeProvider';
import Page404 from '../../pages/404';
export function App() {
  console.log('bla teste');
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
            <Route path="*" element={<Page404 />} />
          </Routes>
        </React.Suspense>
      </PageContent>
    </ThemeProvider>
  );
}
