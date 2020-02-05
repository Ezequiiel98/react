import React from 'react';
import './styles.css';
import Indicador from './components/Indicador';

function IndicadorImagen({ rutasImagenes, id }) {
  return (
    <div className="contenedor-indicadores">
      {rutasImagenes.map((e, index) => <Indicador key={index} className={index === id ? 'indicador-grande' : 'indicador-chico'} />)}
    </div>
  );
}
export default IndicadorImagen;
