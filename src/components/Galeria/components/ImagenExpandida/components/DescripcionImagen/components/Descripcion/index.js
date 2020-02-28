import React from 'react';

import Titulo from '../../../../../Titulo';

import styles from './styles.module.scss';

function Descripcion({ descripcion: { titulo, descripcion } }) {
  return (
    <div className={styles.contenedorDescripcion}>
      <Titulo titulo={titulo} />
      <p className={styles.descripcion}>{descripcion}</p>
    </div>
  );
}

export default Descripcion;
