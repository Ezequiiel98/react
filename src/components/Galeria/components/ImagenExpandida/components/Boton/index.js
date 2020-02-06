import React from 'react';
import './styles.css';

function Boton({ onClick, className, icono }) {
  return (
    <button type="button" onClick={onClick} className={`btn ${className}`}>
      <img src={icono} alt="icono" />
    </button>
  );
}

export default Boton;
