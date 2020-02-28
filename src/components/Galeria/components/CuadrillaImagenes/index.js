import React from 'react';

import Imagen from '../Imagen';

import styles from './styles.module.scss';

function CuadrillaImagenes({ rutasImagenes, changeState }) {
  const handleClick = (event, index) => {
    const imagenExpandida = true;
    const imagenSeleccionada = event.target.src;
    const id = index;
    changeState(imagenExpandida, imagenSeleccionada, id);
  };

  return (
    <div className={styles.cuadrilla}>
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
