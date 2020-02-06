import React from 'react';
import './styles.css';
import Indicador from './components/Indicador';

function IndicadorImagen({ rutasImagenes, indexSeleccionado }) {
  return (
    <div className="contenedor-indicadores">
      {rutasImagenes.map((e, index) => (
        <Indicador key={index} grande={index === indexSeleccionado} />
      ))}
    </div>
  );
}
export default IndicadorImagen;
