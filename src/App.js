// Importacion de librerias requeridas
import React from 'react';

// Importart componentes
import RouterPage from './componentes/RouterPage';

// Importar contexto
import { UserProvider } from './Contexto/Contexto';

// Estilos del componente
import './App.css';

// class App extends React.Component {
function App() {
  return (
    <UserProvider>
      <RouterPage />
    </UserProvider>
  );
}

export default App;
