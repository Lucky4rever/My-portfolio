import React from 'react';
import './App.css';
import { Peas } from './components/Peas';
import { Skills } from './components/AllSkills';
import { MyProjects as Projects } from './components/MyProjects';
import Info from './components/Info';

function App() {
  return (
    <>
      <div className='custom-background'>
        <Peas />
      </div>
      <div className="App">
        <Info />
        <Skills />
        <Projects />
      </div>
    </>
  );
}

export default App;
