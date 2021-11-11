import React from 'react';
import styles from './styles/styles.module.css';
import logo from '../../assets/modal-img.svg';
import {Button, ThemeProvider, TextField} from '@dplabs/labs-ui';

export function App() {
  const [headerVal, setHeaderVal] = React.useState('Snowpack + React + TS');
  const [input, setInput] = React.useState('');
  return (
    <ThemeProvider>
      <div className={styles.main}>
        <h1>{headerVal} </h1>
        <img src={logo} alt="image" width={200} />
        <div className={styles.wrapper}>
          <TextField
            value={input}
            onChange={v => setInput(v)}
            label={'Header input'}
          />
          <Button variant="primary" onClick={() => setHeaderVal(input)}>
            Change Header
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
}
