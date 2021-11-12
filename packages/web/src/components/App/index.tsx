import React from 'react';
import {ThemeProvider} from '@dplabs/labs-ui';
import {GlobalStyles} from './styles/global';
import {PageHeader} from '../header';
import {PageContent} from './styles/style';
import {Routes, Route} from 'react-router-dom';
import {Home} from '../../pages/Home';
import {Projects} from '../../pages/Projects';
import {Library} from '../../pages/Library';
import {About} from '../../pages/About';
import {Blog} from '../../pages/Blog';
import {Page404} from '../../pages/404';

export function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <PageHeader />
      <PageContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blog" element={<Blog />} />
          <Route path="library" element={<Library />} />
          <Route path="about" element={<About />} />
        </Routes>
      </PageContent>
    </ThemeProvider>
  );
}
