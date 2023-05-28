import React from 'react';
import { BancoProvider } from './components/BancoContext/BancoContext.js'
import { AppUI } from './AppUI.js';
import './App.css';

function App() {
  return (
    <BancoProvider>
      <AppUI />
    </BancoProvider>
  );
}

export default App;
