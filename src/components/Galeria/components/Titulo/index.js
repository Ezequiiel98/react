import React from 'react';
import styles from './styles.module.scss';

function Titulo({ titulo }) {
  return <h1 className={styles.titulo}>{titulo}</h1>;
}

export default Titulo;
