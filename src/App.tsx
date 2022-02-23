import { css } from '@emotion/react'
import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from '@emotion/styled'

const Text = styled.div`
  color: turquoise;
`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div css={css`color: lightblue`}>Emotion CSS prop</div>
        <Text>Emotion styled</Text>
      </header>
    </div>
  );
}

export default App;
