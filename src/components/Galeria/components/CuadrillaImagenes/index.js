import React from 'react';
import Imagen from '../Imagen';
import './styles.css';

function CuadrillaImagenes({ rutasImagenes, changeState }) {
  const handleClick = (event, index) => {
    const imagenExpandida = true;
    const imagenSeleccionada = event.target.src;
    const id = index;
    changeState(imagenExpandida, imagenSeleccionada, id);
  };

  return (
    <div className="cuadrilla-imagenes">
      {rutasImagenes.map((rutaImagen, index) => (
        <Imagen
          onClick={event => handleClick(event, index)}
          key={rutaImagen}
          className="imagen-cuadrilla"
          rutaImagen={rutaImagen}
        />
      ))}
    </div>
  );
}

export default CuadrillaImagenes;
