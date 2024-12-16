import React from 'react';
import EndpointsDisplay from './components/EndpointsDisplay'; // Importando o componente principal
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <>
      {/* Define reset de estilos padrão */}
      <CssBaseline />
      {/* Componente principal */}
      <EndpointsDisplay />
    </>
  );
}

export default App;
