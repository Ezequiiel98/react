import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
     <form className="formulario">
      <div>
        <label  for="input-nombre">Nombre</label>

        <input type="text" name="nombre" id="input-nombre" />
      </div>
      <div>
        <label for="input-solucion">Ideas</label>
        <textarea ></textarea>
      </div>
      <button  type="submit" id="btn-enviar">ENVIAR</button>
    </form>
  );
}

export default App;
