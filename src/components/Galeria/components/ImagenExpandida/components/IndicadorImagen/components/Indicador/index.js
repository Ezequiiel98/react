import React from 'react';
import './styles.css';

function Indicador({ grande }) {
  const estilo = grande ? 'indicador-grande' : 'indicador-chico';
  return <span className={estilo} />;
}

export default Indicador;
