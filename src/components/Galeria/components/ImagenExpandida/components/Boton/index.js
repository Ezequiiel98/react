import React from 'react';
import './styles.css';

function Boton({
  handleClick, className, icono,
}) {
  return (
    <button type="button" onClick={handleClick} className={`btn ${className}`}>
      <img src={icono} alt="icono" />
    </button>
  );
}

export default Boton;
