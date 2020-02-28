import React from 'react';

import styles from './styles.module.scss';

function Boton({ onClick, className, icono }) {
  return (
    <button type="button" onClick={onClick} className={`${styles.btn} ${className}`}>
      <img src={icono} className={styles.icono} alt="icono" />
    </button>
  );
}

export default Boton;
