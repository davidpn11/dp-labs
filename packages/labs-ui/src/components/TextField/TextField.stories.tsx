import React from 'react';
import {TextField} from './';

export const TextFieldStory = () => {
  const [value, setValue] = React.useState('');

  return (
    <TextField label="My Label" value={value} onChange={v => setValue(v)} />
  );
};

export default {
  title: 'Components/TextField',
  component: TextFieldStory,
  decorators: [],
};
