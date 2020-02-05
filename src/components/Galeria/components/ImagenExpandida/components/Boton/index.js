import React from 'react';
import './styles.css';

function Boton({
  handleClick, id, icono,
}) {
  return (
    <button type="button" onClick={handleClick} className="btn" id={id}>
      <img src={icono} alt="icono" />
    </button>
  );
}

export default Boton;
