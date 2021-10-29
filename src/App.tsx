import React, { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
};

export default App;
