import React from 'react';
import './styles.css';

function Indicador({ grande }) {
  return <span className={grande ? 'grande' : 'chico'} />;
}

export default Indicador;
