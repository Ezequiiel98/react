import React from 'react';
import './styles.css';

function Imagen({
  handleClick, rutaImagen, className,
}) {
  return (
    <img alt="imagen-galeria" onClick={handleClick} className={className} src={rutaImagen} />
  );
}


export default Imagen;
