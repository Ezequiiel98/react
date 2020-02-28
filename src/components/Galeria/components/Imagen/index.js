import React from 'react';

import styles from './styles.module.scss';

function Imagen({ onClick, rutaImagen, className }) {
  return <img alt="imagen-galeria" onClick={onClick} className={styles[className]} src={rutaImagen} />;
}

export default Imagen;
