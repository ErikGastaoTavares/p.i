// src/App.js
import React from 'react';
import './App.css';
import EndpointsDisplay from './components/EndpointsDisplay'; // Verifique o caminho correto

function App() {
  return (
    <div className="App">
      <h1>Endpoints da API</h1>
      <EndpointsDisplay />
    </div>
  );
}

export default App;
