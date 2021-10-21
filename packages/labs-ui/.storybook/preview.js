import React, {Fragment} from 'react';
import {addDecorator} from '@storybook/react';
import {ThemeProvider} from '../src/theme/ThemeProvider';

const WrapperDecorator = storyFn => (
  <Fragment>
    <ThemeProvider>{storyFn()}</ThemeProvider>
  </Fragment>
);

addDecorator(WrapperDecorator);
