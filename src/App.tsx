import React from 'react';
import Canvas from './components/Canvas';
import Toolbar from './components/Toolbar';

function App() {
  return (
    <div className="flex h-screen">
      <Toolbar />
      <Canvas />
    </div>
  );
}

export default App;