import React from 'react';

import styles from './styles.module.scss';
import Indicador from './components/Indicador';

function IndicadorImagen({ rutasImagenes, indexSeleccionado }) {
  return (
    <div className={styles.contenedorIndicadores}>
      {rutasImagenes.map((e, index) => (
        <Indicador key={index} grande={index === indexSeleccionado} styles={styles} />
      ))}
    </div>
  );
}
export default IndicadorImagen;
