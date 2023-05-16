import React from 'react';
import './App.css';
import Todos from './components/Todos';

function App() {
  return (
    <>
      <Todos items={['Learn React', 'Learn TypeScript']}><h2>Todo alkalmazás</h2></Todos>
    </>
  );
}

export default App;
