// Importacion de librerias requeridas
import React from 'react';

// Importart componentes
import Alumno from './productos';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'bootswatch/dist/lumen/bootstrap.min.css';


// class App extends React.Component {
function comproduc() {
  return (
    <div className="container p-4">
      <div className="row">
        <Alumno />
      </div>
      <ToastContainer />
    </div>
  );
}

export default comproduc;
